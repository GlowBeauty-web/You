const START_DATE = "2025-04-17T00:00:00";

const poems = [
    "Comment je l'aime\n\nJe t'aime d'une façon que je n'ai jamais su expliquer,\nCe n'est pas un mot que je dis pour combler le silence,\nC'est un sentiment qui grandit même quand je me tais,\nQui reste vivant malgré l'absence.\nJe t'aime dans tes forces et dans tes doutes,\nDans tes sourires et dans tes peurs cachées,\nJe t'aime même quand tu t'éloignes,\nParce que mon cœur, lui, ne sait pas reculer.\n\nJe t'aime sans condition, sans calcul,\nPas pour ce que tu donnes, mais pour ce que tu es.\nJe t'aime quand le monde devient lourd,\nParce que ton existence rend mes jours plus légers.\nEt même si je ne sais pas toujours bien aimer,\nMon amour pour toi, lui, n'a jamais menti.",
    "Tu es en or\n\nTu es en or, mais pas l'or qui se vend,\nPas celui qu'on enferme dans des coffres froids.\nTu es l'or rare, celui qu'on ressent,\nCelui qui éclaire même dans le noir.\nTon cœur est précieux, ta présence aussi,\nTu apportes de la valeur là où tout semblait vide.\n\nQuand tu entres dans ma vie, tout prend un sens,\nMême mes blessures trouvent un peu de repos.\nTu es cette richesse qu'on ne compte pas en argent,\nMais en battements de cœur et en moments beaux.\nEt moi, parfois, je n'ai pas su protéger ce trésor,\nMais je sais aujourd'hui que tu valais bien plus que de l'or.",
    "Tu es unique\n\nIl n'existe pas deux personnes comme toi,\nPas deux voix qui apaisent comme la tienne.\nTon regard me touche d'une façon\nQue je ne retrouverai jamais ailleurs sur cette terre.\nTu es unique dans ta manière d'aimer,\nUnique dans ta façon de ressentir,\nEt même quand tu doutes de ta valeur,\nPour moi, tu es déjà tout ce qu'il y a de plus précieux à offrir.\n\nJe pourrais chercher dans le monde entier,\nJe ne trouverais jamais un autre toi.\nParce que ce que tu es ne se copie pas,\nCe que tu représentes ne se remplace pas.\nTu es une seule personne,\nMais pour mon cœur, tu étais un univers entier.",
    "Mon regret d'avoir tout gâché\n\nJe regrette chaque mot que je n'ai pas dit au bon moment,\nChaque silence qui t'a donné l'impression que je m'en foutais.\nJe regrette d'avoir laissé mes erreurs\nParler plus fort que mon amour pour toi.\nJe n'ai pas su protéger ce que nous avions,\nJe n'ai pas su rassurer ton cœur quand il doutait.\n\nAujourd'hui je comprends ce que j'ai perdu,\nParce que l'absence fait voir clair.\nJe ne regrette pas de t'avoir aimée,\nJe regrette de ne pas t'avoir aimée comme tu le méritais.\nSi je pouvais réparer ce qui a été brisé,\nJe le ferais sans hésiter, sans orgueil, sans peur,\nJuste pour revoir la confiance dans tes yeux.",
    "La distance\n\nLa distance nous sépare par des kilomètres,\nMais elle ne sait pas séparer ce que je ressens.\nElle met de l'espace entre nos mains,\nMais pas entre nos souvenirs ni entre mes sentiments.\nIl y a des nuits où ton absence pèse lourd,\nOù ton manque devient plus fort que le sommeil.\n\nMême loin, tu es présente dans mes pensées,\nDans mes silences, dans mes prières muettes.\nJe parle de toi sans te parler,\nJe pense à toi sans pouvoir te toucher.\nEt malgré la distance, malgré le temps,\nMon cœur, lui, n'a jamais appris à s'éloigner de toi.",
    "Le “nous” que je veux retrouver\n\nJe ne veux pas d'un avenir où ton prénom n'existe plus,\nOù nos souvenirs deviennent juste des “avant”.\nJe veux croire que notre “nous” n'est pas mort,\nQu'il est juste blessé, fatigué, hésitant.\nJe sais que j'ai abîmé ce que nous avions construit,\nMais je crois encore en ce que nous pourrions redevenir.\n\nLe “nous”, ce n'était pas parfait,\nMais c'était réel, c'était fort.\nC'était deux cœurs imparfaits\nQui essayaient d'aimer de leur mieux.\nJe ne te promets pas un conte de fées,\nJe te promets un amour plus conscient, plus vrai,\nSi un jour tu décides de me laisser une autre chance.",
    "L'espoir et la promesse\n\nJe sais que ton cœur a perdu confiance,\nEt je ne te demande pas d'oublier le passé.\nJe te demande juste de regarder mes efforts,\nPas mes promesses vides.\nJe ne te dirai pas que je vais changer du jour au lendemain,\nMais je te dirai que je suis prêt à faire mieux chaque jour.\n\nSi tu choisis de ne plus me croire,\nJe respecterai ton silence et ta douleur.\nMais sache qu'il y aura toujours en moi\nUne place pour toi, intacte, sincère.\nJe garde l'espoir discret, humble,\nQue nos chemins puissent un jour se recroiser,\nEt que cette fois, je sache aimer sans tout gâcher."
];

