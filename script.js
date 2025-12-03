/* script.js */

// --- 0. Language Translations ---
const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    tagline: "Coding the Future",
    title: "Artificial Intelligence & IT Solutions",
    description:
      "Take your business beyond the digital age. With NovaTech, experience the premium of technology from cybersecurity to cloud architecture.",
    explore: "Explore",
    contactUs: "Contact Us",
    completedProjects: "Completed Projects",
    customerSatisfaction: "Customer Satisfaction",
    yearsExperience: "Years of Experience",
    copyright: "Copyright © 2024 by NovaTech Solutions | All Rights Reserved.",
  },
  de: {
    home: "Startseite",
    services: "Dienstleistungen",
    about: "Über uns",
    projects: "Projekte",
    contact: "Kontakt",
    tagline: "Die Zukunft kodieren",
    title: "Künstliche Intelligenz & IT-Lösungen",
    description:
      "Bringen Sie Ihr Unternehmen über das digitale Zeitalter hinaus. Mit NovaTech erleben Sie das Premium der Technologie von Cybersicherheit bis Cloud-Architektur.",
    explore: "Erkunden",
    contactUs: "Kontaktieren Sie uns",
    completedProjects: "Abgeschlossene Projekte",
    customerSatisfaction: "Kundenzufriedenheit",
    yearsExperience: "Jahre Erfahrung",
    copyright:
      "Copyright © 2024 by NovaTech Solutions | Alle Rechte vorbehalten.",
  },
};

let currentLanguage = "en";

// Load saved language from localStorage
function loadLanguage() {
  const savedLang = localStorage.getItem("selectedLanguage");
  if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
  }
}

// Update page content based on language
function updateLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("selectedLanguage", lang);

  // Update navigation links
  document.querySelector("a[href='index.html']").textContent =
    "Swiss" + "DevCloud";

  const navLinks = document.querySelectorAll(".navbar a");
  const navTexts = ["home", "services", "about", "projects", "contact"];
  navLinks.forEach((link, index) => {
    if (index < navTexts.length) {
      link.textContent = translations[lang][navTexts[index]];
    }
  });

  // Update home section
  const h3 = document.querySelector(".home-content h3");
  const h1 = document.querySelector(".home-content h1");
  const p = document.querySelector(".home-content p");

  if (h3) h3.textContent = translations[lang].tagline;
  if (h1) {
    if (lang === "en") {
      h1.innerHTML = "Artificial Intelligence & <br /> IT Solutions";
    } else if (lang === "de") {
      h1.innerHTML = "Künstliche Intelligenz & <br /> IT-Lösungen";
    }
  }
  if (p) p.textContent = translations[lang].description;

  // Update buttons
  const buttons = document.querySelectorAll(".btn");
  if (buttons[0]) buttons[0].textContent = translations[lang].explore;
  if (buttons[1]) buttons[1].textContent = translations[lang].contactUs;

  // Update metrics
  const metricTexts = document.querySelectorAll(".metric-box p");
  const metricKeys = [
    "completedProjects",
    "customerSatisfaction",
    "yearsExperience",
  ];
  metricTexts.forEach((text, index) => {
    if (metricKeys[index]) {
      text.textContent = translations[lang][metricKeys[index]];
    }
  });

  // Update footer
  const footerText = document.querySelector(".footer-text p");
  if (footerText) footerText.textContent = translations[lang].copyright;

  // Update language button active state
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });
}

// --- 1. Toggle Navbar & Menu Icon ---
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x"); // FontAwesome 'fa-times' kullanıyorsak bunu ayarlarız
  navbar.classList.toggle("active");
};

// --- 2. Language Switcher ---
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    updateLanguage(lang);
  });
});

// Load language on page load
loadLanguage();
updateLanguage(currentLanguage);

// --- 3. Scroll Reveal & Active Link (Simple version) ---
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let target = document.querySelector("header nav a[href*=" + id + "]");
        if (target) target.classList.add("active");
      });
    }
  });

  // Sticky Header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// --- 4. Animated Counters ---
const counters = document.querySelectorAll(".counter");
const speed = 200;

if (counters.length > 0) {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 25);
      } else {
        counter.innerText = target;
      }
    };
    // Simple trigger: run on load for this demo
    updateCount();
  });
}

// --- 5. Particles.js Configuration ---
// Check if div exists to avoid errors on other pages
if (document.getElementById("particles-js")) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#0ef" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#0ef",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: { repulse: { distance: 200, duration: 0.4 } },
    },
    retina_detect: true,
  });
}
