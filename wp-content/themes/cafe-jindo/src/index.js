import "../src/style.css"
import "lazysizes"

//Modules
import MobileMenu from "./scripts/modules/navigation"
import RevealOnScroll from "./scripts/modules/RevealOnScroll"

//Instantiate new objects using our modules
const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll(document.querySelectorAll(".marked-for-reveal"), 75);


if (module.hot) {
    module.hot.accept()
}


