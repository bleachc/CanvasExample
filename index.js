const canvas = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const c = canvas.getContext('2d')

// c.fillRect(200, 100, 200, 300)

// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = 'red'
// c.stroke()

// c.beginPath()
// c.moveTo(100, 500)
// c.lineTo(341, 99)
// c.lineTo(456, 310)
// c.strokeStyle = 'red'
// c.lineWidth = 4
// c.stroke()

// c.beginPath()
// c.arc(400, 200, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'blue'
// c.stroke()

function Circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false)
        c.strokeStyle = 'blue'
        c.stroke()
    }

    this.update = function () {
        console.log(new Date())
        if (this.x + radius > window.innerWidth || this.x - radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + radius > window.innerHeight || this.y - radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}

const randomX = () => parseInt(Math.random() * window.innerWidth)
const randowY = () => parseInt(Math.random() * window.innerHeight)
const randomVelicity = () => parseInt((Math.random() * 5 + 1) * (Math.random() > .5 ? 1 : -1))

const circles = new Array(100).fill(undefined).map(_ => new Circle(randomX(), randowY(), randomVelicity(), randomVelicity(), 30))

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
    circles.forEach(cir => cir.update())
}

animate()
