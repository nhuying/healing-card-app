/* =========================================
   ส่วนที่ 1: ชุดคำถาม (Database)
   ========================================= */

// --- ชุดที่ 1: วัย 45-59 ปี ---
const questions_Age45_59 = [
    { text: "ในวัยนี้ ความสุขของคุณหน้าตาเปลี่ยนไปจากตอนหนุ่มสาวอย่างไร?", mood: "happy", keyword: "smile,happy" },
    { text: "ช่วงเวลาไหนในบ้าน ที่ทำให้คุณรู้สึกอบอุ่นหัวใจที่สุด?", mood: "happy", keyword: "sunlight,living room,cozy" },
    { text: "หากวันนี้ไม่มีภาระหน้าที่ 1 วัน คุณจะใช้เวลานั้นทำอะไร?", mood: "happy", keyword: "relaxing nature,hammock" },
    { text: "เพื่อนคนไหนที่ยังอยู่เคียงข้างคุณ และอยากขอบคุณเขาเรื่องอะไร?", mood: "happy", keyword: "old photo,memory,friends" },
    { text: "มื้ออาหารธรรมดาๆ ที่กินกับใครแล้วอร่อยที่สุดในช่วงนี้?", mood: "happy", keyword: "food,dinner,friend" },
    { text: "เรื่องเล็กน้อยอะไรที่ลูกหลานทำให้ แล้วคุณยิ้มได้กว้างที่สุด?", mood: "happy", keyword: "child,smile,family" },
    { text: "เพลงเก่าเพลงไหน ที่ฟังแล้วความสุขในอดีตย้อนกลับมาทันที?", mood: "happy", keyword: "retro music,cassette,radio" },
    { text: "การพักผ่อนแบบไหน ที่ชาร์จพลังให้คุณได้ดีที่สุดในวัยนี้?", mood: "happy", keyword: "coffee,book,garden" },
    { text: "สิ่งอำนวยความสะดวกอะไรในบ้าน ที่คุณรู้สึกขอบคุณที่มีมัน?", mood: "happy", keyword: "home,sofa,fan" },
    { text: "ถ้าเปรียบชีวิตช่วงนี้เป็นฤดูกาล คุณคิดว่าเป็นฤดูอะไรที่สวยงาม?", mood: "happy", keyword: "season,autumn,spring" },

    { text: "คุณดูแลสุขภาพตัวเองดีพอหรือยัง อยากเริ่มปรับเรื่องอะไร?", mood: "tired", keyword: "healthy food,yoga,tired" },
    { text: "ริ้วรอยจุดไหน ที่คุณมองว่ามันคือ 'เหรียญตราแห่งประสบการณ์'?", mood: "tired", keyword: "face,mirror,calm" },
    { text: "เรื่องอะไรที่เคยเครียดแทบตายในอดีต แต่วันนี้มองกลับไปแล้วเฉยๆ?", mood: "tired", keyword: "relax,sky,let it go" },
    { text: "การตัดสินใจครั้งไหน ที่คุณอยากขอบคุณตัวเองที่เลือกแบบนั้น?", mood: "tired", keyword: "success,path,choice" },
    { text: "คุณอนุญาตให้ตัวเอง 'พัก' โดยไม่รู้สึกผิด ได้บ่อยแค่ไหน?", mood: "tired", keyword: "sleeping,bed,rest" },
    { text: "บทบาทไหนในชีวิต ที่คุณอยากบอกตัวเองว่า 'ทำได้ดีมากแล้วนะ'?", mood: "tired", keyword: "medal,proud,self love" },
    { text: "ความสมบูรณ์แบบเรื่องไหน ที่คุณยอมปล่อยวางได้แล้ว?", mood: "tired", keyword: "imperfect,art,messy" },
    { text: "วิธีดูแลจิตใจตัวเองในวันที่แบกรับปัญหา คือวิธีไหน?", mood: "tired", keyword: "breathe,meditation,peace" },
    { text: "ของขวัญอะไรที่คุณซื้อให้ตัวเอง แล้วภูมิใจที่สุด?", mood: "tired", keyword: "gift,present,happy" },
    { text: "คำพูดดีๆ อะไร ที่คุณอยากได้ยินจากคนในครอบครัวมากที่สุด?", mood: "tired", keyword: "hug,family,love" },

    { text: "ภาพเกษียณในฝันของคุณเป็นแบบไหน เริ่มเตรียมตัวหรือยัง?", mood: "confused", keyword: "garden,old couple,peaceful" },
    { text: "ทักษะหรือความรู้เรื่องอะไร ที่อยากเรียนรู้เพิ่มก่อนอายุ 60?", mood: "confused", keyword: "learning,book,computer" },
    { text: "งานอดิเรกอะไรที่เคยทิ้งไป แล้วอยากรื้อฟื้นกลับมาทำใหม่?", mood: "confused", keyword: "hobby,painting,guitar" },
    { text: "สถานที่ท่องเที่ยวไหน ที่ต้องไปให้ได้สักครั้งในชีวิต (Bucket List)?", mood: "confused", keyword: "travel,landmark,world" },
    { text: "มรดกทางความคิดเรื่องอะไร ที่อยากส่งต่อให้ลูกหลาน?", mood: "confused", keyword: "writing,letter,teaching" },
    { text: "ถ้าเลือกทำประโยชน์เพื่อสังคมได้ 1 อย่าง หลังเกษียณ อยากทำอะไร?", mood: "confused", keyword: "volunteer,planting,giving" },
    { text: "อยากเห็นการเปลี่ยนแปลงอะไรในบ้าน เพื่อให้ชีวิตมีความสุขขึ้น?", mood: "confused", keyword: "renovate,clean room,bright" },
    { text: "ถ้าจัดสรรเวลาได้ อยากใช้เวลาในแต่ละวันไปกับเรื่องอะไรมากที่สุด?", mood: "confused", keyword: "clock,time,freedom" },
    { text: "คำสัญญาอะไร ที่อยากให้ไว้กับคู่ชีวิตในวันที่แก่เฒ่าไปด้วยกัน?", mood: "confused", keyword: "holding hands,old couple,love" },
    { text: "คุณอยากให้คนจดจำคุณในภาพลักษณ์แบบไหน?", mood: "confused", keyword: "portrait,smile,kindness" },

    { text: "วิกฤตครั้งไหน ที่เปลี่ยนคุณให้เข้มแข็งในวันนี้?", mood: "sad", keyword: "storm,rain,strong tree" },
    { text: "ถ้าเล่าเรื่องชีวิตตัวเองให้คนรุ่นหลังฟังได้ 1 เรื่อง จะเล่าเรื่องไหน?", mood: "sad", keyword: "storytelling,campfire,book" },
    { text: "งานอะไรที่คุณเคยทุ่มเททำ แล้วรู้สึกคุ้มค่าเหนื่อยที่สุด?", mood: "sad", keyword: "working,sweat,success" },
    { text: "ความผิดพลาดเรื่องใด ที่กลายเป็น 'ครู' ที่ดีที่สุดของคุณ?", mood: "sad", keyword: "lesson,chalkboard,teacher" },
    { text: "สถานที่ในความทรงจำที่ไหน ที่อยากกลับไปเยือนอีกครั้ง?", mood: "sad", keyword: "nostalgia,old house,memory" },
    { text: "ใครคือเจ้านายหรือรุ่นพี่ ที่มีอิทธิพลต่อความคิดคุณมากที่สุด?", mood: "sad", keyword: "leader,mentor,shake hands" },
    { text: "สิ่งที่พ่อแม่เคยสอน แล้วเพิ่งมาเข้าใจซึ้งใจในวันนี้ คืออะไร?", mood: "sad", keyword: "parents,hug,vintage" },
    { text: "มิตรภาพครั้งไหนที่จางหายไป แต่ยังระลึกถึงด้วยความหวังดี?", mood: "sad", keyword: "letter,mailbox,miss you" },
    { text: "ช่วงเวลาที่ยากลำบากที่สุด คุณใช้อะไรยึดเหนี่ยวจิตใจ?", mood: "sad", keyword: "prayer,hope,light" },
    { text: "ความสำเร็จในนิยามของวัย 50 ต่างจากตอนวัย 30 อย่างไร?", mood: "sad", keyword: "mountain top,peace,view" }
];

