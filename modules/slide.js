const slide = () => {
    const gameButton = document.querySelectorAll('.g');
    const slideBg = document.querySelector('.game-modal')
    const slideItems = document.querySelectorAll('.modal-content')
    gameButton.forEach(element => {
        element.addEventListener('click', () => {
            const id = element.getAttribute('data-id');
            let currentSlide = document.querySelector(id);
            slideItems.forEach(slide => {
                slide.classList.remove('active')
            });
            currentSlide.classList.add('active');
        });
    });
    const use = document.querySelectorAll('.s')
    use.forEach(item =>{
        item.addEventListener('click', () => {
            if(item.classList.contains('success')){
                slideBg.style.backgroundImage = "url('../img/pictures/bghsucces.png')";
                slideBg.classList.add('succes');
            }
            else{
                slideBg.style.backgroundImage = "url('../img/pictures/bgerror.png')";
                slideBg.classList.add('failure');
            }
        })
    })
};
export default slide;