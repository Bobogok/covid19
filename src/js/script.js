$('.about__slider-comments').slick({
  dots: true,
  speed: 500,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipe: true
});

$('.slick-prev').html(' ');
$('.slick-next').html(' ');

let tags = document.querySelectorAll('[role="tab"]');

tags.forEach((elem) => {
  elem.innerHTML = ' ';
  elem.addEventListener('click', () => {
    tags.forEach((elem) => {
      elem.style.width = '8px';
      elem.style.height = '8px';
      elem.style.backgroundColor = '#006ff9';
    });
    elem.style.width = '10px';
    elem.style.height = '10px';
    elem.style.backgroundColor = 'white';
  });
});
