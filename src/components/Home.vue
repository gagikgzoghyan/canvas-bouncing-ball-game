<template>
    <div class="home">
        <div ref="canvasContainer" class="canvas-container">
            <canvas ref="canvas"></canvas>
        </div>

        <button @click="addBall">Add ball</button>
    </div>
</template>

<script type="text/babel">
    import Ball from '@/models/Ball'

    export default {
        name: 'home',
        data() {
            return {
                balls: []
            }
        },
        mounted() {
            this.resize()
            this.init()
        },
        methods: {
            init() {
                requestAnimationFrame(this.init)
                this.update()
                this.draw()
            },
            resize() {
                const canvasContainer = this.$refs.canvasContainer
                const canvas = this.$refs.canvas

                canvas.width = canvasContainer.offsetWidth
                canvas.height = canvasContainer.offsetHeight
            },
            update() {
                this.balls.forEach(ball => {
                    ball.update()
                })
            },
            draw() {
                const canvas = this.$refs.canvas
                const context = canvas.getContext('2d')

                context.clearRect(0, 0, canvas.width, canvas.height)
                this.balls.forEach(ball => {
                    ball.draw()
                })
            },
            addBall() {
                this.balls.push(new Ball(this.$refs.canvas))
            },
        }
    }
</script>