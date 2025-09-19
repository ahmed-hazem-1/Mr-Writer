// Configuration
const CONFIG = {
    // Multiple Gemini API Keys (for display only - actual keys stored in environment for production)
    API_KEYS: {
        'key1': {
            name: 'Primary Key',
            key: 'AIzaSyCxXAhCxq272p4K0u_hZ_oW1MzJnMWWMaw', // Used for local development
            description: {
                ar: 'المفتاح الأساسي',
                en: 'Primary Key'
            }
        },
        'key2': {
            name: 'Secondary Key',
            key: 'AIzaSyBflO2FleHPBNwlvXncR5U4UPelBSA_HIw', // Used for local development
            description: {
                ar: 'المفتاح الثانوي',
                en: 'Secondary Key'
            }
        }
    },
    
    // Google Gemini Models Configuration
    MODELS: {
        'gemini-1.5-flash': {
            provider: 'gemini',
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
            name: 'Gemini 1.5 Flash',
            description: {
                ar: 'نموذج سريع ومناسب للاستخدام العام، استجابة فورية وسعر منخفض',
                en: 'Fast model suitable for general use, instant response and low cost'
            },
            maxTokens: 8192,
            temperature: 0.7
        },
        'gemini-2.0-flash': {
            provider: 'gemini',
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent',
            name: 'Gemini 2.0 Flash',
            description: {
                ar: 'أحدث نموذج سريع مع تحسينات كبيرة في الفهم والأداء',
                en: 'Latest fast model with significant improvements in understanding and performance'
            },
            maxTokens: 8192,
            temperature: 0.7
        },
        'gemini-2.0-flash-lite': {
            provider: 'gemini',
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent',
            name: 'Gemini 2.0 Flash Lite',
            description: {
                ar: 'نسخة خفيفة وسريعة جداً، مثالية للمهام البسيطة',
                en: 'Ultra-fast lightweight version, perfect for simple tasks'
            },
            maxTokens: 4096,
            temperature: 0.6
        },
        'gemini-2.5-flash': {
            provider: 'gemini',
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
            name: 'Gemini 2.5 Flash',
            description: {
                ar: 'نموذج متطور بسرعة عالية وذكاء محسن للمحتوى الإبداعي',
                en: 'Advanced model with high speed and enhanced intelligence for creative content'
            },
            maxTokens: 8192,
            temperature: 0.8
        },
        'gemini-2.5-pro': {
            provider: 'gemini',
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent',
            name: 'Gemini 2.5 Pro',
            description: {
                ar: 'أقوى نموذج متاح، جودة استثنائية للمهام المعقدة والمحتوى المتقدم',
                en: 'Most powerful model available, exceptional quality for complex tasks and advanced content'
            },
            maxTokens: 32768,
            temperature: 0.9
        }
    }
};

