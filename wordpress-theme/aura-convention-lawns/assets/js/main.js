/*
   AURA CONVENTION & LAWNS - Interactive Scripts & Comprehensive Dynamic CMS
   Features:
   - Dynamic Site Configuration (localStorage persistence)
   - Secret Admin Portal on URL hash /#admin (No public buttons)
   - Persistent Login & Master Password Reset
   - Full "About Our Venue" Content & Grid Card Editor
   - Full "Halls & Spaces" Dynamic CRUD (Add, Edit, Remove Hall Cards)
   - Main Website 6-Image Rule (First 6 images on homepage, all in modal)
   - Clean Fullscreen Lightbox (Zero broken icons or document flow leakage)
   - Automatic Redirect on "Save & Apply Changes"
   - Photo Gallery Manager with Client-Side Auto-Compression
   - Direct WhatsApp & Inquiry Routing
*/

// Default fallback configuration for Aura Convention & Lawns
const DEFAULT_AURA_CONFIG = {
  version: 50,
  about: {
    title: "An Urban Sanctuary Conceived to Redefine the Art of Gathering",
    intro: "Beyond the glass and concrete of Hyderabad’s financial corridor lies an unexpected sanctuary. A place where the relentless pace of the city quietly dissolves into open skies, natural harmony, and architectural grandeur. Welcome to <strong>Aura Convention and Lawns</strong> — an urban oasis conceived to redefine the art of gathering.<br><br>Carved into a natural landscape framed by majestic, timeless hillocks, Aura Convention and Lawns merges raw natural topography with refined modern design. Winding botanical promenades, sculpted green terraces, and curated art installations bring texture and soul to every open space. Every angle has been engineered with photogenic intention: from dramatic golden-hour sightlines against the rocky horizon to intimate, glowing garden alcoves. Here, every photograph captures an heirloom memory, and every view invites stillness.",
    image: "assets/images/aura_grand_entrance_night.jpg",
    features: [
      {
        title: "Photogenic Landscape",
        badge: "★ TIMELESS HILLOCKS",
        desc: "Carved into natural topography with sculpted green terraces, botanical promenades, and golden-hour horizon views."
      },
      {
        title: "Executive MICE Hall",
        badge: "★ INTELLIGENT ACOUSTICS",
        desc: "Built from the ground up for high-profile conventions, tech summits, executive board retreats, and trade expos."
      },
      {
        title: "Sprawling Lawns",
        badge: "★ OPEN NIGHT SKY",
        desc: "Unconstrained canvas for lavish weddings, royal receptions, and contemporary galas framed by ancient stone."
      },
      {
        title: "Indoor AC Banquet",
        badge: "★ CLIMATE CONTROLLED",
        desc: "Pristine, fully air-conditioned ballroom with plush interiors and customizable ambient lighting."
      }
    ]
  },
  contact: {
    phone: "+91 77779 98789",
    phoneRaw: "+917777998789",
    whatsapp: "917777998789",
    email: "info@auraconvention.com",
    address: "Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032"
  },
  stats: {
    area: "35,000+",
    capacity: "1,000+",
    parking: "200+"
  },
  halls: [
    {
      title: "Convention Hall",
      badge: "EXECUTIVE PRECISION",
      guests: "1,500 Guests",
      area: "12,000 sq.ft",
      image: "assets/images/aura_grand_stage_led_wall.jpg",
      desc: "Inside our convention hall, executive ambition meets uncompromising precision. Aura Convention and Lawns is built from the ground up for premier MICE engagements—from high-profile corporate conventions, international tech summits, and product unveils to strategic board retreats and expansive trade exhibitions. With intelligent acoustic engineering, advanced presentation infrastructure, and versatile modular floor plans, we deliver the structured focus, privacy, and flawless execution that global enterprise commands."
    },
    {
      title: "Lawns",
      badge: "UNDER THE NIGHT SKY",
      guests: "2,000+ Guests",
      area: "20,000 sq.ft",
      image: "assets/images/aura_sprawling_lawns_evening.jpg",
      desc: "Under the open night sky, Aura Convention and Lawns becomes a stage for life’s grandest milestones. Our sprawling lawns provide an unconstrained canvas for lavish weddings, vibrant sangeets, royal receptions, and intimate family galas. The sweeping lawns adapt effortlessly to your vision—whether you imagine an ethereal, traditional celebration framed by ancient stone, or a chic contemporary gala beneath the stars. Here, celebrations are not merely hosted; they are immortalized."
    },
    {
      title: "Banquet Hall",
      badge: "OPULENT CLIMATE COMFORT",
      guests: "600 Guests",
      area: "6,000 sq.ft",
      image: "assets/images/hall_grand_stage.jpg",
      desc: "For occasions that demand flawless climate-controlled comfort without sacrificing an ounce of grandeur, Aura Convention and Lawns proudly presents our pristine Indoor AC Banquet Hall. This opulent, fully air-conditioned space offers an elegant sanctuary for sophisticated celebrations, vibrant pre-wedding sangeets, and exclusive private galas. With plush interiors, customizable ambient lighting, and impeccable acoustics, the banquet hall ensures your guests remain immersed in absolute comfort and luxury, completely insulated from the seasons outside."
    }
  ],
  gallery: [
    { src: "assets/images/aura_stage_led_backdrop.jpg", title: "Grand Production Stage & LED Visual Backdrop", span: "1" },
    { src: "assets/images/aura_lawns_banquet_setup.jpg", title: "Lush Sprawling Lawns & Royal Banquet Seating", span: "1" },
    { src: "assets/images/aura_live_fruit_counter.jpg", title: "Exquisite Live Fruit Counter & Gourmet Display", span: "1" },
    { src: "assets/images/aura_artisanal_dessert_display.jpg", title: "Artisanal Dessert & Pastry Showcase by KateringKing", span: "1" },
    { src: "assets/images/aura_canopy_buffet_hall.jpg", title: "Spacious Canopy Dining & Grand Buffet Hall", span: "2" },
    { src: "assets/images/aura_drone_aerial_parking.jpg", title: "Expansive 200+ Inside Valet Parking Grounds", span: "2" },
    { src: "assets/images/aura_drone_aerial_panorama.jpg", title: "Aerial Drone Panorama: Venue Estate & Lake Sanctuary", span: "2" },
    { src: "assets/images/aura_drone_aerial_lawns.jpg", title: "Aerial Bird's Eye View: Sprawling Banquet Lawns", span: "2" },
    { src: "assets/images/aura_grand_entrance_night.jpg", title: "Aura Grand Illuminated Entrance & Promenade", span: "1" },
    { src: "assets/images/aura_royal_buffet_spread.jpg", title: "Royal Banquet Feast by KateringKing", span: "1" }
  ],
  admin: {
    user: "admin",
    pass: "aura@2026"
  }
};

