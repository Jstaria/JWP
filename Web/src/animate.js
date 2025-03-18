// Function to handle the intersection observer
function animateOnScroll(entries, observer) {
    Array.from(entries).forEach((entry) => {
      const element = entry.target;
      const animateIn = element.getAttribute('data-animate-in'); // Get fade-in animation
      const animateOut = element.getAttribute('data-animate-out'); // Get fade-out animation
  
      if (entry.isIntersecting) {
        // Fade in when the element is in the viewport
        element.classList.remove('opacity-zero', animateOut);
        element.classList.add('animate__animated', animateIn);
      } else {
        // Fade out when the element is out of the viewport
        element.classList.remove(animateIn);
        element.classList.add('animate__animated', animateOut);
  
        // Optional: Re-hide the element after the fade-out animation ends
        element.addEventListener('animationend', () => {
          element.classList.add('opacity-zero');
        }, { once: true });
      }
    });
  }
// Set up the Intersection Observer
const observer = new IntersectionObserver(animateOnScroll, {
    root: null, // Use the viewport as the root
    threshold: 0.5, // Trigger when 50% of the element is visible
});

// Target the element(s) to animate
const elementsToAnimate = () => {
    let elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
        observer.observe(element); // Start observing each element
    });

    return elements;
}

const updateAnimations = (elementstoAnimate) => {
    animateOnScroll(elementsToAnimate, observer);
}

export { updateAnimations, elementsToAnimate}