// System Messages
const SYSTEM_MESSAGES = {
    base: `You are an AI assistant specialized in creating highly engaging and viral social media content scripts. Your primary task is to write content tailored to the specific theme and tone requested, ensuring every part of the script serves the purpose of creating engaging, authentic content.

**CRITICAL INSTRUCTION: You must create ORIGINAL and UNIQUE content. Do NOT copy or follow templates. Each script must be fresh, creative, and innovative.**`,

    engaging: `${this.base || ''}

**THEME: ENGAGING & EXCITING**
Your goal is to create content that's thrilling, captivating, and keeps readers on the edge of their seats.

**Tone Guidelines:**
- Use dynamic, energetic language
- Create suspense and excitement
- Include power words: "amazing", "incredible", "shocking", "mind-blowing"
- Build momentum throughout the script
- Use emojis strategically for impact: 🔥⚡🤯💥🚀

**Structure for ENGAGING content:**
1. **Hook**: Start with something that makes people stop scrolling immediately
2. **Build-up**: Create anticipation and curiosity
3. **Revelation**: Deliver the exciting information
4. **Impact**: Show why it matters to them personally
5. **Action**: Get them engaged and sharing`,

    educational: `You are an AI assistant specialized in creating educational and informative social media content scripts.

**THEME: EDUCATIONAL & INFORMATIVE**
Your goal is to teach something valuable while keeping it accessible and interesting.

**Tone Guidelines:**
- Professional yet approachable
- Clear, structured explanations
- Use educational phrases: "Here's what you need to know", "The key insight is", "Research shows"
- Focus on facts, data, and practical knowledge
- Minimal emojis, use 📚📊💡🎯 sparingly

**Structure for EDUCATIONAL content:**
1. **Problem/Question**: Present what people don't know
2. **Explanation**: Break down complex concepts simply
3. **Evidence**: Provide facts, statistics, or research
4. **Application**: Show how to use this knowledge
5. **Learn More**: Encourage further learning`,

    humorous: `You are an AI assistant specialized in creating funny and entertaining social media content scripts.

**THEME: HUMOROUS & ENTERTAINING**
Your goal is to make people laugh while delivering your message.

**Tone Guidelines:**
- Light-hearted and playful
- Use humor, jokes, and funny analogies
- Self-deprecating humor when appropriate
- Funny phrases: "Plot twist:", "Meanwhile...", "The audacity!", "I can't even..."
- Comedy emojis: 😂🤣😭💀🙃😅🤪

**Structure for HUMOROUS content:**
1. **Setup**: Create a funny scenario or observation
2. **Build-up**: Add comedic elements and timing
3. **Punchline**: Deliver the funny revelation
4. **Relate**: Connect the humor to the audience
5. **Laugh Together**: Encourage sharing the fun`,

    serious: `You are an AI assistant specialized in creating professional and serious social media content scripts.

**THEME: SERIOUS & PROFESSIONAL**
Your goal is to convey important information with authority and credibility.

**Tone Guidelines:**
- Professional, authoritative voice
- Formal language without being boring
- Focus on important implications
- Use serious phrases: "Critical to understand", "The reality is", "Evidence suggests"
- Minimal emojis, only professional ones: ⚠️📈💼🎯

**Structure for SERIOUS content:**
1. **Statement**: Present the important issue clearly
2. **Context**: Explain why this matters now
3. **Analysis**: Break down the implications
4. **Consequences**: Show what's at stake
5. **Consideration**: Encourage thoughtful reflection`,

    inspirational: `You are an AI assistant specialized in creating motivational and inspiring social media content scripts.

**THEME: INSPIRATIONAL & MOTIVATIONAL**
Your goal is to uplift, motivate, and inspire action.

**Tone Guidelines:**
- Uplifting and empowering
- Use motivational language
- Focus on possibilities and potential
- Inspirational phrases: "You have the power to", "Imagine if", "Your potential is unlimited"
- Inspiring emojis: ✨🌟💪🚀🔥💎🏆

**Structure for INSPIRATIONAL content:**
1. **Vision**: Paint a picture of what's possible
2. **Challenge**: Acknowledge current obstacles
3. **Transformation**: Show the path to change
4. **Empowerment**: Remind them of their strength
5. **Action**: Inspire them to take the first step`,

    storytelling: `You are an AI assistant specialized in creating narrative-driven social media content scripts.

**THEME: STORYTELLING & PERSONAL**
Your goal is to tell compelling stories that connect emotionally with the audience.

**Tone Guidelines:**
- Conversational and personal
- Use narrative techniques
- Include personal touches: "Let me tell you about", "Picture this", "There was this moment when"
- Emotional connection is key
- Story emojis: 📖✨🎭💫🗣️

**Structure for STORYTELLING content:**
1. **Opening**: Set the scene with a story hook
2. **Character**: Introduce relatable characters
3. **Conflict**: Present the challenge or problem
4. **Resolution**: Show how it was overcome
5. **Lesson**: Extract the meaningful takeaway`
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
        previewPost: 'معاينة المنشور',
        showTips: 'نصائح المحتوى الفيروسي',
        guidedTipsTitle: 'دليل إنشاء المحتوى الفيروسي',
        guidedPlaceholderText: 'نصائح المحتوى الفيروسي ستظهر هنا...',
        imagePromptsTitle: 'مطالبات الصور المطلوبة',
        hashtagsTitle: 'الهاشتاجز المناسبة',
        visualSuggestionsTitle: 'اقتراحات المحتوى المرئي',
        engagementStrategiesTitle: 'استراتيجيات التفاعل',
        // API Key dropdown translations
        apiKeyLabel: 'مفتاح API',
        apiKey1: 'Primary Key (المفتاح الأساسي)',
        apiKey2: 'Secondary Key (المفتاح الثانوي)',
        // Model dropdown translations
        modelLabel: 'نموذج الذكاء الاصطناعي',
        modelGemini15Flash: 'Gemini 1.5 Flash',
        modelGemini20Flash: 'Gemini 2.0 Flash',
        modelGemini20FlashLite: 'Gemini 2.0 Flash Lite',
        modelGemini25Flash: 'Gemini 2.5 Flash',
        modelGemini25Pro: 'Gemini 2.5 Pro',
        // Dropdown translations
        examplesLabel: 'أمثلة جاهزة',
        themeLabel: 'نمط الكتابة',
        audienceLabel: 'الجمهور المستهدف',
        examplesDefaultOption: 'اختر مثال أو اكتب موضوعك الخاص',
        exampleAiEducation: 'الذكاء الاصطناعي في التعليم',
        exampleSocialMedia: 'التسويق عبر وسائل التواصل',
        exampleRemoteWork: 'العمل عن بُعد',
        exampleCrypto: 'العملات الرقمية',
        exampleHealth: 'الصحة واللياقة',
        exampleBusiness: 'ريادة الأعمال',
        exampleClimate: 'التغير المناخي',
        exampleMental: 'الصحة النفسية',
        themeEngaging: 'جذاب ومثير',
        themeEducational: 'تعليمي ومفيد',
        themeHumorous: 'فكاهي وخفيف',
        themeSerious: 'جدي ومهني',
        themeInspirational: 'ملهم ومحفز',
        themeStorytelling: 'قصصي وشخصي',
        themeCustom: 'مخصص',
        audienceGeneral: 'الجمهور العام',
        audienceYoung: 'الشباب (18-30)',
        audienceProfessionals: 'المحترفون',
        audienceStudents: 'الطلاب',
        audienceEntrepreneurs: 'رواد الأعمال',
        audienceParents: 'الآباء والأمهات',
        audienceTech: 'عشاق التكنولوجيا',
        audienceArabic: 'الناطقون بالعربية',
        audienceCustom: 'مخصص',
        customThemePlaceholder: 'اكتب النمط المخصص هنا...',
        customAudiencePlaceholder: 'اكتب الجمهور المخصص هنا...'
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
        previewPost: 'Preview Post',
        showTips: 'Viral Content Tips',
        guidedTipsTitle: 'Viral Content Creation Guide',
        guidedPlaceholderText: 'Viral content tips will appear here...',
        imagePromptsTitle: 'Required Image Prompts',
        hashtagsTitle: 'Relevant Hashtags',
        visualSuggestionsTitle: 'Visual Content Suggestions',
        engagementStrategiesTitle: 'Engagement Strategies',
        // API Key dropdown translations
        apiKeyLabel: 'API Key',
        apiKey1: 'Primary Key',
        apiKey2: 'Secondary Key',
        // Model dropdown translations
        modelLabel: 'AI Model',
        modelGemini15Flash: 'Gemini 1.5 Flash',
        modelGemini20Flash: 'Gemini 2.0 Flash',
        modelGemini20FlashLite: 'Gemini 2.0 Flash Lite',
        modelGemini25Flash: 'Gemini 2.5 Flash',
        modelGemini25Pro: 'Gemini 2.5 Pro',
        // Dropdown translations
        examplesLabel: 'Ready Examples',
        themeLabel: 'Writing Style',
        audienceLabel: 'Target Audience',
        examplesDefaultOption: 'Choose an example or write your own topic',
        exampleAiEducation: 'AI in Education',
        exampleSocialMedia: 'Social Media Marketing',
        exampleRemoteWork: 'Remote Work',
        exampleCrypto: 'Cryptocurrency',
        exampleHealth: 'Health & Fitness',
        exampleBusiness: 'Entrepreneurship',
        exampleClimate: 'Climate Change',
        exampleMental: 'Mental Health',
        themeEngaging: 'Engaging & Exciting',
        themeEducational: 'Educational & Informative',
        themeHumorous: 'Humorous & Light',
        themeSerious: 'Serious & Professional',
        themeInspirational: 'Inspirational & Motivating',
        themeStorytelling: 'Storytelling & Personal',
        themeCustom: 'Custom',
        audienceGeneral: 'General Audience',
        audienceYoung: 'Young Adults (18-30)',
        audienceProfessionals: 'Professionals',
        audienceStudents: 'Students',
        audienceEntrepreneurs: 'Entrepreneurs',
        audienceParents: 'Parents',
        audienceTech: 'Tech Enthusiasts',
        audienceArabic: 'Arabic Speakers',
        audienceCustom: 'Custom',
        customThemePlaceholder: 'Write your custom style here...',
        customAudiencePlaceholder: 'Write your custom audience here...'
    }
};

// Global state
let currentLanguage = 'ar';
let isGenerating = false;
let currentView = 'script'; // 'script', 'post', 'tips'

