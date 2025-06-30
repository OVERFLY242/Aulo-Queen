// Apparition des éléments au scroll
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function closePopup() {
  document.getElementById('popup').style.display = 'none';

  // Lecture de la musique
  const audio = document.getElementById('background-music');
  audio.play().catch((error) => {
    console.warn("Lecture bloquée par le navigateur :", error);
  });
}
const audio = document.getElementById('background-music');
const soundToggleBtn = document.getElementById('sound-toggle');

let isPlaying = false;

function updateSoundIcon() {
  soundToggleBtn.textContent = isPlaying ? '🔊' : '🔈';
}

// Toggle son on/off quand on clique sur le bouton
soundToggleBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play().catch(() => {});
    isPlaying = true;
  }
  updateSoundIcon();
});

// Ferme le popup ET lance la musique
function closePopup() {
  document.getElementById('popup').style.display = 'none';
  audio.play().then(() => {
    isPlaying = true;
    updateSoundIcon();
  }).catch(() => {
    isPlaying = false;
    updateSoundIcon();
  });
}

// Initialise l’icône au chargement
updateSoundIcon();

