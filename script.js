// Store current state
let currentPage = "home";
let currentGame = null;
let currentArtCollectionId = null; // ID of the currently open art collection
let currentArtIndex = 0; // Index within the current collection

// Base path for assets
const ASSET_BASE = "/assets";

// Game data (includes image paths)
const gameData = {
  game1: {
    title: "Space Odyssey",
    description:
      "Space Odyssey is an epic space adventure that takes players on a journey through the cosmos. With stunning visual effects, engaging gameplay mechanics, and a compelling storyline, players will explore distant galaxies, engage in space battles, and uncover the mysteries of the universe. The game features procedurally generated star systems, customizable spacecraft, and a dynamic economy system that responds to player actions.",
    banner: "Space Odyssey", // Used as text overlay
    imagePath: `${ASSET_BASE}/games/space-odyssey/banner.jpg`,
    screenshots: [
      `${ASSET_BASE}/games/space-odyssey/screen1.jpg`,
      `${ASSET_BASE}/games/space-odyssey/screen2.jpg`,
      `${ASSET_BASE}/games/space-odyssey/screen3.jpg`,
      `${ASSET_BASE}/games/space-odyssey/screen4.jpg`,
    ],
  },
  game2: {
    title: "Mystic Realms",
    description:
      "Mystic Realms is a fantasy RPG that immerses players in a richly detailed world filled with magic, mystery, and adventure. Create your character from multiple classes, each with unique abilities and playstyles. Explore vast landscapes, from enchanted forests to ancient dungeons, while uncovering a deep narrative that adapts to your choices. The game features a complex magic system, crafting mechanics, and meaningful character progression.",
    banner: "Mystic Realms",
    imagePath: `${ASSET_BASE}/games/mystic-realms/banner.jpg`,
    screenshots: [
      `${ASSET_BASE}/games/mystic-realms/screen1.jpg`,
      `${ASSET_BASE}/games/mystic-realms/screen2.jpg`,
      `${ASSET_BASE}/games/mystic-realms/screen3.jpg`,
      `${ASSET_BASE}/games/mystic-realms/screen4.jpg`,
    ],
  },
  game3: {
    title: "Cyber Runner",
    description:
      "Cyber Runner is a fast-paced cyberpunk platformer set in a neon-lit dystopian future. Wall-run, double-jump, and dash through procedurally generated levels while avoiding obstacles and enemies. The game features a synthwave soundtrack, stunning visual effects, and increasingly challenging gameplay that will test your reflexes. Collect upgrades to enhance your abilities and compete for high scores on global leaderboards.",
    banner: "Cyber Runner",
    imagePath: `${ASSET_BASE}/games/cyber-runner/banner.jpg`,
    screenshots: [
      `${ASSET_BASE}/games/cyber-runner/screen1.jpg`,
      `${ASSET_BASE}/games/cyber-runner/screen2.jpg`,
      `${ASSET_BASE}/games/cyber-runner/screen3.jpg`,
      `${ASSET_BASE}/games/cyber-runner/screen4.jpg`,
    ],
  },
  game4: {
    title: "Puzzle Mind",
    description:
      "Puzzle Mind challenges players with increasingly complex puzzles that blend logic, spatial reasoning, and creative thinking. Each level introduces new mechanics and concepts, building upon previous challenges to create a satisfying learning curve. The minimalist art style and ambient soundtrack create a relaxing atmosphere perfect for focused problem-solving. With over 100 handcrafted levels and a level editor for community content.",
    banner: "Puzzle Mind",
    imagePath: `${ASSET_BASE}/games/puzzle-mind/banner.jpg`,
    screenshots: [
      `${ASSET_BASE}/games/puzzle-mind/screen1.jpg`,
      `${ASSET_BASE}/games/puzzle-mind/screen2.jpg`,
      `${ASSET_BASE}/games/puzzle-mind/screen3.jpg`,
      `${ASSET_BASE}/games/puzzle-mind/screen4.jpg`,
    ],
  },
};