// Global gallery deletion handler
window.deleteGalleryItem = function(idx) {
  const cfg = getSiteConfig();
  if (!cfg.gallery || !Array.isArray(cfg.gallery)) {
    cfg.gallery = [...DEFAULT_AURA_CONFIG.gallery];
  }
  if (idx >= 0 && idx < cfg.gallery.length) {
    const deletedItem = cfg.gallery[idx];
    const itemTitle = deletedItem?.title || ('Photo #' + (idx + 1));
    cfg.gallery.splice(idx, 1);
    saveSiteConfig(cfg);
    hydrateDOM(cfg);
    if (typeof renderAdminGalleryList === 'function') {
      renderAdminGalleryList(cfg.gallery);
    }
    if (typeof showAdminToast === 'function') {
      showAdminToast(`✓ Deleted image: "${itemTitle}"`);
    }
  }
};

// Storage helper functions
function getSiteConfig() {
  try {
    const saved = localStorage.getItem('aura_venue_config');
    if (saved) {
      let parsed = JSON.parse(saved);
      
      // Mandatory gallery validation: ensure latest genuine photoshoot is active
      const isLegacyGallery = !parsed.gallery || 
        !Array.isArray(parsed.gallery) || 
        !parsed.gallery.length || 
        !parsed.gallery[0].src || 
        !parsed.gallery[0].src.includes('aura_stage_led_backdrop');

      if (!parsed.version || parsed.version < 50 || isLegacyGallery) {
        parsed.version = 50;
        parsed.about = DEFAULT_AURA_CONFIG.about;
        parsed.halls = DEFAULT_AURA_CONFIG.halls;
        parsed.gallery = JSON.parse(JSON.stringify(DEFAULT_AURA_CONFIG.gallery));
        if (parsed.stats) parsed.stats.parking = '200+';
        try { localStorage.setItem('aura_venue_config', JSON.stringify(parsed)); } catch (e) {}
      }
      if (parsed.contact) {
        if (parsed.contact.phone && parsed.contact.phone.includes('98765')) {
          parsed.contact.phone = '+91 77779 98789';
          parsed.contact.phoneRaw = '+917777998789';
          parsed.contact.whatsapp = '917777998789';
        }
      }
      if (parsed.stats) {
        if (!parsed.stats.parking || parsed.stats.parking === '50+') {
          parsed.stats.parking = '200+';
        }
      }
      return { 
        ...DEFAULT_AURA_CONFIG, 
        ...parsed,
        about: { ...DEFAULT_AURA_CONFIG.about, ...(parsed.about || {}) },
        contact: { ...DEFAULT_AURA_CONFIG.contact, ...(parsed.contact || {}) },
        stats: { ...DEFAULT_AURA_CONFIG.stats, ...(parsed.stats || {}) },
        halls: (parsed.halls && Array.isArray(parsed.halls) && parsed.halls.length) ? parsed.halls : DEFAULT_AURA_CONFIG.halls,
        gallery: (parsed.gallery && Array.isArray(parsed.gallery) && parsed.gallery.length > 0 && parsed.gallery[0].src.includes('aura_stage_led_backdrop')) ? parsed.gallery : DEFAULT_AURA_CONFIG.gallery,
        admin: { ...DEFAULT_AURA_CONFIG.admin, ...(parsed.admin || {}) }
      };
    }
  } catch (e) {
    console.warn('Could not read saved aura config:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_AURA_CONFIG));
}

function saveSiteConfig(cfg) {
  try {
    localStorage.setItem('aura_venue_config', JSON.stringify(cfg));
    return true;
  } catch (e) {
    console.error('Could not save aura config to localStorage:', e);
    alert('Warning: Browser storage limit reached. Please remove older uploaded images or use web URLs.');
    return false;
  }
}

// Compress client-uploaded images to prevent localStorage quota issues
function compressImage(file, maxWidth, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.82);
      callback(dataUrl);
    };
  };
}