// DOM Elements
const elements = {
    arabicBtn: document.getElementById('arabicBtn'),
    englishBtn: document.getElementById('englishBtn'),
    topicInput: document.getElementById('topicInput'),
    additionalInfo: document.getElementById('additionalInfo'),
    apiKeySelect: document.getElementById('apiKeySelect'),
    apiKeyInfo: document.getElementById('apiKeyInfo'),
    modelSelect: document.getElementById('modelSelect'),
    modelInfo: document.getElementById('modelInfo'),
    examplesSelect: document.getElementById('examplesSelect'),
    themeSelect: document.getElementById('themeSelect'),
    audienceSelect: document.getElementById('audienceSelect'),
    customTheme: document.getElementById('customTheme'),
    customAudience: document.getElementById('customAudience'),
    generateBtn: document.getElementById('generateBtn'),
    outputSection: document.getElementById('outputSection'),
    outputContent: document.getElementById('outputContent'),
    postPreview: document.getElementById('postPreview'),
    postContentPreview: document.getElementById('postContentPreview'),
    guidedTips: document.getElementById('guidedTips'),
    guidedTipsContent: document.getElementById('guidedTipsContent'),
    tipsSections: document.getElementById('tipsSections'),
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
    
    // Dropdown event listeners
    elements.apiKeySelect.addEventListener('change', handleApiKeyChange);
    elements.modelSelect.addEventListener('change', handleModelChange);
    elements.examplesSelect.addEventListener('change', handleExampleChange);
    elements.themeSelect.addEventListener('change', handleThemeChange);
    elements.audienceSelect.addEventListener('change', handleAudienceChange);
    
    // Enter key support for textarea
    elements.topicInput.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            generateScript();
        }
    });
    
    // Initialize descriptions
    updateApiKeyDescription();
    updateModelDescription();
}

// Handle API key selection
function handleApiKeyChange() {
    updateApiKeyDescription();
}

// Update API key description
function updateApiKeyDescription() {
    const selectedKey = elements.apiKeySelect.value;
    const keyConfig = CONFIG.API_KEYS[selectedKey];
    
    if (keyConfig && keyConfig.description) {
        const description = keyConfig.description[currentLanguage];
        document.getElementById('apiKeyDescription').textContent = description;
    }
}

// Handle model selection
function handleModelChange() {
    updateModelDescription();
}

// Update model description
function updateModelDescription() {
    const selectedModel = elements.modelSelect.value;
    const modelConfig = CONFIG.MODELS[selectedModel];
    
    if (modelConfig && modelConfig.description) {
        const description = modelConfig.description[currentLanguage];
        document.getElementById('modelDescription').textContent = description;
        
        // Check if API key is missing for external providers
        if (modelConfig.provider !== 'gemini' && !modelConfig.apiKey) {
            const warningText = currentLanguage === 'ar' ? 
                '⚠️ يتطلب مفتاح API منفصل' : 
                '⚠️ Requires separate API key';
            document.getElementById('modelDescription').textContent = description + ' - ' + warningText;
        }
    }
}

// Handle example selection
function handleExampleChange() {
    const selectedExample = elements.examplesSelect.value;
    if (selectedExample && selectedExample !== '') {
        const exampleTopics = {
            'ai-education': currentLanguage === 'ar' ? 
                'كيف يمكن للذكاء الاصطناعي أن يحدث ثورة في التعليم؟' : 
                'How can AI revolutionize education?',
            'social-media-marketing': currentLanguage === 'ar' ? 
                'استراتيجيات التسويق الفعّالة عبر وسائل التواصل الاجتماعي' : 
                'Effective social media marketing strategies',
            'remote-work': currentLanguage === 'ar' ? 
                'مستقبل العمل عن بُعد وتأثيره على الإنتاجية' : 
                'The future of remote work and its impact on productivity',
            'cryptocurrency': currentLanguage === 'ar' ? 
                'العملات الرقمية: فرصة استثمارية أم فقاعة مالية؟' : 
                'Cryptocurrency: Investment opportunity or financial bubble?',
            'health-fitness': currentLanguage === 'ar' ? 
                'أسرار الحفاظ على اللياقة البدنية في عصر التكنولوجيا' : 
                'Secrets to maintaining fitness in the digital age',
            'entrepreneurship': currentLanguage === 'ar' ? 
                'كيف تبدأ مشروعك الناجح من الصفر؟' : 
                'How to start your successful business from scratch?',
            'climate-change': currentLanguage === 'ar' ? 
                'التغير المناخي: الحلول التقنية للمستقبل المستدام' : 
                'Climate change: Technological solutions for a sustainable future',
            'mental-health': currentLanguage === 'ar' ? 
                'الصحة النفسية في عصر وسائل التواصل الاجتماعي' : 
                'Mental health in the social media age'
        };
        
        if (exampleTopics[selectedExample]) {
            elements.topicInput.value = exampleTopics[selectedExample];
        }
    }
}

// Handle theme selection
function handleThemeChange() {
    const selectedTheme = elements.themeSelect.value;
    if (selectedTheme === 'custom') {
        elements.customTheme.style.display = 'block';
        elements.customTheme.focus();
    } else {
        elements.customTheme.style.display = 'none';
        elements.customTheme.value = '';
    }
}

