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


// Фильтрация работ по категориям

let buttonsPortf = document.querySelectorAll('.portfolio__button');

buttonsPortf.forEach(function(btn){
    btn.onclick = function(event){
        event.preventDefault;

        buttonsPortf.forEach(function(btn){
            btn.classList.remove("portfolio__button--active");
            event.target.classList.add("portfolio__button--active");            
        })

        let buttonFilter = btn.innerHTML;
        console.log(buttonFilter);     

        let portfolioItems = document.querySelectorAll('.worksItem--portfolio');
        
        portfolioItems.forEach(elem => {
            elem.style.display = 'none';

            if (buttonFilter == 'All'){
                elem.style.display = 'block';
            }

            if(elem.classList.contains(buttonFilter)){            
                elem.style.display = 'block';
            }                
        })
    }
})

