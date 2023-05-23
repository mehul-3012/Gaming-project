const navbar = document.getElementById("navbar");
const navbarHeight = navbar.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= navbarHeight) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