// Handle audience selection
function handleAudienceChange() {
    const selectedAudience = elements.audienceSelect.value;
    if (selectedAudience === 'custom') {
        elements.customAudience.style.display = 'block';
        elements.customAudience.focus();
    } else {
        elements.customAudience.style.display = 'none';
        elements.customAudience.value = '';
    }
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
    
    // Update dropdown labels and options
    document.getElementById('apiKeyLabel').textContent = t.apiKeyLabel;
    document.getElementById('modelLabel').textContent = t.modelLabel;
    document.getElementById('examplesLabel').textContent = t.examplesLabel;
    document.getElementById('themeLabel').textContent = t.themeLabel;
    document.getElementById('audienceLabel').textContent = t.audienceLabel;
    
    // Update API key options
    document.getElementById('apiKey1').textContent = t.apiKey1;
    document.getElementById('apiKey2').textContent = t.apiKey2;
    
    // Update model options
    document.getElementById('modelGemini15Flash').textContent = t.modelGemini15Flash;
    document.getElementById('modelGemini20Flash').textContent = t.modelGemini20Flash;
    document.getElementById('modelGemini20FlashLite').textContent = t.modelGemini20FlashLite;
    document.getElementById('modelGemini25Flash').textContent = t.modelGemini25Flash;
    document.getElementById('modelGemini25Pro').textContent = t.modelGemini25Pro;
    
    // Update model description
    updateModelDescription();
    
    // Update dropdown options
    document.getElementById('examplesDefaultOption').textContent = t.examplesDefaultOption;
    document.getElementById('exampleAiEducation').textContent = t.exampleAiEducation;
    document.getElementById('exampleSocialMedia').textContent = t.exampleSocialMedia;
    document.getElementById('exampleRemoteWork').textContent = t.exampleRemoteWork;
    document.getElementById('exampleCrypto').textContent = t.exampleCrypto;
    document.getElementById('exampleHealth').textContent = t.exampleHealth;
    document.getElementById('exampleBusiness').textContent = t.exampleBusiness;
    document.getElementById('exampleClimate').textContent = t.exampleClimate;
    document.getElementById('exampleMental').textContent = t.exampleMental;
    
    document.getElementById('themeEngaging').textContent = t.themeEngaging;
    document.getElementById('themeEducational').textContent = t.themeEducational;
    document.getElementById('themeHumorous').textContent = t.themeHumorous;
    document.getElementById('themeSerious').textContent = t.themeSerious;
    document.getElementById('themeInspirational').textContent = t.themeInspirational;
    document.getElementById('themeStorytelling').textContent = t.themeStorytelling;
    document.getElementById('themeCustom').textContent = t.themeCustom;
    
    document.getElementById('audienceGeneral').textContent = t.audienceGeneral;
    document.getElementById('audienceYoung').textContent = t.audienceYoung;
    document.getElementById('audienceProfessionals').textContent = t.audienceProfessionals;
    document.getElementById('audienceStudents').textContent = t.audienceStudents;
    document.getElementById('audienceEntrepreneurs').textContent = t.audienceEntrepreneurs;
    document.getElementById('audienceParents').textContent = t.audienceParents;
    document.getElementById('audienceTech').textContent = t.audienceTech;
    document.getElementById('audienceArabic').textContent = t.audienceArabic;
    document.getElementById('audienceCustom').textContent = t.audienceCustom;
    
    // Update custom input placeholders
    elements.customTheme.placeholder = t.customThemePlaceholder;
    elements.customAudience.placeholder = t.customAudiencePlaceholder;
    
    // Update post preview elements
    document.getElementById('postPlaceholderText').textContent = t.postPlaceholderText;
    document.getElementById('postUsername').textContent = t.postUsername;
    document.getElementById('postTime').textContent = t.postTime;
    
    // Update guided tips elements
    document.getElementById('guidedTipsTitle').textContent = t.guidedTipsTitle;
    document.getElementById('guidedPlaceholderText').textContent = t.guidedPlaceholderText;
    document.getElementById('imagePromptsTitle').innerHTML = `<i class="fas fa-image"></i> ${t.imagePromptsTitle}`;
    document.getElementById('hashtagsTitle').innerHTML = `<i class="fas fa-hashtag"></i> ${t.hashtagsTitle}`;
    document.getElementById('visualSuggestionsTitle').innerHTML = `<i class="fas fa-palette"></i> ${t.visualSuggestionsTitle}`;
    document.getElementById('engagementStrategiesTitle').innerHTML = `<i class="fas fa-rocket"></i> ${t.engagementStrategiesTitle}`;
    
    // Update descriptions
    updateApiKeyDescription();
    updateModelDescription();
    
    // Update view toggle tooltip
    updateViewDisplay();
}

// Toggle between script, post preview, and guided tips views
function toggleView() {
    // Cycle through views: script -> post -> tips -> script
    if (currentView === 'script') {
        currentView = 'post';
    } else if (currentView === 'post') {
        currentView = 'tips';
    } else {
        currentView = 'script';
    }
    
    updateViewDisplay();
}

