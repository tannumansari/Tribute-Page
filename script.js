// Class to handle the sequential animation of elements
class SequentialAnimator {
    constructor() {
        this.elements = [];
    }
  
    // Add elements to the animation queue
    addElement(element, delay) {
        this.elements.push({ element, delay });
    }
  
    // Start the animation sequence
    startAnimation() {
        this.elements.forEach(item => {
            setTimeout(() => {
                item.element.style.opacity = '1';
                item.element.style.transform = 'translateY(0)';
            }, item.delay);
        });
    }
  }
    const animator = new SequentialAnimator
  // Function to initialize and start the animations
  function initAnimations() {
    const animator = new SequentialAnimator();
  
    // Adding elements with their delays
    animator.addElement(document.getElementById('image'), 0);
    animator.addElement(document.getElementById('content'), 500); // 0.5s delay
    animator.addElement(document.getElementById('timeline'), 2500); // 2.5s delay
    animator.addElement(document.getElementById('quotes'), 3000); // 3s delay
  
    // Start the animation sequence
    animator.startAnimation();
  }
  
  // Event listener to start animations when the page is loaded
  window.addEventListener('load', () => {
    initAnimations();
  });
  