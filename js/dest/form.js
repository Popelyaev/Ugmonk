if(document.querySelector('#form')) {
   document.querySelector('#form').addEventListener('submit', function(e) {
      e.preventDefault();
      formExamin(e, '#form');
   });
}

function formExamin (e , name) {
   let formReq = document.querySelectorAll(name + ' ._req');
   for (let index = 0; index < formReq.length; index++) {
      let input = formReq[index];

      if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
         input.classList.add('_error');
      } else if (input.value == "") {
         input.classList.add('_error');
      } else {
         input.classList.remove('_error');
      }
   }
   let inputError = document.querySelectorAll(name + ' ._error');
   if(inputError.length > 0) {
      document.querySelector(name + ' ._assets').innerHTML = "Заполните все поля!";   
   }else{
      document.querySelector(name).classList.add('_sending');
      document.querySelector(name + ' ._assets').innerHTML = "Заявка успешно отправлена!";
      e.target.reset();
      document.querySelector(name).classList.remove('_sending');
   }
}