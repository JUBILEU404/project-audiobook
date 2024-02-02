const playResume = document.getElementById('play-resume'); 
const audio = document.getElementById('audio');
const nextsong = document.getElementById('proxima-faixa');
const backsong = document.getElementById('voltar-faixa');
const namesong = document.getElementById('charapter');

const numberChaps = 10;

let tatocando = 0;
let song = 1;

function StartSong() {
    audio.play();
    playResume.classList.remove('bi-play-fill');
    playResume.classList.add('bi-pause-circle');
}
function StopSong() {
    audio.pause();
    playResume.classList.add('bi-play-fill');
    playResume.classList.remove('bi-pause-circle');
}

function StartOurStop() {
    if (tatocando === 0){
        StartSong();
        tatocando = 1;
    } else {
        StopSong();
        tatocando = 0;
    }
}

function othername(){
    namesong.innerHTML = "Charapter " + song;
}

function NextSong() {
    if (song === numberChaps){
        song = 1;
    }else{
        song = song + 1;
    }
    audio.src = "./books/dom-casmurro/" + song + ".mp3";
    StartSong();
    tatocando = 1;
    othername();
}

function BackSong() {
    if (song === 1){
        song = numberChaps;
    }else{
        song = song - 1;
    }
    audio.src = "./books/dom-casmurro/" + song + ".mp3";
    StartSong();
    tatocando = 1;
    othername();
}

playResume.addEventListener('click', StartOurStop);
nextsong.addEventListener('click', NextSong);
backsong.addEventListener('click', BackSong);