 //Modals

 let buttonRequest = [...document.querySelectorAll('.button_request')],
 overlay = document.querySelector('.overlay'),
 close = document.querySelector('.modal__close');
 
const requestModal = (element) => {
 element.addEventListener('click', function() {
     overlay.style.display = 'block';
     document.body.style.overflow = 'hidden';
 })

 close.addEventListener('click', function() {
     overlay.style.display = 'none';
     document.body.style.overflow = '';
 });
};

buttonRequest.forEach(function (element) {
 requestModal(element);
});

//Slider
let slideIndex = 1,
        slides = document.querySelectorAll('.feedback-slider__item'),
        prev = document.querySelector('.feedback-slider__left'),
        next = document.querySelector('.feedback-slider__right');
        // dotsWarp = document.querySelector('.slider-dots'),
        // dots = document.querySelectorAll('.dot');

    const showSlides = (number) => {
        
        if (number > slides.length) {
            slideIndex = 1;
        }
        if (number < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((element) => element.style.display = 'none');
        // dots.forEach((element) => element.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        // dots[slideIndex - 1].classList.add('dot-active');

    }

    showSlides(slideIndex);

    const plusSlide = (number) => {
        showSlides(slideIndex += number);
    }

    const currentSlide = (number) => {
        showSlides(slideIndex = number);
    }

    prev.addEventListener('click', function() {
        plusSlide(-1);
    });

    next.addEventListener('click', function() {
        plusSlide(1);
    });

    // dotsWarp.addEventListener('click', function(event) {
    //     for (let i = 0; i < dots.length + 1; i += 1) {
    //         if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
    //             currentSlide(i);
    //         }
    //     }
    // });


