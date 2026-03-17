```javascript
function showLove() {
    const message = document.getElementById("message");
    message.style.display = "block";

    createHearts();
}

function createHearts() {
    for (let i = 0; i < 15; i++) {

        let heart = document.createElement("div");
        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animation = "floatUp 3s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
```
