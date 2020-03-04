
const path = '/sounds/'
const aud = new Audio();
aud.preload = 'auto';

function play(name = 'volchok') {
    aud.pause();
    aud.src = `${path}${name}.mp3`;
    aud.play();
}

function stopPlay() {
    aud.pause();
}

export default {
    play,
    stopPlay
}