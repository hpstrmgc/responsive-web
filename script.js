document.addEventListener('DOMContentLoaded', function () {
  const addToCartButton = document.querySelector('.navbar__cta');
  const cartButton = document.querySelector('.navbar__cart');
  const popup = document.querySelector('.popup');
  const closeButton = document.querySelector('.popup__close');

  addToCartButton.addEventListener('click', function () {
    popup.style.display = 'block';
  });

  cartButton.addEventListener('click', function () {
    popup.style.display = 'block';
  });

  closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  const sliderItems = document.querySelectorAll('.slider__item');
  const interval = 3000; // Waktu transisi antara gambar (milidetik)
  let currentIndex = 0;

  function showNextSlide() {
    sliderItems[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + 1) % sliderItems.length;

    sliderItems[currentIndex].classList.add('active');
  }

  sliderItems[currentIndex].classList.add('active');

  setInterval(showNextSlide, interval);

  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');

  navbarToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
  });
});

/*document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarMenu = document.querySelector('.navbar__menu');
  const popup = document.querySelector('.popup');

  navbarToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
    popup.style.display = 'none';
  });

  const addToCartButton = document.querySelector('.navbar__cart');
  const popupCloseButton = document.querySelector('.popup__close');

  addToCartButton.addEventListener('click', function () {
    popup.style.display = 'block';
    navbarMenu.classList.remove('active');
  });

  popupCloseButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });
});*/

const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.navbar__menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
});

const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

navbarToggle.addEventListener('click', () => {
  popup.classList.add('active');
});

popupClose.addEventListener('click', () => {
  popup.classList.remove('active');
});

  document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery__item');

    function animateOnScroll() {
      for (let i = 0; i < 4; i++) {
        const item = galleryItems[i];
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }
      }
    }

    window.addEventListener('scroll', animateOnScroll);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const textCenter = document.querySelector('.text-center');

    function animateOnScroll() {
      const textCenterTop = textCenter.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (textCenterTop < windowHeight) {
        textCenter.classList.add('show');
      } else {
        textCenter.classList.remove('show');
      }
    }

    window.addEventListener('scroll', animateOnScroll);
  });

  document.addEventListener('DOMContentLoaded', function() {
    const textCenter = document.querySelector('.sect5');

    function animateOnScroll() {
      const textCenterTop = textCenter.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (textCenterTop < windowHeight) {
        textCenter.classList.add('show');
      } else {
        textCenter.classList.remove('show');
      }
    }

    window.addEventListener('scroll', animateOnScroll);
  });
