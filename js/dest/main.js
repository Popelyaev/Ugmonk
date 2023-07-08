// $(document).ready(function(){
//    $('.slider').slick({
//       arrows: false,
//       speed: 500,
//       infinite: true,
//       autoplay: true,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       pauseOnDotsHover: false,
//       draggable: false,
//       swipe: false,
//       autoplaySpeed: 4000,
//       fade: true,
//       cssEase: 'linear',
//    });
// });
$(document).ready(function(){
   $('.slider-block__content').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               infinite: true,
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 480,
            settings: {
               infinite: true,
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         },

      ],
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      draggable: false,
      swipe: true,
      cssEase: 'linear',

      appendArrows: '.slider-block__arrows',
   });
});

$(document).ready(function(){
   $('.offer__slider').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      draggable: false,
      swipe: true,
      cssEase: 'linear',

      appendArrows: '.offer__block-arrows',

      autoplay: true,
      autoplaySpeed: 4000,
   });
});

$(document).ready(function(){
   $('.our-us__slider').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnFocus: false,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      draggable: false,
      swipe: true,
      cssEase: 'linear',

      appendArrows: '.our-us__block-arrows',

      autoplay: true,
      autoplaySpeed: 4000,
   });
});

const linkPopups = document.querySelectorAll(".popup-activet");

if(linkPopups.length > 0) {
   for (let index = 0; index < linkPopups.length; index++) {
      const linkPopup = linkPopups[index];
      linkPopup.addEventListener('click', function(e) {
         if(document.querySelector('.form-popup')) {
            e.preventDefault();
         }else{

         e.preventDefault();
         document.querySelector('main').insertAdjacentHTML('afterend', `
            <div class="popup-wrapper">
               <form id="form-popup" class="popup-wrapper__form form-popup" action="">
               <div class="popup-wrapper__close"></div>
               <div class="popup-wrapper__wrapper-content">
                  <h3 class="popup-wrapper__form-title">Заказать звонок</h3>
                  <label class="_hidden" for="name">Имя</label>
                  <input id="name" type="text" placeholder="Имя" name="name" class="popup-wrapper__input-text _input-text _req">
                  <label class="_hidden" for="mail">email</label>
                  <input id="mail" type="mail" placeholder="EMAIL" name="mail" class="popup-wrapper__input-text _input-text _req">
                  <label class="_hidden" for="telephone">Телефон</label>
                  <input id="telephone" type="text" placeholder="Телефон" name="telephone" class="popup-wrapper__input-text _input-text _req">
                  <div class="popup-wrapper__lable-wrapper">
                     <label class="popup-wrapper__lable _lable">
                        <input class="popup-wrapper__checkbox _checkbox _req" name="checkbox" type="checkbox">
                        <span class="popup-wrapper__checkbox-style _checkbox-style"></span>
                     </label>
                     <span class="popup-wrapper__checkbox-text">Я даю согласие на использование <a href="politika-konfidencialnosti.html">персональных данных</a>*</span>
                  </div>
                  </div class="popup-wrapper__wrapper-content">
                  <button class="popup-wrapper__button _button" type="submit">Отправить</button>
                  <p class="popup-wrapper__assets _assets"></p>
               </form>
            </div>
            `);
            if(document.querySelector('.popup-wrapper__close')) {
               popupLeson();
               popupEsc();
               clickWrap();

               if(document.querySelector('#form-popup')) {
                  document.querySelector('#form-popup').addEventListener('submit', function(e) {
                     e.preventDefault();
                     formExamin(e, '#form-popup');
                  });
               }
            }
            if(!document.querySelector('body._lock')) {
               document.querySelector('body').classList.add('_lock')
            }
         }
      });
   }
}

function popupLeson () {
   document.querySelector('.popup-wrapper__close').addEventListener('click', function(e) {
      document.querySelector('.popup-wrapper').remove();
      if(document.querySelector('body._lock')) {
         document.querySelector('body').classList.remove('_lock')
      }
   });
}
function popupEsc() {

document.addEventListener("keyup", function(event) {
   if(document.querySelector('.popup-wrapper') ) {
      if (event.code == 'Escape') {
         document.querySelector('.popup-wrapper').remove();
            if(document.querySelector('body._lock')) {
               document.querySelector('body').classList.remove('_lock');
            }
         }
      }
   });
};

function clickWrap () {
   document.querySelector('.popup-wrapper').addEventListener('click', function(e) {
      if(!e.target.closest('.popup-wrapper__form')) {
         document.querySelector('.popup-wrapper').remove();
         if(document.querySelector('body._lock')) {
            document.querySelector('body').classList.remove('_lock');
         }
      }
   });
}



