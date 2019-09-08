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

//Создание чипса (всплывающего окна)
function chips(message, timeremove = 3000) {
    let chips = document.createElement('div'); // генерируем блок
    chips.classList.add('chipp'); // присваиваем ему класс
    chips.innerHTML = message; // вставляем в блок какое-либо сообщение
    addChips(chips); //создание чипса
    setTimeout(function () {
        deleteChips(chips)
    }, timeremove); // формирование времени жизни чипса
};

// Функция удаление чипса
function deleteChips(chips) {
    chips.remove();
}

// Функция, проверяющая существование поля (дива)для чипсов. Если оно есть, то создается в нем чипс на странице документа; если нет, то сначала создается такое поле, а потом в нем чипс
function addChips(chips) { 
    let chipsField = document.querySelector('.chips-field');
    if (chipsField) {
        chipsField.appendChild(chips);
    } else {
        let chipsField = document.createElement('div');
        chipsField.classList.add('chips-field');
        document.querySelector('body').appendChild(chipsField);
        chipsField.appendChild(chips);
    }
}

/*================================================================
Аякс-запрос отправки формы
=================================================================*/

let form = document.querySelector('#form');

form.onsubmit = function (event) { 
    event.preventDefault();

    let formData = new FormData(form);    
    
    let xhttp = new XMLHttpRequest(); 
    xhttp.open('POST', 'mail.php'); 
    xhttp.send(formData); 

    xhttp.onreadystatechange = function () { 
        if (this.readyState == 4 && this.status == 200) {
            form.reset();             
            chips('Спасибо за обращение! <br> В ближайшее время мы с вами свяжемся', 5000);
        }
    }    
}
