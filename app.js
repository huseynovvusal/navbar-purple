const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav ul");
const transition = document.querySelector("nav .transition");
const link = document.querySelectorAll("nav ul li a");
const darkLightIcon = document.querySelector("nav ul li i");
const backgroundWord = document.querySelector("section h2");
const sound = document.querySelector("audio");

// Add Class To Navbar to opening

hamburger.addEventListener("click", menuActive);

darkLightIcon.addEventListener("click", darkLight);

// Dark Light Mode

function darkLight(e) {
  sound.play();
  this.setAttribute("style", "transform: rotate(0); opacity: 0;");
  setLightDark("moon");

  function setLightDark(type) {
    setTimeout(() => {
      darkLightIcon.className = `bx bxs-${type}`;
      darkLightIcon.setAttribute(
        "style",
        "transform: rotate(360deg); opacity: 1;"
      );
    }, 300);
  }

  document.body.classList.toggle("light-mode");

  if (e.target.className == "bx bxs-moon") {
    this.setAttribute("style", "transform: rotate(0); opacity: 0;");
    setLightDark("sun");
  }
}

function menuActive() {
  sound.play();
  transition.classList.toggle("transition-active");
  menu.classList.toggle("menu-active");
  hamburger.classList.toggle("toggle");
}

// Add ative class to Navigation item

link.forEach((index) => {
  index.addEventListener("click", navItemActive);
});

function navItemActive() {
  link.forEach((index) => {
    sound.play();
    index.classList.remove("nav-item-active");
    this.classList.add("nav-item-active");
    transition.classList.remove("transition-active");
    menu.classList.remove("menu-active");
    hamburger.classList.remove("toggle");
  });

  const navItemText = document.querySelector(".nav-item-active").innerHTML;

  backgroundWord.textContent = navItemText;
}