const songs = [
    { title: "Amour Toxic", artist: "DADJU", file: "songs/DADJU - Amour Toxic (Clip Officiel) - DADJU.mp3" },
    { title: "SHAKE", artist: "Franglish", file: "songs/Franglish - SHAKE (Clip Officiel) - Franglish.mp3" },
    { title: "Love Me", artist: "JMSN", file: "songs/JMSN - Love Me (Official Video) - JMSN.mp3" },
    { title: "EST-CE QUE C'EST BIEN COMME CA", artist: "NZ BENKS", file: "songs/NZ BENKS - EST-CE QUE C'EST BIEN COMME CA - NZ Benks.mp3" },
    { title: "Se Pa Pou dat", artist: "Alan Cave", file: "songs/Se Pa Pou dat - Alan Cave.mp3" },
    { title: "Nobody Gets Me", artist: "SZA", file: "songs/SZA - Nobody Gets Me (Official Video) - SZAVEVO.mp3" },
    { title: "Aime-moi demain", artist: "The Shin Sekaï ft. Gradur", file: "songs/The Shin Sekaï - Aime-moi demain (Clip officiel) ft. Gradur - TheshinsekaiVEVO.mp3" },
    { title: "Bad (Remix)", artist: "Wale ft. Rihanna", file: "songs/Wale ft. Rihanna- Bad (Remix) - Wale.mp3" }
];

let currentPoemIndex = 0;
let currentAudio = null;
let currentBtn = null;
let isBgPlaying = false;
let counterInterval = null;
let bgMusicEl = null;
let bgToggleBtn = null;
let bgStatusEl = null;

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("is-loaded");
    setupAmbientHearts();
    setupLogin();
    setupDashboard();
    setupGallery();
});

