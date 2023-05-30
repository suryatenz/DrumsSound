var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var thhhh = this.innerHTML;
        mixsound(thhhh);
        btanimation(thhhh);
    });
}

document.addEventListener("keypress", function (event) {
    mixsound(event.key);
    btanimation(event.key);
});


function mixsound(key) {
    switch (key) {

        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "l":
            var sound = new Audio("kick-bass.mp3");
            sound.play();
            break;

        case "W":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "A":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;

        case "S":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;

        case "D":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;

        case "J":
            var snare = new Audio("snare.mp3");
            snare.play();
            break;

        case "K":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;

        case "L":
            var sound = new Audio("kick-bass.mp3");
            sound.play();
            break;

        default:
            console.log(key);
    }
}

function btanimation(currentkey){
  var presentbt = document.querySelector("." + currentkey);
  presentbt.classList.add("pressed");

  setTimeout(function(){
    presentbt.classList.remove("pressed");
  },150);
}
