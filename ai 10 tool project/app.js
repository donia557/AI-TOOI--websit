// ===== بيانات الأدوات العشر =====
var tools = [
    {
        num: "01",
        name: "ChatGPT",
        company: "by OpenAI",
        icon: "fas fa-comment-dots",
        desc: "The world's most popular AI assistant. Understands context, writes code, analyzes images, and holds natural conversations that feel remarkably human.",
        features: [
            "GPT-4o with vision and voice capabilities",
            "Real-time web browsing and code execution",
            "Custom GPTs for specialized workflows",
            "Available in 50+ languages"
        ],
        url: "https://chat.openai.com"
    },
    {
        num: "02",
        name: "Claude",
        company: "by Anthropic",
        icon: "fas fa-brain",
        desc: "Anthropic's most powerful AI with unmatched long-context understanding. Excels at nuanced reasoning, complex analysis, and producing thoughtful, detailed responses.",
        features: [
            "200K token context window for massive documents",
            "Constitutional AI safety with honest outputs",
            "Superior at coding, math, and scientific reasoning",
            "Artifacts feature for interactive content"
        ],
        url: "https://claude.ai"
    },
    {
        num: "03",
        name: "Midjourney",
        company: "by Midjourney Inc.",
        icon: "fas fa-palette",
        desc: "The gold standard for AI image generation. Creates stunning photorealistic artwork and illustrations from text descriptions with unmatched aesthetic quality.",
        features: [
            "V7 model with exceptional photorealism",
            "Style personalization and character reference",
            "Pan, zoom, and vary controls for refinement",
            "Active community with shared prompts"
        ],
        url: "https://www.midjourney.com"
    },
    {
        num: "04",
        name: "Sora",
        company: "by OpenAI",
        icon: "fas fa-video",
        desc: "OpenAI's groundbreaking text-to-video model that generates cinematic 60-second clips with complex scenes, realistic physics, and consistent characters.",
        features: [
            "Generates up to 60 seconds of coherent video",
            "Understanding of real-world physics and motion",
            "Multiple aspect ratios and resolution options",
            "Advanced camera movement and scene control"
        ],
        url: "https://sora.com"
    },
    {
        num: "05",
        name: "Runway ML",
        company: "by Runway",
        icon: "fas fa-film",
        desc: "The leading platform for AI-powered video generation and editing. Transform text or images into cinematic video clips with unprecedented control.",
        features: [
            "Gen-3 Alpha for cinematic video generation",
            "Motion brush for precise area animation",
            "Text and image to video in seconds",
            "Professional editing suite integrated"
        ],
        url: "https://runwayml.com"
    },
    {
        num: "06",
        name: "ElevenLabs",
        company: "by ElevenLabs",
        icon: "fas fa-microphone",
        desc: "The most advanced AI voice synthesis platform. Clone voices, generate narrations, and create multilingual audio nearly indistinguishable from real humans.",
        features: [
            "Voice cloning from 30 seconds of audio",
            "29+ languages with native accent support",
            "Emotion and intonation fine control",
            "API for real-time voice applications"
        ],
        url: "https://elevenlabs.io"
    },
    {
        num: "07",
        name: "Cursor",
        company: "by Anysphere",
        icon: "fas fa-code",
        desc: "The AI-native code editor that redefines how developers write software. Deeply integrated AI understands your entire codebase and writes alongside you.",
        features: [
            "Multi-file AI editing with full context",
            "Codebase indexing for intelligent suggestions",
            "Tab completion that predicts entire functions",
            "Built-in terminal with AI assistance"
        ],
        url: "https://cursor.sh"
    },
    {
        num: "08",
        name: "GitHub Copilot",
        company: "by GitHub / Microsoft",
        icon: "fas fa-laptop-code",
        desc: "The industry-standard AI pair programmer. Suggests entire functions, explains unfamiliar code, and accelerates development across every programming language.",
        features: [
            "Powered by multi-model support for flexibility",
            "Inline suggestions and chat within any IDE",
            "Copilot Workspace for task-driven development",
            "Trusted by over 1.8 million developers"
        ],
        url: "https://github.com/features/copilot"
    },
    {
        num: "09",
        name: "Perplexity",
        company: "by Perplexity AI",
        icon: "fas fa-search",
        desc: "The AI search engine that provides cited, real-time answers. Combines large language models with live internet access for accurate, sourced responses.",
        features: [
            "Real-time web search with source citations",
            "Pro Search for deep multi-step research",
            "Focus modes for academic, writing, and math",
            "Available as browser extension and mobile app"
        ],
        url: "https://www.perplexity.ai"
    },
    {
        num: "10",
        name: "Notion AI",
        company: "by Notion Labs",
        icon: "fas fa-cube",
        desc: "AI deeply integrated into the world's most popular workspace. Summarizes pages, writes content, brainstorms ideas, and automates workflows without leaving Notion.",
        features: [
            "In-line AI assistance across all Notion blocks",
            "Summarize and extract insights from any document",
            "Auto-generate databases, tables, and templates",
            "Q&A over your entire workspace knowledge base"
        ],
        url: "https://www.notion.so/product/ai"
    }
];

