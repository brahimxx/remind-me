function myFunction() {
  var logo = document.getElementById("main_logo");
  logo.classList.toggle("logo_start");

  var navbar = document.getElementById("nav");
  navbar.classList.toggle("show");

  var navbar = document.getElementById("leftpart");
  navbar.classList.toggle("expand");

  var navbar = document.getElementById("close");
  navbar.classList.toggle("show");

  var navbar = document.getElementById("toggle");
  navbar.classList.toggle("hide");
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("mainHeader");
  //   const headerHeight = header.offsetHeight;
  const headerHeight = 20;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= headerHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// script.js
// If in a bundler, import testimonials from './data.js';
// For now, assume data.js is loaded before this script

document.addEventListener("DOMContentLoaded", function () {
  let current = 0;
  let direction = "right"; // default

  // DOM references inside DOMContentLoaded to ensure elements exist
  const content = document.querySelector(".testimonial-content");
  const mainImage = document.getElementById("mainImage");
  const profilePic = document.getElementById("profilePic");
  const name = document.getElementById("name");
  const role = document.getElementById("role");
  const testimonialText = document.getElementById("testimonialText");

  function renderTestimonial(index, direction = "right", animate = true) {
    content.classList.remove("fade-in-right", "fade-in-left");
    if (animate) {
      void content.offsetWidth; // Force reflow to restart animation
      const animClass =
        direction === "right" ? "fade-in-right" : "fade-in-left";
      content.classList.add(animClass);
    }
    updateContent(index);
  }

  function updateContent(index) {
    const data = testimonials[index];
    mainImage.src = data.image;
    profilePic.src = data.profilePic;
    name.textContent = data.name;
    role.textContent = data.role;
    testimonialText.textContent = `“ ${data.text} ”`;
  }

  // Initial render
  updateContent(current);

  // Navigation buttons
  document.getElementById("prevBtn").onclick = function () {
    current = current === 0 ? testimonials.length - 1 : current - 1;
    renderTestimonial(current, "left");
  };
  document.getElementById("nextBtn").onclick = function () {
    current = (current + 1) % testimonials.length;
    renderTestimonial(current, "right");
  };
});
