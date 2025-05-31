// Load Navigation
const navEl = document.getElementById('nav-placeholder');
if (navEl) {
  fetch('components/nav.html')
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

// Inject Footer (Social + Footer)
const footerEl = document.getElementById('footer-placeholder');
if (footerEl) {
  footerEl.innerHTML = `
    <!-- Social -->
    <section class="social text-bg-dark py-6 overflow-hidden">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center fs-4">
            <div class="social-icons d-flex justify-content-center gap-4">
              <a href="https://www.linkedin.com/in/faraz-uddin-429b9a15a/" target="_blank" rel="noopener">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-top border-primary bg-dark text-white py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 text-center">
            <p>Hand Coded By Faraz Uddin</p>
          </div>
        </div>
      </div>
    </footer>
  `;
}
