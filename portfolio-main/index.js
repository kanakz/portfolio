// document.getElementById("open-modal-but").addEventListener("click",function(){
//     document.getElementById("my-modal").classList.add("open")
// })

// navbar
document.querySelector('.burger').addEventListener('click', function() {
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('animate');
});


//animate
const title = document.querySelector('.title-promo');
const text = title.querySelector('.typed-text').textContent;
const text2 = title.querySelector('.typed-text-2').textContent;
const paragraph = document.querySelector('.paragrah-promo');
const paragraphText = paragraph.querySelector('.typed-text').textContent;

let index = 0;
let index2 = 0;
let paragraphIndex = 0;

function typeEffect() {
  if (index < text.length) {
    title.querySelector('.typed-text')+text.charAt(index);
    index++;
    setTimeout(typeEffect, 20);
  } else {
    title.querySelector('.typed-text').classList.add('is-visible');
    setTimeout(typeEffect2, 400);
  }
}

function typeEffect2() {
  if (index2 < text2.length) {
    title.querySelector('.typed-text-2')+ text2.charAt(index2);
    index2++;
    setTimeout(typeEffect2, 30);
  } else {
    title.querySelector('.typed-text-2').classList.add('is-visible');
    setTimeout(typeParagraph, 400);
  }
}

function typeParagraph() {
  if (paragraphIndex < paragraphText.length) {
    paragraph.querySelector('.typed-text')+paragraphText.charAt(paragraphIndex);
    paragraphIndex++;
    setTimeout(typeParagraph, 35);
  } else {
    paragraph.querySelector('.typed-text').classList.add('is-visible');
  }
}

typeEffect()

const button = document.querySelector('#open-modal-btn');
const buttonText = button.textContent;

let buttonIndex = 0;
let newButtonText = '';

function typeButton() {
  if (buttonIndex < buttonText.length) {
    newButtonText += buttonText.charAt(buttonIndex);
    button.textContent = newButtonText;
    buttonIndex++;
    setTimeout(typeButton, 300);
  } else {
    button.classList.add('is-visible');
    
  }
}

typeButton();


// modal
document.getElementById("open-modal-btn").addEventListener("click", function(){
  document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click", function(){
  document.getElementById("my-modal").classList.remove("open")
})

document.querySelector("#my-modal .modal_box").addEventListener('click', event =>{
  event._isClickWithModal = true;
})
document.querySelector("#my-modal").addEventListener('click', event =>{
  if(event._isClickWithModal) return;
  event.currentTarget.classList.remove('open');
})
