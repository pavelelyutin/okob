const burger = document.querySelector(".burger");
const dropNav = document.querySelector(".drop");

// Открытие и закрытие бургер-меню
burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");
  dropNav.classList.toggle("drop-nav-active");
  document.body.classList.toggle("body-hidden")
});

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

// Слайдер в блоке hero (библиотека swiper)
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
});

// фиксирование меню при прокрутке стриницы
// window.addEventListener('scroll', function () {
//   let scrollWindow = window.scrollY;
//   let scrollHeaderBottom = document.querySelector('.header-top').scrollHeight;

//   if (scrollWindow > scrollHeaderBottom) {
//       this.document.querySelector('.header-bottom').classList.add('fixed');

//   } else {
//       this.document.querySelector('.header-bottom').classList.remove('fixed');

//   }
// });