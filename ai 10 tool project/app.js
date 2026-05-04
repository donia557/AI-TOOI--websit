var tools = [
    {
        num: "01", name: "ChatGPT", company: "by OpenAI", icon: "fas fa-comment-dots",
        desc: "The world's most popular AI assistant. Understands context, writes code, analyzes images, and holds natural conversations that feel remarkably human.",
        arWho: "للمبرمجين والكتاب والمسوقين",
        arDesc: "يكتب لك الأكواد والمقالات والإيميلات في ثواني بدل ساعات. بدل ما تقضي ساعة تكتب رسالة تسويقية، ChatGPT يكتبها لك في 30 ثانية بجودة عالية.",
        url: "https://chat.openai.com"
    },
    {
        num: "02", name: "Claude", company: "by Anthropic", icon: "fas fa-brain",
        desc: "Anthropic's most powerful AI with unmatched long-context understanding. Excels at nuanced reasoning, complex analysis, and producing thoughtful, detailed responses.",
        arWho: "للباحثين والمحللين والطلاب",
        arDesc: "يلخص لك مستندات ضخمة من 200 ألف كلمة في ثواني. يراجع أبحاثك العلمية ويستخرج أهم النقاط بدل ما تقرأ عشرات الصفحات بنفسك.",
        url: "https://claude.ai"
    },
    {
        num: "03", name: "Midjourney", company: "by Midjourney Inc.", icon: "fas fa-palette",
        desc: "The gold standard for AI image generation. Creates stunning photorealistic artwork and illustrations from text descriptions with unmatched aesthetic quality.",
        arWho: "للمصممين والمسوقين وأصحاب المتاجر",
        arDesc: "يصمم لك صور احترافية وجرافيك كامل بدون الحاجة لمصور أو مصمم جرافيك. وفر مبالغ التصميم واطلب صور بالمواصفات اللي عايزها فوراً.",
        url: "https://www.midjourney.com"
    },
    {
        num: "04", name: "Sora", company: "by OpenAI", icon: "fas fa-video",
        desc: "OpenAI's groundbreaking text-to-video model that generates cinematic 60-second clips with complex scenes, realistic physics, and consistent characters.",
        arWho: "لصناع المحتوى والمسوقين الرقميين",
        arDesc: "يحول نصوصك لفيديوهات سينمائية مدتها دقيقة كاملة بدون كاميرا أو فريق تصوير. وفر تكلفة الإنتاج وصنع محتوى فيديو احترافي لوحدك.",
        url: "https://sora.com"
    },
    {
        num: "05", name: "Runway ML", company: "by Runway", icon: "fas fa-film",
        desc: "The leading platform for AI-powered video generation and editing. Transform text or images into cinematic video clips with unprecedented control.",
        arWho: "لمونتيرات وصناع المحتوى",
        arDesc: "ينتج ويحرر فيديوهات بالذكاء الاصطناعي بدل برامج المونتاج المعقدة. احذف خلفيات وأضف مؤثرات في دقائق بدل ساعات من العمل اليدوي.",
        url: "https://runwayml.com"
    },
    {
        num: "06", name: "ElevenLabs", company: "by ElevenLabs", icon: "fas fa-microphone",
        desc: "The most advanced AI voice synthesis platform. Clone voices, generate narrations, and create multilingual audio nearly indistinguishable from real humans.",
        arWho: "لصناع المحتوى الصوتي والمعلمين",
        arDesc: "يصنع لك صوتيات ومقاطع صوتية بأصوات واقعية بالعربي والإنجليزي و29 لغة تانية. بدل ما تدفع لصوتيات محترفين، اعملهم بنفسك في دقائق.",
        url: "https://elevenlabs.io"
    },
    {
        num: "07", name: "Cursor", company: "by Anysphere", icon: "fas fa-code",
        desc: "The AI-native code editor that redefines how developers write software. Deeply integrated AI understands your entire codebase and writes alongside you.",
        arWho: "للمبرمجين ومطوري التطبيقات",
        arDesc: "يكتب ويعدل الأكواد تلقائياً ويفهم مشروعك بالكامل. وفر ساعات من التطوير والتنقيح — اكتب الأمر والـ AI ينفذه في ثواني.",
        url: "https://cursor.sh"
    },
    {
        num: "08", name: "GitHub Copilot", company: "by GitHub / Microsoft", icon: "fas fa-laptop-code",
        desc: "The industry-standard AI pair programmer. Suggests entire functions, explains unfamiliar code, and accelerates development across every programming language.",
        arWho: "للمطورين والمبرمجين في كل المجالات",
        arDesc: "يقترح أكواد كاملة ويشرح الأخطاء ويختصر وقت البرمجة بنسبة كبيرة. مفيش داعي تبحث في ستاك أوفرلو — الكوبيلوت بيعطيك الحل مباشرة.",
        url: "https://github.com/features/copilot"
    },
    {
        num: "09", name: "Perplexity", company: "by Perplexity AI", icon: "fas fa-search",
        desc: "The AI search engine that provides cited, real-time answers. Combines large language models with live internet access for accurate, sourced responses.",
        arWho: "للطلاب والباحثين والمهنيين",
        arDesc: "يبحث ويحلل المعلومات ويعطيك إجابات مختصرة مع مصادر موثوقة. بدل ما تفتح 10 تابات وتقضي ساعة في البحث، Perplexity يلخصلك كل حاجة في دقيقة.",
        url: "https://www.perplexity.ai"
    },
    {
        num: "10", name: "Notion AI", company: "by Notion Labs", icon: "fas fa-cube",
        desc: "AI deeply integrated into the world's most popular workspace. Summarizes pages, writes content, brainstorm ideas, and automates workflows without leaving Notion.",
        arWho: "لفرق العمل والمديرين والموظفين",
        arDesc: "ينظم ملاحظاتك ويكتب التقارير ويدير المشاريع تلقائياً. يلخص اجتماعات طويلة ويستخرج المهام — وفر وقت التنظيم وركز على العمل الحقيقي.",
        url: "https://www.notion.so/product/ai"
    }
];

