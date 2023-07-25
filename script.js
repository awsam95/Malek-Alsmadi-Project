  // Get the navbar element
  const navbar = document.querySelector('nav');

  // Function to handle scroll event
  function handleScroll() {
    if (window.scrollY > 50) {
      // Add a class to the navbar when scrolling down
      navbar.classList.add('scrolled');
    } else {
      // Remove the class when at the top of the page
      navbar.classList.remove('scrolled');
    }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);



// JavaScript to toggle header text
const headerEating = document.getElementById('eating');

function toggleHeaderText() {
  if (headerEating.textContent === 'Eating') {
    headerEating.textContent = 'Lifestyle and Sleeping';
  } else {
    headerEating.textContent = 'Eating';
  }
}

// Call the toggleHeaderText function every 6 seconds
setInterval(toggleHeaderText, 5000);

// JavaScript to handle slider navigation
const sliderWrapper = document.querySelector('.slider-wrapper');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const cardWidth = 400 + 20; // Width of each card including the margin (showing 2 cards at a time)
const totalCards = sliderWrapper.children.length;
const maxIndex = Math.ceil(totalCards / 2) - 1; // Maximum index for the last visible card set

let currentIndex = 0; // Current index of the first visible card

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0); // Show two cards at a time
  updateSliderPosition();
});

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, maxIndex); // Show two cards at a time
  updateSliderPosition();
});

function updateSliderPosition() {
  const translateXValue = -currentIndex * cardWidth;
  sliderWrapper.style.transform = `translateX(${translateXValue}px)`;
}






