const testimonialCards = document.querySelectorAll('.testimonial-card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      testimonialCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 200); 
      });
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });

testimonialCards.forEach(card => observer.observe(card));


const moduleCards = document.querySelectorAll('.module-card');

const observerModules = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      moduleCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show');
        }, index * 200); 
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

if(moduleCards.length > 0) {
  observerModules.observe(moduleCards[0]);
}
