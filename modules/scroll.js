const scroll = () => {
    function scrollTo(element) {
        window.scroll({
          left: 0, 
          top: element.offsetTop, 
          behavior: 'smooth'
        })
      }
      var button = document.querySelector('.down');
      var footer = document.querySelector('#two');
    
      button.addEventListener('click', () => {
        scrollTo(footer);
      })
};
export default scroll;