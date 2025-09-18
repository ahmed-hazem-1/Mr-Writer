// Configuration
const CONFIG = {
    GEMINI_API_KEY: '',
    GEMINI_API_URL: ''
};

// System Messages
const SYSTEM_MESSAGES = {
    all_languages: `You are an AI assistant specialized in creating highly engaging and viral social media content scripts. Your primary task is to write content about AI, tailoring the language and tone to the user's request, ensuring every part of the script serves a single purpose: to trigger the platform's algorithm in favor of virality.

**Main Objective:** Generate a well-structured, viral-optimized script that captures attention and maximizes engagement and reach.

**The Scripting Blueprint:**

### 🤯 1. The Hook (Immediate Capture):
* Start with a single, powerful line that creates instant curiosity or astonishment.
* Use a shocking question or a surprising fact.
* **Examples (in different languages):**
    * Arabic: "🤯 هتصدق لو قولتلك إن..."
    * English: "🤯 What if I told you..."
* **Your Goal:** A one-liner that makes the reader say, "Wait, what?!"

### 📖 2. The Simple Story (Core Analogy):
* Explain the complex topic using one single, relatable analogy from everyday life.
* The purpose is to simplify a complex idea quickly and effectively.
* **Examples (in different languages):**
    * Arabic: "زي الطفل العبقري اللي..."
    * English: "It's like a genius child who..."
* **Your Goal:** One short paragraph with a clear, direct analogy.

### ⚡ 3. The Shocking Value (Credibility & Surprise):
* Introduce one unexpected fact or a mind-blowing statistic to add credibility and create a "wow" moment.
* **Examples (in different languages):**
    * Arabic: "⚡ واللي هيصدمك أكتر إن..."
    * English: "⚡ And here's the shocking part..."
* **Your Goal:** A single, powerful fact that makes the reader go, "No way!"

### 🔥 4. The Power Conclusion (Personal Connection):
* Deliver a direct, compelling message that makes the reader feel personally connected to the topic.
* Summarize the core idea in one memorable sentence.
* **Examples (in different languages):**
    * Arabic: "🔥 عشان كده لازم تعرف إن..."
    * English: "🔥 That's why you need to know..."
* **Your Goal:** A motivational punchline that inspires and convinces the reader.

### 💬 5. The Call to Action (Specific & Simple):
* Ask the reader to perform one specific, easy-to-do action to boost engagement and reach.
* **Examples (in different languages):**
    * Arabic: "💬 اكتب في الكومنتس: 'مذهل!'"
    * English: "💬 Comment 'Mindblown!' below."
* **Your Goal:** A single, clear command that drives interaction.

**Golden Rules for Scripting:**
* **Hierarchical Structure:** Each part must build on the previous one, leading the reader seamlessly to the CTA.
* **Extreme Focus:** Stick to one analogy, one fact, one message.
* **Tone:** Be friendly, conversational, and energetic.
* **Final Output:** The script must be ready to be posted directly, without any extra explanations or formatting.
* **Language:** Write the script in the requested language (e.g., Egyptian Arabic, English) with the appropriate cultural nuances and emojis.`
};