/* =========================================
   ส่วนเสริม: คำคมฮีลใจ (สำหรับโหมดเหนื่อย)
   ========================================= */
const healingQuotes = [
    { en: "Take it slow, let it go.", th: "ค่อยๆ ไป... แล้วปล่อยวางเรื่องกวนใจลงบ้าง" },
    { en: "Rest your head, put worries to bed.", th: "พักสมอง แล้วส่งความกังวลเข้านอนไปซะ" },
    { en: "Do your best, then take a rest.", th: "ทำเต็มที่แล้ว... ก็พักผ่อนเถอะนะ" },
    { en: "Pause and breathe, let stress leave.", th: "หยุดพัก หายใจเข้าลึกๆ แล้วปล่อยความเครียดออกไป" },
    { en: "Just unwind, calm your mind.", th: "แค่ผ่อนคลาย... ทำจิตใจให้สงบ" },
    { en: "Rest today, to pave the way.", th: "พักในวันนี้... เพื่อปูทางเดินต่อในวันหน้า" },
    { en: "Reset, don't upset.", th: "ตั้งหลักใหม่... อย่าเพิ่งหงุดหงิดไปเลย" },
    { en: "Be kind to your mind.", th: "ใจดีกับความคิดและจิตใจของตัวเองบ้าง" },
    { en: "It’s okay not to be okay.", th: "ไม่เป็นไรนะ... ที่วันนี้จะรู้สึกไม่โอเค" },
    { en: "Healing takes time, it’s not a crime.", th: "การเยียวยาต้องใช้เวลา... การพักไม่ใช่ความผิดนะ" },
    { en: "Love yourself, protect your health.", th: "รักตัวเอง... และดูแลสุขภาพด้วย" },
    { en: "Listen to your heart, make a fresh start.", th: "ฟังเสียงหัวใจ... แล้วค่อยเริ่มใหม่อีกครั้ง" },
    { en: "You are enough, even when times are tough.", th: "เธอเก่งพอแล้ว... แม้ในวันที่ยากลำบาก" },
    { en: "Stars shine bright in the darkest night.", th: "ดวงดาวจะส่องสว่างที่สุด... ในคืนที่มืดมิดที่สุด" },
    { en: "After the rain, comes relief from pain.", th: "ฟ้าหลังฝน... ความเจ็บปวดจะทุเลาลง" },
    { en: "Tomorrow is near, let go of fear.", th: "พรุ่งนี้ใกล้เข้ามาแล้ว... ทิ้งความกลัวไปเถอะ" },
    { en: "Trust the process, make progress.", th: "เชื่อมั่นในเส้นทาง... แล้วค่อยๆ ก้าวไปข้างหน้า" },
    { en: "Keep the faith, find your pace.", th: "ศรัทธาไว้... และหาจังหวะก้าวเดินของตัวเองให้เจอ" },
    { en: "Sun will rise, open your eyes.", th: "เดี๋ยวอาทิตย์ก็ขึ้นใหม่... ลืมตาตื่นรับวันใหม่นะ" },
    { en: "One day at a time, everything will be fine.", th: "ผ่านไปทีละวัน... เดี๋ยวทุกอย่างจะดีเอง" }
];

