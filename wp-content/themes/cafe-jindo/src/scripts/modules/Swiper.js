import debounce from 'lodash/debounce'

class Swiper {
    constructor() {
        //Initialize slider properties
        this.itemsToSwipe = document.querySelector('.swiper-wrapper')
        this.swiperSlide = document.querySelectorAll('.swiper-slide')
        this.activeSlide = document.getElementsByClassName('swiper-slide__active')
        this.itemsToSwipe.style.height = this.activeSlide[0].offsetHeight + 'px'

        //Initialize nav properties
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

        window.addEventListener("resize", debounce(() => {
            this.itemsToSwipe.style.height = this.activeSlide[0].offsetHeight + 'px'
        }, 100))
    }

    swipeElementLeft() {
        this.itemsToSwipe.style.transform = 'translate3d(0, 0, 0)'
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
        this.elementFocus(1)
        this.itemsToSwipe.style.height = this.activeSlide[0].offsetHeight + 'px'

        this.isClicked = 0
    }

    swipeElementRight() {
        this.itemsToSwipe.style.transform = 'translate3d(-100%, 0, 0)'
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
        this.elementFocus(0)
        this.itemsToSwipe.style.height = this.activeSlide[0].offsetHeight + 'px'

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

        this.swiperSlide.forEach(el => {
            if (this.isClicked == i) {
                if (el.classList.contains('swiper-slide__active')) {
                    el.classList.remove('swiper-slide__active')
                } else {
                    el.classList.add('swiper-slide__active')
                }
            }
        })
    }
}

export default Swiper;