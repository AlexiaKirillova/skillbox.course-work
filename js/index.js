window.addEventListener('DOMContentLoaded', function(){

    const menuLink = document.querySelectorAll('.menu__link');
    for (i = 0; i < menuLink.length; i++) {
        const thisMenuLink = menuLink[i];
        const submenu = menuLink[i].nextElementSibling;
        const thisMenuArrow = menuLink[i].lastElementChild;
        thisMenuLink.addEventListener('click', function(el) {
            el.preventDefault();
            submenu.classList.toggle('dropdown-menu--open');
            thisMenuArrow.classList.toggle('menu__arrow--active');
        });
    }

//   let burger = document.querySelector('.header__burger');
//   let close = document.querySelector('.header__burger-close');
//   let menu = document.querySelector('.header-nav');
  
//   burger.addEventListener('click', function(el){
//     el.preventDefault();
//     menu.classList.add('header-nav__open');
//   });
//   close.addEventListener('click', function(el){
//     el.preventDefault();
//     menu.classList.remove('header-nav__open');
//   });

    const moreDetails = document.querySelector('.events-section__link');
    // console.log(moreDetails);
    const displayCards = document.querySelector('.events-section__item--hide');
    console.log(displayCards);

    moreDetails.addEventListener('click', function(e) {
        e.preventDefault();
        // displayCards.classList.add('events-section__item--show');
        displayCards.style.display = "block";
        // document.getElementsByClassName('mystyle')[0].style.margin = "50px";
        // displayCards.classlist.remove('events-section__item--todisplay');
        // displayCards.classlist.add('events-section__item');
        
    });

});