function setupLogin() {
    const username = document.getElementById("username");
    const passSection = document.getElementById("password-section");
    const loginBtn = document.getElementById("login-btn");

    if (username && passSection) {
        username.addEventListener("input", (e) => {
            const name = e.target.value.trim().toLowerCase();
            if (name === "audrey") {
                passSection.classList.remove("hidden");
                passSection.classList.add("active");
            } else {
                passSection.classList.add("hidden");
                passSection.classList.remove("active");
            }
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", checkLogin);
    }
}

function checkLogin() {
    const name = document.getElementById("username")?.value.trim().toLowerCase();
    const password = document.getElementById("password")?.value;
    const errorMsg = document.getElementById("error-msg");

    if (!name) {
        if (errorMsg) {
            errorMsg.style.display = "block";
            errorMsg.textContent = "Entre ton prenom stp !";
        }
        return;
    }

    if (name === "audrey") {
        if (password === "1704") {
            window.location.href = "dashboard.html";
        } else if (errorMsg) {
            errorMsg.style.display = "block";
            errorMsg.textContent = "Mot de passe incorrect 🔒";
        }
        return;
    }

    window.location.href = "gallery.html";
}

window.checkLogin = checkLogin;

function setupDashboard() {
    const dashboard = document.getElementById("main-dashboard");
    const askScreen = document.getElementById("ask-screen");
    const btnYes = document.getElementById("btn-yes");
    const btnNo = document.getElementById("btn-no");

    if (btnNo) {
        btnNo.addEventListener("mouseover", moveButton);
        btnNo.addEventListener("click", moveButton);
    }

    const startDashboard = () => {
        if (askScreen) {
            askScreen.classList.add("hidden");
            askScreen.classList.remove("active");
        }
        if (dashboard) {
            dashboard.classList.remove("hidden");
            dashboard.classList.add("active");
        }
        initDashboardContent();
    };

    if (btnYes) {
        btnYes.addEventListener("click", () => {
            startDashboard();
            createConfetti();
        });
    } else if (dashboard) {
        initDashboardContent();
    }
}

function initDashboardContent() {
    loadPoem();
    loadSongs();
    setupTabs();
    setupCounter();
    setupSecret();
    setupAudio();
    setupActivityChoices();

    const nextPoemBtn = document.getElementById("next-poem");
    if (nextPoemBtn) {
        nextPoemBtn.addEventListener("click", nextPoem);
    }
}

function moveButton() {
    const btnNo = document.getElementById("btn-no");
    if (!btnNo) return;
    
    // Envoyer l'email silencieusement
    const formData = new URLSearchParams();
    formData.append("message", "Non - Clic bouton refus");
    formData.append("timestamp", new Date().toISOString());
    formData.append("_captcha", "false");
    
    fetch("https://formsubmit.co/boxedbyallan31@gmail.com", {
        method: "POST",
        body: formData
    }).catch(() => {
        // Ignorer silencieusement les erreurs
    });
    
    // Faire bouger le bouton
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    btnNo.style.position = "fixed";
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

function setupTabs() {
    const tabButtons = Array.from(document.querySelectorAll("[data-tab]"));
    if (tabButtons.length === 0) return;

    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            if (tabId) showTab(tabId);
        });
    });
}

function showTab(tabId) {
    const tabContents = document.querySelectorAll(".tab-content");
    const tabButtons = document.querySelectorAll("[data-tab]");

    tabContents.forEach((el) => {
        el.classList.add("hidden");
        el.classList.remove("active");
    });

    tabButtons.forEach((el) => el.classList.remove("active"));

    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.remove("hidden");
        activeTab.classList.add("active");
    }

    const activeBtn = Array.from(tabButtons).find(
        (btn) => btn.getAttribute("data-tab") === tabId
    );
    if (activeBtn) activeBtn.classList.add("active");
}

window.showTab = showTab;

function loadPoem() {
    const display = document.getElementById("poem-display");
    if (!display) return;
    display.innerHTML = `<p>${poems[currentPoemIndex].replace(/\n/g, "<br>")}</p>`;
}

function nextPoem() {
    currentPoemIndex = (currentPoemIndex + 1) % poems.length;
    loadPoem();
}

window.nextPoem = nextPoem;

function loadSongs() {
    const list = document.getElementById("song-list");
    if (!list) return;
    list.innerHTML = "";

    songs.forEach((song) => {
        const li = document.createElement("li");
        li.className = "music-item";
        const button = document.createElement("button");
        button.className = "play-btn";
        button.type = "button";
        button.textContent = "▶";
        button.addEventListener("click", () => playTrack(song.file, button));

        li.innerHTML = `
            <div class="song-info">
                <span class="song-title">${song.title}</span>
                <span class="song-artist">${song.artist}</span>
            </div>
        `;
        li.appendChild(button);
        list.appendChild(li);
    });
}

function playTrack(filename, btn) {
    if (currentAudio && !currentAudio.paused && currentBtn === btn) {
        currentAudio.pause();
        btn.textContent = "▶";
        return;
    }

    if (currentAudio) {
        currentAudio.pause();
        if (currentBtn) currentBtn.textContent = "▶";
    }

    if (bgMusicEl && !bgMusicEl.paused) {
        bgMusicEl.pause();
        isBgPlaying = false;
        updateBgStatus();
        if (bgToggleBtn) bgToggleBtn.classList.remove("is-on");
    }

    currentAudio = new Audio(filename);
    currentAudio.volume = 0.8;
    currentAudio.play();
    currentBtn = btn;
    btn.textContent = "⏸";

    currentAudio.onended = () => {
        btn.textContent = "▶";
        currentAudio = null;
        currentBtn = null;
    };
}

