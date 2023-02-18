import debounce from 'lodash/debounce'

class Swiper {
    constructor() {
        //Initialize slider properties
        this.itemsToSwipe = document.querySelector('.swiper-wrapper')
        this.swiperSlide = document.getElementsByClassName('swiper-slide')
        this.slideCount = this.swiperSlide.length
        this.slideIndex = 1
        this.activeSlide = document.getElementsByClassName('swiper-slide__active')
        this.itemsToSwipe.style.height = this.activeSlide[0].offsetHeight + 'px'

        //Initialize nav properties
        this.swipeLeft = document.querySelector('.nav-prev')
        this.swipeRight = document.querySelector('.nav-next')
        this.navItem = document.querySelectorAll('.nav-item')
        this.navContainer = document.querySelector('.swiper-nav-container')

        this.events()
    }

    events() {
        this.swipeLeft.addEventListener("click", () => this.swipeElementLeft())
        this.swipeRight.addEventListener("click", () => this.swipeElementRight())
        this.navContainer.addEventListener("click", (item) => this.swipeElementPosition(item))

        window.addEventListener("resize", debounce(() => {
            this.itemsToSwipe.style.height = this.activeSlide[0].offsetHeight + 'px'
        }, 100))
    }

    swipeElementLeft() {
        if (this.slideIndex <= this.slideCount && this.slideIndex > 1) {
            this.slideIndex = this.slideIndex - 1
            this.itemsToSwipe.style.transform = `translateX(${(this.slideIndex * (-100))+100}%)`
            this.itemsToSwipe.style['transition-duration'] = '1000ms'
        }
        this.elementFocus()
        this.itemsToSwipe.style.height = this.activeSlide[0].offsetHeight + 'px'
    }

    swipeElementRight() {
        if (this.slideIndex < this.slideCount) {
            this.itemsToSwipe.style.transform = `translateX(${this.slideIndex * (-100)}%)`
            this.itemsToSwipe.style['transition-duration'] = '1000ms'
            this.slideIndex = this.slideIndex + 1
        }
        this.elementFocus()
        this.itemsToSwipe.style.height = this.activeSlide[0].offsetHeight + 'px'
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
        this.navItem.forEach(
            (nav) => nav.onclick = (e) => {
                this.navItem.forEach(
                    (nav) => nav.classList[e.target==nav?'toggle':'remove']('inactive')
                )
                nav.onclick = ""
            }
        )

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