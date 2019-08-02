let x;
let y;
let speed;
let speed2;
function setup() {
    createCanvas(600, 600)
    x = 300
    y = 300
    speed = 5
    speed2 = 3
}
function draw() {
    background(225, 0, 0)
    fill(0, 0, 225)
    ellipse(x, y, 50)
    x += speed
    y += speed2
    if (x < 25 || x > 575) {
        speed = -speed
    }else if(y < 25 || y > 575) {
        speed2 = -speed2
    }
}