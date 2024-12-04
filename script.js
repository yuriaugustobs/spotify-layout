const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progress');
const timeDisplay = document.getElementById('time-display');

let isPlaying = false;

//aqui vou criar a funcao para fazer tocar/pausar o player...

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        ////////////////////////;
    } else {
        audio.play();
        ////////////////////////;
    }
    isPlaying = !isPlaying;
    });