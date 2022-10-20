const box = document.getElementById("monalisa");
const eyes = document.querySelectorAll(".eye")
document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const rekt = box.getBoundingClientRect();
    const boxX = rekt.left + rekt.width / 2;
    const boxY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, boxX, boxY);
    eyes.forEach((eye)=>{
        eye.style.transform = `rotate(${90 + angleDeg}deg)`
    })
});

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg
}