// Art data (Collections of artworks)
const artCollections = {
  sushi: {
    title: "Low Poly Sushi",
    coverImage: `${ASSET_BASE}/arts/sushi/Sushi - High Contrast - AgX.webp`,
    items: [
      {
        title: "Sushi - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/sushi/Sushi - High Contrast - AgX.webp`,
      },
      {
        title: "Sushi - High Contrast - Filmic",
        image: `${ASSET_BASE}/arts/sushi/Sushi - High Contrast - Filmic.webp`,
      },
    ],
  },
  orientalgarden: {
    title: "Oriental Garden",
    coverImage: `${ASSET_BASE}/arts/orientalchinesegarden/Isometric Chinese Garden - High Contrast - AgX.webp`,
    items: [
      {
        title: "Oriental Garden - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/orientalchinesegarden/Isometric Chinese Garden - High Contrast - AgX.webp`,
      },
    ],
  },
  donut: {
    title: "Donut",
    coverImage: `${ASSET_BASE}/arts/donut/donut.webp`,
    items: [
      {
        title: "Donut - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/donut/donut.webp`,
      },
    ],
  },
  romanarchi: {
    title: "Roman Architecture",
    coverImage: `${ASSET_BASE}/arts/romanarchitecture/Roman Architecture - AgX - High - Rev2.webp`,
    items: [
      {
        title: "Roman Architecture - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/romanarchitecture/Roman Architecture - AgX - High - Rev2.webp`,
      },
      {
        title: "Roman Architecture - No Lines - High Contrast - AgX",
        image: `${ASSET_BASE}/arts/Roman Architecture - AgX - High - No Lines - Rev2.webp`,
      },
    ],
  },
  lowpolyforest: {
    title: "Low Poly Forest",
    coverImage: `${ASSET_BASE}/arts/lowpolyforest/forest - agx.webp`,
    items: [
      {
        title: "Low Poly Forest - Medium High Contrast - AgX",
        image: `${ASSET_BASE}/arts/lowpolyforest/forest - agx.webp`,
      },
      {
        title: "Low Poly Forest - Medium High Contrast - Filmic",
        image: `${ASSET_BASE}/arts/lowpolyforest/forest - filmic.webp`,
      },
    ],
  },
  bedroom1: {
    title: "Modern Bedroom",
    coverImage: `${ASSET_BASE}/arts/bedroom1/bedroom1 - Cycles - AgX - Medium High.webp`,
    items: [
      {
        title: "Modern Bedroom - Cycles - Medium High Contrast - AgX",
        image: `${ASSET_BASE}/arts/bedroom1/bedroom1 - Cycles - AgX - Medium High.webp`,
      },
      {
        title: "Modern Bedroom - EVEE - High Contrast - Filmic",
        image: `${ASSET_BASE}/arts/bedroom1/bedroom1 - Evee - Filmic - High.webp`,
      },
    ],
  },
};

// --- INITIALIZATION AND NAVIGATION ---

// Navigation function
function navigateTo(page) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });

  // Show selected page
  document.getElementById(page).classList.add("active");

  // Update nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  // Find and activate the corresponding nav link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const linkText = link.textContent.trim().toLowerCase();
    if (
      linkText.includes(page) ||
      (page === "home" && linkText === "home") ||
      (page === "games" && linkText === "games") ||
      (page === "art" && linkText === "3d art")
    ) {
      link.classList.add("active");
    }
  });

  currentPage = page;

  // Push state for history/back button support
  history.pushState({ page: page }, "", `#${page}`);

  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- GAME SHOWCASE LOGIC ---

// Helper function to render game screenshots
function renderGameScreenshots(gameId) {
  const game = gameData[gameId];
  const container = document.getElementById("gameScreenshots");
  container.innerHTML = ""; // Clear previous screenshots

  game.screenshots.forEach((src, index) => {
    const screenshotDiv = document.createElement("div");
    screenshotDiv.className = "screenshot";
    screenshotDiv.innerHTML = `<img src="${src}" alt="${
      game.title
    } Screenshot ${index + 1}">`;
    // No click handler for a simple portfolio, but can be added for lightbox/zoom
    container.appendChild(screenshotDiv);
  });
}