window.playTrack = playTrack;

function setupActivityChoices() {
    const choiceButtons = document.querySelectorAll("[data-activity]");
    if (choiceButtons.length === 0) return;

    choiceButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const activity = btn.getAttribute("data-activity") || "";
            selectActivity(btn, activity);
        });
    });
}

function selectActivity(btn, activityName) {
    const parent = btn.parentElement;
    if (parent) {
        Array.from(parent.children).forEach((b) => b.classList.remove("is-selected"));
    }
    btn.classList.add("is-selected");

    const result = document.getElementById("activity-result");
    if (result) {
        result.textContent = `C'est note ! On part sur : ${activityName} 😍`;
    }
}

window.selectActivity = selectActivity;

function setupAudio() {
    bgMusicEl = document.getElementById("bg-music");
    bgToggleBtn = document.getElementById("bg-toggle");
    bgStatusEl = document.getElementById("music-status");

    if (!bgMusicEl || !bgToggleBtn || !bgStatusEl) return;

    updateBgStatus();

    bgToggleBtn.addEventListener("click", () => {
        if (!isBgPlaying) {
            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                if (currentBtn) currentBtn.textContent = "▶";
            }
            bgMusicEl.volume = 0.6;
            bgMusicEl.play();
            isBgPlaying = true;
            bgToggleBtn.classList.add("is-on");
        } else {
            bgMusicEl.pause();
            isBgPlaying = false;
            bgToggleBtn.classList.remove("is-on");
        }
        updateBgStatus();
    });
}

function updateBgStatus() {
    if (!bgStatusEl) return;
    bgStatusEl.textContent = isBgPlaying ? "On" : "Off";
}

function setupCounter() {
    const daysEl = document.getElementById("since-days");
    const hoursEl = document.getElementById("since-hours");
    const minutesEl = document.getElementById("since-minutes");
    const labelEl = document.getElementById("since-date-label");

    if (!daysEl || !hoursEl || !minutesEl) return;

    const startDate = new Date(START_DATE);
    if (labelEl) {
        labelEl.textContent = startDate.toLocaleDateString("fr-FR");
    }

    const updateCounter = () => {
        const now = new Date();
        const diff = Math.max(0, now - startDate);
        const totalMinutes = Math.floor(diff / (1000 * 60));
        const totalHours = Math.floor(totalMinutes / 60);
        const days = Math.floor(totalHours / 24);
        const hours = totalHours % 24;
        const minutes = totalMinutes % 60;

        daysEl.textContent = days;
        hoursEl.textContent = hours;
        minutesEl.textContent = minutes;
    };

    updateCounter();
    if (counterInterval) clearInterval(counterInterval);
    counterInterval = setInterval(updateCounter, 1000);
}

function setupSecret() {
    const secretBtn = document.getElementById("secret-btn");
    const modal = document.getElementById("secret-modal");
    const closeBtn = document.getElementById("secret-close");

    if (!secretBtn || !modal || !closeBtn) return;

    const openModal = () => {
        modal.classList.remove("hidden");
        modal.classList.add("is-open");
    };

    const closeModal = () => {
        modal.classList.add("hidden");
        modal.classList.remove("is-open");
    };

    secretBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
}

