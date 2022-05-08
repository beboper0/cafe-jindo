class Swiper {
    constructor() {
        this.itemsToSwipe = document.querySelector('.swiper-wrapper')
        this.swipeLeft = document.querySelector('.nav-prev')
        this.swipeRight = document.querySelector('.nav-next')
        this.drinks = document.querySelector('#drinks')
        this.food = document.querySelector('#food')
        this.navItem = document.querySelectorAll('.nav-item')
        this.isClicked = 0
        this.events()
    }

    events() {
        this.swipeLeft.addEventListener("click", () => this.swipeElementLeft())
        this.drinks.addEventListener("click", () => this.swipeElementLeft())
        this.swipeRight.addEventListener("click", () => this.swipeElementRight())
        this.food.addEventListener("click", () => this.swipeElementRight())
    }

    swipeElementLeft() {
        this.itemsToSwipe.style.transform = 'translate3d(0, 0, 0)'
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
        this.itemsToSwipe.style.height = '83.34em'
        this.elementFocus(1)
        this.isClicked = 0
    }

    swipeElementRight() {
        this.itemsToSwipe.style.transform = 'translate3d(-100%, 0, 0)'
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
        this.itemsToSwipe.style.height = '122.16em'
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