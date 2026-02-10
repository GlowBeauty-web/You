// --- DONNÉES À PERSONNALISER ---
// --- LOGIQUE DE CONNEXION (index.html) ---

// Détecte quand l'utilisateur tape son nom
document.getElementById('username')?.addEventListener('input', function(e) {
    const name = e.target.value.trim().toLowerCase();
    const passSection = document.getElementById('password-section');
    
    // Si le nom contient "audrey", on affiche le champ mot de passe
    if (name === 'audrey') {
        passSection.classList.remove('hidden');
        passSection.classList.add('active');
    } else {
        passSection.classList.add('hidden');
        passSection.classList.remove('active');
    }
});

function checkLogin() {
    const name = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');

    if (name === 'audrey') {
        // C'est Audrey : On vérifie le mot de passe
        if (password === '2252') {
            // SUCCÈS : Redirection vers la page Valentin (renomme ton ancien index en dashboard.html)
            window.location.href = "a.html";
        } else {
            // ECHEC
            errorMsg.style.display = "block";
            errorMsg.innerText = "Mot de passe incorrect 🔒";
        }
    } else if (name.length > 0) {
        // C'est une amie : Redirection directe vers la galerie
        window.location.href = "gallery.html";
    } else {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Entre ton prénom stp !";
    }
}

// ... LE RESTE DE TON CODE PRÉCÉDENT POUR LA PAGE VALENTIN RESTE EN DESSOUS ...

// Liste de tes poèmes ou mots doux
const poems = [
    "Dans tes yeux je vois mon avenir, \nEt dans ton sourire, mon bonheur.",
    "Tu es la seule personne qui fait \nbattre mon coeur aussi vite.",
    "Chaque jour passé avec toi \nest mon nouveau jour préféré.",
    "Roses are red, Violets are blue, \nJe ne suis pas poète, \nMais je suis fou de you."
];

// --- DONNÉES À PERSONNALISER ---

// Ajoute le nom exact de tes fichiers mp3 ici
const songs = [
    { title: "Perfect", artist: "Ed Sheeran", file: "perfect.mp3" },
    { title: "All of Me", artist: "John Legend", file: "all_of_me.mp3" },
    { title: "Die With A Smile", artist: "Lady Gaga", file: "die_with_a_smile.mp3" }
];

// --- LOGIQUE DU SITE ---

let currentPoemIndex = 0;

// Au chargement
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Bouton "NON" qui fuit
    const btnNo = document.getElementById('btn-no');
    btnNo.addEventListener('mouseover', moveButton);
    btnNo.addEventListener('click', moveButton); // Au cas où elle clique vite

    // 2. Bouton "OUI"
    document.getElementById('btn-yes').addEventListener('click', () => {
        document.getElementById('ask-screen').classList.remove('active');
        document.getElementById('ask-screen').classList.add('hidden');
        
        document.getElementById('main-dashboard').classList.remove('hidden');
        document.getElementById('main-dashboard').classList.add('active');
        
        createConfetti();
        loadPoem();
        loadSongs();
    });
});

// Fonction pour faire bouger le bouton Non
function moveButton() {
    const btnNo = document.getElementById('btn-no');
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    btnNo.style.position = 'fixed';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}

// Gestion des onglets
window.showTab = function(tabId) {
    // Cacher tous les contenus
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.add('hidden');
        el.classList.remove('active');
    });
    // Désactiver tous les boutons
    document.querySelectorAll('.pill').forEach(el => el.classList.remove('active'));

    // Activer le bon
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId).classList.add('active');
    
    // Mettre en surbrillance le bouton cliqué (c'est une astuce simple)
    const activeBtn = Array.from(document.querySelectorAll('.pill')).find(btn => btn.getAttribute('onclick').includes(tabId));
    if(activeBtn) activeBtn.classList.add('active');
};

// Afficher les poèmes
function loadPoem() {
    const display = document.getElementById('poem-display');
    // Remplace les sauts de ligne \n par des balises <br>
    display.innerHTML = `<p>${poems[currentPoemIndex].replace(/\n/g, '<br>')}</p>`;
}

window.nextPoem = function() {
    currentPoemIndex = (currentPoemIndex + 1) % poems.length;
    loadPoem();
};

// Variable pour stocker la chanson en cours de lecture
let currentAudio = null;
let currentBtn = null;

function loadSongs() {
    const list = document.getElementById('song-list');
    list.innerHTML = ""; // On vide la liste

    songs.forEach((song, index) => {
        // On crée l'élément HTML pour chaque chanson
        const li = document.createElement('li');
        li.className = "music-item";
        li.innerHTML = `
            <div class="song-info">
                <span class="song-title">${song.title}</span>
                <span class="song-artist">${song.artist}</span>
            </div>
            <button class="play-btn" onclick="playTrack('${song.file}', this)">
                ▶
            </button>
        `;
        list.appendChild(li);
    });
}

