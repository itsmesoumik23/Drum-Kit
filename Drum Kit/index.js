for (i=0; i<7; i++)
{
    // button press
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML.toLowerCase())

    })
    // key press
    document.addEventListener("keydown", function(event){
        makeSound(event.key.toUpperCase())
        buttonAnimation(event.key)
    })
}

function makeSound(key){
    switch (key) {
        case "W":
            var audio1 = new Audio("sounds/tom-1.mp3")
            audio1.play();
            break;

        case "A":
            var audio2 = new Audio("sounds/kick-bass.mp3")
            audio2.play();
            break;

        case "S":
            var audio3 = new Audio("sounds/tom-4.mp3")
            audio3.play()
            break;
        case "D":
            var audio4 = new Audio("sounds/crash.mp3")
            audio4.play()
            break;
        case "J":
            var audio5 = new Audio("sounds/tom-3.mp3")
            audio5.play()
            break;
        case "K":
            var audio6 = new Audio("sounds/snare.mp3")
            audio6.play()
            break;
        case "L":
            var audio7 = new Audio("sounds/tom-2.mp3")
            audio7.play()
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}
