const revealDate = new Date("2026-11-06T11:00:00Z");
const countdownNode = document.getElementById("countdown");
const previewForm = document.getElementById("previewForm");
const previewPasswordInput = document.getElementById("previewPassword");
const previewMessage = document.getElementById("previewMessage");
const countdownSection = document.getElementById("countdownSection");
const revealContent = document.getElementById("revealContent");
const secretTrigger = document.getElementById("easterEggTrigger");
const secretMessage = document.getElementById("secretMessage");
const youtubePlayer = document.getElementById("youtubePlayer");
const youtubeFallback = document.getElementById("youtubeFallback");
const youtubeLink = document.getElementById("youtubeLink");

const previewPassword = "little-universe";
const musicConfig = {
  videoId: "dQw4w9WgXcQ",
  start: 15,
};

function getTimeParts(targetDate) {
  const distance = Math.max(targetDate.getTime() - Date.now(), 0);
  const totalSeconds = Math.floor(distance / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function updateCountdown() {
  const parts = getTimeParts(revealDate);

  document.getElementById("days").textContent = String(parts.days).padStart(2, "0");
  document.getElementById("hours").textContent = String(parts.hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(parts.minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(parts.seconds).padStart(2, "0");

  if (Date.now() >= revealDate.getTime()) {
    revealExperience();
    return;
  }
}

function revealExperience() {
  countdownSection.classList.add("hidden");
  revealContent.classList.remove("hidden");
  renderYouTubePlayer(musicConfig.videoId, musicConfig.start);
  window.clearInterval(countdownInterval);
}

function tryPreviewAccess(event) {
  event.preventDefault();
  const entered = previewPasswordInput.value.trim();

  if (entered === previewPassword) {
    revealExperience();
    previewMessage.textContent = "Preview unlocked.";
    previewMessage.style.color = "#d8c2ff";
    previewForm.reset();
  } else {
    previewMessage.textContent = "Incorrect password. The public reveal remains scheduled.";
    previewMessage.style.color = "#f5f0f7";
    previewForm.reset();
  }
}

function getCurrentState() {
  const now = Date.now();
  return now >= revealDate.getTime() ? "revealed" : "countdown";
}

function initPage() {
  const state = getCurrentState();

  if (state === "revealed") {
    revealExperience();
    return;
  }

  updateCountdown();
  countdownInterval = window.setInterval(updateCountdown, 1000);
}

function extractYouTubeId(value) {
  const cleaned = value.trim();
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
    /^([A-Za-z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = cleaned.match(pattern);
    if (match) {
      return match[1];
    }
  }

  return null;
}

function renderYouTubePlayer(videoId, startSeconds = 0) {
  const parsedId = extractYouTubeId(videoId);

  if (!parsedId) {
    youtubeFallback.classList.remove("hidden");
    youtubeLink.href = "https://www.youtube.com/results?search_query=birthday+music";
    return;
  }

  const embedUrl = `https://www.youtube.com/embed/${parsedId}?start=${startSeconds}&rel=0&modestbranding=1`;
  youtubePlayer.innerHTML = `
    <iframe
      src="${embedUrl}"
      title="Birthday music"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"
    ></iframe>
  `;
}

secretTrigger.addEventListener("click", () => {
  secretMessage.classList.toggle("hidden");
  if (!secretMessage.classList.contains("hidden")) {
    secretTrigger.textContent = "✦";
  }
});

previewForm.addEventListener("submit", tryPreviewAccess);
let countdownInterval = null;

initPage();