// Fonction pour jouer une piste spécifique
window.playTrack = function(filename, btn) {
    // 1. Si on clique sur le bouton qui joue déjà, on met pause
    if (currentAudio && !currentAudio.paused && currentBtn === btn) {
        currentAudio.pause();
        btn.innerHTML = "▶"; // Remet l'icône Play
        return;
    }

    // 2. Si une autre ue joue (fond ou autre piste), on coupe tout
    if (currentAudio) {
        currentAudio.pause();
        if(currentBtn) currentBtn.innerHTML = "▶";
    }
    
    // On coupe aussi la musique de fond du site si elle est active
    const bgMusic = document.getElementById('bg-music');
    if(bgMusic && !bgMusic.paused) {
        bgMusic.pause();
        document.getElementById('music-status').innerText = "Pause (Piste en cours)";
        // On met à jour la variable globale isPlaying du fond si nécessaire
        isPlaying = false; 
    }

    // 3. On lance la nouvelle musique
    currentAudio = new Audio(filename);
    currentAudio.play();
    currentBtn = btn;
    btn.innerHTML = "⏸"; // Met l'icône Pause

    // Quand la musique finit, on remet le bouton à zéro
    currentAudio.onended = function() {
        btn.innerHTML = "▶";
        currentAudio = null;
    };
};

// Interaction choix activité
window.selectActivity = function(btn, activityName) {
    // Enlever la classe active des autres boutons
    const parent = btn.parentElement;
    Array.from(parent.children).forEach(b => b.style.background = 'rgba(255,255,255,0.1)');
    
    // Activer celui-ci
    btn.style.background = '#ff4d6d';
    alert(`C'est noté ! On part sur : ${activityName} 😍`);
};

// Effet Confetti / Coeurs simple
function createConfetti() {
    const container = document.getElementById('hearts-container');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        container.appendChild(heart);
        
        // Supprimer après l'animation pour ne pas surcharger la page
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// ==============================================
// LOGIQUE DE LA GALERIE PHOTO (gallery.html)
// ==============================================

// 1. Tes Données Photos/Videos (AJOUTE TES FICHIERS ICI !)
const galleryData = [
    { src: "video/A1.mp4", caption: "Video A1" },
    { src: "video/C1.mp4", caption: "Video C1" },
    { src: "video/D1.mp4", caption: "Video D1" },
    { src: "video/D2.mp4", caption: "Video D2" },
    { src: "video/D3.mp4", caption: "Video D3" },
    { src: "video/D4.mp4", caption: "Video D4" },
    { src: "video/I1.mp4", caption: "Video I1" },
    { src: "video/I2.mp4", caption: "Video I2" },
    { src: "video/I3.mp4", caption: "Video I3" },
    { src: "video/I4.mp4", caption: "Video I4" },
    { src: "video/M1.mp4", caption: "Video M1" },
    { src: "video/M2.mp4", caption: "Video M2" },
    { src: "video/M3.mp4", caption: "Video M3" },
    { src: "video/M44.mp4", caption: "Video M44" },
    { src: "video/M5.mp4", caption: "Video M5" },
    { src: "video/M6.mp4", caption: "Video M6" },
    { src: "video/m7.mp4", caption: "Video m7" },
    { src: "video/M8.mp4", caption: "Video M8" },
    { src: "video/N1.mp4", caption: "Video N1" },
    { src: "video/N2.mp4", caption: "Video N2" },
    { src: "video/N3.mp4", caption: "Video N3" },
    { src: "video/N4.jpg", caption: "Photo N4" },
    { src: "video/N5.mp4", caption: "Video N5" },
    { src: "video/N6.mp4", caption: "Video N6" },
    { src: "video/NMA.mp4", caption: "Video NMA" },
    { src: "video/NOA.mp4", caption: "Video NOA" },
    { src: "video/O1.mp4", caption: "Video O1" },
    { src: "video/O2.mp4", caption: "Video O2" },
    // Ajoute autant de lignes que tu veux :
    // { src: "video/nom_de_ton_fichier.mp4", caption: "Ta legende ici" },
];

let cards = []; // Tableau pour stocker les éléments DOM des cartes

function initGallery() {
    const stackContainer = document.getElementById('card-stack');
    if (!stackContainer) return; // Sécurité si on n'est pas sur la page galerie

    // Création des cartes HTML à partir des données
    galleryData.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const isVideo = /\.(mp4|webm|ogg)$/i.test(item.src);
        const mediaMarkup = isVideo
            ? `<video src="${item.src}" autoplay loop muted playsinline preload="metadata" aria-label="${item.caption}"></video>`
            : `<img src="${item.src}" alt="${item.caption}">`;
        card.innerHTML = `
            ${mediaMarkup}
            <div class="card-caption">${item.caption}</div>
        `;
        stackContainer.appendChild(card);
        cards.push(card);
    });

    // Initialisation des classes pour le premier affichage
    updateCardStates();

    // Ajout de l'événement de clic sur la pile
    stackContainer.addEventListener('click', handleCardClick);
}

function updateCardStates() {
    cards.forEach((card, index) => {
        // On nettoie les classes d'état
        card.classList.remove('card--current', 'card--next', 'card--back', 'card--out');

        // On applique les bonnes classes selon la position dans la pile
        if (index === 0) {
            card.classList.add('card--current');
        } else if (index === 1) {
            card.classList.add('card--next');
        } else {
            card.classList.add('card--back');
        }
    });
}

function handleCardClick() {
    if (cards.length < 2) return; // Pas d'animation s'il n'y a qu'une carte

    // 1. La carte du dessus part
    const topCard = cards[0];
    topCard.classList.add('card--out');

    // 2. On attend la fin de l'animation pour réorganiser la pile
    setTimeout(() => {
        // On enlève la carte du début du tableau et on la met à la fin
        cards.push(cards.shift());
        // On met à jour les états (la 2ème devient la 1ère, etc.)
        updateCardStates();
    }, 400); // Doit correspondre à la durée de la transition CSS (0.4s)
}