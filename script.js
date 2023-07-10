let range = document.getElementById("range");
let controlBtn = document.getElementById("control-btn");
let music = document.getElementById("music");


music.onloadedmetadata = function(){
    range.max = music.duration;
    range.value = music.currentTime;
}

function playPause(){
    if(controlBtn.classList.contains("fa-pause")){
        music.pause();
        controlBtn.classList.remove("fa-pause");
        controlBtn.classList.add("fa-play");
    }else{
        music.play();
        controlBtn.classList.remove("fa-play");
        controlBtn.classList.add("fa-pause");

    }
}
if(music.play()){
    setInterval(() => {
        range.value = music.currentTime;
    }, 500);
}

range.onchange = function(){
    music.play();
    music.currentTime = range.value;
    controlBtn.classList.remove("fa-play");
    controlBtn.classList.add("fa-pause");

}