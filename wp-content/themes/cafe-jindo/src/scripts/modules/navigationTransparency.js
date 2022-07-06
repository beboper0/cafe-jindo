class navigationTransparency {
    constructor() {
        this.itemsToWhite = document.querySelector(".site-header")
        this.listenedEl = document.querySelector(".parallax-container")
        this.referenceEl = document.querySelector(".site-main")
        this.events()
    }

    events() {
        if (document.body.classList.contains("home")) {
            this.listenedEl.addEventListener("scroll", ()=> {
                this.ifScrolled()
            })
        } else {
            window.addEventListener("scroll", ()=> {
                this.ifScrolled()
            })
        }
    }

    ifScrolled() {
        if (this.referenceEl.getBoundingClientRect().top == 0) {
            this.itemsToWhite.classList.remove("site-header__white")
            console.log("clear")
        } else {
            this.itemsToWhite.classList.add("site-header__white")
            console.log("white")
        }
    }
}

export default navigationTransparency;