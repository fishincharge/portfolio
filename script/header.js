document.getElementById('contactHeader').addEventListener('click', function() {
    // Scroll to contact section smoothly
    document.getElementById('contactSection').scrollIntoView({
      behavior: 'smooth'
    });
    
    // Optional: Add temporary active class for visual feedback
    this.classList.add('active');
    setTimeout(() => {
      this.classList.remove('active');
    }, 300);
  });