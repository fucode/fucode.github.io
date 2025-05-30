// Define a function named `userScroll`
function userScroll() {
  // Select the element with the class `navbar` and store it in the variable `navbar`
  const navbar = document.querySelector('.navbar');

  // Add an event listener to the window object that listens for the 'scroll' event
  window.addEventListener('scroll', () => {
    // Check if the vertical scroll position is greater than 50 pixels
    if (window.scrollY > 50) {
      // If so, add the class `bg-dark` to the navbar (possibly to change background color)
      navbar.classList.add('bg-dark');
      // Also add the class `navbar-sticky` to the navbar (possibly to make it fixed at the top)
      navbar.classList.add('navbar-sticky');
    } else {
      // If the scroll position is 50 or less, remove the `bg-dark` class from the navbar
      navbar.classList.remove('bg-dark');
      // Also remove the `navbar-sticky` class from the navbar
      navbar.classList.remove('navbar-sticky');
    }
  });
}

// Wait until the entire HTML document has been loaded and parsed
// Then call the `userScroll` function to activate the scroll behavior
document.addEventListener('DOMContentLoaded', userScroll);
