if(document.querySelector('.home')) {


const block = document.querySelector('.header');

const heightHeader = block.offsetHeight;
const heightWindow = window.innerHeight;
const heightHome = heightWindow - heightHeader;

const homeBlock = document.querySelector('.home');
homeBlock.style.minHeight = heightHome + "px";
}
