const burger = document.querySelector(".burger");
const dropNav = document.querySelector(".drop");

// Открытие и закрытие бургер-меню
// burger.addEventListener("click", function () {
//   burger.classList.toggle("burger-active");
//   dropNav.classList.toggle("drop-nav-active");
//   document.body.classList.toggle("body-hidden")
// });

// Аккордион в секции с популярными вопросами
let accordionBtn = document.getElementsByClassName("accordion__button");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var textPanel = this.nextElementSibling;
    if (textPanel.style.maxHeight) {
      textPanel.style.maxHeight = null;
    } else {
      textPanel.style.maxHeight = textPanel.scrollHeight + "px";
    }
  });
}

// Слайдер в блоке hero (библиотека swiper)
const swiperHero = new Swiper(".hero", {
  loop: true,
  autoplay: {
    delay: 8000,
  },
});

// Слайдер в блоке news (библиотека swiper)
const swiperNews = new Swiper(".news__swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },

  navigation: {
    nextEl: '.slider-right',
    prevEl: '.slider-left',
  },
});

// фиксирование меню при прокрутке стриницы
const header = document.querySelector('.header');
document.addEventListener('scroll', function() {
  if (window.scrollY >= 80) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
})