class Swiper {
    constructor() {
        this.itemsToSwipe = document.querySelector('.swiper-wrapper')
        this.swipeLeft = document.querySelector('.nav-prev')
        this.swipeRight = document.querySelector('.nav-next')
        this.navItem = document.querySelectorAll('.nav-item')
        this.isClicked = 0
        this.events()
    }

    events() {
        this.swipeLeft.addEventListener("click", () => this.swipeElementLeft())
        this.swipeRight.addEventListener("click", () => this.swipeElementRight())
    }

    swipeElementLeft() {
        this.itemsToSwipe.style.transform = 'translate3d(0, 0, 0)'
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
        this.elementFocus(1)
        this.isClicked = 0
    }

    swipeElementRight() {
        this.itemsToSwipe.style.transform = 'translate3d(-66.75em, 0, 0)'
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
        this.elementFocus(0)
        this.isClicked = 1
    }

    elementFocus(i) {
        this.navItem.forEach(el => {
            if (this.isClicked == i) {
                if (el.classList.contains('inactive')) {
                    el.classList.remove('inactive')
                } else {
                    el.classList.add('inactive')
                }
            }
        })
    }
}

export default Swiper;