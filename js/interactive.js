window.addEventListener('DOMContentLoaded', function(){

  // choices
  const element = document.querySelector('.gallery');
  const choises = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
    placeholder: false,
    renderSelectedChoices: 'null',
  });


  // swiper

  const sliderHero = document.querySelector('.swiper-container--hero');
  const sliderGallery = document.querySelector('.swiper-container--gallery');
  const sliderEditions = document.querySelector('.swiper-container--editions');
  const sliderProjects = document.querySelector('.swiper-container--projects');

  let swiperHero = new Swiper(sliderHero, {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });

  let swiperGallery = new Swiper(sliderGallery, {
    breakpoints: {
      1025: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },
    pagination: {
      el: '.gallery-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  let swiperEditions = new Swiper(sliderEditions, {
    breakpoints: {
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },
    pagination: {
      el: '.editions-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  let swiperProjects = new Swiper(sliderProjects, {
    breakpoints: {
      1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    loop: true,

  });



  // accordion
  $( function() {
    // $( "#accordion" ).accordion({
    //   collapsible: true,
    //   active: false,
    // });
  } );

  $( function() {
    const icons = {
      header: "round-btn catalogue__btn",
      activeHeader: "round-btn catalogue__btn__open"
    };
    $( "#accordion" ).accordion({
      icons: icons
    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
  } );

  // yandex-map
      // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
        // Создание карты.
    const myMap = new ymaps.Map("contacts-map", {
      center: [55.75846306898368,37.601079499999905],
      zoom: 15,
      controls: [],
    });

    // Создание геообъекта с типом точка (метка).
    const myGeoObject = new ymaps.GeoObject({
      geometry: {
      type: "Point",
      coordinates: [55.75846306898368,37.601079499999905]
      }
    });

    const myPlacemark = new ymaps.Placemark([55.75846306898368,37.601079499999905], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icons/map-point.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });

    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);

  }



});





