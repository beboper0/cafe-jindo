import "../src/style.css"

//Modules
import MobileMenu from "./scripts/modules/navigation"
import RevealOnScroll from "./scripts/modules/RevealOnScroll"
import RevealOnLoad from "./scripts/modules/RevealOnLoad"
import Swiper from "./scripts/modules/Swiper"

//Instantiate new objects using our modules
const mobileMenu = new MobileMenu();

if (document.querySelector(".swiper-container")) {
    const swiper = new Swiper();
}

if (document.querySelector(".reveal-on-scroll")) {
    const revealOnScroll = new RevealOnScroll(document.querySelectorAll(".reveal-on-scroll"), 75);
}

if (document.querySelector(".reveal-on-load") != null) {
    const revealOnLoad = new RevealOnLoad(document.querySelectorAll(".reveal-on-load"));
}

if (module.hot) {
    module.hot.accept()
}


