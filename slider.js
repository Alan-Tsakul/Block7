

// Sliders

const slider = document.querySelector('.swiper-container');
const sliderSecond = document.querySelector('.about-technic-kinds-swiper__container');
const sliderThird = document.querySelector('.about-prices-swiper__container');


let mySwiper;

  function mobileSlider() {
    if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider, {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        pagination:  {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      slider.dataset.mobile = 'true';
    }
  
    if(window.innerWidth > 768) {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-container-initialized')) {
        mySwiper.destroy();
      }
    }
  }
  mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});
        

let mySecondSwiper;
function mobileSliderSecond() {
  if (window.innerWidth <= 768 && sliderSecond.dataset.mobile == 'false') {
     mySecondSwiper = new Swiper(sliderSecond, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    sliderSecond.dataset.mobile = 'true';
  }

  if(window.innerWidth > 768) {
    sliderSecond.dataset.mobile = 'false';
    if (sliderSecond.classList.contains('swiper-container-initialized')) {
      mySecondSwiper.destroy();
    }
  }
}

mobileSliderSecond();

window.addEventListener('resize', () => {
  mobileSliderSecond();
});

let myThirdSwiper;
function mobileSliderThird() {
  if (window.innerWidth <= 768 && sliderThird.dataset.mobile == 'false') {
     myThirdSwiper = new Swiper(sliderThird, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 2 ,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    sliderThird.dataset.mobile = 'true';
  }

  if(window.innerWidth > 768) {
    sliderThird.dataset.mobile = 'false';
    if (sliderThird.classList.contains('swiper-container-initialized')) {
      myThirdSwiper.destroy();
    }
  }
}

mobileSliderThird();

window.addEventListener('resize', () => {
  mobileSliderThird();
});

 
 mobileSlider();
 
 window.addEventListener('resize', () => {
   mobileSlider();
 });

 // Hide and show logo

let buttonShowAll = document.querySelector('.swiper-show-all__btn'),
imageShowAll = document.querySelector('.swiper-show-all__img'),
imageShowAllSecond = document.querySelector('.about-technic-kinds-swiper-show-all__img'),
elems = document.querySelectorAll('.hidden'),
elemstablet = document.querySelectorAll('.hidden-tablet'),
buttonShowAllSecond = document.querySelector('.about-technic-kinds-swiper__btn'),
elemstabletSecond = document.querySelectorAll('.about-technic-kinds-swiper__hidden-tablet'),
elemsDesktop = document.querySelectorAll('.hidden-desktop');

buttonShowAll.addEventListener('click', () => {
  for(let i = 0; i < elems.length; i++){
    for(let j = 0; j < elemstablet.length; j++){
      elems[i].classList.toggle('hidden');
      elemstablet[j].classList.toggle('hidden-tablet');
      imageShowAll.classList.toggle('rotate');
      buttonShowAll.classList.toggle('swiper-show-all__btn-mod');
    }
    }
});

buttonShowAllSecond.addEventListener('click', () => {
  for(let j = 0; j < elemstabletSecond.length; j++){
    elemstabletSecond[j].classList.toggle('about-technic-kinds-swiper__hidden-tablet');
    imageShowAllSecond.classList.toggle('rotate');
    buttonShowAllSecond.classList.toggle('swiper-show-all__btn');
  }
});


// Mobile menu

let buttonMenu = document.querySelector('.header-menu__btn-burger-menu-pic'),
closeMenu = document.querySelector('.mobile-menu__close-btn'),
mobileMenu = document.querySelector('.mobile-menu'),
overlayMenu = document.querySelector('.overlay');

buttonMenu.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu-active');
  mobileMenu.classList.remove('mobile-menu-close');
  overlayMenu.style.visibility = "visible";
  document.body.style.overflow = 'hidden';
  blurDocument.classList.add('blur');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu-close');
  mobileMenu.classList.remove('mobile-menu-active');
  document.body.style.overflow = '';
  overlayMenu.style.visibility = "hidden";
  blurDocument.classList.remove('blur');
});

document.addEventListener('click', (e) => {
  if (e.target == overlayMenu ) {
    mobileMenu.classList.add('mobile-menu-close');
    mobileMenu.classList.remove('mobile-menu-active');
    document.body.style.overflow = '';
    overlayMenu.style.visibility = "hidden";
    blurDocument.classList.remove('blur');
  }
});


// Modal windows

const modalTrigger = document.querySelectorAll('[data-modal-feedback]'),
modalTriggerSecond = document.querySelectorAll('[data-modal-callback]'),
blurDocument = document.querySelector('.container'),
modal = document.querySelector('.modal'),
modalCallback = document.querySelector('.modal-callback'),
modalCloseBtn = document.querySelector('[data-close-modal]'),
modalCloseBtnSecond = document.querySelector('[data-close-modal-callback]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
    blurDocument.classList.add('blur');
  });
});

modalTriggerSecond.forEach(btn => {
  btn.addEventListener('click', () => {
    modalCallback.style.display = "block";
    document.body.style.overflow = 'hidden';
    blurDocument.classList.add('blur');
  });
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = '';
  blurDocument.classList.remove('blur');
}

modalCloseBtn.addEventListener('click', closeModal);

document.addEventListener('click', (e) => {
  if (e.target == modal ) {
    closeModal();
  }
});

function closeModalCallback() {
  modalCallback.style.display = "none";
  document.body.style.overflow = '';
  blurDocument.classList.remove('blur');
}

modalCloseBtnSecond.addEventListener('click', closeModalCallback);

document.addEventListener('click', (e) => {
  if (e.target == modalCallback ) {
    closeModalCallback();
  }
});
