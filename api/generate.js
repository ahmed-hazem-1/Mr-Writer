// Vercel API endpoint for generating content
export default async function handler(req, res) {
    // Set CORS headers first
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // Handle GET request for testing
    if (req.method === 'GET') {
        return res.status(200).json({ 
            message: 'API endpoint is working',
            timestamp: new Date().toISOString()
        });
    }
    
    // Only allow POST requests for generation
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            allowedMethods: ['POST', 'GET', 'OPTIONS']
        });
    }
    
    try {
        const { prompt, selectedModel, selectedApiKey, maxRetries = 3 } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }
        
        // Get API key from environment variables
        const apiKeys = {
            'key1': process.env.PrimaryKey,
            'key2': process.env.SecondaryKey
        };
        
        const apiKey = apiKeys[selectedApiKey];
        
        if (!apiKey) {
            return res.status(400).json({ error: 'Invalid API key selection' });
        }
        
        // Model configurations
        const models = {
            'gemini-1.5-flash': {
                endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
                maxTokens: 8192,
                temperature: 0.7
            },
            'gemini-2.0-flash': {
                endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
                maxTokens: 8192,
                temperature: 0.7
            },
            'gemini-2.0-flash-lite': {
                endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent',
                maxTokens: 4096,
                temperature: 0.6
            },
            'gemini-2.5-flash': {
                endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
                maxTokens: 8192,
                temperature: 0.8
            },
            'gemini-2.5-pro': {
                endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent',
                maxTokens: 32768,
                temperature: 0.9
            }
        };
        
        const modelConfig = models[selectedModel];
        
        if (!modelConfig) {
            return res.status(400).json({ error: 'Invalid model selection' });
        }
        
        // Prepare request body
        const requestBody = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: modelConfig.temperature,
                topK: 40,
                topP: 0.95,
                maxOutputTokens: modelConfig.maxTokens,
                stopSequences: [],
                candidateCount: 1
            }
        };
        
        // Make request to Gemini API with retry logic
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetch(`${modelConfig.endpoint}?key=${apiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody)
                });
                
                if (response.status === 503 || response.status === 429) {
                    if (attempt < maxRetries) {
                        const waitTime = Math.pow(2, attempt) * 1000;
                        await new Promise(resolve => setTimeout(resolve, waitTime));
                        continue;
                    }
                }
                
                if (!response.ok) {
                    let errorText;
                    try {
                        errorText = await response.text();
                    } catch (e) {
                        errorText = 'Unknown error occurred';
                    }
                    
                    if (response.status === 429) {
                        return res.status(429).json({ 
                            error: 'Rate limit exceeded',
                            model: selectedModel,
                            suggestion: getSuggestedAlternativeModel(selectedModel)
                        });
                    }
                    
                    throw new Error(`Gemini API request failed: ${response.status} - ${errorText}`);
                }
                
                let data;
                try {
                    const responseText = await response.text();
                    if (!responseText || responseText.trim() === '') {
                        throw new Error('Empty response from Gemini API');
                    }
                    data = JSON.parse(responseText);
                } catch (parseError) {
                    console.error('JSON Parse Error:', parseError);
                    throw new Error('Invalid JSON response from Gemini API');
                }
                
                if (!data || !data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
                    console.error('Invalid response structure:', data);
                    throw new Error('Invalid Gemini API response structure');
                }
                
                const generatedText = data.candidates[0].content.parts[0].text;
                if (!generatedText || generatedText.trim() === '') {
                    throw new Error('Empty content generated by Gemini API');
                }
                
                return res.status(200).json({
                    success: true,
                    content: generatedText
                });
                
            } catch (error) {
                if (attempt === maxRetries) {
                    console.error('API Error:', error);
                    return res.status(500).json({ 
                        error: 'Failed to generate content',
                        details: error.message 
                    });
                }
                
                if (attempt < maxRetries) {
                    const waitTime = 2000 * attempt;
                    await new Promise(resolve => setTimeout(resolve, waitTime));
                }
            }
        }
        
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
}

// Get suggested alternative model when current model fails
function getSuggestedAlternativeModel(currentModel) {
    const alternatives = {
        'gemini-1.5-flash': 'gemini-2.0-flash',
        'gemini-2.0-flash': 'gemini-2.5-flash',
        'gemini-2.0-flash-lite': 'gemini-1.5-flash',
        'gemini-2.5-flash': 'gemini-2.5-pro',
        'gemini-2.5-pro': 'gemini-2.0-flash'
    };
    
    return alternatives[currentModel] || 'gemini-1.5-flash';
}