/* =========================================
   ส่วนที่ 2: เลือกชุดคำถาม (Config)
   ========================================= */
let questionsData = questions_Age45_59;

/* =========================================
   ส่วนที่ 3: ระบบการทำงาน (Logic)
   ========================================= */
let currentMood = '';

// 1. ฟังก์ชันเลือกอารมณ์
function selectMood(mood) {
    currentMood = mood;
    
    // เปลี่ยนเพลงตามอารมณ์
    const audio = document.getElementById('bg-audio');
    const musicBtn = document.getElementById('music-btn');

    // ต้องแน่ใจว่ามีไฟล์ happy.mp3, tired.mp3 ฯลฯ อยู่ในโฟลเดอร์
    audio.src = `${mood}.mp3`;
    audio.load();
    isPlaying = false; 
    musicBtn.innerText = "🎵 Play Music";

    // สลับหน้าจอ
    document.getElementById('mood-screen').classList.remove('active');
    document.getElementById('mood-screen').classList.add('hidden');
    document.getElementById('card-screen').classList.remove('hidden');
    document.getElementById('card-screen').classList.add('active');
    
    drawNewCard();
}

// 2. ฟังก์ชันสุ่มการ์ด
function drawNewCard() {
    const card = document.getElementById('the-card');
    const img = document.getElementById('card-image');
    const spinner = document.querySelector('.loading-spinner');
    
    card.classList.remove('is-flipped');
    
    const filteredQuestions = questionsData.filter(q => q.mood === currentMood);
    if (filteredQuestions.length === 0) {
        alert("ไม่พบคำถามในหมวดนี้");
        return;
    }

    const randomQuestion = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
    
    setTimeout(() => {
        document.getElementById('question-text').innerText = randomQuestion.text;
        document.getElementById('user-answer').value = ''; 

        // จัดการรูปภาพ
        if(img) {
            img.style.display = 'none';
            if(spinner) spinner.style.display = 'block';

            const width = 400;
            const height = 300;
            const keywords = randomQuestion.keyword || "nature"; 
            const prompt = `${keywords}, soft lighting, dreamy, art style, pastel colors`;
            
            img.crossOrigin = "anonymous"; // สำคัญสำหรับ saveAsImage

            // ใช้ Pollinations.ai
            img.src = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&nologo=true`;

            img.onload = () => {
                if(spinner) spinner.style.display = 'none';
                img.style.display = 'block';
            };

            img.onerror = () => {
                console.log("AI Load failed, switching to backup.");
                img.src = `https://picsum.photos/${width}/${height}?random=${Math.random()}`;
            };
        }
    }, 500);
}

