var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump() {
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 300);
}


function jump2() {
    if (character.classList == "animate2") { return }
    character.classList.add("animate2");
    setTimeout(function () {
        character.classList.remove("animate2");
    }, 300);
}


var checkDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 230) {
        block.style.animation = "none";
        let person = prompt("Game Over. Your score: " + Math.floor(counter / 100) + ". Please enter your name to add it to the leaderboard:", "");
        //alert("Game Over. Your score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);