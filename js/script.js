document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  mobileMenuBtn.addEventListener("click", function () {
    mobileNav.classList.toggle("active");

    // Change icon
    const icon = this.querySelector("i");
    if (mobileNav.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Close mobile menu if open
      mobileNav.classList.remove("active");
      mobileMenuBtn.querySelector("i").classList.remove("fa-times");
      mobileMenuBtn.querySelector("i").classList.add("fa-bars");

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed header
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the data to a server
      console.log("Form submitted:", { name, email, message });

      // Show success message
      alert("Thank you for your message! We will get back to you soon.");

      // Reset form
      this.reset();
    });
  }

  // Add animation on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".feature-card, .about-content, .contact-form"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animation
  const animatedElements = document.querySelectorAll(
    ".feature-card, .about-content, .contact-form"
  );
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Run once on load
  animateOnScroll();

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);
});