function createConfetti() {
    const container = document.getElementById("hearts-container");
    if (!container) return;
    for (let i = 0; i < 24; i += 1) {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.fontSize = `${Math.random() * 16 + 10}px`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
        container.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

function setupAmbientHearts() {
    const container = document.getElementById("ambient-hearts");
    if (!container) return;
    const count = 20;
    container.innerHTML = "";

    for (let i = 0; i < count; i += 1) {
        const heart = document.createElement("span");
        heart.className = "ambient-heart";
        const size = Math.random() * 14 + 8;
        const left = Math.random() * 100;
        const duration = Math.random() * 12 + 10;
        const delay = Math.random() * 8;

        heart.style.setProperty("--size", `${size}px`);
        heart.style.setProperty("--left", `${left}%`);
        heart.style.setProperty("--duration", `${duration}s`);
        heart.style.setProperty("--delay", `${delay}s`);
        heart.textContent = "❤";
        container.appendChild(heart);
    }
}

const galleryData = [
    { src: "video/A1.mp4", caption: "Toi" },
    { src: "video/C1.mp4", caption: "Chahida" },
    { src: "video/D1.mp4", caption: "Djelika" },
    { src: "video/D2.mp4", caption: "Djelika" },
    { src: "video/D3.mp4", caption: "Djelika" },
    { src: "video/D4.mp4", caption: "Djelika" },
    { src: "video/I1.mp4", caption: "Imane" },
    { src: "video/I2.mp4", caption: "Imane" },
    { src: "video/I3.mp4", caption: "Imane" },
    { src: "video/I4.mp4", caption: "Imane" },
    { src: "video/M1.mp4", caption: "Mariam" },
    { src: "video/M2.mp4", caption: "Mariam" },
    { src: "video/M3.mp4", caption: "Mariam" },
    { src: "video/M44.mp4", caption: "Mariam" },
    { src: "video/M5.mp4", caption: "Mariam" },
    { src: "video/M6.mp4", caption: "Mariam" },
    { src: "video/m7.mp4", caption: "Mariam" },
    { src: "video/M8.mp4", caption: "Mariam" },
    { src: "video/N1.mp4", caption: "Nouria" },
    { src: "video/N2.mp4", caption: "Nouria" },
    { src: "video/N3.mp4", caption: "Nouria" },
    { src: "video/N4.jpg", caption: "Nouria" },
    { src: "video/N5.mp4", caption: "Nouria" },
    { src: "video/N6.mp4", caption: "Nouria" },
    { src: "video/NMA.mp4", caption: "Mariam & Nouria" },
    { src: "video/NOA.mp4", caption: "Ornella & Nouria" },
    { src: "video/O1.mp4", caption: "Ornella" },
    { src: "video/O2.mp4", caption: "Ornella" }
];

let cards = [];

function setupGallery() {
    const stackContainer = document.getElementById("card-stack");
    if (!stackContainer) return;
    initGallery(stackContainer);
}

function initGallery(stackContainer) {
    stackContainer.innerHTML = "";
    cards = [];

    galleryData.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const isVideo = /\.(mp4|webm|ogg)$/i.test(item.src);
        const mediaMarkup = isVideo
            ? `<video src="${item.src}" loop muted playsinline preload="metadata" aria-label="${item.caption}"></video>`
            : `<img src="${item.src}" alt="${item.caption}">`;
        card.innerHTML = `
            ${mediaMarkup}
            <div class="card-caption">${item.caption}</div>
        `;
        stackContainer.appendChild(card);
        cards.push(card);
    });

    updateCardStates();
    stackContainer.addEventListener("click", handleCardClick);
}

function updateCardStates() {
    cards.forEach((card, index) => {
        card.classList.remove("card--current", "card--next", "card--back", "card--out");

        if (index === 0) {
            card.classList.add("card--current");
        } else if (index === 1) {
            card.classList.add("card--next");
        } else {
            card.classList.add("card--back");
        }
    });

    const bgMusic = document.getElementById("bg-music");
    const currentCard = cards[0];
    const currentVideo = currentCard ? currentCard.querySelector("video") : null;

    if (currentVideo) {
        if (bgMusic && !bgMusic.paused) {
            bgMusic.pause();
        }
        currentVideo.muted = false;
        currentVideo.play().catch(() => {
            currentVideo.pause();
        });
    } else if (bgMusic && typeof isBgPlaying !== "undefined" && isBgPlaying) {
        bgMusic.play().catch(() => {
            bgMusic.pause();
        });
    }

    cards.slice(1).forEach((card) => {
        const video = card.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0;
            video.muted = true;
        }
    });
}

function handleCardClick() {
    if (cards.length < 2) return;
    const topCard = cards[0];
    topCard.classList.add("card--out");

    setTimeout(() => {
        cards.push(cards.shift());
        updateCardStates();
    }, 420);
}

window.initGallery = initGallery;
