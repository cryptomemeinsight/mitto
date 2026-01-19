// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const list = document.querySelector('.nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Rain animation
  const rainContainer = document.getElementById('rain-container');
  if (rainContainer) {
    const images = ['glitter 1.png', 'glitter 2.png'];
    
    function createRaindrop() {
      const img = document.createElement('img');
      const randomImage = images[Math.floor(Math.random() * images.length)];
      
      img.src = randomImage;
      img.classList.add('raindrop');
      
      // Random position
      img.style.left = Math.random() * 100 + 'vw';
      
      // Random size (between 10px and 25px)
      const size = Math.random() * 15 + 10;
      img.style.width = size + 'px';
      
      // Random animation duration (between 3s and 8s)
      const duration = Math.random() * 5 + 3;
      img.style.animationDuration = duration + 's';
      
      rainContainer.appendChild(img);
      
      // Remove element after animation finishes
      setTimeout(() => {
        img.remove();
      }, duration * 1000);
    }
    
    // Create a new raindrop every 300ms
    setInterval(createRaindrop, 300);
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#' || id.length < 2) return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close menu on mobile after navigation
        if (list && list.classList.contains('open')) {
          list.classList.remove('open');
          toggle?.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Protect images: disable right-click and dragging
  document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

  // Prevent keyboard shortcuts for viewing source/devtools
  document.addEventListener('keydown', (e) => {
    // Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
    }
    // F12 (DevTools)
    if (e.key === 'F12') {
      e.preventDefault();
    }
    // Ctrl+Shift+I (DevTools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
      e.preventDefault();
    }
    // Ctrl+Shift+J (DevTools Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) {
      e.preventDefault();
    }
    // Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
      e.preventDefault();
    }
    // Ctrl+S (Save Page)
    if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
    }
  });
});
