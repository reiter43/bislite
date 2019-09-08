ymaps.ready(init);
function init(){ 
    // Создание карты.    
    let myMap = new ymaps.Map("map", {               
        center: [49.642686, -125.724838], // Координаты центра карты.Порядок по умолчанию: «широта, долгота».         
        zoom: 7 // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
    });


    //Отключение поведений
    myMap.behaviors.disable([
        'scrollZoom' // Отключает масштабирование карты при скроле
    ]);


    //Удаление элементов управления
    myMap.controls.remove('trafficControl'); // Пробки 
    myMap.controls.remove('typeSelector'); // Слои
    myMap.controls.remove('geolocationControl'); // Геолокация
    myMap.controls.remove('searchControl'); // Окно поиска
   
    
    // Создание метки
    let myPlacemark = new ymaps.Placemark([49.642686, -125.724838],{
        // balloonContentHeader: '<h5>"Студия пилатеса"</h5>',
        // balloonContentBody: 'Всегда рады вас видеть у нас',
        hintContent: 'Мы тут',
      },
        // Опции для изображения собственной метки
       {            
        iconLayout: 'default#image',// Необходимо указать данный тип макета.        
        iconImageHref: '../img/images/pointer.png',// Своё изображение иконки метки.        
        iconImageSize: [25, 44],// Размеры метки.        
        iconImageOffset: [0, -15]// Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
      })
        // Вывод метки
    myMap.geoObjects.add(myPlacemark);      
}