// ===== بناء بطاقات الأدوات =====
var grid = document.getElementById('grid');

for (var i = 0; i < tools.length; i++) {
    var tool = tools[i];
    var card = document.createElement('div');
    card.className = 'tcard rv rv' + Math.min(i, 4);

    var featsHtml = '';
    for (var j = 0; j < tool.features.length; j++) {
        featsHtml += '<li><i class="fas fa-circle"></i><span>' + tool.features[j] + '</span></li>';
    }

    card.innerHTML =
        '<div class="tc-n">' + tool.num + '</div>' +
        '<div class="tc-top">' +
            '<div>' +
                '<div class="tc-nm">' + tool.name + '</div>' +
                '<div class="tc-co">' + tool.company + '</div>' +
            '</div>' +
            '<div class="tc-ic"><i class="' + tool.icon + '"></i></div>' +
        '</div>' +
        '<p class="tc-ds">' + tool.desc + '</p>' +
        '<ul class="tc-fl">' + featsHtml + '</ul>' +
        '<a href="' + tool.url + '" target="_blank" rel="noopener noreferrer" class="tc-bt">' +
            'Visit ' + tool.name + ' <i class="fas fa-arrow-right"></i>' +
        '</a>';

    grid.appendChild(card);
}

// ===== التنقل بين الصفحات =====
function go(page) {
    // إخفاء كل الصفحات
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }

    // إظهار الصفحة المطلوبة
    var targetId = page === 'home' ? 'pHome' : 'pSignup';
    document.getElementById(targetId).classList.add('active');

    // تحديث حالة الـ nav
    document.getElementById('nHome').classList.toggle('active', page === 'home');
    document.getElementById('nSign').classList.toggle('active', page === 'signup');

    // إخفاء/إظهار زر Get Started
    document.getElementById('nBtn').style.display = page === 'signup' ? 'none' : 'inline-flex';

    // العودة لأعلى الصفحة
    window.scrollTo(0, 0);

    // إعادة تشغيل أنيميشن Reveal لصفحة التسجيل
    if (page === 'signup') {
        var el = document.getElementById('sgRv');
        el.classList.remove('sh');
        setTimeout(function() {
            el.classList.add('sh');
        }, 50);
    }
}

// ===== Navbar scroll =====
window.addEventListener('scroll', function() {
    document.getElementById('topnav').classList.toggle('scrolled', window.scrollY > 50);
});

// ===== كشف العناصر عند التمرير =====
var rvObserver = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add('sh');
        }
    }
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

var rvElements = document.querySelectorAll('.rv');
for (var i = 0; i < rvElements.length; i++) {
    rvObserver.observe(rvElements[i]);
}

// ===== عناصر نموذج التسجيل =====
var regForm = document.getElementById('regForm');
var uName = document.getElementById('uname');
var uEmail = document.getElementById('uemail');
var uPass = document.getElementById('upass');
var uTerms = document.getElementById('terms');
var pwToggle = document.getElementById('pwTog');
var strBar = document.getElementById('strBar');
var strTxt = document.getElementById('strTxt');
var subBtn = document.getElementById('subBtn');

