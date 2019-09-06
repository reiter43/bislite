// Скрытие/показ меню и анимация кноаки бургер
let burger = document.querySelector(".header__burger");

document.querySelector('.burger').addEventListener('click',  event => {
	event.preventDefault;
    event.target.classList.toggle('burger--active');

    if ( document.querySelector('.nav').style.display != 'block') {
    document.querySelector('.nav').style.display = 'block'} else{
        document.querySelector('.nav').style.display = 'none'
    }	
});