// Show game detail
function showGameDetail(gameId) {
  currentGame = gameId;
  const game = gameData[gameId];

  // Update game detail page content
  document.getElementById("gameTitle").textContent = game.title;
  document.getElementById("gameDescription").textContent = game.description;

  // Update banner image and text
  document.getElementById("gameBannerImage").src = game.imagePath;
  document.getElementById("gameBannerImage").alt = `${game.title} Banner`;
  document.getElementById("gameBannerText").textContent = game.banner;

  // Render screenshots
  renderGameScreenshots(gameId);

  // Navigate to game detail page
  navigateTo("gameDetail");
}

// --- 3D ART SHOWCASE LOGIC ---

// Helper function to render the art grid
function renderArtGrid() {
  const container = document.getElementById("artGrid");
  container.innerHTML = ""; // Clear previous content

  Object.entries(artCollections).forEach(([id, collection]) => {
    const card = document.createElement("div");
    card.className = "art-card";
    card.onclick = () => openCarousel(id);

    card.innerHTML = `
            <img src="${collection.coverImage}" alt="${collection.title} Cover">
            <span style="color: var(--primary); font-size: 1.2rem;">${collection.title}</span>
        `;
    container.appendChild(card);
  });
}

// --- CAROUSEL LOGIC ---

// Carousel functions
function openCarousel(collectionId) {
  currentArtCollectionId = collectionId;
  currentArtIndex = 0;
  updateCarousel();

  const carouselModal = document.getElementById("carouselModal");
  carouselModal.classList.add("active");

  // Hide navigation buttons if there's only 1 item in the collection
  const collection = artCollections[currentArtCollectionId];
  const isSingleItem = collection.items.length <= 1;
  document.querySelector(".carousel-prev").style.display = isSingleItem
    ? "none"
    : "block";
  document.querySelector(".carousel-next").style.display = isSingleItem
    ? "none"
    : "block";
}

function closeCarousel() {
  document.getElementById("carouselModal").classList.remove("active");
  currentArtCollectionId = null;
}

function changeSlide(direction) {
  const collection = artCollections[currentArtCollectionId];
  if (!collection) return; // Should not happen

  currentArtIndex += direction;
  const totalItems = collection.items.length;

  if (currentArtIndex < 0) {
    currentArtIndex = totalItems - 1;
  } else if (currentArtIndex >= totalItems) {
    currentArtIndex = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const collection = artCollections[currentArtCollectionId];
  if (!collection) return;

  const currentItem = collection.items[currentArtIndex];

  // Update image source and alt text
  const imageElement = document.getElementById("carouselContentImage");
  imageElement.src = currentItem.image;
  imageElement.alt = currentItem.title;

  // Update text content
  document.getElementById("carouselContentText").textContent =
    currentItem.title;
}

// --- FORM HANDLER (Removed, but keeping a placeholder for `handleSubmit` if needed elsewhere) ---
// function handleSubmit(event) {
//     // Removed form submission logic as contact page is removed
//     event.preventDefault();
// }

// --- GLOBAL EVENT LISTENERS AND INITIALIZATION ---

// Close carousel on escape key and navigation with arrows
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCarousel();
  }
  if (document.getElementById("carouselModal").classList.contains("active")) {
    if (e.key === "ArrowLeft") {
      changeSlide(-1);
    } else if (e.key === "ArrowRight") {
      changeSlide(1);
    }
  }
});

// Close carousel on background click
document.getElementById("carouselModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("carouselModal")) {
    closeCarousel();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Render the art grid initially
  renderArtGrid();

  // Add animation to elements on scroll (existing logic)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe game cards and art cards
  document.querySelectorAll(".game-card, .art-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.5s, transform 0.5s";
    observer.observe(card);
  });
});

// Handle browser back/forward buttons
window.addEventListener("popstate", (e) => {
  if (e.state && e.state.page) {
    navigateTo(e.state.page);
  }
});

// Initialize to home page on load (if not already handled by history.pushState)
// The original script's history.pushState is slightly modified for cleaner initial load:
if (!window.location.hash) {
  history.replaceState({ page: "home" }, "", "#home");
} else {
  // If a hash exists, try to navigate to it
  const initialPage = window.location.hash.substring(1);
  if (document.getElementById(initialPage)) {
    navigateTo(initialPage);
  } else {
    // Fallback to home if the page in hash doesn't exist (e.g., #contact)
    navigateTo("home");
  }
}
