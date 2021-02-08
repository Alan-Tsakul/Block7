

// Sliders

const sliderAboutBrands = document.querySelector('.swiper-container');
const sliderAboutTechnicKinds = document.querySelector('.about-technic-kinds-swiper__container');
const sliderAboutPrices = document.querySelector('.about-prices-swiper__container');

let mySwiper;
let mySecondSwiper;
let myThirdSwiper;

  function mobileSlider(mySwiper, sliderAboutBrands) {
    if (window.innerWidth <= 768 && sliderAboutBrands.dataset.mobile == 'false') {
      mySwiper = new Swiper(sliderAboutBrands, {
        direction: 'horizontal',
        slidesPerView: 2,
        pagination:  {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      sliderAboutBrands.dataset.mobile = 'true';
    }
  
    if(window.innerWidth > 768) {
      sliderAboutBrands.dataset.mobile = 'false';
      if (sliderAboutBrands.classList.contains('swiper-container-initialized')) {
        mySwiper.destroy();
      }
    }
  }
  mobileSlider(mySwiper, sliderAboutBrands);
  mobileSlider(mySecondSwiper, sliderAboutTechnicKinds);
  mobileSlider(myThirdSwiper, sliderAboutPrices);

window.addEventListener('resize', () => {
  mobileSlider(mySwiper, sliderAboutBrands);
  mobileSlider(mySecondSwiper, sliderAboutTechnicKinds);
  mobileSlider(myThirdSwiper, sliderAboutPrices);
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
overlay = document.querySelector('.overlay'),
menuOverlay = document.querySelector('.menu-overlay'),
blurDocument = document.querySelector('.container'),
overlayMenu = document.querySelector('.blur-container');

buttonMenu.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu-active');
  mobileMenu.classList.remove('mobile-menu-close');
  menuOverlay.style.visibility = "visible";
  overlayMenu.classList.add('overlay');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu-close');
  mobileMenu.classList.remove('mobile-menu-active');
  document.body.style.overflow = '';
  menuOverlay.style.visibility = "hidden";
  overlayMenu.classList.remove('overlay');
});

menuOverlay.addEventListener('click', (e) => {
  if (e.target == menuOverlay ) {
    mobileMenu.classList.add('mobile-menu-close');
    mobileMenu.classList.remove('mobile-menu-active');
    document.body.style.overflow = '';
    menuOverlay.style.visibility = "hidden";
    overlayMenu.classList.remove('overlay');
  }
});


// Modal windows

const modalTrigger = document.querySelectorAll('[data-modal-feedback]'),
modalTriggerSecond = document.querySelectorAll('[data-modal-callback]'),
modal = document.querySelector('.modal'),
modalCallback = document.querySelector('.modal-callback'),
modalCloseBtn = document.querySelector('[data-close-modal]'),
modalCloseBtnSecond = document.querySelector('[data-close-modal-callback]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('modal-active');
    modal.classList.remove('modal-close');
    modal.style.visibility = "visible";
    document.body.style.overflow = 'hidden';
    overlayMenu.classList.add('blur');
  });
});

modalTriggerSecond.forEach(btn => {
  btn.addEventListener('click', () => {
    modalCallback.classList.add('modal-active');
    modalCallback.classList.remove('modal-close');
    modalCallback.style.visibility = "visible";
    document.body.style.overflow = 'hidden';
    overlayMenu.classList.add('blur');
  });
});

function closeModal() {
  modal.classList.add('modal-close');
  modal.classList.remove('modal-active');
  modal.style.visibility = "hidden";
  document.body.style.overflow = '';
  overlayMenu.classList.remove('blur');
}

modalCloseBtn.addEventListener('click', closeModal);

document.addEventListener('click', (e) => {
  if (e.target == modal ) {
    closeModal();
    mobileMenu.classList.add('mobile-menu-close');
    mobileMenu.classList.remove('mobile-menu-active');
    document.body.style.overflow = '';
    overlayMenu.classList.remove('overlay');
  }
});

function closeModalCallback() {
  modalCallback.classList.add('modal-close');
  modalCallback.classList.remove('modal-active');
  modalCallback.style.visibility = "hidden";
  document.body.style.overflow = '';
  overlayMenu.classList.remove('blur');
}

modalCloseBtnSecond.addEventListener('click', closeModalCallback);

document.addEventListener('click', (e) => {
  if (e.target == modalCallback ) {
    closeModalCallback();
    mobileMenu.classList.add('mobile-menu-close');
    mobileMenu.classList.remove('mobile-menu-active');
    document.body.style.overflow = '';
    overlayMenu.classList.remove('overlay');
  }
});
