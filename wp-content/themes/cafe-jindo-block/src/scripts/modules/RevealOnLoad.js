import debounce from 'lodash/debounce'

class RevealOnLoad {
    constructor(els) {
        this.itemsToReveal = els
        this.hideInitially()
        this.events()
    }

    events() {
        window.addEventListener('load', debounce(() => {
            this.loadElement()
        }, 333));
    }

    loadElement() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("conceal-item--is-visible")
            el.isRevealed = true
        })
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("conceal-item")
            el.isRevealed = false
        })
    }

}

export default RevealOnLoad;