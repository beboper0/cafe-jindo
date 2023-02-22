import debounce from 'lodash/debounce'

class Swiper {
    constructor() {
        //Initialize slider properties
        this.itemsToSwipe = document.querySelector('.swiper-wrapper')
        this.swiperSlide = document.getElementsByClassName('swiper-slide')
        this.slideCount = this.swiperSlide.length
        this.slideIndex = 1
        this.activeSlide = this.swiperSlide[this.slideIndex - 1]
        this.itemsToSwipe.style.height = this.activeSlide.offsetHeight + 'px'

        //Initialize nav properties
        this.swipeLeft = document.querySelector('.nav-prev')
        this.swipeRight = document.querySelector('.nav-next')
        this.navItem = document.getElementsByClassName('nav-item')
        this.navContainer = document.querySelector('.swiper-nav-container')

        this.events()
    }

    events() {
        this.swipeLeft.addEventListener("click", () => this.swipeElementLeft())
        this.swipeRight.addEventListener("click", () => this.swipeElementRight())
        this.navContainer.addEventListener("click", (item) => this.swipeElementPosition(item))

        window.addEventListener("resize", debounce(() => {
            this.itemsToSwipe.style.height = this.activeSlide.offsetHeight + 'px'
        }, 100))
    }

    swipeElementLeft() {
        if (this.slideIndex <= this.slideCount && this.slideIndex > 1) {
            this.slideIndex = this.slideIndex - 1
            this.itemsToSwipe.style.transform = `translateX(${(this.slideIndex * (-100))+100}%)`
            this.itemsToSwipe.style['transition-duration'] = '1000ms'
        }
        this.elementFocus()
        this.itemsToSwipe.style.height = this.activeSlide.offsetHeight + 'px'
    }

    swipeElementRight() {
        if (this.slideIndex < this.slideCount) {
            this.itemsToSwipe.style.transform = `translateX(${this.slideIndex * (-100)}%)`
            this.itemsToSwipe.style['transition-duration'] = '1000ms'
            this.slideIndex = this.slideIndex + 1
        }
        this.elementFocus()
        this.itemsToSwipe.style.height = this.activeSlide.offsetHeight + 'px'
    }

    swipeElementPosition(e) {
        let target = e.target;
        let parent = target.parentNode;
        let index = [].indexOf.call(parent.children, target);
        this.slideIndex = index + 1

        this.itemsToSwipe.style.transform = `translateX(${(index) * (-100)}%)`
        this.itemsToSwipe.style['transition-duration'] = '1000ms'
        this.elementFocus()
    }

    elementFocus() {
        let navIndex = this.navItem[this.slideIndex - 1]

        this.navItem.forEach((e) => {
            e.classList[navIndex==e?'remove':'add']('inactive')
        })
    }
}

export default Swiper;