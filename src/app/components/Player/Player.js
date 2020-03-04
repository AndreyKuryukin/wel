
const path = '/sounds/'
const aud = new Audio();
aud.preload = 'auto';

function play(name = 'volchok', onEnd) {
    aud.pause();
    aud.src = `${path}${name}.mp3`;
    aud.play();
    aud.onended = onEnd;
}

function stopPlay() {
    aud.pause();
}

export default {
    play,
    stopPlay
}