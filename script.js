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
