
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
const serviceCards = document.querySelectorAll(".card");
const navbar = document.querySelector("nav ul");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let current = "";
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  
  if (scrollTop > lastScrollTop) {
    
    navbar.classList.add("hide");
  } else {
  
    navbar.classList.remove("hide");
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});


const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
      cardObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

serviceCards.forEach(card => {
  cardObserver.observe(card);
});


const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector("nav ul");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
  
  
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

const storyContactSection = document.querySelector(".story-contact-section");
const storyOutlineBtn = document.querySelector(".story .btn-outline");

if (storyContactSection && storyOutlineBtn) {
  storyOutlineBtn.addEventListener("click", (e) => {
    e.preventDefault();
    storyContactSection.classList.toggle("show-contact");
    if (storyContactSection.classList.contains("show-contact")) {
      storyOutlineBtn.textContent = "Hide Contact";
    } else {
      storyOutlineBtn.textContent = "Read Our Full Story";
    }
  });
}


const contactBtn = document.querySelector(".btn-contact");

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    const contactSection = document.querySelector(".contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}


const pricingBtn = document.querySelector(".pricing-btn");
const pricingSections = document.querySelectorAll(".pricing");

if (pricingBtn && pricingSections.length >= 2) {
  pricingBtn.addEventListener("click", () => {
    pricingSections.forEach(section => {
      section.classList.toggle("hidden-pricing");
    });
    
    
    if (pricingBtn.textContent === "See Full Pricing Details") {
      pricingBtn.textContent = "Show Simple Pricing";
    } else {
      pricingBtn.textContent = "See Full Pricing Details";
    }
  });
}