// 3. ฟังก์ชันพลิกการ์ด
function flipCard() {
    document.getElementById('the-card').classList.toggle('is-flipped');
}

// 4. ฟังก์ชันเพลง
let isPlaying = false;
function toggleMusic() {
    const audio = document.getElementById('bg-audio');
    const btn = document.getElementById('music-btn');
    
    if (isPlaying) {
        audio.pause();
        btn.innerText = "🎵 Play Music";
    } else {
        audio.play();
        btn.innerText = "⏸ Pause Music";
    }
    isPlaying = !isPlaying;
}

// 5. ฟังก์ชันกลับหน้าแรก
function goHome() {
    location.reload();
}

// 6. ฟังก์ชันบันทึกและแชร์รูปภาพ
function saveAsImage() {
    const screen = document.getElementById('card-screen');
    const buttons = document.querySelector('.action-buttons');
    const musicBtn = document.getElementById('music-btn');
    
    buttons.style.display = 'none';
    musicBtn.style.display = 'none';

    html2canvas(screen, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null 
    }).then(canvas => {
        const downloadImage = () => {
            const link = document.createElement('a');
            link.download = 'healing-card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };

        canvas.toBlob(function(blob) {
            const file = new File([blob], "healing-card.png", { type: "image/png" });
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            if (isMobile && navigator.share) {
                navigator.share({
                    title: 'การ์ดฮีลใจ',
                    text: 'วันนี้ฉันได้ข้อคิดดีๆ จากการ์ดใบนี้... ลองมาเล่นกันนะ',
                    files: [file]
                }).then(() => {
                    console.log('Shared successfully');
                }).catch((error) => {
                    console.log('Sharing failed', error);
                    downloadImage(); // กันเหนียว
                });
            } else {
                downloadImage(); // PC
            }

            buttons.style.display = 'block';
            musicBtn.style.display = 'block';
        });
    }).catch(err => {
        console.error("Save failed:", err);
        alert("เกิดข้อผิดพลาดในการบันทึกภาพ");
        buttons.style.display = 'block';
        musicBtn.style.display = 'block';
    });
}

// 7. ระบบแจ้งเตือนประจำวัน (Notification)
if ("Notification" in window) {
    Notification.requestPermission();
}

function checkDailyVisit() {
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();

    if (lastVisit !== today) {
        if (Notification.permission === "granted") {
            new Notification("สวัสดีครับ!", {
                body: "วันนี้แวะมาหยิบการ์ดฮีลใจหรือยังครับ? 💖",
                icon: "https://cdn-icons-png.flaticon.com/512/2913/2913584.png"
            });
        }
        localStorage.setItem('lastVisitDate', today);
    }
}

