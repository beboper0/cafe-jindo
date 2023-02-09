import throttle from 'lodash/throttle'

class navigationTransparency {
    constructor() {
        this.itemsToWhite = document.querySelector(".site-header")
        this.listenedEl = document.querySelector(".parallax-container")
        this.referenceEl = document.querySelector(".site-main")
        this.orderBtn = document.querySelector(".btn-order")
        this.logo = document.querySelectorAll(".custom-logo-link")
        this.scrollThrottle = throttle(this.ifScrolled, 200).bind(this)
        this.events()
    }

    events() {
        if (document.body.classList.contains("home")) {
            this.listenedEl.addEventListener("scroll", this.scrollThrottle)
        } else {
            window.addEventListener("scroll", this.scrollThrottle)
        }
    }

    ifScrolled() {
        if (window.innerWidth >= 800) {
            if (this.referenceEl.getBoundingClientRect().top == 0) {
                this.itemsToWhite.classList.remove("site-header__white")
                this.orderBtn.classList.add("btn-order-transparent")
            } else {
                this.itemsToWhite.classList.add("site-header__white")
                this.orderBtn.classList.remove("btn-order-transparent")
            }
        }
    }
}

export default navigationTransparency;