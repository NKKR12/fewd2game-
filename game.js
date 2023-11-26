document.addEventListener('DOMContentLoaded', function() {
    var nickname = localStorage.getItem('nickname')

    var displaynickname = document.querySelector('.append')
    displaynickname.innerHTML = `HEY, ${nickname}`
})
score = 0;
cross = true;

audio = new Audio("music.mp3")
audioout = new Audio('gameendaudio.mp3')
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector('dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }


    if (e.keyCode == 37) {
        dino = document.querySelector('dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + 'px';
    }
}
setInterval(() => {
    dino = document.querySelector('dino')
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 73 && offsetY < 52) {
        gameover.innerHTML = 'Game over - reload to play again';
        obstacle.classList.remove('obstacleAnimation')
        audioout.play()
        setTimeout(() => {
            audioout.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        console.log(score,)
        updateScore(score);

        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDuration = aniDuration - 0.1;
            obstacle.style.animationDuration = newDuration + 's';
            console.log('New animation duration:', newDuration)
        }, 500);

    }
}, 10);

function updateScore(score) {
    let score1 = document.getElementById('scorecount')
    score1.innerHTML = "SCORE:" + score
    console.log(score)
}