checkDailyVisit();

// ==========================================
// ส่วนที่ 8: ระบบ Whisper (กระซิบฮีลใจ)
// ==========================================
let whisperTimeout;

// ฟังก์ชันซ่อน Whisper ทันที
function hideWhisper() {
    const box = document.getElementById('whisper-box');
    if(box) {
        box.classList.remove('whisper-visible');
        box.classList.add('whisper-hidden');
        clearTimeout(whisperTimeout);
    }
}

// ฟังก์ชันสุ่มและแสดงคำคม
function showHealingWhisper() {
    if (currentMood !== 'tired') return;
    // ห้ามโชว์ถ้ากำลังพิมพ์อยู่
    if (document.activeElement.tagName === 'TEXTAREA') return;

    const box = document.getElementById('whisper-box');
    const textEn = document.getElementById('whisper-en');
    const textTh = document.getElementById('whisper-th');

    const randomQuote = healingQuotes[Math.floor(Math.random() * healingQuotes.length)];
    textEn.innerText = randomQuote.en;
    textTh.innerText = randomQuote.th;

    box.classList.remove('whisper-hidden');
    box.classList.add('whisper-visible');

    clearTimeout(whisperTimeout);
    whisperTimeout = setTimeout(hideWhisper, 3000);
}

// ==========================================
// ส่วนที่ 9: ระบบสุ่มคำโปรยหน้าแรก
// ==========================================
const introMessages = [
    "พื้นที่เล็กๆ ให้คุณได้พักใจ... ไม่ว่าวันนี้จะเจออะไรมา <br>ลองเลือกอารมณ์ของคุณ แล้วให้การ์ดช่วยดูแลนะ",
    "บางครั้ง... คำตอบที่เราตามหา อาจซ่อนอยู่ในใจเราเอง <br>ลองหยิบการ์ดสักใบ เพื่อค้นหาสิ่งที่ใจอยากบอก",
    "เขียนความรู้สึกทิ้งไว้... <br>แล้วก้าวต่อไปด้วยกัน",
    "เหนื่อยไหมคนเก่ง? วางความหนักใจลงสักพัก <br>แล้วมาคุยกับตัวเองผ่านการ์ดใบนี้กัน",
    "อนุญาตให้ตัวเองเปราะบางได้นะ... <br>ที่นี่คือพื้นที่ปลอดภัยของคุณ"
];

function setRandomIntro() {
    const introElement = document.getElementById('intro-message');
    if (introElement) {
        const randomMsg = introMessages[Math.floor(Math.random() * introMessages.length)];
        introElement.innerHTML = randomMsg;
    }
}

// ==========================================
// ส่วนที่ 10: ส่วนจัดการ iOS Install Prompt
// ==========================================
function isIos() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}
  
function isInStandaloneMode() {
    return ('standalone' in window.navigator) && (window.navigator.standalone);
}
  
function closePrompt() {
    document.getElementById('ios-install-prompt').style.display = 'none';
}

// ==========================================
// ส่วนที่ 11: Main Execution (รอหน้าเว็บโหลดเสร็จ)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. รันคำโปรย
    setRandomIntro();

    // 2. เช็ค iOS Prompt (แทนที่ alert เดิม)
    if (isIos() && !isInStandaloneMode()) {
        setTimeout(() => {
            const prompt = document.getElementById('ios-install-prompt');
            if (prompt) {
                prompt.classList.remove('hidden');
                prompt.style.display = 'block';
            }
        }, 2000);
    }

    // 3. ผูก Event Listeners ให้ถูกต้อง
    const card = document.getElementById('the-card');
    const userAnswer = document.getElementById('user-answer');

    if (card) {
        card.addEventListener('mouseenter', showHealingWhisper);
    }
    
    if (userAnswer) {
        // *** แก้ไข: กดพิมพ์แล้วต้อง "ซ่อน" Whisper ทันที (ไม่บังจอ) ***
        userAnswer.addEventListener('focus', hideWhisper);
        userAnswer.addEventListener('input', hideWhisper);
    }
});