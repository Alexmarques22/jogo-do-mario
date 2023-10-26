const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')


const jump = () => {

    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500)
    
  
}
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    //console.log(pipePosition);

    const marioComputed = window.getComputedStyle(mario)
    .bottom
   
    const marioPosition = marioComputed.replace('px','')
    console.log('pulo: ' + marioPosition);
    console.log('tubo: ' + pipePosition);



    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = pipePosition + 'px'

        mario.style.animation = 'none'
        mario.style.bottom = marioPosition +'px'

        mario.src = 'img/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = '50px'
        
    }


}, 10)

document.addEventListener('keydown' , jump)