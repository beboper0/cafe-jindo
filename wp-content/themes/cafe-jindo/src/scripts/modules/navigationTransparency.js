class navigationTransparency {
    constructor() {
        this.itemsToWhite = document.querySelector(".site-header")
        this.listenedEl = document.querySelector(".parallax-container")
        this.referenceEl = document.querySelector(".site-main")
        this.events()
    }

    events() {
        this.listenedEl.addEventListener("scroll", ()=> {
            if (this.referenceEl.getBoundingClientRect().top == 0) {
                this.itemsToWhite.style.backgroundColor = "transparent";
                console.log("transparent")
            } else {
                this.itemsToWhite.style.backgroundColor = "#fffefd";
                console.log("white")
            }
        })
    }

    ifScrolled(el) {
        if (this.referenceEl.getBoundingClientRect().top == 0) {
            el.style.backgroundColor = "transparent";
            console.log("transparent")
        } else {
            el.style.backgroundColor = "#fffefd";
            console.log("white")
        }
    }
}

export default navigationTransparency;