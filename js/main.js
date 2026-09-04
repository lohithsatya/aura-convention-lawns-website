/*
   AURA CONVENTION & LAWNS - Interactive Scripts
   Features: Sticky navbar, Mobile menu, Form validation, WhatsApp direct routing, Gallery Lightbox
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile navigation toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
      });
    });
  }

  // 3. Gallery Lightbox
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.querySelector('.lightbox-close');

  if (galleryItems.length && lightboxModal && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxModal.classList.add('active');
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.remove('active');
      });
    }

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 4. Inquiry Form & WhatsApp Routing
  const inquiryForm = document.getElementById('inquiryForm');
  const whatsappBtn = document.getElementById('whatsappInquireBtn');
  const successMsg = document.getElementById('formSuccessMsg');

  // WhatsApp number for Aura Convention & Lawns
  const VENUE_PHONE = '919876543210'; 

  function buildWhatsAppMessage() {
    const name = document.getElementById('guestName')?.value || 'Guest';
    const phone = document.getElementById('guestPhone')?.value || 'Not provided';
    const email = document.getElementById('guestEmail')?.value || 'Not provided';
    const eventType = document.getElementById('eventType')?.value || 'Event';
    const eventDate = document.getElementById('eventDate')?.value || 'Upcoming';
    const guestCount = document.getElementById('guestCount')?.value || 'Flexible';
    const message = document.getElementById('guestMessage')?.value || 'Please share hall availability and package details.';

    const text = `*New Booking Inquiry - Aura Convention & Lawns*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Event Type:* ${eventType}\n` +
      `*Event Date:* ${eventDate}\n` +
      `*Estimated Guests:* ${guestCount}\n` +
      `*Message:* ${message}`;

    return encodeURIComponent(text);
  }

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Also trigger WhatsApp option after 1 second
      setTimeout(() => {
        const waUrl = `https://api.whatsapp.com/send?phone=${VENUE_PHONE}&text=${buildWhatsAppMessage()}`;
        window.open(waUrl, '_blank');
      }, 800);
    });
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const waUrl = `https://api.whatsapp.com/send?phone=${VENUE_PHONE}&text=${buildWhatsAppMessage()}`;
      window.open(waUrl, '_blank');
    });
  }
});
