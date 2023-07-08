// const okleika = document.querySelectorAll(".service__content-okleika");
// const deteiling = document.querySelectorAll(".service__content-deteiling");
// const serviceButtons = document.querySelectorAll(".service__button");

// serviceButtons.forEach(button => {
//    button.addEventListener("click", function () {
//       if (button.classList.contains("_button-off")) {
//          document.querySelector("._button-active").classList.add("_button-off");
//          document.querySelector("._button-active").classList.remove("_button-active");
//          button.classList.add('_button-active')
//          button.classList.remove('_button-off')


//          if (document.querySelector(".button-okleika._button-active")) {
//             console.log('okleika');
//             deteiling.forEach(item => {
//                item.classList.remove("_active");
//             });
//             okleika.forEach(item => {
//                item.classList.add("_active");
//             });
//          }else if (document.querySelector(".button-deteiling._button-active")) {
//             console.log('deteiling');
//             okleika.forEach(item => {
//                item.classList.remove("_active");
//             });
//             deteiling.forEach(item => {
//                item.classList.add("_active");
//             });
//          }
//       }
//    });
// });

const selectors = document.querySelectorAll(".catalog__item");
selectors.forEach((selector, index) => {
   selector.addEventListener("click", function(event) {
      event.preventDefault();
      if (!selector.classList.contains('_active')) {
         document.querySelector('.catalog__item._active').classList.remove('_active');
         this.classList.add('_active');



         document.querySelectorAll(".catalog__wrapper-product._active").forEach(activeRemove =>{
            activeRemove.classList.remove("_active");
            console.log('yes');
         });
         document.querySelector("#catalog-" + (index + 1)).classList.add("_active");


      }
   });
});