var grid = document.getElementById('grid');
for (var i = 0; i < tools.length; i++) {
    var t = tools[i];
    var card = document.createElement('div');
    card.className = 'tcard rv rv' + Math.min(i, 4);
    card.innerHTML =
        '<div class="tc-n">' + t.num + '</div>' +
        '<div class="tc-top">' +
            '<div><div class="tc-nm">' + t.name + '</div><div class="tc-co">' + t.company + '</div></div>' +
            '<div class="tc-ic"><i class="' + t.icon + '"></i></div>' +
        '</div>' +
        '<p class="tc-ds">' + t.desc + '</p>' +
        '<div class="tc-ar">' +
            '<div class="tc-ar-who">' + t.arWho + '</div>' +
            '<div class="tc-ar-desc">' + t.arDesc + '</div>' +
        '</div>' +
        '<a href="' + t.url + '" target="_blank" rel="noopener noreferrer" class="tc-bt">Visit ' + t.name + ' <i class="fas fa-arrow-right"></i></a>';
    grid.appendChild(card);
}

function go(pg) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) pages[i].classList.remove('active');
    document.getElementById(pg === 'home' ? 'pHome' : 'pSignup').classList.add('active');
    document.getElementById('nBtn').style.display = pg === 'signup' ? 'none' : 'inline-flex';
    window.scrollTo(0, 0);
    if (pg === 'signup') {
        var el = document.getElementById('sgRv');
        el.classList.remove('sh');
        setTimeout(function() { el.classList.add('sh'); }, 50);
    }
}

window.addEventListener('scroll', function() {
    document.getElementById('topnav').classList.toggle('scrolled', window.scrollY > 50);
});

var rvObs = new IntersectionObserver(function(entries) {
    for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) entries[i].target.classList.add('sh');
    }
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
var rvEls = document.querySelectorAll('.rv');
for (var i = 0; i < rvEls.length; i++) rvObs.observe(rvEls[i]);

