const shareBtn = document.querySelector('.card__content__button');

const socialIcons=document.querySelector('.card__content__social-icons');

shareBtn.addEventListener('click', ()=>{
    socialIcons.classList.toggle('show');
});