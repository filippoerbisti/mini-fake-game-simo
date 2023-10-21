window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.2;
    audio.play();
  });



function start() {
    const audio = document.querySelector("audio");
    const intro = document.getElementById("intro");
    const game = document.getElementById("story");
    const body = document.getRootNode().body;
    console.log(body)
    if(confirm('Ruotare lo schermo pls :)')) {
        audio.pause();
        intro.style.display = 'none';
        body.style.overflow = 'auto';
        game.style.display = 'flex';
    }
}
