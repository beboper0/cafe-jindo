class Swiper {
    constructor() {
        this.itemsToSwipe = document.querySelector('.swiper-wrapper')
        this.swipeLeft = document.querySelector('.nav-prev')
        this.swipeRight = document.querySelector('.nav-next')
        this.events()
    }

    events() {
        this.swipeLeft.addEventListener("click", () => this.swipeElementLeft())
        this.swipeRight.addEventListener("click", () => this.swipeElementRight())
    }

    swipeElementLeft() {
        this.itemsToSwipe.style.transform = 'translate3d(-66.75em, 0px, 0px)'
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
    }

    swipeElementRight() {
        this.itemsToSwipe.style.transform = 'translate3d(0, 0, 0)'
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
    }
}

export default Swiper;