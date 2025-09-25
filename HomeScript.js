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

if (moduleCards.length > 0) {
  observerModules.observe(moduleCards[0]);
}

const avatarImgs = document.querySelectorAll('.avatar-group img');

const observerAvatars = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      avatarImgs.forEach((avatar, index) => {
        setTimeout(() => {
          avatar.style.opacity = '1';
          avatar.style.transform = 'translateY(0)';
        }, index * 120);
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

if (avatarImgs.length > 0) {
  observerAvatars.observe(avatarImgs[0]);
}


const aboutElements = document.querySelectorAll(
  '.testimonials-section2 h2, .testimonials-section2 p, .testimonials-section2 .about-image img'
);

const observerAbout = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const index = Array.from(aboutElements).indexOf(el);

      setTimeout(() => {
        el.classList.add('show');
      }, index * 250);

      observer.unobserve(el);
    }
  });
}, { threshold: 0.2 });

if (aboutElements.length > 0) {
  aboutElements.forEach(el => observerAbout.observe(el));
}

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach(item => {
      item.classList.remove("open");
      item.querySelector(".faq-question").classList.remove("active");
    });

    if (!isOpen) {
      faqItem.classList.add("open");
      button.classList.add("active");
    }
  });
});
