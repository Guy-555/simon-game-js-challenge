var colors = ["red", "green", "yellow", "blue"];
var level = 1;
var colorList = [];
var colorClick = [];
var wrong = new Audio("./sounds/wrong.mp3");

document.addEventListener("keydown", () => {
    if (document.querySelector("h1").textContent == "Press A Key to Start" ||
        document.querySelector("h1").textContent == "Game Over, Press Any Key to Restart") {
        randomColor();
    }
})

for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", (event) => {
        var colorSelect = colors.find((color) => {
            return event.target.classList.contains(color);
        })
        var colorSound = new Audio("./sounds/" + colorSelect + ".mp3");
        colorClick.push("." + colorSelect);
        document.querySelector("." + colorSelect).classList.add("pressed");
        setTimeout(() => {
            document.querySelector("." + colorSelect).classList.remove("pressed");
        }, 100)
        colorSound.play();
        if (colorList[colorClick.length - 1] == colorClick[colorClick.length - 1]) {
            if ((level - 1) == colorClick.length) {
                setTimeout(() => {
                    randomColor();
                }, 1000)
            }
        }
        else {
            document.querySelector("h1").textContent = "Game Over, Press Any Key to Restart";
            level = 1;
            colorList = [];
            colorClick = [];
            wrong.play()
            document.querySelector("body").classList.add("game-over");
            setTimeout(() => {
                document.querySelector("body").classList.remove("game-over");
            }, 100)
        }
    })
}

function randomColor() {
    var n = Math.floor(Math.random() * 4);
    var colorSound = new Audio("./sounds/" + colors[n] + ".mp3");
    document.querySelector("h1").textContent = "Level " + level;
    colorClick = [];
    colorList.push("." + colors[n]);
    document.querySelector("." + colors[n]).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + colors[n]).classList.remove("pressed");
    }, 100);
    colorSound.play();
    level++;
}