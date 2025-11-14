document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Background slideshow (only if header exists)
  const header = document.getElementById('header');
  if (header) {
    const images = [
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d", 
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
      "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
    ];
    
    let current = 0;
    function changeBackground() {
      header.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${images[current]}')`;
      current = (current + 1) % images.length;
    }
    
    changeBackground();
    setInterval(changeBackground, 5000);
  }

  // Read More functionality
  document.querySelectorAll(".read-btn").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".story-card");
      card.classList.toggle("expanded");
      button.textContent = card.classList.contains("expanded") ? "Read Less" : "Read More";
    });
  });
});
