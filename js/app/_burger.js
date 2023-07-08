//Добавляет / убирает класс при скролле----------------
const headerBurger = $('.header__burger');
// const headerBurgerCont = document.querySelector('.header__burger-cont');
const headerMenu = $('.header__menu-burger');
const header = $('.header');

// function addUpper() {
//    let yOffSet = window.pageYOffset;
//    if (yOffSet > header.offsetHeight) {
//       headerBurger.classList.add('_act');
//       headerMenu.classList.add('_act');
//    }else{
//       headerBurger.classList.remove('_act');
//       headerBurger.classList.remove('_activet');
//       headerBurgerCont.classList.remove('_activet');
//       headerMenu.classList.remove('_activet');
//       headerMenu.classList.remove('_act');
//       document.body.classList.remove('_lock');
//    }
// }
// window.addEventListener('scroll', addUpper);

if(headerBurger){
   headerBurger.click( function(e){  
      headerBurger.toggleClass('_activet');
      $('body').toggleClass('_lock');
      headerMenu.toggleClass('_activet');
   });
}