// Translations
const TRANSLATIONS = {
    ar: {
        topicLabel: 'اكتب موضوعك أو فكرتك هنا',
        topicPlaceholder: 'مثال: كيف يمكن للذكاء الاصطناعي أن يساعد في التعليم؟',
        additionalLabel: 'معلومات إضافية (اختياري)',
        additionalPlaceholder: 'أضف أي تفاصيل إضافية، جمهور مستهدف، أو نبرة معينة تريدها',
        generateText: 'اكتب الأسكربت',
        generatingText: 'جاري الكتابة...',
        outputTitle: 'الأسكربت الخاص بك',
        placeholderText: 'الأسكربت المُولد سيظهر هنا...',
        featuresTitle: 'مميزات كاتب الأسكربت',
        feature1Title: 'خطافات جذابة',
        feature1Desc: 'يبدأ بجمل تجذب الانتباه وتوقف المتصفح عن التمرير',
        feature2Title: 'محتوى مؤثر',
        feature2Desc: 'يحول المواضيع التقنية إلى قصص بسيطة ومؤثرة',
        feature3Title: 'قابل للانتشار',
        feature3Desc: 'مصمم لزيادة التفاعل والمشاركات على المنصات الاجتماعية',
        feature4Title: 'دعم متعدد اللغات',
        feature4Desc: 'يكتب باللغتين العربية والإنجليزية بطلاقة',
        footerText: '© 2025 كاتب الأسكربت المتخصص | مدعوم بالذكاء الاصطناعي',
        toastCopied: 'تم نسخ النص بنجاح!',
        toastError: 'حدث خطأ، جاري المحاولة مرة أخرى...',
        errorTitle: 'خطأ في التوليد',
        errorMessage: 'حدث خطأ أثناء توليد الأسكربت. يرجى المحاولة مرة أخرى.',
        emptyTopicError: 'يرجى إدخال موضوع أو فكرة أولاً',
        retryingMessage: 'جاري إعادة المحاولة...',
        serviceUnavailable: 'الخدمة غير متاحة مؤقتاً، جاري المحاولة مرة أخرى...',
        postPlaceholderText: 'معاينة المنشور ستظهر هنا...',
        postUsername: 'كاتب المحتوى',
        postTime: 'الآن',
        viewScript: 'عرض الأسكربت',
        previewPost: 'معاينة المنشور'
    },
    en: {
        topicLabel: 'Write your topic or idea here',
        topicPlaceholder: 'Example: How can AI help in education?',
        additionalLabel: 'Additional information (optional)',
        additionalPlaceholder: 'Add any additional details, target audience, or specific tone you want',
        generateText: 'Generate Script',
        generatingText: 'Generating...',
        outputTitle: 'Your Script',
        placeholderText: 'Generated script will appear here...',
        featuresTitle: 'Script Writer Features',
        feature1Title: 'Engaging Hooks',
        feature1Desc: 'Starts with attention-grabbing sentences that stop users from scrolling',
        feature2Title: 'Impactful Content',
        feature2Desc: 'Transforms technical topics into simple and impactful stories',
        feature3Title: 'Viral-Ready',
        feature3Desc: 'Designed to increase engagement and shares on social media platforms',
        feature4Title: 'Multi-language Support',
        feature4Desc: 'Writes fluently in both Arabic and English',
        footerText: '© 2025 AI Script Writer | Powered by Artificial Intelligence',
        toastCopied: 'Text copied successfully!',
        toastError: 'An error occurred, retrying...',
        errorTitle: 'Generation Error',
        errorMessage: 'An error occurred while generating the script. Please try again.',
        emptyTopicError: 'Please enter a topic or idea first',
        retryingMessage: 'Retrying...',
        serviceUnavailable: 'Service temporarily unavailable, retrying...',
        postPlaceholderText: 'Post preview will appear here...',
        postUsername: 'Content Creator',
        postTime: 'now',
        viewScript: 'Show Script',
        previewPost: 'Preview Post'
    }
};

// Global state
let currentLanguage = 'ar';
let isGenerating = false;
let isPostView = false;

// DOM Elements
const elements = {
    arabicBtn: document.getElementById('arabicBtn'),
    englishBtn: document.getElementById('englishBtn'),
    topicInput: document.getElementById('topicInput'),
    additionalInfo: document.getElementById('additionalInfo'),
    generateBtn: document.getElementById('generateBtn'),
    outputSection: document.getElementById('outputSection'),
    outputContent: document.getElementById('outputContent'),
    postPreview: document.getElementById('postPreview'),
    postContentPreview: document.getElementById('postContentPreview'),
    viewToggle: document.getElementById('viewToggle'),
    copyBtn: document.getElementById('copyBtn'),
    downloadBtn: document.getElementById('downloadBtn'),
    toast: document.getElementById('toast'),
    loadingSpinner: document.getElementById('loadingSpinner')
};

