var character = document.getElementById("character");
var block = document.getElementById("block");
var recomecar = document.getElementById("recomecar")
var mouse = document.getElementById("mm")
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));

    var blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));

    if(blockLeft < 40 && blockLeft > 0 && characterTop >= 260){
            character.classList.add("dying")
            block.style.display = "none";
            mouse.style.display = "none";
            recomecar.innerHTML = '<p style="font-size: 50px;">You Lose</p>';
            recomecar.innerHTML += "<p><a href='index.html'>Play Again</a></p>";
            character.style.backgroundImage = "url(./assets/PNG/Sequencies/Dying/Dying_014.png)";
    }
},10);