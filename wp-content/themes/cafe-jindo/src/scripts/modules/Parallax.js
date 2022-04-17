class Parallax {
    constructor(els) {
        this.parallax = els
        this.height = window.innerHeight
        this.events()
    }

    events() {
        window.addEventListener("scroll", () => {
            this.effect()
        })
    }

    effect() {
        this.parallax.forEach(el => {
            this.offset = window.pageYOffset
            el.style.backgroundPositionY = ((this.offset - this.height)) + "px";
        })
    }
}

export default Parallax;