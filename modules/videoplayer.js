const videoplayer = () => {
    const play = document.getElementById('plays')
    const video = document.getElementById('video')
    const buttonPlayerImg = document.querySelector('.button-player__img')
    function startVideo(){
        if(video.paused){
            video.play();
            buttonPlayerImg.src = 'img/icon/play.svg'
            play.classList.add('hide')
        }
        else{
            video.pause();
            buttonPlayerImg.src = 'img/icon/pause.fill.svg'
            play.classList.remove('hide')
        }
    }
    play.addEventListener('click', startVideo)
    video.addEventListener('click', startVideo)
};
export default videoplayer;