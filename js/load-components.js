// Load Navigation
const navEl = document.getElementById('nav-placeholder');
if (navEl) {
  fetch('includes/nav.html')
    .then(response => response.text())
    .then(data => {
      navEl.innerHTML = data;

      // ✅ Re-initialize Bootstrap dropdowns if needed
      if (window.bootstrap && bootstrap.Dropdown) {
        document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggleEl => {
          new bootstrap.Dropdown(dropdownToggleEl);
        });
      }

      // Highlight active page
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
          const parentDropdown = link.closest('.dropdown');
          if (parentDropdown) {
            parentDropdown.querySelector('.nav-link').classList.add('active');
          }
        }
      });
    })
    .catch(error => console.error('Error loading navigation:', error));
}
