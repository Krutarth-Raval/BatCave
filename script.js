function initializeBatcomputerSystem() {
  const open = document.querySelector(".open-nav");
  const close = document.querySelector(".close-nav");
  const sidebar = document.querySelector(".sidebar-menu");

  if (open && close && sidebar) {
    open.addEventListener("click", () => {
      sidebar.style.width = "280px";
      close.style.display = "block";
      open.style.display = "none";
    });
    close.addEventListener("click", () => {
      sidebar.style.width = "0px";
      close.style.display = "none";
      open.style.display = "block";
    });
  }

  // Inject Batman SVG Logo into logo container dynamically
  const logoContainer = document.querySelector(".logo-container");
  if (logoContainer) {
    logoContainer.innerHTML = `
      <svg class="bat-logo-svg" viewBox="0 0 24 12" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.69C10.74 0 7.8 0 7.8 0S8.22 2.69 7.38 3.53C6.54 4.37 3.36 2.69 3.36 2.69S4.2 6.05 1.68 6.89C0 7.45 0 9.41 0 9.41s3.78 1.12 5.88-.84c2.1-1.96 1.68-5.31 1.68-5.31s.84 1.12 1.68.28c.84-.84 1.26-1.96 1.26-1.96.84 1.96 1.68 2.52 2.52 2.52.84 0 1.68-.56 2.52-2.52 0 0 .42 1.12 1.26 1.96.84.84 1.68-.28 1.68-.28s-.42 3.35 1.68 5.31c2.1 1.96 5.88.84 5.88.84s0-1.96-1.68-2.52c-2.52-.84-1.68-4.2-1.68-4.2s-3.18 1.68-4.02.84c-.84-.84-.42-3.53-.42-3.53S13.26 0 12 2.69z" />
      </svg>
      <span class="logo-text">BATCAVE</span>
    `;
  }

  // Beautify footer titles for Bat-computer theme
  const footerTitles = document.querySelectorAll(".footer-title");
  footerTitles.forEach(title => {
    const text = title.textContent.trim();
    if (text === "Quick-Links") {
      title.innerHTML = '<i class="fa-solid fa-terminal text-yellow"></i> SYSTEM INDEX';
    } else if (text === "Credits & Sources") {
      title.innerHTML = '<i class="fa-solid fa-database text-yellow"></i> DATA ARCHIVES';
    } else if (text === "Contact") {
      title.innerHTML = '<i class="fa-solid fa-satellite-dish text-yellow"></i> SECURE UPLINK';
    }
  });

  // High-tech placeholder and label conversion
  const labels = document.querySelectorAll("form label");
  labels.forEach(label => {
    const text = label.textContent.trim();
    if (text === "Your Name") {
      label.textContent = "AGENT IDENTITY:";
    } else if (text === "E-mail") {
      label.textContent = "RETURN COMMS PORT (EMAIL):";
    } else if (text === "Message") {
      label.textContent = "ENCRYPTED TRANSMISSION DATA:";
    }
  });

  const inputs = document.querySelectorAll("form input, form textarea");
  inputs.forEach(input => {
    if (input.placeholder.includes("name")) {
      input.placeholder = "Enter agent signature...";
    } else if (input.placeholder.includes("email")) {
      input.placeholder = "node@gotham-network.net...";
    } else if (input.placeholder.includes("message")) {
      input.placeholder = "Input transmission content. Minimum 20 characters...";
    }
  });

  const sendBtn = document.querySelector(".send-btn");
  if (sendBtn && sendBtn.textContent.trim() === "SEND") {
    sendBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> TRANSMIT SIGNAL';
  }

  // Dynamic active link highlighting based on current page
  const currentPath = window.location.pathname.split("/").pop() || "home.html";
  const navLinks = document.querySelectorAll(".navbar-menu a, .sidebar-menu a");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

if (document.readyState !== "loading") {
  initializeBatcomputerSystem();
} else {
  document.addEventListener("DOMContentLoaded", initializeBatcomputerSystem);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

// Safely execute GSAP animations if GSAP is loaded
if (typeof gsap !== 'undefined') {
  const cards = gsap.utils.toArray(".stories");
  cards.forEach((card) => {
    const anim = gsap.fromTo(
      card,
      {
        autoAlpha: 0,
        x: -100,
      },
      {
        duration: 0.6,
        autoAlpha: 1,
        x: 0,
      }
    );
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: card,
        animation: anim,
      });
    }
  });

  const containers = gsap.utils.toArray(".storiesOfGotham");
  containers.forEach((container) => {
    const anim = gsap.fromTo(
      container,
      {
        autoAlpha: 0,
        x: -100,
      },
      {
        duration: 0.6,
        autoAlpha: 1,
        x: 0,
      }
    );
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: container,
        animation: anim,
      });
    }
  });
}
