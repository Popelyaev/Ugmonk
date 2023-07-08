$(function(){
if(document.querySelector('.exemples')){
   innerText ();
   const arrow = document.querySelectorAll('.slick-arrow');


   if(arrow.length > 0) {
      for (let index = 0; index < arrow.length; index++) {
         const el = arrow[index];
         el.addEventListener("click", function(e) {
            innerText ();
         });
      } 
   }



   function innerText () {
      const mobileWrapper = document.querySelector('.exemples__mobile-wrapper');
      const desctopWrapper = document.querySelector('.exemples__computer-wrapper');
      const tableWrapper = document.querySelector('.exemples__table-wrapper');

      if(mobileWrapper.closest('.slick-active')) {
         document.querySelector('.exemples__arrows-text').innerHTML = "Мобильная версия сайта";
      }else if (desctopWrapper.closest('.slick-active')){
         document.querySelector('.exemples__arrows-text').innerHTML = "Компьютерная версия сайта";
      }else if (tableWrapper.closest('.slick-active')){
         document.querySelector('.exemples__arrows-text').innerHTML = "Планшетная версия сайта";
      }
   } 
}
});