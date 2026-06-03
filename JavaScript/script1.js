document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
      const navMenu = document.getElementById('navmenu');
      navMenu.classList.toggle('active');
    });
  
    // Scroll to top button
    document.getElementById('scroll-top').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  