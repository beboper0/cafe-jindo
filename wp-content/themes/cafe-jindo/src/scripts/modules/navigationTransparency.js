import throttle from 'lodash/throttle'

class navigationTransparency {
    constructor() {
        this.itemsToWhite = document.querySelector(".site-header")
        this.listenedEl = document.querySelector(".parallax-container")
        this.referenceEl = document.querySelector(".site-main")
        this.orderBtn = document.querySelector(".btn-order")
        this.scrollThrottle = throttle(this.ifScrolled, 200).bind(this)
        this.events()
    }



    events() {
        if (document.body.classList.contains("home")) {
            this.listenedEl.addEventListener("scroll", this.scrollThrottle)
        } else {
            window.addEventListener("scroll", this.scrollThrottle)
        }
        this.eventListenerCheck()
    }

    ifScrolled() {
        if (window.innerWidth >= 800) {
            if (this.referenceEl.getBoundingClientRect().top == 0) {
                this.itemsToWhite.classList.remove("site-header__white")
                this.orderBtn.classList.add("btn-order-transparent")
            } else {
                this.itemsToWhite.classList.add("site-header__white")
                this.orderBtn.classList.remove("btn-order-transparent")
                this.eventListenerCheck()
            }
        }
    }

    eventListenerCheck() {
        this.listenedEl.removeEventListener("scroll", this.scrollThrottle)
        console.log(this.listenedEl.scrollTop)

        if (this.listenedEl.scrollTop == 0) {
            this.listenedEl.addEventListener("scroll", this.scrollThrottle)
        }
    }
}

export default navigationTransparency;