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
