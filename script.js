const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const video = document.getElementById('video');
const modal = document.getElementsByClassName('modal')[0];

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

video.pause();

window.addEventListener('resize',()=>{
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});

modal.addEventListener('click',()=>{
    video.pause();
    modal.style.display = 'none';
    window.location.reload();
});

yesBtn.addEventListener('click',()=>{
    modal.style.display = 'block';
    video.play();
});

noBtn.addEventListener('mouseover',()=>{
    noBtn.style.left = getWidth()+'px';
    noBtn.style.top = getHeight()+'px';
});

function  getWidth() {
    let width = Math.random() * screenWidth;

    while( width < 0 && (width-noBtn.offsetWidth) > screenWidth){
        width = Math.random() * screenWidth;
    }

    return width;
}

function  getHeight() {
    let height = Math.random() * screenHeight;

    while( height < 0 && (height-noBtn.offsetHeight) > screenHeight){
        height = Math.random() * screenHeight;
    }

    return height;
}