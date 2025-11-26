const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
console.log(arrowLeft)

let pos = 0;
let speed = 0.6; // vitesse du mouvement
let direction = 1; // 1 = descend, -1 = monte
const max = 20; // hauteur max du rebond

function animate() {
    pos += speed * direction;
    arrowLeft.style.transform = `translateX(${pos}px) rotate(-90deg)`;
    arrowRight.style.transform = `translateX(-${pos}px) rotate(90deg)`;

    // change de direction
    if (pos >= max || pos <= 0) {
        direction *= -1;
    }

    requestAnimationFrame(animate);
}

animate();