// Initialize the application
function init() {
    setupEventListeners();
    updateLanguage('ar');
    updateUI();
}

// Event Listeners
function setupEventListeners() {
    elements.arabicBtn.addEventListener('click', () => switchLanguage('ar'));
    elements.englishBtn.addEventListener('click', () => switchLanguage('en'));
    elements.generateBtn.addEventListener('click', generateScript);
    elements.viewToggle.addEventListener('click', toggleView);
    elements.copyBtn.addEventListener('click', copyToClipboard);
    elements.downloadBtn.addEventListener('click', downloadScript);
    
    // Enter key support for textarea
    elements.topicInput.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            generateScript();
        }
    });
}

// Language switching
function switchLanguage(lang) {
    if (isGenerating) return;
    
    currentLanguage = lang;
    updateLanguage(lang);
    updateUI();
}

function updateLanguage(lang) {
    const isArabic = lang === 'ar';
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    
    // Update button states
    elements.arabicBtn.classList.toggle('active', isArabic);
    elements.englishBtn.classList.toggle('active', !isArabic);
    
    // Update text content
    const t = TRANSLATIONS[lang];
    
    document.getElementById('topicLabel').textContent = t.topicLabel;
    elements.topicInput.placeholder = t.topicPlaceholder;
    document.getElementById('additionalLabel').textContent = t.additionalLabel;
    elements.additionalInfo.placeholder = t.additionalPlaceholder;
    document.getElementById('generateText').textContent = t.generateText;
    document.getElementById('outputTitle').textContent = t.outputTitle;
    document.getElementById('placeholderText').textContent = t.placeholderText;
    document.getElementById('featuresTitle').textContent = t.featuresTitle;
    document.getElementById('feature1Title').textContent = t.feature1Title;
    document.getElementById('feature1Desc').textContent = t.feature1Desc;
    document.getElementById('feature2Title').textContent = t.feature2Title;
    document.getElementById('feature2Desc').textContent = t.feature2Desc;
    document.getElementById('feature3Title').textContent = t.feature3Title;
    document.getElementById('feature3Desc').textContent = t.feature3Desc;
    document.getElementById('feature4Title').textContent = t.feature4Title;
    document.getElementById('feature4Desc').textContent = t.feature4Desc;
    document.getElementById('footerText').textContent = t.footerText;
    
    // Update post preview elements
    document.getElementById('postPlaceholderText').textContent = t.postPlaceholderText;
    document.getElementById('postUsername').textContent = t.postUsername;
    document.getElementById('postTime').textContent = t.postTime;
    
    // Update view toggle tooltip
    elements.viewToggle.title = isPostView ? t.viewScript : t.previewPost;
}

// Toggle between script and post view
function toggleView() {
    isPostView = !isPostView;
    
    if (isPostView) {
        elements.outputContent.style.display = 'none';
        elements.postPreview.style.display = 'block';
        elements.viewToggle.classList.add('active');
        elements.viewToggle.title = currentLanguage === 'ar' ? 'عرض الأسكربت' : 'Show Script';
        elements.viewToggle.innerHTML = '<i class="fas fa-code"></i>';
    } else {
        elements.outputContent.style.display = 'block';
        elements.postPreview.style.display = 'none';
        elements.viewToggle.classList.remove('active');
        elements.viewToggle.title = currentLanguage === 'ar' ? 'معاينة المنشور' : 'Preview Post';
        elements.viewToggle.innerHTML = '<i class="fas fa-eye"></i>';
    }
}

