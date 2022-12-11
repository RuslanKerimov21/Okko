const audioplayer = () => {
    const player = document.getElementById('audioplayer');
    const playAudio = document.getElementById('playmusic');
    const prevAudio  = document.getElementById('prev');
    const nextAudio  = document.getElementById('next');
    const music = document.querySelector('.music');
    const songTitle = document.getElementById('title');
    const songInfo = document.getElementById('author')
    const playImg = document.querySelector('.playimg');
    const songsName = ['Ясный мой свет', 'Warriyo-feat-Laura-Brehm'];
    const songsAuthor = ['10+1 хит Булановой', 'Warriyo'];
    let songIndex = 0;
    function loadMusic(song, author){
        songTitle.innerHTML = song;
        songInfo.innerHTML = author;
        music.src = `audio/${song}.mp3`;
    }
    loadMusic(songsName[songIndex], songsAuthor[songIndex])
    function playSong(){
        player.classList.add('play')
        playImg.src = '/img/icon/pause.fill.svg'
        music.play()
    }
    function pauseSong(){
        player.classList.remove('play')
        playImg.src = '/img/icon/play.svg'
        music.pause()
    }
    playAudio.addEventListener('click', () => {
        const isPlay = player.classList.contains('play')
        if(isPlay){
            pauseSong();
        }
        else{
            playSong();
        }
    })
    function nextMusic(){
        songIndex++;
        if(songIndex > songsName.length -1, songIndex > songsAuthor.length -1){
            songIndex = 0;
        }
        loadMusic(songsName[songIndex], songsAuthor[songIndex]);
        playSong();
    }
    nextAudio.addEventListener('click', nextMusic);
    function prevMusic(){
        songIndex--;
        if(songIndex < 0){
            songIndex = songsName.length - 1;
        }
        loadMusic(songsName[songIndex], songsAuthor[songIndex]);
        playSong();
    }
    prevAudio.addEventListener('click', prevMusic);
};
export default audioplayer;