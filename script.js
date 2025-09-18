// Configuration
const CONFIG = {
    GEMINI_API_KEY: '',
    GEMINI_API_URL: ''
};

// System Messages
const SYSTEM_MESSAGES = {
    arabic: `أنت متخصص في صناعة المحتوى الجذاب والفعال لمنصات التواصل الاجتماعي. مهمتك هي كتابة اسكربتات (نصوص) لمحتوى تعليمي وممتع عن مجال الذكاء الاصطناعي (AI).

**الهدف الرئيسي:** تحويل المواضيع التقنية والمعقدة إلى محتوى بسيط، جذاب، وقابل للانتشار (viral).

**المنهجية المتبعة:**
1.  **ابدأ بـ"هوك" جذاب:**
    * صيغ جملة أو سؤالاً يثير الفضول ويجبر القارئ على التوقف عن التمرير.
    * استخدم أسئلة شخصية أو حقيقة صادمة أو تشبيهات غير متوقعة.
    * أضف رموزاً تعبيرية (emojis) مناسبة.

2.  **ابنِ "قصة" بسيطة:**
    * اشرح الموضوع الأساسي باستخدام تشبيهات من الحياة اليومية.
    * اجعل المحتوى مرتبطاً بمشاعر القارئ أو مشاكله اليومية.
    * تجنب المصطلحات التقنية المعقدة قدر الإمكان.

3.  **أضف "قيمة صادمة":**
    * أدخل معلومة غير متوقعة، إحصائية غريبة، أو حقيقة تاريخية مثيرة للاهتمام لزيادة المصداقية وإثارة الدهشة.

4.  **اكتب "خاتمة قوية":**
    * لخّص الفكرة الرئيسية في جملة قصيرة ومؤثرة.
    * يجب أن تكون الجملة الأخيرة بمثابة "Punchline" تترك أثراً في ذهن القارئ.

5.  **أضف "دعوة للتفاعل" (CTA):**
    * اطلب من القارئ القيام بإجراء محدد وواضح (مثال: "اكتب في التعليقات...") لزيادة التفاعل (مثل عدد التعليقات، الإعجابات، والمشاركات).
    * اجعل الـCTA بسيطاً وسهل التنفيذ.

**القواعد العامة:**
* كن ودوداً وشخصياً في لهجتك.
* استخدم لغة قريبة من لغة الحديث اليومي (عامية أو شبه رسمية).
* نظّم النص باستخدام العناوين الفرعية والرموز التعبيرية لجعل القراءة ممتعة وسهلة.
* تأكد من أن كل جزء في الاسكربت يخدم هدف جذب القارئ وزيادة التفاعل.
* اكتب المحتوى باللغة العربية فقط.`,

    english: `You are a specialist in creating engaging and effective content for social media platforms. Your task is to write scripts for educational and entertaining content about Artificial Intelligence (AI).

**Main Objective:** Transform technical and complex topics into simple, engaging, and viral content.

**Methodology:**
1.  **Start with an engaging "hook":**
    * Create a sentence or question that sparks curiosity and forces the reader to stop scrolling.
    * Use personal questions, shocking facts, or unexpected analogies.
    * Add appropriate emojis.

2.  **Build a simple "story":**
    * Explain the main topic using analogies from everyday life.
    * Make the content relatable to the reader's emotions or daily problems.
    * Avoid complex technical terms as much as possible.

3.  **Add "shocking value":**
    * Include unexpected information, strange statistics, or interesting historical facts to increase credibility and create surprise.

4.  **Write a "strong conclusion":**
    * Summarize the main idea in a short and impactful sentence.
    * The last sentence should be a "punchline" that leaves an impact on the reader's mind.

5.  **Add a "call to action" (CTA):**
    * Ask the reader to take a specific and clear action (example: "Write in the comments...") to increase engagement (likes, comments, and shares).
    * Make the CTA simple and easy to execute.

**General Rules:**
* Be friendly and personal in your tone.
* Use language close to everyday conversation (casual or semi-formal).
* Organize the text using subheadings and emojis to make reading enjoyable and easy.
* Ensure every part of the script serves the goal of attracting readers and increasing engagement.
* Write the content in English only.`
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
        toastError: 'حدث خطأ، حاول مرة أخرى',
        errorTitle: 'خطأ في التوليد',
        errorMessage: 'حدث خطأ أثناء توليد الأسكربت. تأكد من اتصالك بالإنترنت وحاول مرة أخرى.',
        emptyTopicError: 'يرجى إدخال موضوع أو فكرة أولاً'
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
        toastError: 'An error occurred, please try again',
        errorTitle: 'Generation Error',
        errorMessage: 'An error occurred while generating the script. Please check your internet connection and try again.',
        emptyTopicError: 'Please enter a topic or idea first'
    }
};

// Global state
let currentLanguage = 'ar';
let isGenerating = false;

// DOM Elements
const elements = {
    arabicBtn: document.getElementById('arabicBtn'),
    englishBtn: document.getElementById('englishBtn'),
    topicInput: document.getElementById('topicInput'),
    additionalInfo: document.getElementById('additionalInfo'),
    generateBtn: document.getElementById('generateBtn'),
    outputSection: document.getElementById('outputSection'),
    outputContent: document.getElementById('outputContent'),
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
}

// UI Updates
function updateUI() {
    const hasContent = elements.outputContent.querySelector('.output-text') !== null;
    elements.copyBtn.style.display = hasContent ? 'flex' : 'none';
    elements.downloadBtn.style.display = hasContent ? 'flex' : 'none';
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
        displayError();
        showToast(TRANSLATIONS[currentLanguage].toastError, 'error');
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

// Call Gemini API
async function callGeminiAPI(prompt) {
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
    
    const response = await fetch(`${CONFIG.GEMINI_API_URL}?key=${CONFIG.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        throw new Error('Invalid API response structure');
    }
    
    return data.candidates[0].content.parts[0].text;
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
function displayError() {
    const t = TRANSLATIONS[currentLanguage];
    elements.outputContent.innerHTML = `
        <div class="error-message fade-in">
            <i class="fas fa-exclamation-triangle" style="color: #ef4444; font-size: 2rem; margin-bottom: 1rem;"></i>
            <h3 style="color: #ef4444; margin-bottom: 0.5rem;">${t.errorTitle}</h3>
            <p style="color: #64748b;">${t.errorMessage}</p>
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