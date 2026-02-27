document.addEventListener('DOMContentLoaded', () => {
  // --- Smart Header & Scroll Effect ---
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    // Basic scrolled effect
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Smart Hide/Show logic
    if (window.scrollY > 150) { // Only hide after some scrolling
      if (window.scrollY > lastScrollY) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
    } else {
      header.classList.remove('hidden');
    }

    lastScrollY = window.scrollY;
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  };

  mobileMenuTrigger.addEventListener('click', openMobileMenu);
  mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // We use scroll-margin-top in CSS for better maintenance, 
        // but keeping JS for browsers that might need fallback or specific behavior
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Contact Form Handling ---
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      // Captura de dados
      const name = document.getElementById('lead-name').value;
      const phone = document.getElementById('lead-phone').value;
      const subject = document.getElementById('lead-subject').value;
      const message = document.getElementById('lead-message').value;

      // Efeito de Load no Botão
      btn.innerHTML = `<svg class="animate-spin" style="width:18px; height:18px; margin-right:8px; display:inline-block; vertical-align:middle;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/></svg> Processando...`;
      btn.disabled = true;

      // Formatação da Mensagem WhatsApp (Padrão AG5)
      const text = `Olá, me chamo ${name}, vim através do site e gostaria de uma informação.

- WhatsApp: ${phone}
- Assunto: ${subject}
- Mensagem: ${message}`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5521965018587?text=${encodedText}`;

      setTimeout(() => {
        // Redirecionamento
        window.open(whatsappUrl, '_blank');

        btn.innerHTML = originalText;
        btn.disabled = false;
        contactForm.reset();

        if (successMessage) {
          successMessage.style.display = 'block';
          setTimeout(() => { successMessage.style.display = 'none'; }, 5000);
        }
      }, 1200);
    });
  }

  // --- Reveal Animations on Scroll ---
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('section, .glass-card').forEach(el => {
    el.style.opacity = '0'; // Start invisible
    observer.observe(el);
  });
});
