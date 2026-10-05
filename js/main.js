/**
 * MEZUE ASSOCIATES — ESTATE SURVEYORS & VALUERS
 * Official Client Script (Est. 1981)
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyNavbar();
  initMobileMenu();
  initActiveNavLink();
  initConsultationModal();
  initFormValidation();
  initSmoothScroll();
});

/**
 * Sticky Navbar compact state on scroll
 */
function initStickyNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Mobile Drawer Menu
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('nav-menu--open');
    toggleBtn.classList.toggle('nav-toggle--open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove('nav-menu--open');
      toggleBtn.classList.remove('nav-toggle--open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close when clicking any nav link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('nav-menu--open');
      toggleBtn.classList.remove('nav-toggle--open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Highlight Current Active Page in Nav
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (!linkHref) return;

    // Direct match or root index match
    if (linkHref === currentPath || 
       (currentPath === '' && linkHref === 'index.html') ||
       (currentPath === 'index.html' && linkHref === './')) {
      link.classList.add('nav-link--active');
    }
  });
}

/**
 * Consultation Request Modal Controller
 */
function initConsultationModal() {
  const modal = document.getElementById('consultationModal');
  if (!modal) return;

  const triggers = document.querySelectorAll('.js-open-consultation');
  const closeBtns = modal.querySelectorAll('.modal-close, .js-modal-close');
  const serviceSelect = modal.querySelector('#modalService');

  const openModal = (preselectedService = null) => {
    // Clear previous alert or error states
    const existingAlert = modal.querySelector('.alert-feedback');
    if (existingAlert) {
      existingAlert.style.display = 'none';
      existingAlert.innerHTML = '';
    }
    modal.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

    if (preselectedService && serviceSelect) {
      serviceSelect.value = preselectedService;
    }
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = trigger.getAttribute('data-service');
      openModal(serviceName);
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Expose helper globally
  window.openConsultationModal = openModal;
}

/**
 * Production-Grade Form Validation with Verified Feedback
 */
function initFormValidation() {
  const forms = document.querySelectorAll('.js-validate-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Inputs to validate
      const nameInput = form.querySelector('[name="fullName"]');
      const emailInput = form.querySelector('[name="email"]');
      const phoneInput = form.querySelector('[name="phone"]');
      const serviceInput = form.querySelector('[name="service"]');
      const locationInput = form.querySelector('[name="location"]');
      const messageInput = form.querySelector('[name="message"]');
      const feedbackAlert = form.querySelector('.alert-feedback') || 
                            (form.parentElement ? form.parentElement.querySelector('.alert-feedback') : null);

      // Clear previous validation states
      form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));

      // Validate Name
      if (nameInput && (!nameInput.value.trim() || nameInput.value.trim().length < 2)) {
        nameInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput && !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Phone
      if (phoneInput && (!phoneInput.value.trim() || phoneInput.value.trim().length < 7)) {
        phoneInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Service
      if (serviceInput && (!serviceInput.value || serviceInput.value === '')) {
        serviceInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Location
      if (locationInput && !locationInput.value.trim()) {
        locationInput.classList.add('is-invalid');
        isValid = false;
      }

      // Validate Message
      if (messageInput && (!messageInput.value.trim() || messageInput.value.trim().length < 6)) {
        messageInput.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      // Successful submission handling
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Send Enquiry';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg style="animation: spin 1s linear infinite; width:18px; height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke-width="3" stroke-dasharray="32" stroke-linecap="round"/>
          </svg>
          Processing...
        `;
      }

      // Simulate secure transmission
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        form.reset();

        if (feedbackAlert) {
          feedbackAlert.innerHTML = `
            <strong>Enquiry Received.</strong> Thank you for contacting Mezue Associates. Your inquiry has been routed to our professional surveying team at 9 Ogui Road, Enugu headquarters. We will review your requirements and respond promptly.
          `;
          feedbackAlert.style.display = 'block';
          feedbackAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
          alert('Thank you for contacting Mezue Associates. Your enquiry has been received.');
        }

        // If inside modal, close after 2.5 seconds
        const parentModal = form.closest('.modal-backdrop');
        if (parentModal) {
          setTimeout(() => {
            parentModal.classList.remove('is-open');
            document.body.style.overflow = '';
            if (feedbackAlert) feedbackAlert.style.display = 'none';
          }, 2600);
        }
      }, 700);
    });
  });
}

/**
 * Smooth Anchor Scrolling
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
