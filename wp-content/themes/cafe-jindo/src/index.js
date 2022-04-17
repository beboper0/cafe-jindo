import "../src/style.css"

//Modules
import MobileMenu from "./scripts/modules/navigation"
import RevealOnScroll from "./scripts/modules/RevealOnScroll"
import RevealOnLoad from "./scripts/modules/RevealOnLoad"
import Parallax from "./scripts/modules/Parallax"

//Instantiate new objects using our modules
const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll(document.querySelectorAll(".reveal-on-scroll"), 75);
const revealOnLoad = new RevealOnLoad(document.querySelectorAll(".reveal-on-load"));
const parallax = new Parallax(document.querySelectorAll(".parallax"));


if (module.hot) {
    module.hot.accept()
}