// Clean script text for post preview
function cleanScriptForPost(scriptText) {
    return scriptText
        .replace(/\*\*/g, '') // Remove markdown bold
        .replace(/###.*?\n/g, '') // Remove section headers
        .replace(/\n{3,}/g, '\n\n') // Reduce multiple line breaks
        .trim();
}

// UI Updates
function updateUI() {
    const hasContent = elements.outputContent.querySelector('.output-text') !== null;
    elements.viewToggle.style.display = hasContent ? 'flex' : 'none';
    elements.copyBtn.style.display = hasContent ? 'flex' : 'none';
    elements.downloadBtn.style.display = hasContent ? 'flex' : 'none';
    
    // Update post preview if content exists
    if (hasContent) {
        updatePostPreview();
    }
}

// Update post preview content
function updatePostPreview() {
    const outputText = elements.outputContent.querySelector('.output-text');
    if (!outputText) return;
    
    const scriptText = outputText.innerText;
    const cleanedText = cleanScriptForPost(scriptText);
    
    elements.postContentPreview.innerHTML = `
        <div class="post-content-text">${cleanedText}</div>
    `;
}

// Generate Script
async function generateScript() {
    const topic = elements.topicInput.value.trim();
    
    if (!topic) {
        showToast(TRANSLATIONS[currentLanguage].emptyTopicError, 'error');
        return;
    }
    
    if (isGenerating) return;
    
    setGeneratingState(true);
    
    try {
        const additionalInfo = elements.additionalInfo.value.trim();
        const prompt = buildPrompt(topic, additionalInfo);
        
        const response = await callGeminiAPI(prompt);
        displayScript(response);
        showToast(TRANSLATIONS[currentLanguage].toastCopied.replace('نسخ النص', 'توليد الأسكربت'), 'success');
        
    } catch (error) {
        console.error('Error generating script:', error);
        
        // Show specific error message
        let errorMessage = TRANSLATIONS[currentLanguage].toastError;
        if (error.message.includes('503') || error.message.includes('غير متاحة')) {
            errorMessage = TRANSLATIONS[currentLanguage].serviceUnavailable;
        }
        
        displayError(error.message);
        showToast(errorMessage, 'error');
    } finally {
        setGeneratingState(false);
    }
}

// Build prompt for API
function buildPrompt(topic, additionalInfo) {
    const systemMessage = SYSTEM_MESSAGES[currentLanguage];
    let prompt = systemMessage + '\n\n';
    
    if (currentLanguage === 'ar') {
        prompt += `الموضوع المطلوب: ${topic}\n`;
        if (additionalInfo) {
            prompt += `معلومات إضافية: ${additionalInfo}\n`;
        }
        prompt += '\nيرجى كتابة اسكربت جذاب ومؤثر لهذا الموضوع باتباع المنهجية المذكورة أعلاه.';
    } else {
        prompt += `Topic: ${topic}\n`;
        if (additionalInfo) {
            prompt += `Additional information: ${additionalInfo}\n`;
        }
        prompt += '\nPlease write an engaging and impactful script for this topic following the methodology mentioned above.';
    }
    
    return prompt;
}

// Call Gemini API with retry mechanism
async function callGeminiAPI(prompt, maxRetries = 3) {
    const requestBody = {
        contents: [{
            parts: [{
                text: prompt
            }]
        }],
        generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
        }
    };
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(`${CONFIG.GEMINI_API_URL}?key=${CONFIG.GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });
            
            if (response.status === 503 || response.status === 429) {
                // Service Unavailable or Too Many Requests - wait and retry
                if (attempt < maxRetries) {
                    const waitTime = Math.pow(2, attempt) * 1000; // Exponential backoff
                    await new Promise(resolve => setTimeout(resolve, waitTime));
                    continue;
                }
            }
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`API request failed: ${response.status} - ${errorText}`);
            }
            
            const data = await response.json();
            
            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid API response structure');
            }
            
            return data.candidates[0].content.parts[0].text;
            
        } catch (error) {
            if (attempt === maxRetries) {
                // Last attempt failed
                if (error.message.includes('503')) {
                    throw new Error('خدمة الذكاء الاصطناعي غير متاحة حالياً. حاول مرة أخرى بعد قليل.');
                } else if (error.message.includes('429')) {
                    throw new Error('تم تجاوز حد الطلبات. انتظر دقيقة واحدة وحاول مرة أخرى.');
                } else if (error.message.includes('403')) {
                    throw new Error('مشكلة في مفتاح الـ API. تحقق من الإعدادات.');
                } else {
                    throw new Error('حدث خطأ في الاتصال. تحقق من اتصالك بالإنترنت وحاول مرة أخرى.');
                }
            }
            
            // Wait before retry for network errors
            if (attempt < maxRetries) {
                const waitTime = 2000 * attempt; // 2s, 4s, 6s...
                await new Promise(resolve => setTimeout(resolve, waitTime));
            }
        }
    }
}

// Display generated script
function displayScript(scriptText) {
    elements.outputContent.innerHTML = `
        <div class="output-text fade-in">${formatScript(scriptText)}</div>
    `;
    updateUI();
    
    // Scroll to output
    elements.outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Format script text
function formatScript(text) {
    // Convert line breaks to HTML
    let formatted = text.replace(/\n/g, '<br>');
    
    // Style emojis
    formatted = formatted.replace(/([\u{1F300}-\u{1F9FF}])/gu, '<span class="emoji">$1</span>');
    
    // Style headers (lines that end with :)
    formatted = formatted.replace(/^(.+:)(<br>|$)/gm, '<strong>$1</strong>$2');
    
    return formatted;
}

// Display error
function displayError(customMessage = null) {
    const t = TRANSLATIONS[currentLanguage];
    const message = customMessage || t.errorMessage;
    
    elements.outputContent.innerHTML = `
        <div class="error-message fade-in">
            <i class="fas fa-exclamation-triangle" style="color: #ef4444; font-size: 2rem; margin-bottom: 1rem;"></i>
            <h3 style="color: #ef4444; margin-bottom: 0.5rem;">${t.errorTitle}</h3>
            <p style="color: #64748b; line-height: 1.6;">${message}</p>
            <button onclick="generateScript()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #6366f1; color: white; border: none; border-radius: 0.5rem; cursor: pointer;">
                <i class="fas fa-redo"></i> حاول مرة أخرى
            </button>
        </div>
    `;
}

// Set generating state
function setGeneratingState(generating) {
    isGenerating = generating;
    elements.generateBtn.disabled = generating;
    elements.generateBtn.classList.toggle('loading', generating);
    
    const t = TRANSLATIONS[currentLanguage];
    const buttonText = generating ? t.generatingText : t.generateText;
    document.getElementById('generateText').textContent = buttonText;
    
    // Disable language switching during generation
    elements.arabicBtn.disabled = generating;
    elements.englishBtn.disabled = generating;
}

// Copy to clipboard
async function copyToClipboard() {
    const outputText = elements.outputContent.querySelector('.output-text');
    if (!outputText) return;
    
    try {
        const text = outputText.innerText;
        await navigator.clipboard.writeText(text);
        showToast(TRANSLATIONS[currentLanguage].toastCopied, 'success');
    } catch (error) {
        console.error('Failed to copy:', error);
        showToast(TRANSLATIONS[currentLanguage].toastError, 'error');
    }
}

// Download script
function downloadScript() {
    const outputText = elements.outputContent.querySelector('.output-text');
    if (!outputText) return;
    
    const text = outputText.innerText;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `script-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast(TRANSLATIONS[currentLanguage].toastCopied.replace('نسخ', 'تحميل'), 'success');
}

// Show toast notification
function showToast(message, type = 'success') {
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = elements.toast.querySelector('i');
    
    // Update content
    toastMessage.textContent = message;
    
    // Update icon and color based on type
    if (type === 'error') {
        toastIcon.className = 'fas fa-exclamation-triangle';
        elements.toast.style.background = '#ef4444';
    } else {
        toastIcon.className = 'fas fa-check';
        elements.toast.style.background = '#10b981';
    }
    
    // Show toast
    elements.toast.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);