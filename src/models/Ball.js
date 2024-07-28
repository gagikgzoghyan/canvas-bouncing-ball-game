class Ball {
    constructor(canvas) {
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')

        this.r = this.random(5, 40)
        this.x = this.random(this.r, this.canvas.width - this.r)
        this.y = this.random(this.r, this.canvas.height - this.r)

        this.xDelta = this.random(-5, 5)
        this.yDelta = this.random(-5, 5)

        this.color = "rgb(" + this.random(0, 255) + ", " + this.random(0, 255) + ", " + this.random(0, 255) + ")"
    }

    update() {
        if ((this.x + this.r) > this.canvas.width ||
            this.x - this.r < 0) {
            this.xDelta *= -1
        }
        if ((this.y + this.r) > this.canvas.height ||
            this.y - this.r < 0) {
            this.yDelta *= -1
        }

        this.x += this.xDelta
        this.y += this.yDelta
    }

    draw() {
        this.context.fillStyle = this.color
        this.context.beginPath()
        this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        this.context.fill()
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }
}

export default Ball