// ===== إظهار/إخفاء كلمة المرور =====
pwToggle.addEventListener('click', function() {
    var isPassword = uPass.type === 'password';
    uPass.type = isPassword ? 'text' : 'password';
    pwToggle.innerHTML = isPassword
        ? '<i class="fas fa-eye-slash"></i>'
        : '<i class="fas fa-eye"></i>';
});

// ===== مقياس قوة كلمة المرور =====
uPass.addEventListener('input', function() {
    var val = uPass.value;
    var score = 0;

    if (val.length >= 8) score++;
    if (val.length >= 12) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;

    var levels = [
        { width: '0%',   color: 'transparent', text: '' },
        { width: '20%',  color: '#ef4444',     text: 'Very weak' },
        { width: '40%',  color: '#f97316',     text: 'Weak' },
        { width: '60%',  color: '#eab308',     text: 'Fair' },
        { width: '80%',  color: '#22c55e',     text: 'Strong' },
        { width: '100%', color: '#16a34a',     text: 'Very strong' }
    ];

    var level = val.length === 0 ? levels[0] : levels[Math.min(score, 5)];
    strBar.style.width = level.width;
    strBar.style.background = level.color;
    strTxt.textContent = level.text;
    strTxt.style.color = level.color;

    // إزالة خطأ الباسورد لو صحح
    if (val.length >= 8) {
        clrErr('pw');
    }
});

// ===== إزالة الأخطاء أثناء الكتابة =====
uName.addEventListener('input', function() {
    if (uName.value.length >= 3) clrErr('un');
});
uEmail.addEventListener('input', function() {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(uEmail.value)) clrErr('em');
});

// ===== وظائف عرض/إخفاء الأخطاء =====
function shErr(field, msg) {
    var inputMap = { un: 'uname', em: 'uemail', pw: 'upass' };
    var errorMap = { un: 'unErr', em: 'emErr', pw: 'pwErr' };

    document.getElementById(inputMap[field]).classList.add('err');
    if (msg) document.getElementById(errorMap[field]).textContent = msg;
    document.getElementById(errorMap[field]).classList.add('on');
}

function clrErr(field) {
    var inputMap = { un: 'uname', em: 'uemail', pw: 'upass' };
    var errorMap = { un: 'unErr', em: 'emErr', pw: 'pwErr' };

    document.getElementById(inputMap[field]).classList.remove('err');
    document.getElementById(errorMap[field]).classList.remove('on');
}

// ===== التحقق من صحة الإيميل =====
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ===== إرسال النموذج =====
regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var isValid = true;

    // التحقق من اسم المستخدم
    if (uName.value.trim().length < 3) {
        shErr('un', 'Username must be at least 3 characters');
        isValid = false;
    } else {
        clrErr('un');
    }

    // التحقق من الإيميل
    if (!isValidEmail(uEmail.value.trim())) {
        shErr('em', 'Please enter a valid email address');
        isValid = false;
    } else {
        clrErr('em');
    }

    // التحقق من كلمة المرور
    if (uPass.value.length < 8) {
        shErr('pw', 'Password must be at least 8 characters');
        isValid = false;
    } else {
        clrErr('pw');
    }

    // التحقق من الموافقة على الشروط
    if (!uTerms.checked) {
        tst('Please agree to the Terms of Service');
        isValid = false;
    }

    if (!isValid) return;

    // محاكاة التحميل
    subBtn.classList.add('ld');
    subBtn.disabled = true;

    setTimeout(function() {
        subBtn.classList.remove('ld');
        subBtn.disabled = false;

        // إخفاء النموذج وإظهار حالة النجاح
        document.getElementById('sgForm').style.display = 'none';
        document.getElementById('okSt').classList.add('on');
        tst('Account created successfully!');
    }, 1800);
});

// ===== إشعارات Toast =====
function tst(msg) {
    var el = document.getElementById('tstEl');
    document.getElementById('tstTx').textContent = msg;
    el.classList.add('on');
    setTimeout(function() {
        el.classList.remove('on');
    }, 3500);
}