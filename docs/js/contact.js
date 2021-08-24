console.log("Hello from contact.js");

// let isMenuOpen = false;

const menuButton = document.getElementById("hamburger");
function toggleMenu() {
    console.log("menu button clicked");
};

menuButton.addEventListener("click", toggleMenu);