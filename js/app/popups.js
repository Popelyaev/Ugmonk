

// добавляем класс popup-link
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
//добавляем класс для фиксированных объектов что бы они не смещались при нажатии попапа
const lockPadding = document.querySelectorAll('.lock-padding');


//Добавляем объекты которые надо скрыть
const upperPopup = document.querySelector('.upper');
const burgerPopup = document.querySelector('.header__burger');

let unlock = true;

const timeout = 800; //должен быть равным анимации в css

// Инициализация

if (upperPopup) {
}

if(popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function(e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

// Закрытие попапа
//Добавить класс к закрывающему объекту - close-popup

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener("click", function(e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   } 
}

//Функция открытия попапа

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}

//Функция закрытия попапа

function popupClose(popupActive, doUnlock = true) {
   if(unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

let doUnLock = true;

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('_lockPopup');
   upperPopup.classList.add('_hidden');
   burgerPopup.classList.add('_hidden');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnLock () {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lockPopup');
      
      upperPopup.classList.remove('_hidden');
      burgerPopup.classList.remove('_hidden');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

//Закрытие попапа по esc

document.addEventListener('keydown', function(e) {
   if (e.key === 27) {
      const popupActive = document.querySelector('.popum.open');
      popupClose(popupActive);
   }
});
