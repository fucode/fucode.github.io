
/* =========================================================
   FARAZ UDDIN | SHARED COMPONENT LOADER
   File: js/load-components.js

   Loads:
   - components/nav.html
   - components/footer.html

   Features:
   - Bootstrap 5 dropdown support
   - Active page highlighting
   - Navbar scroll effect
   - Responsive mobile navigation
   - Shared footer across all pages
========================================================= */

document.addEventListener("DOMContentLoaded", async function () {

  /* =====================================================
     1. LOAD HTML COMPONENT
  ===================================================== */

  async function loadComponent(placeholderId, filePath) {

    const placeholder = document.getElementById(placeholderId);

    if (!placeholder) {
      return null;
    }

    try {

      const response = await fetch(filePath);

      if (!response.ok) {
        throw new Error(
          `Unable to load ${filePath}: HTTP ${response.status}`
        );
      }

      const html = await response.text();

      placeholder.innerHTML = html;

      // Execute inline scripts included in components.
      // Scripts inserted using innerHTML do not run automatically.

      const scripts = placeholder.querySelectorAll("script");

      scripts.forEach(function (oldScript) {

        const newScript = document.createElement("script");

        Array.from(oldScript.attributes).forEach(function (attr) {
          newScript.setAttribute(attr.name, attr.value);
        });

        newScript.textContent = oldScript.textContent;

        oldScript.replaceWith(newScript);

      });

      return placeholder;

    } catch (error) {

      console.error(
        `Error loading ${filePath}:`,
        error
      );

      return null;

    }

  }

  /* =====================================================
     2. LOAD NAVIGATION
  ===================================================== */

  const nav = await loadComponent(
    "nav-placeholder",
    "components/nav.html"
  );

  if (nav) {

    /* -----------------------------------------------------
       BOOTSTRAP DROPDOWNS
    ----------------------------------------------------- */

    if (window.bootstrap && window.bootstrap.Dropdown) {

      nav.querySelectorAll(
        '[data-bs-toggle="dropdown"]'
      ).forEach(function (dropdownToggle) {

        bootstrap.Dropdown.getOrCreateInstance(
          dropdownToggle
        );

      });

    }

    /* -----------------------------------------------------
       ACTIVE PAGE HIGHLIGHTING
    ----------------------------------------------------- */

    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    const navLinks = nav.querySelectorAll(
      ".nav-link[href], .dropdown-item[href]"
    );

    navLinks.forEach(function (link) {

      const href = link.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const linkPage = href
        .split("/")
        .pop()
        .split("?")[0]
        .split("#")[0];

      if (
        linkPage.toLowerCase() === currentPage.toLowerCase()
      ) {

        link.classList.add("active");

        link.setAttribute(
          "aria-current",
          "page"
        );

        const parentDropdown = link.closest(".dropdown");

        if (parentDropdown) {

          const dropdownTrigger = parentDropdown.querySelector(
            ".nav-link.dropdown-toggle"
          );

          if (dropdownTrigger) {
            dropdownTrigger.classList.add("active");
          }

        }

      }

    });

    /* -----------------------------------------------------
       NAVBAR SCROLL EFFECT
    ----------------------------------------------------- */

    const navbar = nav.querySelector("#portfolioNavbar");

    if (navbar && navbar.dataset.initialized !== "true") {

      navbar.dataset.initialized = "true";

      function updateNavbarScroll() {

        navbar.classList.toggle(
          "nav-scrolled",
          window.scrollY > 35
        );

      }

      updateNavbarScroll();

      window.addEventListener(
        "scroll",
        updateNavbarScroll,
        { passive: true }
      );

    }

    /* -----------------------------------------------------
       CLOSE MOBILE MENU AFTER NAVIGATION
    ----------------------------------------------------- */

    nav.querySelectorAll(
      ".dropdown-item, .nav-link:not(.dropdown-toggle)"
    ).forEach(function (link) {

      link.addEventListener("click", function () {

        const mobileMenu = nav.querySelector(
          "#navbarNavDropdown"
        );

        if (
          mobileMenu &&
          mobileMenu.classList.contains("show") &&
          window.bootstrap &&
          window.bootstrap.Collapse
        ) {

          bootstrap.Collapse
            .getOrCreateInstance(mobileMenu)
            .hide();

        }

      });

    });

  }

  /* =====================================================
     3. LOAD FOOTER
  ===================================================== */

  await loadComponent(
    "footer-placeholder",
    "components/footer.html"
  );

  /* =====================================================
     4. FINISHED
  ===================================================== */

  console.log(
    "Portfolio navigation and footer loading complete."
  );

});
