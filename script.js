const keys = document.querySelectorAll('.keys');


window.addEventListener("keydown", playKeystroke);
keys.forEach(key => key.addEventListener('click', ()=> playClick(key)));
keys.forEach(key => key.ontransitionend = () => key.classList.remove('active'));


function playClick(key) {
    const att  = key.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${att}"]`);
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
}


function playKeystroke(e)  {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(audio==null)
        return;
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
}


