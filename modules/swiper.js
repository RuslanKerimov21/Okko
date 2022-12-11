const swipers = () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        centeredSlides: true,
        direction: 'horizontal',
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};
export default swipers;