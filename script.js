document.addEventListener('DOMContentLoaded', function() {
  // Get the navbar element
  const navbar = document.querySelector('nav');

  // Function to handle scroll event
  function handleScroll() {
    if (window.scrollY > 50) {
      // Add a class to the navbar when scrolling down
      navbar.classList.add('scrolled');
      console.log('Scrolling...');
    } else {
      // Remove the class when at the top of the page
      navbar.classList.remove('scrolled');
    }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);
});




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
const cardWidth = 400 + 30; // Width of each card including the margin (showing 2 cards at a time)
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


  // Function to handle smooth scrolling when clicking on navigation links
  function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Attach an event listener to each navigation link to handle smooth scrolling
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const target = link.getAttribute('href'); // Get the target section ID
      smoothScroll(target); // Call the smoothScroll function with the target ID
    });
  });



// JavaScript to handle slider navigation
const sliderWrapper3 = document.querySelector('.testimonial-slider');
const prevButton3 = document.querySelector('#prev-button3');
const nextButton3 = document.querySelector('#next-button3');
const cardWidth3 = 800 + 30; // Width of each card including the margin (showing 2 cards at a time)
const totalCards3 = sliderWrapper3.children.length;
const maxIndex3 = Math.ceil(totalCards3 / 2) - 1; // Maximum index for the last visible card set

let currentIndex3 = 0; // Current index of the first visible card

prevButton3.addEventListener('click', () => {
  currentIndex3 = Math.max(currentIndex3 - 1, 0);
  updateSliderPosition();
});

nextButton3.addEventListener('click', () => {
  currentIndex3 = Math.min(currentIndex3 + 1, maxIndex3);
  updateSliderPosition();
});

function updateSliderPosition() {
  const translateXValue = -currentIndex3 * (cardWidth3 * 2); // Move 2 cards at a time
  sliderWrapper3.style.transform = `translateX(${translateXValue}px)`;
}