// Update the display based on current view
function updateViewDisplay() {
    // Hide all views
    elements.outputContent.style.display = 'none';
    elements.postPreview.style.display = 'none';
    elements.guidedTips.style.display = 'none';
    
    // Show current view and update button
    switch (currentView) {
        case 'script':
            elements.outputContent.style.display = 'block';
            elements.viewToggle.classList.remove('active');
            elements.viewToggle.innerHTML = '<i class="fas fa-eye"></i>';
            elements.viewToggle.title = TRANSLATIONS[currentLanguage].previewPost;
            break;
        case 'post':
            elements.postPreview.style.display = 'block';
            elements.viewToggle.classList.add('active');
            elements.viewToggle.innerHTML = '<i class="fas fa-lightbulb"></i>';
            elements.viewToggle.title = TRANSLATIONS[currentLanguage].showTips;
            break;
        case 'tips':
            elements.guidedTips.style.display = 'block';
            elements.viewToggle.classList.add('active');
            elements.viewToggle.innerHTML = '<i class="fas fa-code"></i>';
            elements.viewToggle.title = TRANSLATIONS[currentLanguage].viewScript;
            break;
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

// Generate guided tips content from script
function generateGuidedTips(scriptText, topic) {
    const isArabic = currentLanguage === 'ar';
    
    // Extract key themes and concepts from the script
    const scriptLower = scriptText.toLowerCase();
    const topicLower = topic.toLowerCase();
    
    // Generate image/video prompts based on content
    const imagePrompts = generateImagePrompts(scriptText, topic, isArabic);
    
    // Generate relevant hashtags
    const hashtags = generateHashtags(scriptText, topic, isArabic);
    
    // Generate content-specific visual suggestions
    const visualSuggestions = generateVisualSuggestions(scriptText, topic, isArabic);
    
    // Generate engagement strategies specific to this content
    const engagementStrategies = generateEngagementStrategies(scriptText, topic, isArabic);
    
    return {
        imagePrompts,
        hashtags,
        visualSuggestions,
        engagementStrategies
    };
}

// Generate AI image prompts based on script content
function generateImagePrompts(scriptText, topic, isArabic) {
    const prompts = [];
    
    // Analyze script for visual concepts
    const hasNumbers = /\d+%|\d+\s*(مليار|million|billion|ألف|thousand)/.test(scriptText);
    const hasTechnology = /(ذكاء اصطناعي|AI|تكنولوجيا|technology|روبوت|robot)/.test(scriptText);
    const hasBusiness = /(شركة|business|مال|money|استثمار|investment)/.test(scriptText);
    
    if (hasNumbers) {
        prompts.push({
            icon: '�',
            title: isArabic ? 'صورة إنفوجرافيك' : 'Infographic Image',
            prompt: isArabic ? 
                `إنفوجرافيك حديث وملوّن حول "${topic}" يُظهر الأرقام والإحصائيات المذكورة في المحتوى، بتصميم بسيط وجذاب للمنصات الاجتماعية` :
                `Modern, colorful infographic about "${topic}" showing the numbers and statistics mentioned in the content, with simple and attractive design for social media`
        });
    }
    
    if (hasTechnology) {
        prompts.push({
            icon: '🤖',
            title: isArabic ? 'صورة تقنية' : 'Tech Visual',
            prompt: isArabic ? 
                `صورة عالية الجودة تُظهر مفهوم "${topic}" بطريقة مستقبلية، بألوان زرقاء وبنفسجية، مع عناصر ذكاء اصطناعي وتكنولوجيا حديثة` :
                `High-quality image showing "${topic}" concept in a futuristic way, with blue and purple colors, featuring AI and modern technology elements`
        });
    }
    
    // Always add a main concept image
    prompts.push({
        icon: '🎨',
        title: isArabic ? 'الصورة الرئيسية' : 'Main Concept Image',
        prompt: isArabic ? 
            `صورة جذابة وبسيطة تمثل مفهوم "${topic}" بطريقة يفهمها الجميع، بألوان زاهية ومناسبة للمنصات الاجتماعية، نمط flat design حديث` :
            `Attractive and simple image representing the concept of "${topic}" in a way everyone can understand, with bright colors suitable for social media, modern flat design style`
    });
    
    return prompts;
}

// Generate relevant hashtags based on content
function generateHashtags(scriptText, topic, isArabic) {
    const hashtags = new Set(); // Use Set to avoid duplicates
    
    // Smart content analysis for hashtags
    const content = (scriptText + ' ' + topic).toLowerCase();
    
    // Core category hashtags based on content analysis
    const categories = {
        ai: {
            keywords: ['ذكاء اصطناعي', 'ai', 'artificial intelligence', 'تقنية', 'technology', 'روبوت', 'robot', 'آلة', 'machine learning'],
            hashtags: isArabic ? ['#ذكاء_اصطناعي', '#AI', '#تقنية', '#تكنولوجيا', '#مستقبل_التقنية'] : ['#AI', '#ArtificialIntelligence', '#Technology', '#MachineLearning', '#FutureOfTech']
        },
        education: {
            keywords: ['تعليم', 'education', 'تعلم', 'learning', 'دراسة', 'study', 'طلاب', 'students', 'مدرسة', 'school'],
            hashtags: isArabic ? ['#تعليم', '#تعلم', '#دراسة', '#طلاب', '#تطوير_المهارات'] : ['#Education', '#Learning', '#Study', '#Students', '#SkillDevelopment']
        },
        business: {
            keywords: ['عمل', 'business', 'شركة', 'company', 'ريادة', 'entrepreneurship', 'مشروع', 'project', 'استثمار', 'investment'],
            hashtags: isArabic ? ['#ريادة_الأعمال', '#عمل', '#استثمار', '#نجاح', '#تطوير_الذات'] : ['#Business', '#Entrepreneurship', '#Investment', '#Success', '#SelfDevelopment']
        },
        social_media: {
            keywords: ['سوشيال ميديا', 'social media', 'تسويق', 'marketing', 'محتوى', 'content', 'انستجرام', 'instagram', 'فيسبوك', 'facebook'],
            hashtags: isArabic ? ['#سوشيال_ميديا', '#تسويق', '#محتوى', '#تسويق_رقمي', '#إنستجرام'] : ['#SocialMedia', '#Marketing', '#Content', '#DigitalMarketing', '#Instagram']
        },
        health: {
            keywords: ['صحة', 'health', 'لياقة', 'fitness', 'رياضة', 'sport', 'تمرين', 'exercise', 'طب', 'medical'],
            hashtags: isArabic ? ['#صحة', '#لياقة', '#رياضة', '#نمط_حياة_صحي', '#تمارين'] : ['#Health', '#Fitness', '#Workout', '#HealthyLifestyle', '#Wellness']
        },
        finance: {
            keywords: ['مال', 'money', 'عملة', 'currency', 'استثمار', 'investment', 'بنك', 'bank', 'اقتصاد', 'economy'],
            hashtags: isArabic ? ['#استثمار', '#مال', '#اقتصاد', '#تداول', '#ثروة'] : ['#Investment', '#Money', '#Finance', '#Trading', '#Wealth']
        },
        lifestyle: {
            keywords: ['حياة', 'life', 'نمط', 'lifestyle', 'سعادة', 'happiness', 'نجاح', 'success', 'تطوير', 'development'],
            hashtags: isArabic ? ['#نمط_حياة', '#تطوير_الذات', '#نجاح', '#سعادة', '#إلهام'] : ['#Lifestyle', '#SelfImprovement', '#Success', '#Happiness', '#Inspiration']
        }
    };
    
    // Analyze content and add relevant category hashtags
    Object.values(categories).forEach(category => {
        const hasKeyword = category.keywords.some(keyword => 
            content.includes(keyword.toLowerCase())
        );
        if (hasKeyword) {
            category.hashtags.forEach(tag => hashtags.add(tag));
        }
    });
    
    // Add trending and engagement hashtags
    const trendingHashtags = isArabic ? [
        '#فيروسي', '#ترند', '#اكسبلور', '#لايك', '#شير',
        '#تفاعل', '#انتشار', '#محتوى_مميز', '#ابداع', '#اهتمام'
    ] : [
        '#Viral', '#Trending', '#Explore', '#Like', '#Share',
        '#Engagement', '#ContentCreator', '#Creative', '#Interesting', '#MustWatch'
    ];
    
    // Add 3-4 trending hashtags
    trendingHashtags.slice(0, 4).forEach(tag => hashtags.add(tag));
    
    // Add language-specific hashtags
    if (isArabic) {
        hashtags.add('#عربي');
        hashtags.add('#المحتوى_العربي');
    } else {
        hashtags.add('#English');
        hashtags.add('#GlobalContent');
    }
    
    // Add platform-specific hashtags
    const platformTags = isArabic ? [
        '#لينكدان', '#تويتر', '#انستجرام', '#فيسبوك', '#تيك_توك'
    ] : [
        '#LinkedIn', '#Twitter', '#Instagram', '#Facebook', '#TikTok'
    ];
    
    // Add 2 platform hashtags randomly
    const randomPlatforms = platformTags.sort(() => 0.5 - Math.random()).slice(0, 2);
    randomPlatforms.forEach(tag => hashtags.add(tag));
    
    // Convert Set to Array and limit to 12-15 hashtags
    const finalHashtags = Array.from(hashtags).slice(0, 15);
    
    return finalHashtags;
}

// Generate visual suggestions specific to content
function generateVisualSuggestions(scriptText, topic, isArabic) {
    const suggestions = [];
    
    // Analyze script tone and content
    const hasQuestion = /\?|؟/.test(scriptText);
    const hasNumbers = /\d+/.test(scriptText);
    const isSerious = /(مهم|important|خطير|serious|critical)/.test(scriptText);
    
    if (hasQuestion) {
        suggestions.push({
            icon: '❓',
            title: isArabic ? 'تصميم تفاعلي' : 'Interactive Design',
            description: isArabic ? 
                'استخدم تصميم يُظهر السؤال بخط كبير وملون، مع تأثير حركي يجذب النظر' :
                'Use design that shows the question in large, colorful font with eye-catching motion effects'
        });
    }
    
    if (hasNumbers) {
        suggestions.push({
            icon: '📈',
            title: isArabic ? 'عرض الأرقام' : 'Number Display',
            description: isArabic ? 
                'اجعل الأرقام والإحصائيات واضحة ومميزة بألوان مختلفة أو حجم أكبر' :
                'Make numbers and statistics clear and prominent with different colors or larger size'
        });
    }
    
    suggestions.push({
        icon: '🎬',
        title: isArabic ? 'فيديو مقترح' : 'Suggested Video',
        description: isArabic ? 
            `فيديو قصير (15-30 ثانية) يبدأ بالخطاف المذكور في النص، مع انتقالات سريعة وموسيقى مناسبة للموضوع` :
            `Short video (15-30 seconds) starting with the hook mentioned in the text, with quick transitions and music suitable for the topic`
    });
    
    return suggestions;
}

// Generate engagement strategies specific to content
function generateEngagementStrategies(scriptText, topic, isArabic) {
    const strategies = [];
    
    // Extract the call-to-action from script if exists
    const ctaMatch = scriptText.match(/(اكتب في الكومنتس|Comment|تعليق|share|شارك)/i);
    
    if (ctaMatch) {
        strategies.push({
            icon: '�',
            title: isArabic ? 'استراتيجية التعليق' : 'Comment Strategy',
            description: isArabic ? 
                'ادع المتابعين للتعليق بكلمة محددة أو مشاركة تجربتهم الشخصية حول الموضوع' :
                'Invite followers to comment with a specific word or share their personal experience about the topic'
        });
    }
    
    strategies.push({
        icon: '�',
        title: isArabic ? 'مشاركة مخصصة' : 'Custom Sharing',
        description: isArabic ? 
            `اطلب من المتابعين مشاركة المحتوى مع شخص مهتم بـ "${topic}"` :
            `Ask followers to share the content with someone interested in "${topic}"`
    });
    
    strategies.push({
        icon: '📱',
        title: isArabic ? 'تفاعل المنصة' : 'Platform Engagement',
        description: isArabic ? 
            'انشر في الأوقات المناسبة واستخدم ميزات المنصة مثل الاستطلاعات أو الأسئلة' :
            'Post at optimal times and use platform features like polls or questions'
    });
    
    return strategies;
}

// Update guided tips content
function updateGuidedTips() {
    const outputText = elements.outputContent.querySelector('.output-text');
    if (!outputText) return;
    
    const scriptText = outputText.innerText;
    const topic = elements.topicInput.value.trim();
    const tips = generateGuidedTips(scriptText, topic);
    
    // Clear placeholder
    elements.guidedTipsContent.style.display = 'none';
    elements.tipsSections.style.display = 'grid';
    
    // Populate tips sections
    populateImagePrompts('imagePromptsList', tips.imagePrompts);
    populateHashtags('hashtagsList', tips.hashtags);
    populateTipsSection('visualSuggestionsList', tips.visualSuggestions, 'visual-suggestion');
    populateTipsSection('engagementStrategiesList', tips.engagementStrategies, 'engagement-strategy');
}

// Populate image prompts section
function populateImagePrompts(containerId, prompts) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = prompts.map(prompt => `
        <div class="tip-item image-prompt">
            <div class="tip-icon">${prompt.icon}</div>
            <div class="tip-content">
                <div class="tip-title">${prompt.title}</div>
                <div class="tip-description">${prompt.prompt}</div>
                <button class="copy-prompt-btn" onclick="copyPromptToClipboard('${prompt.prompt.replace(/'/g, "\\'")}')">
                    <i class="fas fa-copy"></i> ${currentLanguage === 'ar' ? 'نسخ المطالبة' : 'Copy Prompt'}
                </button>
            </div>
        </div>
    `).join('');
}

// Populate hashtags section
function populateHashtags(containerId, hashtags) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div class="hashtags-grid">
            ${hashtags.map(tag => `<span class="hashtag-item">${tag}</span>`).join('')}
        </div>
        <button class="copy-hashtags-btn" onclick="copyHashtagsToClipboard('${hashtags.join(' ')}')">
            <i class="fas fa-copy"></i> ${currentLanguage === 'ar' ? 'نسخ جميع الهاشتاجز' : 'Copy All Hashtags'}
        </button>
    `;
}

// Copy prompt to clipboard
function copyPromptToClipboard(prompt) {
    navigator.clipboard.writeText(prompt).then(() => {
        showToast(TRANSLATIONS[currentLanguage].toastCopied, 'success');
    }).catch(() => {
        showToast(TRANSLATIONS[currentLanguage].toastError, 'error');
    });
}

// Copy hashtags to clipboard
function copyHashtagsToClipboard(hashtags) {
    navigator.clipboard.writeText(hashtags).then(() => {
        showToast(TRANSLATIONS[currentLanguage].toastCopied, 'success');
    }).catch(() => {
        showToast(TRANSLATIONS[currentLanguage].toastError, 'error');
    });
}

// Populate a tips section with tip items
function populateTipsSection(containerId, tips, tipClass) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = tips.map(tip => `
        <div class="tip-item ${tipClass}">
            <div class="tip-icon">${tip.icon}</div>
            <div class="tip-content">
                <div class="tip-title">${tip.title}</div>
                <div class="tip-description">${tip.description}</div>
            </div>
        </div>
    `).join('');
}

// UI Updates
function updateUI() {
    const hasContent = elements.outputContent.querySelector('.output-text') !== null;
    elements.viewToggle.style.display = hasContent ? 'flex' : 'none';
    elements.copyBtn.style.display = hasContent ? 'flex' : 'none';
    elements.downloadBtn.style.display = hasContent ? 'flex' : 'none';
    
    // Update post preview and guided tips if content exists
    if (hasContent) {
        updatePostPreview();
        updateGuidedTips();
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
        
        const response = await callAIAPI(prompt);
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
    // Get selected theme and use appropriate system message
    const selectedTheme = elements.themeSelect.value;
    const customTheme = elements.customTheme.value.trim();
    
    // Select the right system message based on theme
    let systemMessage;
    if (selectedTheme === 'custom' && customTheme) {
        systemMessage = SYSTEM_MESSAGES.base + `\n\n**CUSTOM THEME: ${customTheme}**\nAdapt your writing style to match this custom theme while maintaining engagement.`;
    } else {
        systemMessage = SYSTEM_MESSAGES[selectedTheme] || SYSTEM_MESSAGES.engaging;
    }
    
    let prompt = systemMessage + '\n\n';
    
    // Get selected audience
    const selectedAudience = elements.audienceSelect.value;
    const customAudience = elements.customAudience.value.trim();
    const audienceText = selectedAudience === 'custom' ? customAudience : getAudienceDescription(selectedAudience);
    
    if (currentLanguage === 'ar') {
        prompt += `**تعليمات مهمة جداً: يجب إنشاء محتوى أصلي ومبدع 100% يتماشى مع النمط المختار. لا تنسخ أو تتبع قوالب جاهزة.**\n\n`;
        prompt += `الموضوع المطلوب: ${topic}\n`;
        prompt += `النمط المطلوب: ${selectedTheme === 'custom' ? customTheme : getThemeDescription(selectedTheme)}\n`;
        
        if (audienceText) {
            prompt += `الجمهور المستهدف: ${audienceText}\n`;
        }
        
        if (additionalInfo) {
            prompt += `معلومات إضافية: ${additionalInfo}\n`;
        }
        
        prompt += `\n**المطلوب**: اكتب نص منشور لوسائل التواصل الاجتماعي باللغة العربية يتماشى تماماً مع النمط المختار "${selectedTheme === 'custom' ? customTheme : getThemeDescription(selectedTheme)}" ويجذب انتباه "${audienceText}". 

**مهم جداً**: 
- النص يجب أن يكون جاهز للنسخ والنشر مباشرة
- بدون علامات # في المحتوى الأساسي أو شروحات أو تفسيرات إضافية
- ابدأ مباشرة بالمحتوى الأساسي
- في النهاية ضع سطرين فارغين ثم أضف 8-12 هاشتاج مناسب للموضوع`;

    } else {
        prompt += `**CRITICAL INSTRUCTION: Create 100% original and creative content that perfectly matches the selected theme. Do not copy or follow ready templates.**\n\n`;
        prompt += `Topic: ${topic}\n`;
        prompt += `Theme: ${selectedTheme === 'custom' ? customTheme : getThemeDescription(selectedTheme)}\n`;
        
        if (audienceText) {
            prompt += `Target Audience: ${audienceText}\n`;
        }
        
        if (additionalInfo) {
            prompt += `Additional Information: ${additionalInfo}\n`;
        }
        
        prompt += `\n**REQUIREMENT**: Write a social media post text in English that perfectly matches the selected theme "${selectedTheme === 'custom' ? customTheme : getThemeDescription(selectedTheme)}" and appeals to "${audienceText}". 

**CRITICAL**: 
- The text must be ready to copy and post directly
- No # symbols in the main content, explanations, or additional comments
- Start directly with the main content
- At the end add two empty lines then add 8-12 relevant hashtags for the topic`;
    }
    
    return prompt;
}

// Get theme description based on selection
function getThemeDescription(theme) {
    const themeDescriptions = {
        'engaging': currentLanguage === 'ar' ? 'جذاب ومثير للاهتمام مع لمسة حماسية' : 'engaging and exciting with enthusiastic tone',
        'educational': currentLanguage === 'ar' ? 'تعليمي ومفيد بطريقة سهلة الفهم' : 'educational and informative in an easy-to-understand way',
        'humorous': currentLanguage === 'ar' ? 'فكاهي وخفيف مع لمسة ترفيهية' : 'humorous and light with entertainment elements',
        'serious': currentLanguage === 'ar' ? 'جدي ومهني مع تركيز على المصداقية' : 'serious and professional focusing on credibility',
        'inspirational': currentLanguage === 'ar' ? 'ملهم ومحفز يدفع للعمل والتطوير' : 'inspirational and motivating driving action and development',
        'storytelling': currentLanguage === 'ar' ? 'قصصي وشخصي مع أمثلة من الواقع' : 'storytelling and personal with real-life examples'
    };
    
    return themeDescriptions[theme] || '';
}

// Get audience description based on selection
function getAudienceDescription(audience) {
    const audienceDescriptions = {
        'general': currentLanguage === 'ar' ? 'جمهور عام متنوع' : 'diverse general audience',
        'young-adults': currentLanguage === 'ar' ? 'الشباب من عمر 18-30 سنة' : 'young adults aged 18-30',
        'professionals': currentLanguage === 'ar' ? 'المحترفون وأصحاب المهن' : 'professionals and career-focused individuals',
        'students': currentLanguage === 'ar' ? 'الطلاب والدارسون' : 'students and learners',
        'entrepreneurs': currentLanguage === 'ar' ? 'رواد الأعمال والمبتكرون' : 'entrepreneurs and innovators',
        'parents': currentLanguage === 'ar' ? 'الآباء والأمهات' : 'parents and caregivers',
        'tech-enthusiasts': currentLanguage === 'ar' ? 'عشاق التكنولوجيا والتقنية' : 'technology and tech enthusiasts',
        'arabic-speakers': currentLanguage === 'ar' ? 'الناطقون باللغة العربية' : 'Arabic-speaking audience'
    };
    
    return audienceDescriptions[audience] || '';
}

// Call AI API with retry mechanism (using Vercel API)
async function callAIAPI(prompt, maxRetries = 1) {
    const selectedModel = elements.modelSelect.value;
    const selectedApiKey = elements.apiKeySelect.value;
    const modelConfig = CONFIG.MODELS[selectedModel];
    const apiKeyConfig = CONFIG.API_KEYS[selectedApiKey];
    
    if (!modelConfig) {
        throw new Error('نموذج الذكاء الاصطناعي غير صحيح');
    }
    
    if (!apiKeyConfig) {
        throw new Error('مفتاح API غير صحيح');
    }
    
    // Determine API endpoint (for local vs production)
    const apiEndpoint = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
        ? '/api/generate' 
        : '/api/generate';
    
    try {
        // First, test if API endpoint is available
        const testResponse = await fetch(apiEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (!testResponse.ok && testResponse.status === 404) {
            // API endpoint not available, use direct Gemini API as fallback
            const actualApiKey = CONFIG.API_KEYS[selectedApiKey].key;
            return await callGeminiAPIDirectly(prompt, modelConfig, actualApiKey, maxRetries);
        }
        
        // Add timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 seconds timeout
        
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: prompt,
                selectedModel: selectedModel,
                selectedApiKey: selectedApiKey,
                maxRetries: maxRetries
            }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        // Check if response is ok before trying to parse JSON
        if (!response.ok) {
            let errorData;
            try {
                const responseText = await response.text();
                if (responseText && responseText.trim() !== '') {
                    errorData = JSON.parse(responseText);
                } else {
                    errorData = { error: 'Empty response from server' };
                }
            } catch (parseError) {
                console.error('Failed to parse error response:', parseError);
                errorData = { error: `Server error: ${response.status}` };
            }
            
            if (response.status === 429 && errorData.suggestion) {
                const currentModel = modelConfig.name;
                const suggestedModel = getSuggestedAlternativeModel(selectedModel);
                const suggestionText = currentLanguage === 'ar' ? 
                    `تم تجاوز حد الطلبات في ${currentModel}. جرب نموذج ${suggestedModel} بدلاً منه.` :
                    `Rate limit exceeded for ${currentModel}. Try ${suggestedModel} instead.`;
                throw new Error(suggestionText);
            }
            
            throw new Error(errorData.error || `خطأ في الخدمة: ${response.status}`);
        }
        
        // Parse successful response
        let data;
        try {
            const responseText = await response.text();
            if (!responseText || responseText.trim() === '') {
                throw new Error('Empty response from server');
            }
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('JSON Parse Error:', parseError);
            throw new Error(currentLanguage === 'ar' ? 
                'خطأ في تحليل استجابة الخادم' : 
                'Failed to parse server response');
        }
        
        // Validate response data
        if (!data || !data.content) {
            throw new Error(currentLanguage === 'ar' ? 
                'لم يتم تلقي محتوى من الخادم' : 
                'No content received from server');
        }
        
        return data.content;
        
    } catch (error) {
        console.error('API Call Error:', error);
        
        if (error.name === 'AbortError') {
            throw new Error(currentLanguage === 'ar' ? 
                'انتهت مهلة الطلب. جرب مرة أخرى.' : 
                'Request timeout. Please try again.');
        }
        
        if (error.message.includes('fetch') || error.message.includes('network')) {
            throw new Error(currentLanguage === 'ar' ? 
                'خطأ في الاتصال بالخدمة. تحقق من الإنترنت.' : 
                'Connection error. Please check your internet connection.');
        }
        
        // If API endpoint fails, try direct Gemini API as fallback
        if (error.message.includes('405') || error.message.includes('Method Not Allowed') || error.message.includes('404')) {
            console.log('API endpoint not available, using direct Gemini API fallback');
            const actualApiKey = CONFIG.API_KEYS[selectedApiKey].key;
            return await callGeminiAPIDirectly(prompt, modelConfig, actualApiKey, maxRetries);
        }
        
        throw error;
    }
}

// Fallback function for direct Gemini API calls when Vercel API is not available
async function callGeminiAPIDirectly(prompt, modelConfig, apiKey, maxRetries = 1) {
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
                // Don't retry for rate limiting - immediately fail to save quota
                throw new Error(`Status ${response.status}: Rate limit or service unavailable`);
            }
            
            if (!response.ok) {
                let errorText;
                try {
                    errorText = await response.text();
                } catch (e) {
                    errorText = 'Unknown error occurred';
                }
                
                if (response.status === 429) {
                    const suggestionText = currentLanguage === 'ar' ? 
                        `تم تجاوز حد الطلبات في ${modelConfig.name}. غير المفتاح أو انتظر قليلاً.` :
                        `Rate limit exceeded for ${modelConfig.name}. Change API key or wait.`;
                    throw new Error(suggestionText);
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
            
            return generatedText;
            
        } catch (error) {
            if (attempt === maxRetries) {
                if (error.message.includes('503')) {
                    throw new Error(`خدمة ${modelConfig.name} غير متاحة حالياً. جرب نموذج آخر.`);
                } else if (error.message.includes('429')) {
                    throw new Error(error.message);
                } else if (error.message.includes('403')) {
                    throw new Error('مشكلة في مفتاح الـ API. تحقق من الإعدادات.');
                } else {
                    throw new Error(`خطأ في ${modelConfig.name}: ${error.message}`);
                }
            }
            
            if (attempt < maxRetries) {
                const waitTime = 2000 * attempt;
                await new Promise(resolve => setTimeout(resolve, waitTime));
            }
        }
    }
}

// Get suggested alternative model when current model fails
function getSuggestedAlternativeModel(currentModel) {
    const alternatives = {
        'gemini-1.5-flash': 'Gemini 2.0 Flash',
        'gemini-2.0-flash': 'Gemini 2.5 Flash',
        'gemini-2.0-flash-lite': 'Gemini 1.5 Flash',
        'gemini-2.5-flash': 'Gemini 2.5 Pro',
        'gemini-2.5-pro': 'Gemini 2.0 Flash'
    };
    
    return alternatives[currentModel] || 'نموذج آخر';
}

// Display generated script
function displayScript(scriptText) {
    // Clean the script text before displaying
    const cleanedText = cleanScriptText(scriptText);
    
    elements.outputContent.innerHTML = `
        <div class="output-text fade-in">${formatScript(cleanedText)}</div>
    `;
    updateUI();
    
    // Scroll to output
    elements.outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Clean script text to make it ready for posting
function cleanScriptText(text) {
    let cleaned = text;
    
    // Remove any explanatory sections that start with common phrases
    const explanationPhrases = [
        'هذا المنشور',
        'هذا النص',
        'المنشور السابق',
        'النص السابق',
        'الأسكربت',
        'السكريبت',
        'This post',
        'This text',
        'The script',
        'Script explanation',
        'Here\'s the',
        'Here is the'
    ];
    
    explanationPhrases.forEach(phrase => {
        const regex = new RegExp(`^.*${phrase}.*$`, 'gmi');
        cleaned = cleaned.replace(regex, '');
    });
    
    // Remove section headers with symbols (but keep hashtags at the end)
    const sectionHeaders = [
        /^#+\s*(?!#\w)/gm,   // Markdown headers (but not hashtags)
        /^\*+\s*.*/gm,       // Asterisk headers
        /^-+\s*.*/gm,        // Dash headers
        /^=+\s*.*/gm,        // Equal headers
        /^\d+\.\s*عنوان/gmi, // Arabic numbered headers
        /^\d+\.\s*title/gmi, // English numbered headers
    ];
    
    sectionHeaders.forEach(regex => {
        cleaned = cleaned.replace(regex, '');
    });
    
    // Remove common social media formatting artifacts
    cleaned = cleaned.replace(/^\s*---+\s*$/gm, ''); // Remove separator lines
    cleaned = cleaned.replace(/^\s*\*\*\*+\s*$/gm, ''); // Remove asterisk separators
    cleaned = cleaned.replace(/^\s*===+\s*$/gm, ''); // Remove equal separators
    
    // Clean up multiple line breaks (but preserve spacing before hashtags)
    cleaned = cleaned.replace(/\n\s*\n\s*\n(?!\s*#)/g, '\n\n'); // Max 2 line breaks except before hashtags
    cleaned = cleaned.replace(/^\s+|\s+$/g, ''); // Trim start and end
    
    return cleaned;
}

// Format script text for display (keep it simple and clean)
function formatScript(text) {
    // Convert line breaks to HTML
    let formatted = text.replace(/\n/g, '<br>');
    
    // Style emojis to make them more visible
    formatted = formatted.replace(/([\u{1F300}-\u{1F9FF}])/gu, '<span class="emoji">$1</span>');
    
    // Style hashtags to make them more prominent
    formatted = formatted.replace(/(#[\w\u0600-\u06FF_]+)/g, '<span style="color: #3b82f6; font-weight: 500;">$1</span>');
    
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