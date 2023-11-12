// Get the initial navbar
const navbar1 = document.getElementById('navbar1');

// Function to toggle the navbar based on the scroll position
function toggleNavbar() {
  // Check the scroll position
  if (window.scrollY === 0) {
    // If at the top, move the initial navbar above the viewport
    navbar1.style.top = '-50px';
  } else {
    // If scrolled down, bring the initial navbar to the top of the viewport
    navbar1.style.top = '0';
  }
}

// Attach the toggleNavbar function to the scroll event
window.addEventListener('scroll', toggleNavbar);