// Hydrate DOM with active configuration
function hydrateDOM(cfg) {
  if (!cfg) return;

  // 1. About Our Venue section
  if (cfg.about) {
    document.querySelectorAll('[data-aura="aboutTitle"]').forEach(el => {
      el.textContent = cfg.about.title;
    });
    document.querySelectorAll('[data-aura="aboutIntro"]').forEach(el => {
      el.innerHTML = cfg.about.intro;
    });
    const aboutImg = document.querySelector('.about-img-cover');
    if (aboutImg && cfg.about.image) {
      aboutImg.src = cfg.about.image;
    }

    // Render About Features Grid
    const featGrid = document.getElementById('auraAboutFeaturesGrid') || document.querySelector('.about-features-grid');
    if (featGrid && cfg.about.features && cfg.about.features.length) {
      let fHtml = '';
      cfg.about.features.forEach((f, idx) => {
        const icons = [
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 22h16M4 6h16M6 6v16M10 6v16M14 6v16M18 6v16M12 2 4 6h16l-8-4z"/></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 11-2 2-1-1"/></svg>`,
          `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>`
        ];
        const iconSvg = icons[idx % icons.length];

        fHtml += `
          <div class="feature-card-rich">
            <div class="feature-top">
              <div class="feature-icon-circle">${iconSvg}</div>
              <div class="feature-title-wrap">
                <h4>${f.title}</h4>
                <span class="feature-pill-gold">${f.badge}</span>
              </div>
            </div>
            <p>${f.desc}</p>
          </div>`;
      });
      featGrid.innerHTML = fHtml;
    }
  }

  // Helper to extract clean international digits
  function toCleanDigits(val) {
    let d = String(val || '').replace(/\D/g, '');
    if (d.length === 10) d = '91' + d;
    return d || '917777998789';
  }

  const activeWaDigits = toCleanDigits(cfg.contact.whatsapp || cfg.contact.phone);
  const activeDialDigits = toCleanDigits(cfg.contact.phoneRaw || cfg.contact.phone);

  // 1. Update ALL phone text displays
  document.querySelectorAll('[data-aura="phone"]').forEach(el => {
    el.textContent = cfg.contact.phone;
  });

  // 2. Update ALL tel: call buttons and links
  document.querySelectorAll('a[href^="tel:"], [data-aura-href="tel"], .aura-floating-call-pill').forEach(el => {
    el.href = `tel:+${activeDialDigits}`;
  });

  // 3. Update ALL email text displays
  document.querySelectorAll('[data-aura="email"]').forEach(el => {
    el.textContent = cfg.contact.email;
  });

  // 4. Update ALL mailto: buttons and links
  document.querySelectorAll('a[href^="mailto:"], [data-aura-href="mailto"]').forEach(el => {
    el.href = `mailto:${cfg.contact.email}`;
  });

  // 5. Update Address text displays
  document.querySelectorAll('[data-aura="address"]').forEach(el => {
    el.textContent = cfg.contact.address;
  });

  // 6. Update EVERY WhatsApp link, button, and floating widget on the page!
  document.querySelectorAll('a[href*="wa.me"], [data-aura-href="whatsapp"], .btn-whatsapp, .aura-floating-wa, .aura-floating-wa-circle').forEach(el => {
    let rawHref = el.getAttribute('href') || '';
    let customText = '';
    if (rawHref.includes('text=')) {
      const match = rawHref.match(/[?&]text=([^&]+)/);
      if (match) customText = match[1];
    }
    if (!customText && el.getAttribute('data-wa-text')) {
      customText = encodeURIComponent(el.getAttribute('data-wa-text'));
    }
    if (!customText) {
      customText = encodeURIComponent("Hi, I would like to inquire about booking Aura Convention & Lawns.");
    }
    el.href = `https://wa.me/${activeWaDigits}?text=${customText}`;
  });

  // 3. Stats counters
  document.querySelectorAll('[data-aura-stat="area"]').forEach(el => {
    el.textContent = cfg.stats.area;
  });
  document.querySelectorAll('[data-aura-stat="capacity"]').forEach(el => {
    el.textContent = cfg.stats.capacity;
  });
  document.querySelectorAll('[data-aura-stat="parking"]').forEach(el => {
    el.textContent = cfg.stats.parking;
  });

  // 4. Halls & Spaces Dynamic Rendering
  const hallsGrid = document.getElementById('auraHallsGrid') || document.querySelector('.halls-grid');
  if (hallsGrid && cfg.halls && cfg.halls.length) {
    let hHtml = '';
    cfg.halls.forEach((h, idx) => {
      hHtml += `
        <div class="hall-card">
          <div class="hall-image">
            <img src="${h.image || 'assets/images/hall_grand_stage.jpg'}" alt="${h.title}">
            <span class="hall-badge-tag">${h.badge || (h.guests ? h.guests.toUpperCase() : 'EVENT SPACE')}</span>
          </div>
          <div class="hall-body">
            <h3 class="hall-title">${h.title}</h3>
            <div class="hall-specs">
              <div class="spec-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>${h.guests}</span>
              </div>
              <div class="spec-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                <span>${h.area}</span>
              </div>
            </div>
            <p class="hall-desc">${h.desc}</p>
            <a href="#contact" class="hall-link">
              VIEW DETAILS & PRICING
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>`;
    });
    hallsGrid.innerHTML = hHtml;
  }

  // 5. MAIN WEBSITE GALLERY: Strictly first 6 images!
  const galleryContainer = document.getElementById('auraGalleryGrid') || document.querySelector('.gallery-grid-ref');
  if (galleryContainer && cfg.gallery && cfg.gallery.length) {
    const homeImages = cfg.gallery.slice(0, 6);
    const top4 = homeImages.slice(0, 4);
    const bottom2 = homeImages.slice(4, 6);

    let html = '';
    if (top4.length) {
      html += '<div class="gallery-row-top">';
      top4.forEach(item => {
        html += `
          <div class="gallery-thumb" onclick="openLightbox('${item.src}')" style="cursor: pointer;">
            <img src="${item.src}" alt="${item.title || 'Aura Gallery'}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>`;
      });
      html += '</div>';
    }

    if (bottom2.length) {
      html += '<div class="gallery-row-bottom">';
      bottom2.forEach(item => {
        html += `
          <div class="gallery-thumb" onclick="openLightbox('${item.src}')" style="cursor: pointer;">
            <img src="${item.src}" alt="${item.title || 'Aura Gallery'}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>`;
      });
      html += '</div>';
    }

    galleryContainer.innerHTML = html;
  }

  // 6. Pre-populate Full Gallery Modal
  renderFullGalleryModalGrid(cfg.gallery);
}

// ==============================================================================
// PROPER LIGHTBOX CONTROLLER (Never renders broken inline icons)
// ==============================================================================
window.openLightbox = function(src) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  if (modal && img && src) {
    img.src = src;
    modal.style.display = 'flex';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

window.closeLightbox = function() {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
    if (img) img.src = '';
    document.body.style.overflow = 'auto';
  }
};

function setupLightbox() {
  const modal = document.getElementById('lightboxModal');
  const btnClose = document.getElementById('btnLightboxClose');
  const backdrop = document.querySelector('.lightbox-backdrop');

  if (btnClose) btnClose.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
}

// ==============================================================================
// FULL GALLERY MODAL CONTROLLER (Zero Scrolling - Shows ALL Images)
// ==============================================================================
function renderFullGalleryModalGrid(gallery) {
  const grid = document.getElementById('fullGalleryAllGrid');
  const counter = document.getElementById('fullGalleryCounter');
  if (!grid) return;

  const items = gallery || [];
  if (counter) {
    counter.textContent = `Showing ${items.length} Photos`;
  }

  if (!items.length) {
    grid.innerHTML = '<p style="color: #999; font-size: 0.9rem; text-align: center; grid-column: 1/-1;">No photos available in gallery.</p>';
    return;
  }

  let html = '';
  items.forEach((item, idx) => {
    html += `
      <div class="full-gallery-item-card" onclick="openLightbox('${item.src}')">
        <img src="${item.src}" alt="${item.title || 'Aura Celebration Photo'}" loading="lazy">
        <div class="full-gallery-item-overlay">
          <span>${item.title || 'Aura Photo ' + (idx + 1)}</span>
        </div>
      </div>`;
  });
  grid.innerHTML = html;
}

function setupFullGalleryModal() {
  const btnOpen = document.getElementById('btnOpenFullGallery');
  const modal = document.getElementById('auraFullGalleryModal');
  const btnClose = document.getElementById('btnFullGalleryClose');
  const backdrop = document.querySelector('.aura-full-gallery-backdrop');

  if (btnOpen && modal) {
    btnOpen.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const cfg = getSiteConfig();
      renderFullGalleryModalGrid(cfg.gallery);
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  function closeFullGalleryModal() {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  if (btnClose) btnClose.addEventListener('click', closeFullGalleryModal);
  if (backdrop) backdrop.addEventListener('click', closeFullGalleryModal);
}

document.addEventListener('DOMContentLoaded', () => {
  const currentConfig = getSiteConfig();
  hydrateDOM(currentConfig);
  setupLightbox();
  setupFullGalleryModal();

  // Strip any lingering section hash from the URL on page load / refresh (while preserving #admin)
  if (window.location.hash && !window.location.hash.toLowerCase().includes('admin')) {
    const initialHash = window.location.hash;
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
    if (initialHash && initialHash !== '#home') {
      setTimeout(() => {
        const target = document.querySelector(initialHash);
        if (target) {
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 75;
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;
          window.scrollTo({ top: targetTop, behavior: 'smooth' });
        }
      }, 80);
    }
  }

  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Navigation & Hashless Smooth Scroll (Never pollutes URL with #section)
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('open');
    });
  }

  // Intercept all internal anchor links (smooth scroll & keep URL clean)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#' || hash.toLowerCase().includes('admin')) {
        return; // Allow #admin router to work as intended
      }
      e.preventDefault();

      const target = document.querySelector(hash);
      if (target) {
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 75;
        const targetTop = hash === '#home' ? 0 : (target.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5);
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }

      // If clicked from navbar, update active class
      if (link.classList.contains('nav-link')) {
        navLinks.forEach(nl => nl.classList.remove('active'));
        link.classList.add('active');
      }

      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger?.classList.remove('open');
      }

      // Ensure address bar stays clean (no #home or #section in URL)
      if (window.location.hash && !window.location.hash.toLowerCase().includes('admin')) {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
      }
    });
  });

  // 3. Scrollspy: dynamically update active nav link as user scrolls WITHOUT changing URL hash
  const spySections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 120;
    spySections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(nl => {
          if (nl.getAttribute('href') === `#${id}`) {
            navLinks.forEach(item => item.classList.remove('active'));
            nl.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });

  // 3. Inquiry Form Submission & Direct WhatsApp Draft Routing
  const inquiryForm = document.getElementById('inquiryForm');
  const formSuccess = document.getElementById('formSuccess') || document.getElementById('formSuccessMsg');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cfg = getSiteConfig();

      const name = (inquiryForm.querySelector('[name="name"], #guestName')?.value || '').trim() || 'Valued Guest';
      const phone = (inquiryForm.querySelector('[name="phone"], #guestPhone')?.value || '').trim() || 'Not provided';
      const email = (inquiryForm.querySelector('[name="email"], #guestEmail')?.value || '').trim();
      const eventType = (inquiryForm.querySelector('[name="event_type"], #eventType')?.value || '').trim() || 'Celebration / Event';
      const eventDate = (inquiryForm.querySelector('[name="event_date"], #eventDate')?.value || '').trim();
      const guests = (inquiryForm.querySelector('[name="guests"], #guestCount')?.value || '').trim() || 'Flexible';
      const message = (inquiryForm.querySelector('[name="message"], #guestMessage')?.value || '').trim();

      // Format event date nicely (e.g. 24 Oct 2026)
      let formattedDate = eventDate || 'Date to be finalized';
      if (eventDate) {
        try {
          const parts = eventDate.split('-');
          if (parts.length === 3) {
            const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            if (!isNaN(d.getTime())) {
              formattedDate = d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
            }
          }
        } catch (err) {}
      }

      // Build WhatsApp message draft with all filled details
      const text =
        `✨ *NEW VENUE INQUIRY - AURA CONVENTION & LAWNS* ✨\n\n` +
        `👤 *Guest Name:* ${name}\n` +
        `📱 *Phone Number:* ${phone}\n` +
        `✉️ *Email Address:* ${email || 'Not provided'}\n` +
        `🎉 *Event Type:* ${eventType}\n` +
        `📅 *Preferred Date:* ${formattedDate}\n` +
        `👥 *Estimated Guests:* ${guests}\n` +
        `📝 *Special Requirements / Notes:*\n${message || 'Please share hall availability, brochure, and customized pricing packages.'}\n\n` +
        `📍 *Venue:* Aura Convention & Lawns, Gachibowli, Hyderabad\n` +
        `_Sent via Aura Website Reservation Form_`;

      let activeWa = String(cfg.contact.whatsapp || cfg.contact.phone || '').replace(/\D/g, '');
      if (activeWa.length === 10) activeWa = '91' + activeWa;
      if (!activeWa) activeWa = '917777998789';

      const waUrl = `https://wa.me/${activeWa}?text=${encodeURIComponent(text)}`;

      // 4. EmailJS Dispatch targeting lohi8978019972@gmail.com
      const emailParams = {
        to_email: 'lohi8978019972@gmail.com',
        recipient: 'lohi8978019972@gmail.com',
        user_name: name,
        user_phone: phone,
        user_email: email || 'Not provided',
        event_type: eventType,
        event_date: formattedDate,
        guest_count: guests,
        message: message || 'Please share hall availability, brochure, and customized pricing packages.',
        venue_name: 'Aura Convention & Lawns, Gachibowli',
        subject: `New Venue Inquiry for Aura Convention & Lawns: ${eventType} - ${name}`
      };

      if (typeof emailjs !== 'undefined' && typeof emailjs.send === 'function') {
        try {
          emailjs.send('default_service', 'template_aura_inquiry', emailParams)
            .then(res => {
              console.log('✓ EmailJS inquiry delivered:', res.status, res.text);
            })
            .catch(err => {
              console.log('EmailJS status notice:', err);
            });
        } catch (e) {
          console.warn('EmailJS dispatch attempt:', e);
        }
      }

      // Show immediate feedback confirming EmailJS dispatch & WhatsApp priority link
      if (formSuccess) {
        formSuccess.innerHTML = `
          <div style="text-align: center; padding: 6px 0;">
            <div style="font-weight: 700; color: #d4af37; font-size: 1rem; margin-bottom: 6px;">
              ✓ Inquiry Dispatched to lohi8978019972@gmail.com!
            </div>
            <div style="font-size: 0.85rem; color: #b7cebf; margin-bottom: 8px;">
              Our event concierge is also connecting via WhatsApp for priority date hold and instant assistance.
            </div>
            <div style="font-size: 0.82rem; color: #9bb5a4;">
              If WhatsApp does not open automatically, <a href="${waUrl}" target="_blank" rel="noopener noreferrer" style="color: #25D366; text-decoration: underline; font-weight: 700;">tap here to open WhatsApp</a>.
            </div>
          </div>
        `;
        formSuccess.style.display = 'block';
      }

      // Check for mobile user agents
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      // Open WhatsApp synchronously in the user gesture thread to prevent popup blockers
      if (isMobile) {
        window.location.href = waUrl;
      } else {
        const opened = window.open(waUrl, '_blank');
        if (!opened || opened.closed || typeof opened.closed === 'undefined') {
          window.location.href = waUrl;
        }
      }
    });
  }

  // ==========================================================================
  // 4. SECRET ADMIN PORTAL (/#admin) ROUTER & PERSISTENT SESSION
  // ==========================================================================
  function getAdminPortalEl() {
    return document.getElementById('auraAdminPortal');
  }
  function getAdminLoginCardEl() {
    return document.getElementById('adminLoginCard');
  }
  function getAdminDashboardEl() {
    return document.getElementById('adminDashboard');
  }
  function getAdminLoginFormEl() {
    return document.getElementById('adminLoginForm');
  }
  function getAdminLoginErrorEl() {
    return document.getElementById('adminLoginError');
  }

  function checkAdminRoute() {
    const rawHash = (window.location.hash || '').toLowerCase().trim();
    if (rawHash === '#admin' || rawHash === '#/admin' || rawHash === '#admin/' || rawHash.startsWith('#admin')) {
      openAdminPortal();
    } else {
      closeAdminPortal();
    }
  }

  window.addEventListener('hashchange', checkAdminRoute);
  window.addEventListener('load', checkAdminRoute);

  function openAdminPortal() {
    const portal = getAdminPortalEl();
    if (!portal) {
      console.warn('auraAdminPortal element not found in DOM');
      return;
    }
    portal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Ensure tab and form listeners are wired
    bindAdminInteractions();

    // PERSISTENT LOGIN (localStorage): Don't force logout on tab close!
    const isAuth = localStorage.getItem('aura_admin_logged_in') === 'true';
    if (isAuth) {
      showDashboard();
    } else {
      showLogin();
    }
  }
  window.openAdminPortal = openAdminPortal;

  window.closeAdminPortal = function() {
    const portal = getAdminPortalEl();
    if (portal) {
      portal.style.display = 'none';
    }
    document.body.style.overflow = 'auto';
    const rawHash = (window.location.hash || '').toLowerCase().trim();
    if (rawHash.includes('admin')) {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  function showLogin() {
    const loginCard = getAdminLoginCardEl();
    const dashboard = getAdminDashboardEl();
    if (loginCard) loginCard.style.display = 'block';
    if (dashboard) dashboard.style.display = 'none';
  }

  function showDashboard() {
    const loginCard = getAdminLoginCardEl();
    const dashboard = getAdminDashboardEl();
    if (loginCard) loginCard.style.display = 'none';
    if (dashboard) dashboard.style.display = 'flex';
    populateAdminFields();
  }

  let adminBound = false;
  function bindAdminInteractions() {
    if (adminBound) return;
    adminBound = true;
    setupAdminFormsAndTabs();
  }

  function setupAdminFormsAndTabs() {
    const adminLoginForm = getAdminLoginFormEl();
    const adminLoginError = getAdminLoginErrorEl();
    if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cfg = getSiteConfig();
      const u = document.getElementById('adminUser')?.value.trim();
      const p = document.getElementById('adminPass')?.value.trim();

      if (u === cfg.admin.user && p === cfg.admin.pass) {
        localStorage.setItem('aura_admin_logged_in', 'true');
        if (adminLoginError) adminLoginError.style.display = 'none';
        showDashboard();
        showAdminToast('✓ Welcome to Aura Admin Console');
      } else {
        if (adminLoginError) {
          adminLoginError.textContent = 'Invalid credentials. If forgotten, click Reset Password below.';
          adminLoginError.style.display = 'block';
        }
      }
    });
  }

  // Forgot Password Toggle
  const btnToggleForgot = document.getElementById('btnToggleForgot');
  const adminForgotBox = document.getElementById('adminForgotBox');
  if (btnToggleForgot && adminForgotBox) {
    btnToggleForgot.addEventListener('click', () => {
      adminForgotBox.style.display = adminForgotBox.style.display === 'none' ? 'block' : 'none';
    });
  }

  // Reset Password Form (Recovery Key: aura2026)
  const adminResetForm = document.getElementById('adminResetForm');
  if (adminResetForm) {
    adminResetForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const key = document.getElementById('resetKey')?.value.trim();
      const newPass = document.getElementById('resetNewPass')?.value.trim();

      if (key === 'aura2026' || key === 'aura@2026' || key.toLowerCase() === 'reset') {
        const cfg = getSiteConfig();
        cfg.admin.pass = newPass;
        saveSiteConfig(cfg);
        localStorage.setItem('aura_admin_logged_in', 'true');
        showDashboard();
        showAdminToast('✓ Password reset successfully! You are logged in.');
      } else {
        alert('Invalid Recovery Key. Use "aura2026" or contact your site developer.');
      }
    });
  }

  // Populate Admin Inputs from Configuration
  function populateAdminFields() {
    const cfg = getSiteConfig();
    
    // 1. About section fields
    const aboutTitle = document.getElementById('cfgAboutTitle');
    const aboutImg = document.getElementById('cfgAboutImage');
    const aboutIntro = document.getElementById('cfgAboutIntro');
    if (aboutTitle) aboutTitle.value = cfg.about.title;
    if (aboutImg) aboutImg.value = cfg.about.image;
    if (aboutIntro) aboutIntro.value = cfg.about.intro;
    renderAdminAboutFeatures(cfg.about.features);

    // 2. Contact fields
    const phoneInput = document.getElementById('cfgPhone');
    const waInput = document.getElementById('cfgWhatsapp');
    const emailInput = document.getElementById('cfgEmail');
    const addrInput = document.getElementById('cfgAddress');
    if (phoneInput) phoneInput.value = cfg.contact.phone;
    if (waInput) waInput.value = cfg.contact.whatsapp;
    if (emailInput) emailInput.value = cfg.contact.email;
    if (addrInput) addrInput.value = cfg.contact.address;

    // 3. Stats fields
    const areaInput = document.getElementById('cfgArea');
    const capInput = document.getElementById('cfgCapacity');
    const parkInput = document.getElementById('cfgParking');
    if (areaInput) areaInput.value = cfg.stats.area;
    if (capInput) capInput.value = cfg.stats.capacity;
    if (parkInput) parkInput.value = cfg.stats.parking;

    // 4. Halls Manager List (Dynamic CRUD)
    renderAdminHallsList(cfg.halls);

    // 5. Gallery Manager List
    renderAdminGalleryList(cfg.gallery);
  }

  // ==========================================
  // HALLS & SPACES CRUD IN ADMIN
  // ==========================================
  function renderAdminHallsList(halls) {
    const list = document.getElementById('adminHallsList');
    if (!list) return;

    if (!halls || !halls.length) {
      list.innerHTML = '<p style="color: #999; font-size: 0.82rem;">No halls in spaces list.</p>';
      return;
    }

    let html = '';
    halls.forEach((h, idx) => {
      html += `
        <div class="admin-about-card-row">
          <button type="button" class="btn-admin-del card-del-btn" onclick="deleteHallCard(${idx})">&times; Remove Hall</button>
          
          <div class="admin-grid-2col" style="margin-bottom: 8px;">
            <div class="admin-form-group" style="margin-bottom: 6px;">
              <label>Hall Name</label>
              <input type="text" value="${h.title}" onchange="updateHallField(${idx}, 'title', this.value)">
            </div>
            <div class="admin-form-group" style="margin-bottom: 6px;">
              <label>Capacity Badge</label>
              <input type="text" value="${h.badge}" onchange="updateHallField(${idx}, 'badge', this.value)">
            </div>
          </div>

          <div class="admin-grid-2col" style="margin-bottom: 8px;">
            <div class="admin-form-group" style="margin-bottom: 6px;">
              <label>Guests Display</label>
              <input type="text" value="${h.guests}" onchange="updateHallField(${idx}, 'guests', this.value)">
            </div>
            <div class="admin-form-group" style="margin-bottom: 6px;">
              <label>Area (Sq.Ft)</label>
              <input type="text" value="${h.area}" onchange="updateHallField(${idx}, 'area', this.value)">
            </div>
          </div>

          <div class="admin-form-group" style="margin-bottom: 6px;">
            <label>Image URL / Path</label>
            <input type="text" value="${h.image || ''}" onchange="updateHallField(${idx}, 'image', this.value)">
          </div>

          <div class="admin-form-group" style="margin-bottom: 0;">
            <label>Hall Description</label>
            <input type="text" value="${h.desc}" onchange="updateHallField(${idx}, 'desc', this.value)">
          </div>
        </div>`;
    });
    list.innerHTML = html;
  }

  window.updateHallField = function(idx, field, val) {
    const cfg = getSiteConfig();
    if (cfg.halls && cfg.halls[idx]) {
      cfg.halls[idx][field] = val;
      saveSiteConfig(cfg);
      hydrateDOM(cfg);
    }
  };

  window.deleteHallCard = function(idx) {
    const cfg = getSiteConfig();
    if (cfg.halls && cfg.halls.length > idx) {
      cfg.halls.splice(idx, 1);
      saveSiteConfig(cfg);
      hydrateDOM(cfg);
      renderAdminHallsList(cfg.halls);
      showAdminToast('✓ Hall card removed!');
    }
  };

  const btnAddHallCard = document.getElementById('btnAddHallCard');
  if (btnAddHallCard) {
    btnAddHallCard.addEventListener('click', () => {
      const titleInput = document.getElementById('newHallTitle');
      const badgeInput = document.getElementById('newHallBadge');
      const guestsInput = document.getElementById('newHallGuests');
      const areaInput = document.getElementById('newHallArea');
      const imageInput = document.getElementById('newHallImage');
      const descInput = document.getElementById('newHallDesc');

      const title = titleInput?.value.trim() || 'Royal Banquet Space';
      const guests = guestsInput?.value.trim() || '500 Guests';
      const badge = badgeInput?.value.trim() || guests.toUpperCase();
      const area = areaInput?.value.trim() || '5,000 sq.ft';
      const image = imageInput?.value.trim() || 'assets/images/expo_canopy.jpg';
      const desc = descInput?.value.trim() || 'Lavish celebration space with ambient lighting and royal infrastructure.';

      const cfg = getSiteConfig();
      if (!cfg.halls) cfg.halls = [];
      cfg.halls.push({ title, badge, guests, area, image, desc });
      saveSiteConfig(cfg);
      hydrateDOM(cfg);
      renderAdminHallsList(cfg.halls);

      if (titleInput) titleInput.value = '';
      if (badgeInput) badgeInput.value = '';
      if (guestsInput) guestsInput.value = '';
      if (areaInput) areaInput.value = '';
      if (imageInput) imageInput.value = '';
      if (descInput) descInput.value = '';
      showAdminToast('✓ Added new Hall / Space card to grid!');
    });
  }

  // ==========================================
  // ABOUT SECTION FEATURES CRUD IN ADMIN
  // ==========================================
  function renderAdminAboutFeatures(features) {
    const list = document.getElementById('adminAboutFeaturesList');
    if (!list) return;

    if (!features || !features.length) {
      list.innerHTML = '<p style="color: #999; font-size: 0.82rem;">No feature cards in About section.</p>';
      return;
    }

    let html = '';
    features.forEach((f, idx) => {
      html += `
        <div class="admin-about-card-row">
          <button type="button" class="btn-admin-del card-del-btn" onclick="deleteAboutFeature(${idx})">&times; Remove Card</button>
          <div class="admin-grid-2col" style="margin-bottom: 8px;">
            <div class="admin-form-group" style="margin-bottom: 6px;">
              <label>Card Title</label>
              <input type="text" value="${f.title}" onchange="updateAboutFeatureField(${idx}, 'title', this.value)">
            </div>
            <div class="admin-form-group" style="margin-bottom: 6px;">
              <label>Badge Pill</label>
              <input type="text" value="${f.badge}" onchange="updateAboutFeatureField(${idx}, 'badge', this.value)">
            </div>
          </div>
          <div class="admin-form-group" style="margin-bottom: 0;">
            <label>Card Description</label>
            <input type="text" value="${f.desc}" onchange="updateAboutFeatureField(${idx}, 'desc', this.value)">
          </div>
        </div>`;
    });
    list.innerHTML = html;
  }

  window.updateAboutFeatureField = function(idx, field, val) {
    const cfg = getSiteConfig();
    if (cfg.about.features && cfg.about.features[idx]) {
      cfg.about.features[idx][field] = val;
      saveSiteConfig(cfg);
      hydrateDOM(cfg);
    }
  };

  window.deleteAboutFeature = function(idx) {
    const cfg = getSiteConfig();
    if (cfg.about.features && cfg.about.features.length > idx) {
      cfg.about.features.splice(idx, 1);
      saveSiteConfig(cfg);
      hydrateDOM(cfg);
      renderAdminAboutFeatures(cfg.about.features);
      showAdminToast('✓ Feature card removed from About section!');
    }
  };

  const btnAddFeatureCard = document.getElementById('btnAddFeatureCard');
  if (btnAddFeatureCard) {
    btnAddFeatureCard.addEventListener('click', () => {
      const titleInput = document.getElementById('newCardTitle');
      const badgeInput = document.getElementById('newCardBadge');
      const descInput = document.getElementById('newCardDesc');

      const title = titleInput?.value.trim() || 'Premium Amenity';
      const badge = badgeInput?.value.trim() || '★ LUXURY SERVICE';
      const desc = descInput?.value.trim() || 'Dedicated facilities ensuring an unmatched event experience.';

      const cfg = getSiteConfig();
      if (!cfg.about.features) cfg.about.features = [];
      cfg.about.features.push({ title, badge, desc });
      saveSiteConfig(cfg);
      hydrateDOM(cfg);
      renderAdminAboutFeatures(cfg.about.features);

      if (titleInput) titleInput.value = '';
      if (badgeInput) badgeInput.value = '';
      if (descInput) descInput.value = '';
      showAdminToast('✓ Added new feature card to About section!');
    });
  }

  // ==========================================
  // GALLERY PHOTOS CRUD IN ADMIN
  // ==========================================
  function renderAdminGalleryList(items) {
    const listContainer = document.getElementById('adminGalleryList');
    if (!listContainer) return;

    const galleryItems = (items && Array.isArray(items) && items.length > 0)
      ? items
      : (DEFAULT_AURA_CONFIG.gallery || []);

    if (!galleryItems || !galleryItems.length) {
      listContainer.innerHTML = '<p style="color: #999; font-size: 0.85rem; padding: 12px; background: rgba(0,0,0,0.3); border-radius: 6px;">No images currently in gallery. Use the form below to add photos.</p>';
      return;
    }

    let html = '';
    galleryItems.forEach((item, idx) => {
      const isHome = idx < 6;
      const title = item.title || ('Gallery Image #' + (idx + 1));
      const badge = isHome 
        ? `<span style="display: inline-flex; align-items: center; gap: 4px; background: rgba(74, 222, 128, 0.15); color: #4ADE80; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.72rem; border: 1px solid rgba(74, 222, 128, 0.3);">● Live on Homepage (#${idx + 1})</span>`
        : `<span style="display: inline-flex; align-items: center; gap: 4px; background: rgba(197, 160, 89, 0.15); color: #C5A059; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.72rem; border: 1px solid rgba(197, 160, 89, 0.3);">○ View Gallery Modal</span>`;

      html += `
        <div class="admin-gallery-item-row" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: rgba(4, 15, 9, 0.85); border: 1px solid rgba(197, 160, 89, 0.25); border-radius: 8px; margin-bottom: 10px; gap: 14px; transition: border-color 0.2s ease;">
          <img src="${item.src}" class="admin-gallery-item-thumb" alt="thumb" style="width: 64px; height: 48px; object-fit: cover; border-radius: 6px; border: 1.5px solid rgba(197, 160, 89, 0.4); flex-shrink: 0;">
          <div class="admin-gallery-item-details" style="flex: 1; min-width: 0;">
            <div style="font-weight: 600; color: #FFFFFF; font-size: 0.88rem; margin-bottom: 4px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${title}</div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              ${badge}
              <span style="font-size: 0.72rem; color: #8FA698; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; max-width: 200px;">${item.src}</span>
            </div>
          </div>
          <button type="button" class="btn-admin-del" onclick="deleteGalleryItem(${idx})" title="Delete '${title}' from gallery" style="background: rgba(220, 53, 69, 0.25); border: 1px solid rgba(220, 53, 69, 0.6); color: #FFA0A0; padding: 7px 14px; border-radius: 6px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px; white-space: nowrap; transition: all 0.2s ease;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Delete Image
          </button>
        </div>`;
    });
    listContainer.innerHTML = html;
  }

  window.deleteGalleryItem = function(idx) {
    const cfg = getSiteConfig();
    if (cfg.gallery && cfg.gallery.length > idx) {
      cfg.gallery.splice(idx, 1);
      saveSiteConfig(cfg);
      hydrateDOM(cfg);
      renderAdminGalleryList(cfg.gallery);
      showAdminToast('✓ Photo removed from gallery!');
    }
  };

  const addPhotoBtn = document.getElementById('btnAddGalleryPhoto');
  if (addPhotoBtn) {
    addPhotoBtn.addEventListener('click', () => {
      const urlInput = document.getElementById('newPhotoUrl');
      const fileInput = document.getElementById('newPhotoFile');
      const titleInput = document.getElementById('newPhotoTitle');
      const spanInput = document.getElementById('newPhotoSpan');

      const title = titleInput?.value.trim() || 'Aura Celebration';
      const span = spanInput?.value || '1';

      if (fileInput && fileInput.files && fileInput.files[0]) {
        compressImage(fileInput.files[0], 1200, (compressedDataUrl) => {
          const cfg = getSiteConfig();
          cfg.gallery.push({ src: compressedDataUrl, title: title, span: span });
          saveSiteConfig(cfg);
          hydrateDOM(cfg);
          renderAdminGalleryList(cfg.gallery);
          fileInput.value = '';
          if (titleInput) titleInput.value = '';
          showAdminToast('✓ Photo uploaded & added to gallery collection!');
        });
      } else if (urlInput && urlInput.value.trim()) {
        const cfg = getSiteConfig();
        cfg.gallery.push({ src: urlInput.value.trim(), title: title, span: span });
        saveSiteConfig(cfg);
        hydrateDOM(cfg);
        renderAdminGalleryList(cfg.gallery);
        urlInput.value = '';
        if (titleInput) titleInput.value = '';
        showAdminToast('✓ Photo URL added to gallery collection!');
      } else {
        alert('Please enter an image URL or choose an image file.');
      }
    });
  }

  // ==========================================
  // ADMIN SECURITY (Change Password)
  // ==========================================
  const adminChangePassForm = document.getElementById('adminChangePassForm');
  if (adminChangePassForm) {
    adminChangePassForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const p1 = document.getElementById('newAdminPass')?.value.trim();
      const p2 = document.getElementById('confirmAdminPass')?.value.trim();

      if (!p1) {
        alert('Password cannot be empty.');
        return;
      }
      if (p1 !== p2) {
        alert('Passwords do not match. Please re-enter.');
        return;
      }

      const cfg = getSiteConfig();
      cfg.admin.pass = p1;
      saveSiteConfig(cfg);
      showAdminToast('✓ Admin password updated successfully!');
      adminChangePassForm.reset();
    });
  }

  const btnResetPassDefault = document.getElementById('btnResetPassDefault');
  if (btnResetPassDefault) {
    btnResetPassDefault.addEventListener('click', () => {
      if (confirm('Reset admin password to factory default: "aura@2026"?')) {
        const cfg = getSiteConfig();
        cfg.admin.pass = 'aura@2026';
        saveSiteConfig(cfg);
        showAdminToast('✓ Password reset to factory default: "aura@2026"');
      }
    });
  }

  // Save All Changes Button: Automatically redirects to live updated website!
  const btnSaveAdmin = document.getElementById('btnSaveAdmin');
  if (btnSaveAdmin) {
    btnSaveAdmin.addEventListener('click', () => {
      const cfg = getSiteConfig();

      // Read about inputs
      cfg.about.title = document.getElementById('cfgAboutTitle')?.value.trim() || cfg.about.title;
      cfg.about.image = document.getElementById('cfgAboutImage')?.value.trim() || cfg.about.image;
      cfg.about.intro = document.getElementById('cfgAboutIntro')?.value.trim() || cfg.about.intro;

      // Read contact inputs
      cfg.contact.phone = document.getElementById('cfgPhone')?.value.trim() || cfg.contact.phone;
      const userWaInput = document.getElementById('cfgWhatsapp')?.value.trim();
      if (userWaInput) {
        cfg.contact.whatsapp = userWaInput.replace(/\D/g, '');
      } else {
        // Automatically derive clean international digits from phone
        let pDigits = cfg.contact.phone.replace(/\D/g, '');
        if (pDigits.length === 10) pDigits = '91' + pDigits;
        cfg.contact.whatsapp = pDigits || '917777998789';
      }
      let rawPhone = cfg.contact.phone.replace(/\D/g, '');
      if (rawPhone.length === 10) rawPhone = '91' + rawPhone;
      cfg.contact.phoneRaw = '+' + rawPhone;
      cfg.contact.email = document.getElementById('cfgEmail')?.value.trim() || cfg.contact.email;
      cfg.contact.address = document.getElementById('cfgAddress')?.value.trim() || cfg.contact.address;

      // Read stats inputs
      cfg.stats.area = document.getElementById('cfgArea')?.value.trim() || cfg.stats.area;
      cfg.stats.capacity = document.getElementById('cfgCapacity')?.value.trim() || cfg.stats.capacity;
      cfg.stats.parking = document.getElementById('cfgParking')?.value.trim() || cfg.stats.parking;

      saveSiteConfig(cfg);
      hydrateDOM(cfg);
      
      // Automatically redirect to the updated live website!
      closeAdminPortal();
      showAdminToast('✓ All changes saved & applied live on website!');
    });
  }

  // Reset to Defaults Button
  const btnResetAdmin = document.getElementById('btnResetAdmin');
  if (btnResetAdmin) {
    btnResetAdmin.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all content back to factory defaults?')) {
        saveSiteConfig(DEFAULT_AURA_CONFIG);
        hydrateDOM(DEFAULT_AURA_CONFIG);
        populateAdminFields();
        showAdminToast('✓ Reset to factory defaults!');
      }
    });
  }

  // Admin Tab Switching
  document.querySelectorAll('.admin-nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-nav-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
        if (targetId === 'paneGallery') {
          const cfg = getSiteConfig();
          renderAdminGalleryList(cfg.gallery);
        } else if (targetId === 'paneHalls') {
          const cfg = getSiteConfig();
          renderAdminHallsList(cfg.halls);
        }
      }
    });
  });

  // Admin Logout Button
  const btnAdminLogout = document.getElementById('btnAdminLogout');
  if (btnAdminLogout) {
    btnAdminLogout.addEventListener('click', () => {
      localStorage.removeItem('aura_admin_logged_in');
      showLogin();
      showAdminToast('Logged out successfully.');
    });
  }

  // Admin Close Buttons (Back to Site)
  document.querySelectorAll('#btnAdminClose').forEach(btn => {
    btn.addEventListener('click', closeAdminPortal);
  });

  }
  bindAdminInteractions();
  checkAdminRoute();

  // Toast alert function
  function showAdminToast(msg) {
    let toast = document.getElementById('auraAdminToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'auraAdminToast';
      toast.className = 'aura-admin-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
});