var regForm = document.getElementById('regForm');
var uName = document.getElementById('uname');
var uEmail = document.getElementById('uemail');
var uPass = document.getElementById('upass');
var uTerms = document.getElementById('terms');
var pwTog = document.getElementById('pwTog');
var strBar = document.getElementById('strBar');
var strTxt = document.getElementById('strTxt');
var subBtn = document.getElementById('subBtn');

pwTog.addEventListener('click', function() {
    var isP = uPass.type === 'password';
    uPass.type = isP ? 'text' : 'password';
    pwTog.innerHTML = isP ? '<i class="fas fa-eye-slash"></i>' : '<i class="fas fa-eye"></i>';
});

uPass.addEventListener('input', function() {
    var v = uPass.value, s = 0;
    if (v.length >= 8) s++;
    if (v.length >= 12) s++;
    if (/[A-Z]/.test(v)) s++;
    if (/[0-9]/.test(v)) s++;
    if (/[^A-Za-z0-9]/.test(v)) s++;
    var lv = [
        { w:'0%', c:'transparent', t:'' },
        { w:'20%', c:'#ef4444', t:'Very weak' },
        { w:'40%', c:'#f97316', t:'Weak' },
        { w:'60%', c:'#eab308', t:'Fair' },
        { w:'80%', c:'#22c55e', t:'Strong' },
        { w:'100%', c:'#16a34a', t:'Very strong' }
    ];
    var l = v.length === 0 ? lv[0] : lv[Math.min(s, 5)];
    strBar.style.width = l.w; strBar.style.background = l.c;
    strTxt.textContent = l.t; strTxt.style.color = l.c;
    if (v.length >= 8) clrErr('pw');
});

uName.addEventListener('input', function() { if (uName.value.length >= 3) clrErr('un'); });
uEmail.addEventListener('input', function() { if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(uEmail.value)) clrErr('em'); });

function shErr(f, m) {
    var imap = { un:'uname', em:'uemail', pw:'upass' };
    var emap = { un:'unErr', em:'emErr', pw:'pwErr' };
    document.getElementById(imap[f]).classList.add('err');
    if (m) document.getElementById(emap[f]).textContent = m;
    document.getElementById(emap[f]).classList.add('on');
}
function clrErr(f) {
    var imap = { un:'uname', em:'uemail', pw:'upass' };
    var emap = { un:'unErr', em:'emErr', pw:'pwErr' };
    document.getElementById(imap[f]).classList.remove('err');
    document.getElementById(emap[f]).classList.remove('on');
}

regForm.addEventListener('submit', function(e) {
    e.preventDefault(); var ok = true;
    if (uName.value.trim().length < 3) { shErr('un', 'Username must be at least 3 characters'); ok = false; } else clrErr('un');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(uEmail.value.trim())) { shErr('em', 'Please enter a valid email address'); ok = false; } else clrErr('em');
    if (uPass.value.length < 8) { shErr('pw', 'Password must be at least 8 characters'); ok = false; } else clrErr('pw');
    if (!uTerms.checked) { tst('Please agree to the Terms of Service'); ok = false; }
    if (!ok) return;
    subBtn.classList.add('ld'); subBtn.disabled = true;
    setTimeout(function() {
        subBtn.classList.remove('ld'); subBtn.disabled = false;
        document.getElementById('sgForm').style.display = 'none';
        document.getElementById('okSt').classList.add('on');
        tst('Account created successfully!');
    }, 1800);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('cName').value.trim();
    var email = document.getElementById('cEmail').value.trim();
    var msg = document.getElementById('cMsg').value.trim();
    if (!name || !email || !msg) { tst('Please fill in all fields'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { tst('Please enter a valid email address'); return; }
    tst('Message sent! We\'ll get back to you soon.');
    e.target.reset();
});

function tst(msg) {
    var el = document.getElementById('tstEl');
    document.getElementById('tstTx').textContent = msg;
    el.classList.add('on');
    setTimeout(function() { el.classList.remove('on'); }, 3500);
}