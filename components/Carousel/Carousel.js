/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function CreateCarousel() {
  const carousel = document.createElement('div');
  const divLeftBtn = document.createElement('div');
  const imgCarouselOne = document.createElement('img');
  const imgCarouselTwo = document.createElement('img');
  const imgCarouselThree = document.createElement('img');
  const imgCarouselFour = document.createElement('img');
  const divRightBtn = document.createElement('div');

  imgCarouselOne.src = "./assets/carousel/mountains.jpeg";
  imgCarouselTwo.src = "./assets/carousel/computer.jpeg";
  imgCarouselThree.src = "./assets/carousel/trees.jpeg";
  imgCarouselFour.src = "./assets/carousel/turntable.jpeg";

  carousel.classList.add('carousel');
  divLeftBtn.classList.add('left-button');
  divRightBtn.classList.add('right-button');

  carousel.appendChild(divLeftBtn);
  carousel.appendChild(imgCarouselOne);
  carousel.appendChild(imgCarouselTwo);
  carousel.appendChild(imgCarouselThree);
  carousel.appendChild(imgCarouselFour);
  carousel.appendChild(divRightBtn);

  divRightBtn.addEventListener('click', () => {
    imgCarouselTwo.style.display = "none";
    imgCarouselThree.style.display = "none";
  });

  divLeftBtn.addEventListener('click', () => {
    imgCarouselTwo.style.display = "inherit";
    imgCarouselThree.style.display = "inherit";
  });

  return carousel;
};

const carouselCont = document.querySelector('.carousel-container');

carouselCont.appendChild(CreateCarousel());

const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
  img.style.display = "inherit";
});

const topBar = document.querySelector('.top-bar');
topBar.style.zIndex = "1";