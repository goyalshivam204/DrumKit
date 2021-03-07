
// Creating function for generating nice sounds
// ------------------------------------------------------------
function makeSound(str) {
    switch (str) {
        case "w":
            var audio = new Audio('sound/sound1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sound/sound2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sound/sound3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sound/sound4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sound/sound5.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sound/sound4.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sound/sound4.mp3');
            audio.play();
            break;
    }
};

var buttons=document.querySelectorAll(".instrument");
for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function()
    {
        str=this.innerHTML.trim();
        makeSound(str);
    });
}

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
});


