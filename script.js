
const boom = document.querySelector("#boom");
const clap = document.querySelector("#clap");
const hihat = document.querySelector("#hihat");
const kick = document.querySelector("#kick");
const openhat = document.querySelector("#openhat");
const ride = document.querySelector("#ride");
const snare = document.querySelector("#snare");
const tink = document.querySelector("#tink");
const tom = document.querySelector("#tom");


document.addEventListener('keydown', playSound);
document.addEventListener('keyup', removeEffect);

boom.addEventListener('click', () => new Audio('sounds/boom.wav').play());
clap.addEventListener('click', () => new Audio('sounds/clap.wav').play());
hihat.addEventListener('click', () => new Audio('sounds/hihat.wav').play());
kick.addEventListener('click', () => new Audio('sounds/kick.wav').play());
openhat.addEventListener('click', () => new Audio('sounds/openhat.wav').play());
ride.addEventListener('click', () => new Audio('sounds/ride.wav').play());
snare.addEventListener('click', () => new Audio('sounds/snare.wav').play());
tink.addEventListener('click', () => new Audio('sounds/tink.wav').play());
tom.addEventListener('click', () => new Audio('sounds/tom.wav').play());


    function playSound(event) {
        switch (event.key) {
            case 'a':
                clap.classList.toggle('active');
                new Audio('sounds/clap.wav').play();
                break;
            case 's':
                hihat.classList.toggle('active');
                new Audio('sounds/hihat.wav').play();
                break;
            case 'd':
                kick.classList.toggle('active');
                new Audio('sounds/kick.wav').play();
                break;
            case 'f':
                openhat.classList.toggle('active');
                new Audio('sounds/openhat.wav').play();
                break;
            case 'g':
                boom.classList.toggle('active');
                new Audio('sounds/boom.wav').play();
                break;
            case 'h':
                ride.classList.toggle('active');
                new Audio('sounds/ride.wav').play();
                break;
            case 'j':
                snare.classList.toggle('active');
                new Audio('sounds/snare.wav').play();
                break;
            case 'k':
                tom.classList.toggle('active');
                new Audio('sounds/tom.wav').play();
                break;
            case 'l':
                tink.classList.toggle('active');
                new Audio('sounds/tink.wav').play();
                break;
        }
    }

    function removeEffect(event){
    switch (event.key) {
        case 'a':
            clap.classList.toggle('active');
            break;
        case 's':
            hihat.classList.toggle('active');
            break;
        case 'd':
            kick.classList.toggle('active');
            break;
        case 'f':
            openhat.classList.toggle('active');
            break;
        case 'g':
            boom.classList.toggle('active');
            break;
        case 'h':
            ride.classList.toggle('active');
            break;
        case 'j':
            snare.classList.toggle('active');
            break;
        case 'k':
            tom.classList.toggle('active');
            break;
        case 'l':
            tink.classList.toggle('active');
            break;
    }
}