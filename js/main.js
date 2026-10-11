/*
   AURA CONVENTION & LAWNS - Interactive Scripts & Comprehensive Dynamic CMS
   Features:
   - Dynamic Site Configuration (localStorage persistence with versioned migration)
   - Secret Admin Portal via URL hash /#admin, Ctrl+Shift+A shortcut, or Footer CMS link
   - Persistent Login Session & Master Password Recovery (aura2026)
   - Full 9-Tab Admin Dashboard (Hero, About, Halls, Catering, Gallery, Contact, Stats, Backup, Security)
   - Client-side Image Auto-Compression for Device Uploads across ALL sections
   - Halls & Spaces Dynamic CRUD (Add, Edit Specs, Replace Image via URL/File, Delete)
   - Food & Catering Dynamic Management (Story, Photos, Partner Link, Checklist CRUD)
   - About Features Dynamic Management (Add, Edit, Delete Grid Cards)
   - Photo Gallery Manager (10 curated on homepage, all in modal, captions, spans, add/delete/file upload)
   - Complete Backup & Sync (Download JSON, Restore from File, Copy to Clipboard, Factory Reset)
   - EmailJS inquiry notifications and customer auto-replies
*/

// Default fallback configuration for Aura Convention & Lawns
const DEFAULT_AURA_CONFIG = {
  version: 81,
  hero: {
    tag: "WELCOME TO AURA",
    title: "Where Celebrations Become Timeless Memories",
    subtitle: "An urban oasis conceived to redefine the art of gathering, framed by majestic hillocks in Hyderabad’s financial corridor.",
    btnPrimaryText: "SEND AN INQUIRY",
    btnPrimaryLink: "#contact",
    btnSecondaryText: "EXPLORE SPACES",
    btnSecondaryLink: "#halls",
    bgImage: "assets/images/aura_drone_aerial_panorama.jpg",
    badgeCapacity: "800+ Guests Capacity",
    badgeArea: "30,000+ Sq.Ft Area",
    badgeLocation: "Prime Gachibowli Location ↗",
    badgeParking: "200+ Spacious Inside Valet Parking"
  },
  about: {
    tag: "ABOUT OUR VENUE",
    title: "An Unexpected Sanctuary in Hyderabad’s Financial Corridor",
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
  hallsHeader: {
    tag: "OUR VENUES",
    title: "Halls & Spaces",
    subtitle: "Exquisite indoor ballrooms and vast open-air lawns engineered to host extraordinary milestones and enterprise gatherings."
  },
  halls: [
    {
      title: "Convention Hall",
      badge: "EXECUTIVE PRECISION",
      guests: "1,500 Guests",
      area: "12,000 sq.ft",
      image: "assets/images/aura_convention_hall_canopy.jpg",
      desc: "Inside our convention hall, executive ambition meets uncompromising precision. Aura Convention and Lawns is built from the ground up for premier MICE engagements—from high-profile corporate conventions, international tech summits, and product unveils to strategic board retreats and expansive trade exhibitions. With intelligent acoustic engineering, advanced presentation infrastructure, and versatile modular floor plans, we deliver the structured focus, privacy, and flawless execution that global enterprise commands."
    },
    {
      title: "Lawns",
      badge: "UNDER THE NIGHT SKY",
      guests: "2,000+ Guests",
      area: "20,000 sq.ft",
      image: "assets/images/aura_sprawling_lawns_setup.jpg",
      desc: "Under the open night sky, Aura Convention and Lawns offers a versatile canvas designed not only for royal weddings, vibrant sangeets, and grand receptions, but also for large-scale corporate exhibitions, curated art galleries, cultural festivals, and high-impact tech events. Spanning 20,000 sq.ft framed by scenic natural rock formations, the sprawling lawns adapt effortlessly to custom exhibition pavilions, stage setups, tech product zones, and lavish open-air banquets under the stars."
    },
    {
      title: "Banquet Hall",
      badge: "OPULENT CLIMATE COMFORT",
      guests: "600 Guests",
      area: "6,000 sq.ft",
      image: "assets/images/aura_banquet_hall_wedding_setup.png",
      desc: "For occasions that demand flawless climate-controlled comfort without sacrificing an ounce of grandeur, Aura Convention and Lawns proudly presents our pristine Indoor AC Banquet Hall. This opulent, fully air-conditioned space offers an elegant sanctuary for sophisticated celebrations, vibrant pre-wedding sangeets, and exclusive private galas. With plush interiors, customizable ambient lighting, and impeccable acoustics, the banquet hall ensures your guests remain immersed in absolute comfort and luxury, completely insulated from the seasons outside."
    }
  ],
  catering: {
    tag: "ROYAL FOOD & CATERING",
    title: "Delicious Moments Made to Perfection",
    subtitle: "Exquisite royal feasts powered by our exclusive food & catering partner, KateringKing.",
    partnerPill: "EXCLUSIVE FOOD & CATERING PARTNER: <strong>KateringKing.com</strong>",
    partnerUrl: "https://kateringking.com/",
    heading: "An Unforgettable Food & Dining Experience",
    desc: "No event is complete without an unforgettable food experience. At Aura Convention and Lawns, dining is elevated through our partnership with KateringKing.com. Known for artisanal menu creation, exquisite live food stations, and flawless banquet hospitality, KateringKing curates dining experiences tailored to royal tastes. Together, we ensure your guests savor every bite of your occasion.",
    image: "assets/images/aura_live_buffet_service.jpg",
    checklist: [
      {
        title: "Artisanal Menu Creation",
        desc: "Bespoke veg & non-veg menus crafted for regal celebrations."
      },
      {
        title: "Exquisite Live Food Counters",
        desc: "Interactive chaat, global grills, live tandoor & artisan desserts."
      },
      {
        title: "Flawless Banquet Hospitality",
        desc: "White-glove royal service and dedicated dining stewards."
      },
      {
        title: "100% Segregated Pure Veg Facilities",
        desc: "Complete peace of mind with separate dedicated cooking setups."
      }
    ]
  },
  galleryHeader: {
    tag: "PHOTO GALLERY",
    title: "Photo Gallery",
    subtitle: "A glimpse of magical weddings, vibrant expos, and unforgettable memories hosted at Aura."
  },
  gallery: [
    { src: "assets/images/aura_grand_entrance_arch_night.jpg", title: "Illuminated Grand Entry Gate & Welcome Promenade", span: "1" },
    { src: "assets/images/aura_stage_led_backdrop.jpg", title: "Grand Production Stage & LED Visual Backdrop", span: "1" },
    { src: "assets/images/aura_evening_lawn_gala_setup.jpg", title: "Twilight Lawn Banquet & LED Stage Setting", span: "1" },
    { src: "assets/images/aura_artisanal_salad_counter.jpg", title: "Artisanal Gourmet Salad & Live Cold Display by KateringKing", span: "1" },
    { src: "assets/images/aura_lawns_banquet_setup.jpg", title: "Lush Sprawling Lawns & Royal Banquet Seating", span: "1" },
    { src: "assets/images/aura_live_fruit_counter.jpg", title: "Exquisite Live Fruit Counter & Gourmet Display", span: "1" },
    { src: "assets/images/aura_artisanal_dessert_display.jpg", title: "Artisanal Dessert & Pastry Showcase by KateringKing", span: "1" },
    { src: "assets/images/aura_royal_buffet_spread.jpg", title: "Royal Banquet Feast by KateringKing", span: "1" },
    { src: "assets/images/aura_canopy_buffet_hall.jpg", title: "Spacious Canopy Dining & Grand Buffet Hall", span: "2" },
    { src: "assets/images/aura_drone_aerial_parking.jpg", title: "Expansive 200+ Inside Valet Parking Grounds", span: "2" },
    { src: "assets/images/aura_drone_aerial_panorama.jpg", title: "Aerial Drone Panorama: Venue Estate & Lake Sanctuary", span: "2" },
    { src: "assets/images/aura_drone_aerial_lawns.jpg", title: "Aerial Bird's Eye View: Sprawling Banquet Lawns", span: "2" },
    { src: "assets/images/aura_grand_entrance_night.jpg", title: "Aura Grand Illuminated Entrance & Promenade", span: "1" }
  ],
  contact: {
    tag: "RESERVATIONS & BOOKINGS",
    title: "Inquire Now",
    subtitle: "Schedule a private venue walkthrough or receive customized date availability & package pricing.",
    phone: "+91 77779 98789",
    phoneRaw: "+917777998789",
    whatsapp: "917777998789",
    email: "info@auraconvention.com",
    address: "Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032",
    mapsUrl: "https://www.google.com/maps/place/AURA+Convention+%26+Lawns/@17.4307919,78.3605956,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93be75973279:0x7ebae846414c1aaf!8m2!3d17.4307919!4d78.3631705!16s%2Fg%2F11kcl9qh80?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D",
    googleProfileUrl: "https://share.google/AniDRQuswFoXfx32N"
  },
  emailjs: {
    serviceId: "service_k753g6o",
    templateId: "template_svuyd2j",
    autoReplyTemplateId: "template_f36k4ph",
    publicKey: "-KmTU6-xesgifj8vr",
    toEmail: "lohi8978019972@gmail.com"
  },
  stats: {
    area: "30,000+",
    capacity: "800+",
    parking: "200+"
  },
  footer: {
    copyright: "© 2026 Aura Convention & Lawns. All Rights Reserved. Designed for Excellence."
  },
  admin: {
    user: "admin",
    pass: "aura@2026"
  }
};

// Global image compression helper (keeps localStorage safe and avoids browser quota limits)
function compressImage(file, maxWidth, callback) {
  if (!file) return;
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

// Global handler for deleting a gallery item
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

// Global handler for updating gallery photo caption
window.updateGalleryField = function(idx, field, val) {
  const cfg = getSiteConfig();
  if (cfg.gallery && cfg.gallery[idx]) {
    cfg.gallery[idx][field] = val;
    saveSiteConfig(cfg);
    hydrateDOM(cfg);
    if (typeof showAdminToast === 'function') {
      showAdminToast('✓ Gallery photo updated!');
    }
  }
};

// Global handler for replacing an existing gallery image with a file upload
window.uploadGalleryImage = function(idx, fileInput) {
  if (fileInput && fileInput.files && fileInput.files[0]) {
    compressImage(fileInput.files[0], 1200, (compressedDataUrl) => {
      const cfg = getSiteConfig();
      if (cfg.gallery && cfg.gallery[idx]) {
        cfg.gallery[idx].src = compressedDataUrl;
        saveSiteConfig(cfg);
        hydrateDOM(cfg);
        if (typeof renderAdminGalleryList === 'function') {
          renderAdminGalleryList(cfg.gallery);
        }
        if (typeof showAdminToast === 'function') {
          showAdminToast('✓ Image replaced for gallery item!');
        }
      }
    });
  }
};

// Global handler for reordering gallery photos (Move Up / Down)
window.moveGalleryItem = function(idx, direction) {
  const cfg = getSiteConfig();
  if (!cfg.gallery || !Array.isArray(cfg.gallery)) return;
  const targetIdx = idx + direction;
  if (targetIdx < 0 || targetIdx >= cfg.gallery.length) return;

  const temp = cfg.gallery[idx];
  cfg.gallery[idx] = cfg.gallery[targetIdx];
  cfg.gallery[targetIdx] = temp;

  saveSiteConfig(cfg);
  hydrateDOM(cfg);
  if (typeof renderAdminGalleryList === 'function') {
    renderAdminGalleryList(cfg.gallery);
  }
  if (typeof showAdminToast === 'function') {
    showAdminToast('✓ Gallery photo order updated!');
  }
};

// Global handler for updating hall fields
window.updateHallField = function(idx, field, val) {
  const cfg = getSiteConfig();
  if (cfg.halls && cfg.halls[idx]) {
    cfg.halls[idx][field] = val;
    saveSiteConfig(cfg);
    hydrateDOM(cfg);
  }
};

// Global handler for replacing hall image with file upload
window.uploadHallImage = function(idx, fileInput) {
  if (fileInput && fileInput.files && fileInput.files[0]) {
    compressImage(fileInput.files[0], 1200, (compressedDataUrl) => {
      const cfg = getSiteConfig();
      if (cfg.halls && cfg.halls[idx]) {
        cfg.halls[idx].image = compressedDataUrl;
        saveSiteConfig(cfg);
        hydrateDOM(cfg);
        if (typeof renderAdminHallsList === 'function') {
          renderAdminHallsList(cfg.halls);
        }
        if (typeof showAdminToast === 'function') {
          showAdminToast(`✓ Photo updated for ${cfg.halls[idx].title}!`);
        }
      }
    });
  }
};

// Global handler for deleting a hall card
window.deleteHallCard = function(idx) {
  const cfg = getSiteConfig();
  if (cfg.halls && cfg.halls.length > idx) {
    cfg.halls.splice(idx, 1);
    saveSiteConfig(cfg);
    hydrateDOM(cfg);
    if (typeof renderAdminHallsList === 'function') {
      renderAdminHallsList(cfg.halls);
    }
    if (typeof showAdminToast === 'function') {
      showAdminToast('✓ Hall card removed!');
    }
  }
};

// Global handlers for about features
window.updateAboutFeatureField = function(idx, field, val) {
  const cfg = getSiteConfig();
  if (cfg.about && cfg.about.features && cfg.about.features[idx]) {
    cfg.about.features[idx][field] = val;
    saveSiteConfig(cfg);
    hydrateDOM(cfg);
  }
};

window.deleteAboutFeature = function(idx) {
  const cfg = getSiteConfig();
  if (cfg.about && cfg.about.features && cfg.about.features.length > idx) {
    cfg.about.features.splice(idx, 1);
    saveSiteConfig(cfg);
    hydrateDOM(cfg);
    if (typeof renderAdminAboutFeatures === 'function') {
      renderAdminAboutFeatures(cfg.about.features);
    }
    if (typeof showAdminToast === 'function') {
      showAdminToast('✓ Feature card removed from About section!');
    }
  }
};

// Global handlers for catering checklist
window.updateCateringBulletField = function(idx, field, val) {
  const cfg = getSiteConfig();
  if (cfg.catering && cfg.catering.checklist && cfg.catering.checklist[idx]) {
    cfg.catering.checklist[idx][field] = val;
    saveSiteConfig(cfg);
    hydrateDOM(cfg);
  }
};

window.deleteCateringBullet = function(idx) {
  const cfg = getSiteConfig();
  if (cfg.catering && cfg.catering.checklist && cfg.catering.checklist.length > idx) {
    cfg.catering.checklist.splice(idx, 1);
    saveSiteConfig(cfg);
    hydrateDOM(cfg);
    if (typeof renderAdminCateringChecklist === 'function') {
      renderAdminCateringChecklist(cfg.catering.checklist);
    }
    if (typeof showAdminToast === 'function') {
      showAdminToast('✓ Catering bullet removed!');
    }
  }
};

// Storage helper functions
function getEmailJsConfig(savedConfig = {}) {
  const config = { ...DEFAULT_AURA_CONFIG.emailjs, ...savedConfig };

  if (!config.serviceId || config.serviceId === 'service_aura') {
    config.serviceId = DEFAULT_AURA_CONFIG.emailjs.serviceId;
  }
  if (!config.templateId || config.templateId === 'template_aura_inquiry') {
    config.templateId = DEFAULT_AURA_CONFIG.emailjs.templateId;
  }
  if (!config.autoReplyTemplateId) {
    config.autoReplyTemplateId = DEFAULT_AURA_CONFIG.emailjs.autoReplyTemplateId;
  }
  if (!config.publicKey) {
    config.publicKey = DEFAULT_AURA_CONFIG.emailjs.publicKey;
  }

  return config;
}

function getSiteConfig() {
  try {
    const saved = localStorage.getItem('aura_venue_config');
    if (saved) {
      let parsed = JSON.parse(saved);

      const isLegacyGallery = !parsed.gallery ||
        !Array.isArray(parsed.gallery) ||
        !parsed.gallery.length ||
        !parsed.gallery.some(img => img.src && img.src.includes('aura_grand_entrance_arch_night'));

      const isLegacyHalls = !parsed.halls ||
        !Array.isArray(parsed.halls) ||
        !parsed.halls[0] ||
        !parsed.halls[0].image ||
        !parsed.halls[0].image.includes('aura_convention_hall_canopy') ||
        !parsed.halls[1] ||
        !parsed.halls[1].desc ||
        !parsed.halls[1].desc.includes('exhibitions');

      if (!parsed.version || parsed.version < 81 || isLegacyGallery || isLegacyHalls) {
        parsed.version = 81;
        parsed.hero = { ...DEFAULT_AURA_CONFIG.hero, ...(parsed.hero || {}) };
        parsed.about = { ...DEFAULT_AURA_CONFIG.about, ...(parsed.about || {}) };
        parsed.hallsHeader = { ...DEFAULT_AURA_CONFIG.hallsHeader, ...(parsed.hallsHeader || {}) };
        parsed.halls = isLegacyHalls ? DEFAULT_AURA_CONFIG.halls : (parsed.halls || DEFAULT_AURA_CONFIG.halls);
        parsed.catering = {
          ...DEFAULT_AURA_CONFIG.catering,
          ...(parsed.catering || {}),
          checklist: (parsed.catering && Array.isArray(parsed.catering.checklist) && parsed.catering.checklist.length)
            ? parsed.catering.checklist
            : DEFAULT_AURA_CONFIG.catering.checklist
        };
        parsed.galleryHeader = { ...DEFAULT_AURA_CONFIG.galleryHeader, ...(parsed.galleryHeader || {}) };
        parsed.gallery = isLegacyGallery ? JSON.parse(JSON.stringify(DEFAULT_AURA_CONFIG.gallery)) : (parsed.gallery || DEFAULT_AURA_CONFIG.gallery);
        parsed.contact = { ...DEFAULT_AURA_CONFIG.contact, ...(parsed.contact || {}) };
        parsed.emailjs = getEmailJsConfig(parsed.emailjs);
        parsed.stats = { ...DEFAULT_AURA_CONFIG.stats, ...(parsed.stats || {}) };
        parsed.footer = { ...DEFAULT_AURA_CONFIG.footer, ...(parsed.footer || {}) };
        parsed.admin = { ...DEFAULT_AURA_CONFIG.admin, ...(parsed.admin || {}) };
        if (parsed.stats) parsed.stats.parking = '200+';
        try { localStorage.setItem('aura_venue_config', JSON.stringify(parsed)); } catch (e) {}
      }

      if (parsed.hero) {
        parsed.hero.badgeCapacity = parsed.hero.badgeCapacity && parsed.hero.badgeCapacity.includes('1000+') ? '800+ Guests Capacity' : (parsed.hero.badgeCapacity || '800+ Guests Capacity');
        parsed.hero.badgeArea = parsed.hero.badgeArea && parsed.hero.badgeArea.includes('35,000+') ? '30,000+ Sq.Ft Area' : (parsed.hero.badgeArea || '30,000+ Sq.Ft Area');
      }

      if (parsed.stats) {
        parsed.stats.capacity = parsed.stats.capacity && parsed.stats.capacity.includes('1,000+') ? '800+' : (parsed.stats.capacity || '800+');
        parsed.stats.area = parsed.stats.area && parsed.stats.area.includes('35,000+') ? '30,000+' : (parsed.stats.area || '30,000+');
        parsed.stats.parking = '200+';
        try { localStorage.setItem('aura_venue_config', JSON.stringify(parsed)); } catch (e) {}
      }

      return {
        ...DEFAULT_AURA_CONFIG,
        ...parsed,
        hero: { ...DEFAULT_AURA_CONFIG.hero, ...(parsed.hero || {}) },
        about: { ...DEFAULT_AURA_CONFIG.about, ...(parsed.about || {}) },
        hallsHeader: { ...DEFAULT_AURA_CONFIG.hallsHeader, ...(parsed.hallsHeader || {}) },
        halls: (parsed.halls && Array.isArray(parsed.halls) && parsed.halls.length) ? parsed.halls : DEFAULT_AURA_CONFIG.halls,
        catering: {
          ...DEFAULT_AURA_CONFIG.catering,
          ...(parsed.catering || {}),
          checklist: (parsed.catering && Array.isArray(parsed.catering.checklist) && parsed.catering.checklist.length)
            ? parsed.catering.checklist
            : DEFAULT_AURA_CONFIG.catering.checklist
        },
        galleryHeader: { ...DEFAULT_AURA_CONFIG.galleryHeader, ...(parsed.galleryHeader || {}) },
        gallery: (parsed.gallery && Array.isArray(parsed.gallery) && parsed.gallery.length) ? parsed.gallery : DEFAULT_AURA_CONFIG.gallery,
        contact: { ...DEFAULT_AURA_CONFIG.contact, ...(parsed.contact || {}) },
        emailjs: getEmailJsConfig(parsed.emailjs),
        stats: { ...DEFAULT_AURA_CONFIG.stats, ...(parsed.stats || {}) },
        footer: { ...DEFAULT_AURA_CONFIG.footer, ...(parsed.footer || {}) },
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

// Hydrate DOM with active configuration
function hydrateDOM(cfg) {
  if (!cfg) return;

  // Helper to extract clean international digits
  function toCleanDigits(val) {
    let d = String(val || '').replace(/\D/g, '');
    if (d.length === 10) d = '91' + d;
    return d || '917777998789';
  }

  const activeWaDigits = toCleanDigits(cfg.contact?.whatsapp || cfg.contact?.phone);
  const activeDialDigits = toCleanDigits(cfg.contact?.phoneRaw || cfg.contact?.phone);

  // 1. HERO SECTION
  if (cfg.hero) {
    document.querySelectorAll('[data-aura="heroTag"]').forEach(el => {
      el.textContent = cfg.hero.tag;
    });
    document.querySelectorAll('[data-aura="heroTitle"]').forEach(el => {
      el.textContent = cfg.hero.title;
    });
    document.querySelectorAll('[data-aura="heroSubtitle"]').forEach(el => {
      el.textContent = cfg.hero.subtitle;
    });
    document.querySelectorAll('[data-aura="heroBtnPrimary"]').forEach(el => {
      const span = el.querySelector('span');
      if (span) span.textContent = cfg.hero.btnPrimaryText || 'SEND AN INQUIRY';
      el.href = cfg.hero.btnPrimaryLink || '#contact';
    });
    document.querySelectorAll('[data-aura="heroBtnSecondary"]').forEach(el => {
      const span = el.querySelector('span');
      if (span) span.textContent = cfg.hero.btnSecondaryText || 'EXPLORE SPACES';
      el.href = cfg.hero.btnSecondaryLink || '#halls';
    });
    document.querySelectorAll('[data-aura="heroBadgeCapacity"]').forEach(el => {
      el.textContent = cfg.hero.badgeCapacity || '1000+ Guests Capacity';
    });
    document.querySelectorAll('[data-aura="heroBadgeArea"]').forEach(el => {
      el.textContent = cfg.hero.badgeArea || '35,000+ Sq.Ft Area';
    });
    document.querySelectorAll('[data-aura="heroBadgeLocation"]').forEach(el => {
      el.textContent = cfg.hero.badgeLocation || 'Prime Gachibowli Location ↗';
    });
    document.querySelectorAll('[data-aura="heroBadgeParking"]').forEach(el => {
      el.textContent = cfg.hero.badgeParking || '200+ Spacious Inside Valet Parking';
    });

    const heroContainer = document.getElementById('heroBgContainer');
    if (heroContainer && cfg.hero.bgImage) {
      const firstSlide = heroContainer.querySelector('.hero-drone-slide-1');
      if (firstSlide) {
        firstSlide.style.backgroundImage = `url('${cfg.hero.bgImage}')`;
      }
    }
  }

  // 2. ABOUT VENUE SECTION
  if (cfg.about) {
    document.querySelectorAll('[data-aura="aboutTag"]').forEach(el => {
      el.innerHTML = `${cfg.about.tag || 'ABOUT OUR VENUE'} <span style="font-size: 0.75rem; color: var(--gold); margin: 0 4px;">— ◆ —</span>`;
    });
    document.querySelectorAll('[data-aura="aboutTitle"]').forEach(el => {
      el.textContent = cfg.about.title;
    });
    document.querySelectorAll('[data-aura="aboutIntro"]').forEach(el => {
      el.innerHTML = cfg.about.intro;
    });
    document.querySelectorAll('[data-aura="aboutImage"], .about-img-cover').forEach(el => {
      if (cfg.about.image) el.src = cfg.about.image;
    });

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

  // 3. HALLS & SPACES SECTION
  if (cfg.hallsHeader) {
    document.querySelectorAll('[data-aura="hallsTag"]').forEach(el => {
      el.textContent = cfg.hallsHeader.tag;
    });
    document.querySelectorAll('[data-aura="hallsTitle"]').forEach(el => {
      el.textContent = cfg.hallsHeader.title;
    });
    document.querySelectorAll('[data-aura="hallsSubtitle"]').forEach(el => {
      el.textContent = cfg.hallsHeader.subtitle;
    });
  }

  const hallsGrid = document.getElementById('auraHallsGrid') || document.querySelector('.halls-grid');
  if (hallsGrid && cfg.halls && cfg.halls.length) {
    let hHtml = '';
    cfg.halls.forEach((h) => {
      hHtml += `
        <div class="hall-card">
          <div class="hall-image">
            <img src="${h.image || 'assets/images/aura_banquet_hall_wedding_setup.png'}" alt="${h.title}">
            <span class="hall-badge-tag">${h.badge || (h.guests ? h.guests.toUpperCase() : 'EVENT SPACE')}</span>
          </div>
          <div class="hall-body">
            <h3 class="hall-title">${h.title}</h3>
            <p class="hall-desc">${h.desc}</p>
          </div>
        </div>`;
    });
    hallsGrid.innerHTML = hHtml;
  }

  // 4. ROYAL FOOD & CATERING SECTION
  if (cfg.catering) {
    document.querySelectorAll('[data-aura="cateringTag"]').forEach(el => {
      el.textContent = cfg.catering.tag;
    });
    document.querySelectorAll('[data-aura="cateringTitle"]').forEach(el => {
      el.textContent = cfg.catering.title;
    });
    document.querySelectorAll('[data-aura="cateringSubtitle"]').forEach(el => {
      el.textContent = cfg.catering.subtitle;
    });
    document.querySelectorAll('[data-aura="cateringPartnerPill"]').forEach(el => {
      el.innerHTML = cfg.catering.partnerPill || 'EXCLUSIVE FOOD & CATERING PARTNER: <strong>KateringKing.com</strong>';
    });
    document.querySelectorAll('[data-aura="cateringPartnerBtn"]').forEach(el => {
      el.href = cfg.catering.partnerUrl || 'https://kateringking.com/';
    });
    document.querySelectorAll('.partner-notification-badge').forEach(el => {
      el.href = cfg.catering.partnerUrl || 'https://kateringking.com/';
    });
    document.querySelectorAll('[data-aura="cateringHeading"]').forEach(el => {
      el.textContent = cfg.catering.heading || 'An Unforgettable Food & Dining Experience';
    });
    document.querySelectorAll('[data-aura="cateringDesc"]').forEach(el => {
      el.innerHTML = cfg.catering.desc;
    });
    document.querySelectorAll('[data-aura="cateringImage"], .catering-img-full').forEach(el => {
      if (cfg.catering.image) el.src = cfg.catering.image;
    });

    const catChecklist = document.getElementById('auraCateringChecklist') || document.querySelector('.catering-checklist');
    if (catChecklist && cfg.catering.checklist && cfg.catering.checklist.length) {
      let cHtml = '';
      cfg.catering.checklist.forEach(item => {
        cHtml += `
          <div class="catering-check-item">
            <span class="check-bullet">✓</span>
            <span><strong>${item.title}:</strong> ${item.desc}</span>
          </div>`;
      });
      catChecklist.innerHTML = cHtml;
    }
  }

  // 5. MAIN WEBSITE PHOTO GALLERY
  if (cfg.galleryHeader) {
    document.querySelectorAll('[data-aura="galleryTag"]').forEach(el => {
      el.textContent = cfg.galleryHeader.tag;
    });
    document.querySelectorAll('[data-aura="galleryTitle"]').forEach(el => {
      el.textContent = cfg.galleryHeader.title;
    });
    document.querySelectorAll('[data-aura="gallerySubtitle"]').forEach(el => {
      el.textContent = cfg.galleryHeader.subtitle;
    });
  }

  const galleryContainer = document.getElementById('auraGalleryGrid') || document.querySelector('.gallery-grid-ref');
  if (galleryContainer && cfg.gallery && cfg.gallery.length) {
    const homeImages = cfg.gallery.slice(0, 10);
    const row1 = homeImages.slice(0, 4);
    const row2 = homeImages.slice(4, 8);
    const row3 = homeImages.slice(8, 10);

    let html = '';
    if (row1.length) {
      html += '<div class="gallery-row-top">';
      row1.forEach(item => {
        html += `
          <div class="gallery-thumb" onclick="openLightbox('${item.src}')" style="cursor: pointer;">
            <img src="${item.src}" alt="${item.title || 'Aura Gallery'}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>`;
      });
      html += '</div>';
    }

    if (row2.length) {
      html += '<div class="gallery-row-top">';
      row2.forEach(item => {
        html += `
          <div class="gallery-thumb" onclick="openLightbox('${item.src}')" style="cursor: pointer;">
            <img src="${item.src}" alt="${item.title || 'Aura Gallery'}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>`;
      });
      html += '</div>';
    }

    if (row3.length) {
      html += '<div class="gallery-row-bottom">';
      row3.forEach(item => {
        html += `
          <div class="gallery-thumb" onclick="openLightbox('${item.src}')" style="cursor: pointer;">
            <img src="${item.src}" alt="${item.title || 'Aura Gallery'}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>`;
      });
      html += '</div>';
    }

    galleryContainer.innerHTML = html;
  }

  // Pre-populate Full Gallery Modal
  renderFullGalleryModalGrid(cfg.gallery);

  // 6. CONTACT & RESERVATIONS SECTION
  if (cfg.contact) {
    document.querySelectorAll('[data-aura="contactTag"]').forEach(el => {
      el.textContent = cfg.contact.tag || 'RESERVATIONS & BOOKINGS';
    });
    document.querySelectorAll('[data-aura="contactTitle"]').forEach(el => {
      el.textContent = cfg.contact.title || 'Inquire Now';
    });
    document.querySelectorAll('[data-aura="contactSubtitle"]').forEach(el => {
      el.textContent = cfg.contact.subtitle || '';
    });
    document.querySelectorAll('[data-aura="phone"]').forEach(el => {
      el.textContent = cfg.contact.phone;
    });
    document.querySelectorAll('a[href^="tel:"], [data-aura-href="tel"], .aura-floating-call-pill').forEach(el => {
      el.href = `tel:+${activeDialDigits}`;
    });
    document.querySelectorAll('[data-aura="email"]').forEach(el => {
      el.textContent = cfg.contact.email;
    });
    document.querySelectorAll('a[href^="mailto:"], [data-aura-href="mailto"]').forEach(el => {
      el.href = `mailto:${cfg.contact.email}`;
    });
    document.querySelectorAll('[data-aura="address"]').forEach(el => {
      el.textContent = cfg.contact.address;
    });

    if (cfg.contact.mapsUrl) {
      document.querySelectorAll('a[href*="google.com/maps"], [data-aura-href="maps"]').forEach(el => {
        el.href = cfg.contact.mapsUrl;
      });
    }

    if (cfg.contact.googleProfileUrl) {
      document.querySelectorAll('a[href*="share.google"]').forEach(el => {
        el.href = cfg.contact.googleProfileUrl;
      });
    }

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
  }

  // 7. FOOTER SECTION
  if (cfg.footer) {
    document.querySelectorAll('[data-aura="footerCopyright"]').forEach(el => {
      el.textContent = cfg.footer.copyright;
    });
  }

  // 8. STATS COUNTERS
  if (cfg.stats) {
    document.querySelectorAll('[data-aura-stat="area"]').forEach(el => {
      el.textContent = cfg.stats.area;
    });
    document.querySelectorAll('[data-aura-stat="capacity"]').forEach(el => {
      el.textContent = cfg.stats.capacity;
    });
    document.querySelectorAll('[data-aura-stat="parking"]').forEach(el => {
      el.textContent = cfg.stats.parking;
    });
  }
}

// ==============================================================================
// PROPER LIGHTBOX CONTROLLER
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
// FULL GALLERY MODAL CONTROLLER (Shows ALL Images)
// ==============================================================================
function renderFullGalleryModalGrid(galleryList) {
  const allGrid = document.getElementById('fullGalleryAllGrid');
  const counterPill = document.getElementById('fullGalleryCounter');
  if (!allGrid) return;

  const items = (galleryList && galleryList.length) ? galleryList : DEFAULT_AURA_CONFIG.gallery;
  if (counterPill) {
    counterPill.textContent = `Showing all ${items.length} Photos`;
  }

  const isAuth = localStorage.getItem('aura_admin_logged_in') === 'true';

  let html = '';
  items.forEach((item, index) => {
    const isSpan2 = item.span === '2';
    const spanClass = isSpan2 ? 'full-gallery-item-span2' : '';
    const adminDelBtn = isAuth
      ? `<button type="button" class="modal-admin-del-btn" onclick="event.stopPropagation(); if(confirm('Remove this photo from the gallery?')) deleteGalleryItem(${index});" title="Delete Photo (Admin)">&times;</button>`
      : '';

    html += `
      <div class="full-gallery-item ${spanClass}" onclick="openLightbox('${item.src}')" style="position: relative;">
        ${adminDelBtn}
        <img src="${item.src}" alt="${item.title || 'Aura Photo ' + (index + 1)}" loading="lazy">
        <div class="full-gallery-item-overlay">
          <span class="full-gallery-item-title">${item.title || 'Aura Celebration'}</span>
          <span class="full-gallery-item-zoom">🔍 Tap to Zoom</span>
        </div>
      </div>
    `;
  });
  allGrid.innerHTML = html;
}

function setupFullGalleryModal() {
  const modal = document.getElementById('auraFullGalleryModal');
  const btnOpen = document.getElementById('btnOpenFullGallery');
  const btnClose = document.getElementById('btnFullGalleryClose');
  const backdrop = document.querySelector('.aura-full-gallery-backdrop');

  function openFullGalleryModal() {
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeFullGalleryModal() {
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  if (btnOpen) btnOpen.addEventListener('click', openFullGalleryModal);
  if (btnClose) btnClose.addEventListener('click', closeFullGalleryModal);
  if (backdrop) backdrop.addEventListener('click', closeFullGalleryModal);
}

// ==============================================================================
// DOM READY INITIALIZATION & PUBLIC INTERACTIONS
// ==============================================================================
document.addEventListener('DOMContentLoaded', () => {
  const currentConfig = getSiteConfig();
  hydrateDOM(currentConfig);
  setupLightbox();
  setupFullGalleryModal();

  // Strip lingering section hashes from URL on page load while preserving #admin
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
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Hamburger
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Intercept all internal anchor links (smooth scroll & clean URL)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#' || hash.toLowerCase().includes('admin')) {
        return; // Allow #admin router to work
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

      if (link.classList.contains('nav-link')) {
        navLinks.forEach(nl => nl.classList.remove('active'));
        link.classList.add('active');
      }

      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger?.classList.remove('open');
        hamburger?.setAttribute('aria-expanded', 'false');
      }

      if (window.location.hash && !window.location.hash.toLowerCase().includes('admin')) {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
      }
    });
  });

  // Scrollspy: dynamically update active nav link
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

  // 3. Inquiry Form Submission & EmailJS Routing
  const inquiryForm = document.getElementById('inquiryForm');
  const formSuccess = document.getElementById('formSuccess') || document.getElementById('formSuccessMsg');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (inquiryForm.dataset.emailjsSubmitting === 'true') return;
      inquiryForm.dataset.emailjsSubmitting = 'true';

      const cfg = getSiteConfig();
      const emailjsCfg = getEmailJsConfig(cfg.emailjs);
      const submitBtn = inquiryForm.querySelector('button[type="submit"], .btn-submit-ref');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'INQUIRE NOW';
      const getValue = (name, fallbackSelector) =>
        (inquiryForm.querySelector(`[name="${name}"], ${fallbackSelector}`)?.value || '').trim();

      const name = getValue('name', '#guestName');
      const phone = getValue('phone', '#guestPhone');
      const email = getValue('email', '#guestEmail');
      const eventType = getValue('event_type', '#eventType');
      const eventDate = getValue('event_date', '#eventDate');
      const guests = getValue('guests', '#guestCount') || 'Not specified';
      const message = getValue('message', '#guestMessage') || 'No additional requirements';

      let formattedDate = eventDate;
      const dateParts = /^(\d{2})-(\d{2})-(\d{4})$/.exec(eventDate);
      if (dateParts) {
        const [, day, month, year] = dateParts;
        const date = new Date(Number(year), Number(month) - 1, Number(day));
        if (
          date.getFullYear() === Number(year) &&
          date.getMonth() === Number(month) - 1 &&
          date.getDate() === Number(day)
        ) {
          formattedDate = date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          });
        }
      }

      const templateParams = {
        fullName: name,
        email,
        phone,
        eventType,
        eventDate: formattedDate,
        guests,
        requirements: message
      };
      const adminTemplateParams = {
        ...templateParams,
        to_email: emailjsCfg.toEmail,
        recipient: emailjsCfg.toEmail
      };
      const autoReplyTemplateParams = {
        ...templateParams,
        to_email: email,
        recipient: email
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="btn-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
          <span>SENDING INQUIRY...</span>
        `;
      }

      if (formSuccess) {
        formSuccess.style.display = 'none';
        formSuccess.textContent = '';
      }

      try {
        if (typeof emailjs === 'undefined' || typeof emailjs.send !== 'function') {
          throw new Error('EmailJS SDK is not loaded.');
        }
        if (
          !emailjsCfg.publicKey ||
          !emailjsCfg.serviceId ||
          !emailjsCfg.templateId ||
          !emailjsCfg.autoReplyTemplateId
        ) {
          throw new Error('EmailJS service configuration is incomplete.');
        }

        emailjs.init({ publicKey: emailjsCfg.publicKey });
        await emailjs.send(
          emailjsCfg.serviceId,
          emailjsCfg.templateId,
          adminTemplateParams
        );

        let autoReplySent = false;
        try {
          await new Promise(resolve => setTimeout(resolve, 1100));
          await emailjs.send(
            emailjsCfg.serviceId,
            emailjsCfg.autoReplyTemplateId,
            autoReplyTemplateParams
          );
          autoReplySent = true;
        } catch (error) {
          console.error('EmailJS customer confirmation failed:', error);
        }

        if (formSuccess) {
          formSuccess.textContent = autoReplySent
            ? `Thank you, ${name}. Your inquiry has been sent, and a confirmation email is on its way.`
            : `Thank you, ${name}. We received your inquiry, but couldn't send the confirmation email.`;
          formSuccess.style.color = autoReplySent ? '#86EFAC' : '#FFF2C6';
          formSuccess.style.display = 'block';
        }

        inquiryForm.reset();
        if (submitBtn) {
          submitBtn.innerHTML = '✓ INQUIRY SENT';
        }
      } catch (error) {
        console.error('EmailJS inquiry dispatch failed:', error);
        if (formSuccess) {
          formSuccess.textContent = 'Your inquiry was not sent. Please try again later.';
          formSuccess.style.color = '#FCA5A5';
          formSuccess.style.display = 'block';
        }
      } finally {
        inquiryForm.dataset.emailjsSubmitting = 'false';
        if (submitBtn) {
          submitBtn.disabled = false;
          if (!formSuccess || !formSuccess.textContent.startsWith('Thank you,')) {
            submitBtn.innerHTML = originalBtnHtml;
          } else {
            setTimeout(() => {
              submitBtn.innerHTML = originalBtnHtml;
            }, 6000);
          }
        }
      }
    });
  }

  // ==========================================================================
  // 4. SECRET ADMIN PORTAL (/#admin) ROUTER, HOTKEYS & PERSISTENT SESSION
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

    bindAdminInteractions();

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

  function switchToGalleryTab() {
    document.querySelectorAll('.admin-nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));

    const galTab = document.querySelector('.admin-nav-tab[data-tab="paneGallery"]');
    const galPane = document.getElementById('paneGallery');
    if (galTab) galTab.classList.add('active');
    if (galPane) {
      galPane.classList.add('active');
      const cfg = getSiteConfig();
      renderAdminGalleryList(cfg.gallery);
      const dashBody = document.querySelector('.admin-dash-body');
      if (dashBody) dashBody.scrollTop = 0;
    }
  }
  window.switchToGalleryTab = switchToGalleryTab;

  function openGalleryAdmin() {
    const fullGalleryModal = document.getElementById('auraFullGalleryModal');
    if (fullGalleryModal) {
      fullGalleryModal.classList.remove('active');
      fullGalleryModal.style.display = 'none';
    }

    openAdminPortal();

    const isAuth = localStorage.getItem('aura_admin_logged_in') === 'true';
    if (isAuth) {
      setTimeout(switchToGalleryTab, 50);
    } else {
      window._redirectTabAfterLogin = 'paneGallery';
    }
  }
  window.openGalleryAdmin = openGalleryAdmin;

  // Global hotkey: Ctrl + Shift + A opens Admin CMS
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      openAdminPortal();
    }
  });

  // Footer discreet link
  const linkFooterAdmin = document.getElementById('linkFooterAdmin');
  if (linkFooterAdmin) {
    linkFooterAdmin.addEventListener('click', (e) => {
      e.preventDefault();
      openAdminPortal();
    });
  }

  // Quick Add Gallery buttons on website
  const btnQuickAddGallery = document.getElementById('btnQuickAddGallery');
  if (btnQuickAddGallery) {
    btnQuickAddGallery.addEventListener('click', openGalleryAdmin);
  }
  const btnModalAddGallery = document.getElementById('btnModalAddGallery');
  if (btnModalAddGallery) {
    btnModalAddGallery.addEventListener('click', openGalleryAdmin);
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
          if (window._redirectTabAfterLogin === 'paneGallery') {
            setTimeout(switchToGalleryTab, 50);
            window._redirectTabAfterLogin = null;
          }
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

    // Live preview binding helper
    function bindImageInputAndPreview(textInputId, fileInputId, previewImgId, maxWidth, toastMsg) {
      const textInput = document.getElementById(textInputId);
      const fileInput = document.getElementById(fileInputId);
      const previewImg = document.getElementById(previewImgId);

      if (textInput && previewImg) {
        textInput.addEventListener('input', () => {
          if (textInput.value.trim()) {
            previewImg.src = textInput.value.trim();
          }
        });
      }

      if (fileInput && textInput) {
        fileInput.addEventListener('change', () => {
          if (fileInput.files && fileInput.files[0]) {
            compressImage(fileInput.files[0], maxWidth || 1400, (compressedDataUrl) => {
              textInput.value = compressedDataUrl;
              if (previewImg) previewImg.src = compressedDataUrl;
              showAdminToast(toastMsg || '✓ Image compressed & preview updated!');
            });
          }
        });
      }
    }

    // Wire up image previewers across tabs
    bindImageInputAndPreview('cfgHeroBgImage', 'cfgHeroBgFile', 'cfgHeroBgPreview', 1600, '✓ Hero background image updated!');
    bindImageInputAndPreview('cfgAboutImage', 'cfgAboutImageFile', 'cfgAboutImagePreview', 1400, '✓ About entrance visual updated!');
    bindImageInputAndPreview('cfgCateringImage', 'cfgCateringImageFile', 'cfgCateringImagePreview', 1400, '✓ Catering showcase photo updated!');

    // Wire up new hall image file picker
    const newHallImageInput = document.getElementById('newHallImage');
    const newHallImageFile = document.getElementById('newHallImageFile');
    if (newHallImageFile && newHallImageInput) {
      newHallImageFile.addEventListener('change', () => {
        if (newHallImageFile.files && newHallImageFile.files[0]) {
          compressImage(newHallImageFile.files[0], 1200, (compressedDataUrl) => {
            newHallImageInput.value = compressedDataUrl;
            showAdminToast('✓ Hall photo compressed & ready to add!');
          });
        }
      });
    }

    // Admin Tab Navigation
    document.querySelectorAll('.admin-nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.admin-nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.admin-tab-pane').forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetId = tab.getAttribute('data-tab');
        const targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
          const cfg = getSiteConfig();
          if (targetId === 'paneGallery') {
            renderAdminGalleryList(cfg.gallery);
          } else if (targetId === 'paneHalls') {
            renderAdminHallsList(cfg.halls);
          } else if (targetId === 'paneAbout') {
            renderAdminAboutFeatures(cfg.about.features);
          } else if (targetId === 'paneCatering') {
            renderAdminCateringChecklist(cfg.catering.checklist);
          }
        }
      });
    });

    // Add New Feature Card Button
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

    // Add New Hall Card Button
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
        const fileIn = document.getElementById('newHallImageFile');
        if (fileIn) fileIn.value = '';
        showAdminToast('✓ Added new Hall / Space card to grid!');
      });
    }

    // Add New Catering Bullet Button
    const btnAddCateringBullet = document.getElementById('btnAddCateringBullet');
    if (btnAddCateringBullet) {
      btnAddCateringBullet.addEventListener('click', () => {
        const titleInput = document.getElementById('newCateringBulletTitle');
        const descInput = document.getElementById('newCateringBulletDesc');

        const title = titleInput?.value.trim() || 'Artisanal Delicacies';
        const desc = descInput?.value.trim() || 'Curated royal delicacies prepared live by master chefs.';

        const cfg = getSiteConfig();
        if (!cfg.catering) cfg.catering = { ...DEFAULT_AURA_CONFIG.catering };
        if (!cfg.catering.checklist) cfg.catering.checklist = [];
        cfg.catering.checklist.push({ title, desc });
        saveSiteConfig(cfg);
        hydrateDOM(cfg);
        renderAdminCateringChecklist(cfg.catering.checklist);

        if (titleInput) titleInput.value = '';
        if (descInput) descInput.value = '';
        showAdminToast('✓ Added catering checklist bullet!');
      });
    }

    // Drag & Drop Zone for Gallery Photos
    const dropzone = document.getElementById('adminGalleryDropzone');
    const newPhotoFileInput = document.getElementById('newPhotoFile');
    const previewCount = document.getElementById('dropzonePreviewCount');

    if (dropzone && newPhotoFileInput) {
      ['dragenter', 'dragover'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('dragover');
        }, false);
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropzone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('dragover');
        }, false);
      });

      dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files && files.length) {
          newPhotoFileInput.files = files;
          if (previewCount) {
            previewCount.textContent = `✓ Selected ${files.length} photo${files.length > 1 ? 's' : ''} ready to add!`;
            previewCount.style.display = 'block';
          }
        }
      });

      newPhotoFileInput.addEventListener('change', () => {
        if (newPhotoFileInput.files && newPhotoFileInput.files.length) {
          const count = newPhotoFileInput.files.length;
          if (previewCount) {
            previewCount.textContent = `✓ Selected ${count} photo${count > 1 ? 's' : ''} ready to add!`;
            previewCount.style.display = 'block';
          }
        }
      });
    }

    // Add New Gallery Photo Button (Multi-file batch upload + Placement support)
    const addPhotoBtn = document.getElementById('btnAddGalleryPhoto');
    if (addPhotoBtn) {
      addPhotoBtn.addEventListener('click', () => {
        const urlInput = document.getElementById('newPhotoUrl');
        const fileInput = document.getElementById('newPhotoFile');
        const titleInput = document.getElementById('newPhotoTitle');
        const spanInput = document.getElementById('newPhotoSpan');
        const posInput = document.getElementById('newPhotoPosition');

        const baseTitle = titleInput?.value.trim() || 'Aura Celebration';
        const span = spanInput?.value || '1';
        const position = posInput?.value || 'start'; // 'start' = live on homepage immediately!

        if (fileInput && fileInput.files && fileInput.files.length > 0) {
          const files = Array.from(fileInput.files);
          const total = files.length;
          let processed = 0;
          const compressedItems = [];

          showAdminToast(`Processing & compressing ${total} photo${total > 1 ? 's' : ''}...`);

          files.forEach((file, idx) => {
            compressImage(file, 1200, (compressedDataUrl) => {
              const itemTitle = total > 1 ? `${baseTitle} (${idx + 1})` : baseTitle;
              compressedItems.push({
                src: compressedDataUrl,
                title: itemTitle,
                span: span
              });
              processed++;

              if (processed === total) {
                const cfg = getSiteConfig();
                if (!cfg.gallery) cfg.gallery = [];

                if (position === 'start') {
                  cfg.gallery = [...compressedItems, ...cfg.gallery];
                } else {
                  cfg.gallery = [...cfg.gallery, ...compressedItems];
                }

                saveSiteConfig(cfg);
                hydrateDOM(cfg);
                renderAdminGalleryList(cfg.gallery);

                fileInput.value = '';
                if (titleInput) titleInput.value = '';
                if (previewCount) previewCount.style.display = 'none';
                showAdminToast(`✓ Added ${total} photo${total > 1 ? 's' : ''} to gallery!`);
              }
            });
          });
        } else if (urlInput && urlInput.value.trim()) {
          const cfg = getSiteConfig();
          if (!cfg.gallery) cfg.gallery = [];
          const newItem = { src: urlInput.value.trim(), title: baseTitle, span: span };

          if (position === 'start') {
            cfg.gallery.unshift(newItem);
          } else {
            cfg.gallery.push(newItem);
          }

          saveSiteConfig(cfg);
          hydrateDOM(cfg);
          renderAdminGalleryList(cfg.gallery);
          urlInput.value = '';
          if (titleInput) titleInput.value = '';
          showAdminToast('✓ Photo URL added to gallery collection!');
        } else {
          alert('Please select one or more photo files, or enter an image web URL.');
        }
      });
    }

    // Backup & Migration: Export JSON
    const btnExportConfig = document.getElementById('btnExportConfig');
    if (btnExportConfig) {
      btnExportConfig.addEventListener('click', () => {
        const cfg = getSiteConfig();
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cfg, null, 2));
        const dlAnchor = document.createElement('a');
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", `aura_venue_config_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
        showAdminToast('✓ Backup file downloaded!');
      });
    }

    // Backup & Migration: Copy JSON to Clipboard
    const btnCopyConfig = document.getElementById('btnCopyConfig');
    if (btnCopyConfig) {
      btnCopyConfig.addEventListener('click', () => {
        const cfg = getSiteConfig();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(JSON.stringify(cfg, null, 2)).then(() => {
            showAdminToast('✓ Configuration copied to clipboard!');
          }).catch(() => {
            prompt('Copy JSON below:', JSON.stringify(cfg));
          });
        } else {
          prompt('Copy JSON below:', JSON.stringify(cfg));
        }
      });
    }

    // Backup & Migration: Import JSON from File
    const btnTriggerImport = document.getElementById('btnTriggerImport');
    const importConfigFile = document.getElementById('importConfigFile');
    if (btnTriggerImport && importConfigFile) {
      btnTriggerImport.addEventListener('click', () => {
        if (!importConfigFile.files || !importConfigFile.files[0]) {
          alert('Please select an exported JSON configuration file first.');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const imported = JSON.parse(e.target.result);
            if (!imported || typeof imported !== 'object') {
              throw new Error('Invalid JSON format');
            }
            imported.version = 80;
            saveSiteConfig(imported);
            hydrateDOM(imported);
            populateAdminFields();
            showAdminToast('✓ Configuration successfully restored from backup!');
          } catch (err) {
            alert('Failed to import configuration: Please select a valid Aura JSON configuration file.');
          }
        };
        reader.readAsText(importConfigFile.files[0]);
      });
    }

    // Factory Reset Confirmation Helper
    function executeFactoryReset() {
      if (confirm('Are you sure you want to reset all content back to factory defaults? All custom text, photos, and cards will revert to verified defaults.')) {
        saveSiteConfig(DEFAULT_AURA_CONFIG);
        hydrateDOM(DEFAULT_AURA_CONFIG);
        populateAdminFields();
        showAdminToast('✓ Reset to factory defaults!');
      }
    }

    const btnResetAllDefaults = document.getElementById('btnResetAllDefaults');
    if (btnResetAllDefaults) btnResetAllDefaults.addEventListener('click', executeFactoryReset);

    const btnResetAdmin = document.getElementById('btnResetAdmin');
    if (btnResetAdmin) btnResetAdmin.addEventListener('click', executeFactoryReset);

    // Security: Change Admin Password
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

    // Security: Reset Admin Password to Default
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

    // EmailJS: Send Test Inquiry
    const btnTestEmailjs = document.getElementById('btnTestEmailjs');
    const emailjsTestFeedback = document.getElementById('emailjsTestFeedback');
    if (btnTestEmailjs) {
      btnTestEmailjs.addEventListener('click', async () => {
        const savedEmailjsConfig = getEmailJsConfig(getSiteConfig().emailjs);
        const toEmail = document.getElementById('cfgEmailjsToEmail')?.value.trim() || savedEmailjsConfig.toEmail;
        const pubKey = document.getElementById('cfgEmailjsPublicKey')?.value.trim() || savedEmailjsConfig.publicKey;
        const serviceId = document.getElementById('cfgEmailjsServiceId')?.value.trim() || savedEmailjsConfig.serviceId;
        const templateId = document.getElementById('cfgEmailjsTemplateId')?.value.trim() || savedEmailjsConfig.templateId;

        if (!pubKey) {
          if (emailjsTestFeedback) {
            emailjsTestFeedback.style.display = 'block';
            emailjsTestFeedback.style.background = 'rgba(239, 68, 68, 0.15)';
            emailjsTestFeedback.style.border = '1px solid #EF4444';
            emailjsTestFeedback.style.color = '#FCA5A5';
            emailjsTestFeedback.innerHTML = '⚠️ Please enter your <strong>EmailJS Public Key</strong> above first, then click Test.';
          }
          return;
        }

        btnTestEmailjs.disabled = true;
        btnTestEmailjs.textContent = '⏳ Testing EmailJS...';
        if (emailjsTestFeedback) {
          emailjsTestFeedback.style.display = 'block';
          emailjsTestFeedback.style.background = 'rgba(197, 160, 89, 0.15)';
          emailjsTestFeedback.style.border = '1px solid rgba(197, 160, 89, 0.5)';
          emailjsTestFeedback.style.color = '#FFF2C6';
          emailjsTestFeedback.innerHTML = `Sending test inquiry to <strong>${toEmail}</strong> using Service <code>${serviceId}</code> and Template <code>${templateId}</code>...`;
        }

        try {
          if (typeof emailjs !== 'undefined') {
            emailjs.init({ publicKey: pubKey });
            const testParams = {
              to_email: toEmail,
              recipient: toEmail,
              fullName: 'Aura Administrator (Test)',
              email: toEmail,
              phone: '+91 77779 98789',
              eventType: 'Test Connection Inquiry',
              eventDate: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
              guests: '500 Guests',
              requirements: 'This is a test inquiry dispatched from the Aura Convention & Lawns Admin Portal to verify EmailJS connectivity.'
            };

            const response = await emailjs.send(serviceId, templateId, testParams);
            emailjsTestFeedback.style.background = 'rgba(74, 222, 128, 0.15)';
            emailjsTestFeedback.style.border = '1px solid #4ADE80';
            emailjsTestFeedback.style.color = '#86EFAC';
            emailjsTestFeedback.innerHTML = `✓ <strong>Success!</strong> Test email dispatched to <strong>${toEmail}</strong> (Status: ${response.status} ${response.text}). Check your inbox!`;
            showAdminToast('✓ EmailJS connection verified successfully!');
          } else {
            throw new Error('EmailJS SDK is not loaded in the browser.');
          }
        } catch (err) {
          console.error('EmailJS test failed:', err);
          const errorMsg = (err && (err.text || err.message)) ? (err.text || err.message) : JSON.stringify(err);
          emailjsTestFeedback.style.background = 'rgba(239, 68, 68, 0.15)';
          emailjsTestFeedback.style.border = '1px solid #EF4444';
          emailjsTestFeedback.style.color = '#FCA5A5';
          emailjsTestFeedback.innerHTML = `✕ <strong>EmailJS Error:</strong> ${errorMsg}. Please verify your Public Key, Service ID, and Template ID.`;
        } finally {
          btnTestEmailjs.disabled = false;
          btnTestEmailjs.textContent = '⚡ Test EmailJS Dispatch';
        }
      });
    }

    // SAVE & APPLY ALL CHANGES: Reads every input from all 9 tabs and applies live!
    const btnSaveAdmin = document.getElementById('btnSaveAdmin');
    if (btnSaveAdmin) {
      btnSaveAdmin.addEventListener('click', () => {
        const cfg = getSiteConfig();

        // 1. Hero Tab
        if (!cfg.hero) cfg.hero = { ...DEFAULT_AURA_CONFIG.hero };
        cfg.hero.tag = document.getElementById('cfgHeroTag')?.value.trim() || cfg.hero.tag;
        cfg.hero.title = document.getElementById('cfgHeroTitle')?.value.trim() || cfg.hero.title;
        cfg.hero.subtitle = document.getElementById('cfgHeroSubtitle')?.value.trim() || cfg.hero.subtitle;
        cfg.hero.btnPrimaryText = document.getElementById('cfgHeroBtnPrimaryText')?.value.trim() || cfg.hero.btnPrimaryText;
        cfg.hero.btnPrimaryLink = document.getElementById('cfgHeroBtnPrimaryLink')?.value.trim() || cfg.hero.btnPrimaryLink;
        cfg.hero.btnSecondaryText = document.getElementById('cfgHeroBtnSecondaryText')?.value.trim() || cfg.hero.btnSecondaryText;
        cfg.hero.btnSecondaryLink = document.getElementById('cfgHeroBtnSecondaryLink')?.value.trim() || cfg.hero.btnSecondaryLink;
        cfg.hero.bgImage = document.getElementById('cfgHeroBgImage')?.value.trim() || cfg.hero.bgImage;
        cfg.hero.badgeCapacity = document.getElementById('cfgHeroBadgeCapacity')?.value.trim() || cfg.hero.badgeCapacity;
        cfg.hero.badgeArea = document.getElementById('cfgHeroBadgeArea')?.value.trim() || cfg.hero.badgeArea;
        cfg.hero.badgeLocation = document.getElementById('cfgHeroBadgeLocation')?.value.trim() || cfg.hero.badgeLocation;
        cfg.hero.badgeParking = document.getElementById('cfgHeroBadgeParking')?.value.trim() || cfg.hero.badgeParking;

        // 2. About Tab
        if (!cfg.about) cfg.about = { ...DEFAULT_AURA_CONFIG.about };
        cfg.about.tag = document.getElementById('cfgAboutTag')?.value.trim() || cfg.about.tag;
        cfg.about.title = document.getElementById('cfgAboutTitle')?.value.trim() || cfg.about.title;
        cfg.about.image = document.getElementById('cfgAboutImage')?.value.trim() || cfg.about.image;
        cfg.about.intro = document.getElementById('cfgAboutIntro')?.value.trim() || cfg.about.intro;

        // 3. Halls Tab Headers
        if (!cfg.hallsHeader) cfg.hallsHeader = { ...DEFAULT_AURA_CONFIG.hallsHeader };
        cfg.hallsHeader.tag = document.getElementById('cfgHallsTag')?.value.trim() || cfg.hallsHeader.tag;
        cfg.hallsHeader.title = document.getElementById('cfgHallsTitle')?.value.trim() || cfg.hallsHeader.title;
        cfg.hallsHeader.subtitle = document.getElementById('cfgHallsSubtitle')?.value.trim() || cfg.hallsHeader.subtitle;

        // 4. Catering Tab
        if (!cfg.catering) cfg.catering = { ...DEFAULT_AURA_CONFIG.catering };
        cfg.catering.tag = document.getElementById('cfgCateringTag')?.value.trim() || cfg.catering.tag;
        cfg.catering.title = document.getElementById('cfgCateringTitle')?.value.trim() || cfg.catering.title;
        cfg.catering.subtitle = document.getElementById('cfgCateringSubtitle')?.value.trim() || cfg.catering.subtitle;
        cfg.catering.partnerPill = document.getElementById('cfgCateringPartnerPill')?.value.trim() || cfg.catering.partnerPill;
        cfg.catering.partnerUrl = document.getElementById('cfgCateringPartnerUrl')?.value.trim() || cfg.catering.partnerUrl;
        cfg.catering.desc = document.getElementById('cfgCateringDesc')?.value.trim() || cfg.catering.desc;
        cfg.catering.image = document.getElementById('cfgCateringImage')?.value.trim() || cfg.catering.image;

        // 5. Contact Tab
        if (!cfg.contact) cfg.contact = { ...DEFAULT_AURA_CONFIG.contact };
        cfg.contact.phone = document.getElementById('cfgPhone')?.value.trim() || cfg.contact.phone;
        const userWaInput = document.getElementById('cfgWhatsapp')?.value.trim();
        if (userWaInput) {
          cfg.contact.whatsapp = userWaInput.replace(/\D/g, '');
        } else {
          let pDigits = cfg.contact.phone.replace(/\D/g, '');
          if (pDigits.length === 10) pDigits = '91' + pDigits;
          cfg.contact.whatsapp = pDigits || '917777998789';
        }
        let rawPhone = cfg.contact.phone.replace(/\D/g, '');
        if (rawPhone.length === 10) rawPhone = '91' + rawPhone;
        cfg.contact.phoneRaw = '+' + rawPhone;
        cfg.contact.email = document.getElementById('cfgEmail')?.value.trim() || cfg.contact.email;
        cfg.contact.address = document.getElementById('cfgAddress')?.value.trim() || cfg.contact.address;
        cfg.contact.mapsUrl = document.getElementById('cfgMapsUrl')?.value.trim() || cfg.contact.mapsUrl;
        cfg.contact.googleProfileUrl = document.getElementById('cfgGoogleProfileUrl')?.value.trim() || cfg.contact.googleProfileUrl;

        // 5.5 EmailJS Settings
        cfg.emailjs = getEmailJsConfig(cfg.emailjs);
        cfg.emailjs.toEmail = document.getElementById('cfgEmailjsToEmail')?.value.trim() || cfg.emailjs.toEmail;
        cfg.emailjs.publicKey = document.getElementById('cfgEmailjsPublicKey')?.value.trim() || cfg.emailjs.publicKey;
        cfg.emailjs.serviceId = document.getElementById('cfgEmailjsServiceId')?.value.trim() || cfg.emailjs.serviceId;
        cfg.emailjs.templateId = document.getElementById('cfgEmailjsTemplateId')?.value.trim() || cfg.emailjs.templateId;

        // 6. Footer
        if (!cfg.footer) cfg.footer = { ...DEFAULT_AURA_CONFIG.footer };
        cfg.footer.copyright = document.getElementById('cfgFooterCopyright')?.value.trim() || cfg.footer.copyright;

        // 7. Venue Stats Tab
        if (!cfg.stats) cfg.stats = { ...DEFAULT_AURA_CONFIG.stats };
        cfg.stats.area = document.getElementById('cfgArea')?.value.trim() || cfg.stats.area;
        cfg.stats.capacity = document.getElementById('cfgCapacity')?.value.trim() || cfg.stats.capacity;
        cfg.stats.parking = document.getElementById('cfgParking')?.value.trim() || cfg.stats.parking;

        saveSiteConfig(cfg);
        hydrateDOM(cfg);
        closeAdminPortal();
        showAdminToast('✓ All changes saved & applied live on website!');
      });
    }

    // Admin Logout Button
    const btnAdminLogout = document.getElementById('btnAdminLogout');
    if (btnAdminLogout) {
      btnAdminLogout.addEventListener('click', () => {
        localStorage.removeItem('aura_admin_logged_in');
        showLogin();
        showAdminToast('Logged out successfully.');
      });
    }

    // Admin Close Buttons
    document.querySelectorAll('#btnAdminClose').forEach(btn => {
      btn.addEventListener('click', closeAdminPortal);
    });
  }

  // Populate Admin Inputs from Configuration
  function populateAdminFields() {
    const cfg = getSiteConfig();

    // 1. Hero
    if (cfg.hero) {
      const heroTag = document.getElementById('cfgHeroTag');
      const heroTitle = document.getElementById('cfgHeroTitle');
      const heroSubtitle = document.getElementById('cfgHeroSubtitle');
      const heroBtnPrimaryText = document.getElementById('cfgHeroBtnPrimaryText');
      const heroBtnPrimaryLink = document.getElementById('cfgHeroBtnPrimaryLink');
      const heroBtnSecondaryText = document.getElementById('cfgHeroBtnSecondaryText');
      const heroBtnSecondaryLink = document.getElementById('cfgHeroBtnSecondaryLink');
      const heroBgImage = document.getElementById('cfgHeroBgImage');
      const heroBgPreview = document.getElementById('cfgHeroBgPreview');
      const heroBadgeCapacity = document.getElementById('cfgHeroBadgeCapacity');
      const heroBadgeArea = document.getElementById('cfgHeroBadgeArea');
      const heroBadgeLocation = document.getElementById('cfgHeroBadgeLocation');
      const heroBadgeParking = document.getElementById('cfgHeroBadgeParking');

      if (heroTag) heroTag.value = cfg.hero.tag || '';
      if (heroTitle) heroTitle.value = cfg.hero.title || '';
      if (heroSubtitle) heroSubtitle.value = cfg.hero.subtitle || '';
      if (heroBtnPrimaryText) heroBtnPrimaryText.value = cfg.hero.btnPrimaryText || '';
      if (heroBtnPrimaryLink) heroBtnPrimaryLink.value = cfg.hero.btnPrimaryLink || '';
      if (heroBtnSecondaryText) heroBtnSecondaryText.value = cfg.hero.btnSecondaryText || '';
      if (heroBtnSecondaryLink) heroBtnSecondaryLink.value = cfg.hero.btnSecondaryLink || '';
      if (heroBgImage) heroBgImage.value = cfg.hero.bgImage || '';
      if (heroBgPreview) heroBgPreview.src = cfg.hero.bgImage || '';
      if (heroBadgeCapacity) heroBadgeCapacity.value = cfg.hero.badgeCapacity || '';
      if (heroBadgeArea) heroBadgeArea.value = cfg.hero.badgeArea || '';
      if (heroBadgeLocation) heroBadgeLocation.value = cfg.hero.badgeLocation || '';
      if (heroBadgeParking) heroBadgeParking.value = cfg.hero.badgeParking || '';
    }

    // 2. About
    if (cfg.about) {
      const aboutTag = document.getElementById('cfgAboutTag');
      const aboutTitle = document.getElementById('cfgAboutTitle');
      const aboutImg = document.getElementById('cfgAboutImage');
      const aboutImgPreview = document.getElementById('cfgAboutImagePreview');
      const aboutIntro = document.getElementById('cfgAboutIntro');

      if (aboutTag) aboutTag.value = cfg.about.tag || 'ABOUT OUR VENUE';
      if (aboutTitle) aboutTitle.value = cfg.about.title || '';
      if (aboutImg) aboutImg.value = cfg.about.image || '';
      if (aboutImgPreview) aboutImgPreview.src = cfg.about.image || '';
      if (aboutIntro) aboutIntro.value = cfg.about.intro || '';
      renderAdminAboutFeatures(cfg.about.features);
    }

    // 3. Halls
    if (cfg.hallsHeader) {
      const hallsTag = document.getElementById('cfgHallsTag');
      const hallsTitle = document.getElementById('cfgHallsTitle');
      const hallsSubtitle = document.getElementById('cfgHallsSubtitle');
      if (hallsTag) hallsTag.value = cfg.hallsHeader.tag || '';
      if (hallsTitle) hallsTitle.value = cfg.hallsHeader.title || '';
      if (hallsSubtitle) hallsSubtitle.value = cfg.hallsHeader.subtitle || '';
    }
    renderAdminHallsList(cfg.halls);

    // 4. Catering
    if (cfg.catering) {
      const catTag = document.getElementById('cfgCateringTag');
      const catTitle = document.getElementById('cfgCateringTitle');
      const catSubtitle = document.getElementById('cfgCateringSubtitle');
      const catPartnerPill = document.getElementById('cfgCateringPartnerPill');
      const catPartnerUrl = document.getElementById('cfgCateringPartnerUrl');
      const catDesc = document.getElementById('cfgCateringDesc');
      const catImg = document.getElementById('cfgCateringImage');
      const catImgPreview = document.getElementById('cfgCateringImagePreview');

      if (catTag) catTag.value = cfg.catering.tag || '';
      if (catTitle) catTitle.value = cfg.catering.title || '';
      if (catSubtitle) catSubtitle.value = cfg.catering.subtitle || '';
      if (catPartnerPill) catPartnerPill.value = cfg.catering.partnerPill || '';
      if (catPartnerUrl) catPartnerUrl.value = cfg.catering.partnerUrl || '';
      if (catDesc) catDesc.value = cfg.catering.desc || '';
      if (catImg) catImg.value = cfg.catering.image || '';
      if (catImgPreview) catImgPreview.src = cfg.catering.image || '';
      renderAdminCateringChecklist(cfg.catering.checklist);
    }

    // 5. Gallery
    renderAdminGalleryList(cfg.gallery);

    // 6. Contact & Footer
    if (cfg.contact) {
      const phoneInput = document.getElementById('cfgPhone');
      const waInput = document.getElementById('cfgWhatsapp');
      const emailInput = document.getElementById('cfgEmail');
      const addrInput = document.getElementById('cfgAddress');
      const mapsUrlInput = document.getElementById('cfgMapsUrl');
      const googleProfileUrlInput = document.getElementById('cfgGoogleProfileUrl');

      if (phoneInput) phoneInput.value = cfg.contact.phone || '';
      if (waInput) waInput.value = cfg.contact.whatsapp || '';
      if (emailInput) emailInput.value = cfg.contact.email || '';
      if (addrInput) addrInput.value = cfg.contact.address || '';
      if (mapsUrlInput) mapsUrlInput.value = cfg.contact.mapsUrl || '';
      if (googleProfileUrlInput) googleProfileUrlInput.value = cfg.contact.googleProfileUrl || '';
    }

    // 6.5 EmailJS Settings
    if (cfg.emailjs) {
      const emailjsToInput = document.getElementById('cfgEmailjsToEmail');
      const emailjsKeyInput = document.getElementById('cfgEmailjsPublicKey');
      const emailjsServiceInput = document.getElementById('cfgEmailjsServiceId');
      const emailjsTemplateInput = document.getElementById('cfgEmailjsTemplateId');
      const recipientDisplay = document.getElementById('adminActiveEmailjsRecipient');

      if (emailjsToInput) emailjsToInput.value = cfg.emailjs.toEmail || 'lohi8978019972@gmail.com';
      if (emailjsKeyInput) emailjsKeyInput.value = cfg.emailjs.publicKey || '';
      if (emailjsServiceInput) emailjsServiceInput.value = cfg.emailjs.serviceId || DEFAULT_AURA_CONFIG.emailjs.serviceId;
      if (emailjsTemplateInput) emailjsTemplateInput.value = cfg.emailjs.templateId || DEFAULT_AURA_CONFIG.emailjs.templateId;
      if (recipientDisplay) recipientDisplay.textContent = cfg.emailjs.toEmail || 'lohi8978019972@gmail.com';
    }

    const footerCopyrightInput = document.getElementById('cfgFooterCopyright');
    if (footerCopyrightInput && cfg.footer) {
      footerCopyrightInput.value = cfg.footer.copyright || '';
    }

    // 7. Stats
    if (cfg.stats) {
      const areaInput = document.getElementById('cfgArea');
      const capInput = document.getElementById('cfgCapacity');
      const parkInput = document.getElementById('cfgParking');

      if (areaInput) areaInput.value = cfg.stats.area || '';
      if (capInput) capInput.value = cfg.stats.capacity || '';
      if (parkInput) parkInput.value = cfg.stats.parking || '';
    }
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

          <div class="admin-grid-2col" style="margin-bottom: 8px;">
            <div class="admin-form-group" style="margin-bottom: 6px;">
              <label>Image URL / Path</label>
              <input type="text" value="${h.image || ''}" onchange="updateHallField(${idx}, 'image', this.value)">
            </div>
            <div class="admin-form-group" style="margin-bottom: 6px;">
              <label>Or Upload New Photo</label>
              <input type="file" accept="image/*" onchange="uploadHallImage(${idx}, this)">
            </div>
          </div>

          <div class="admin-form-group" style="margin-bottom: 0;">
            <label>Hall Description</label>
            <input type="text" value="${h.desc}" onchange="updateHallField(${idx}, 'desc', this.value)">
          </div>
        </div>`;
    });
    list.innerHTML = html;
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

  // ==========================================
  // CATERING CHECKLIST CRUD IN ADMIN
  // ==========================================
  function renderAdminCateringChecklist(checklist) {
    const list = document.getElementById('adminCateringChecklist');
    if (!list) return;

    if (!checklist || !checklist.length) {
      list.innerHTML = '<p style="color: #999; font-size: 0.82rem;">No catering checklist points.</p>';
      return;
    }

    let html = '';
    checklist.forEach((item, idx) => {
      html += `
        <div class="admin-about-card-row">
          <button type="button" class="btn-admin-del card-del-btn" onclick="deleteCateringBullet(${idx})">&times; Remove Bullet</button>
          <div class="admin-form-group" style="margin-bottom: 6px;">
            <label>Bullet Title</label>
            <input type="text" value="${item.title}" onchange="updateCateringBulletField(${idx}, 'title', this.value)">
          </div>
          <div class="admin-form-group" style="margin-bottom: 0;">
            <label>Bullet Description</label>
            <input type="text" value="${item.desc}" onchange="updateCateringBulletField(${idx}, 'desc', this.value)">
          </div>
        </div>`;
    });
    list.innerHTML = html;
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
      const isHome = idx < 10;
      const title = item.title || ('Gallery Image #' + (idx + 1));
      const badge = isHome
        ? `<span style="display: inline-flex; align-items: center; gap: 4px; background: rgba(74, 222, 128, 0.15); color: #4ADE80; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.72rem; border: 1px solid rgba(74, 222, 128, 0.3);">● Live on Homepage (#${idx + 1})</span>`
        : `<span style="display: inline-flex; align-items: center; gap: 4px; background: rgba(197, 160, 89, 0.15); color: #C5A059; padding: 2px 8px; border-radius: 4px; font-weight: 600; font-size: 0.72rem; border: 1px solid rgba(197, 160, 89, 0.3);">○ View Gallery Modal</span>`;

      html += `
        <div class="admin-gallery-item-row" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; background: rgba(4, 15, 9, 0.85); border: 1px solid rgba(197, 160, 89, 0.25); border-radius: 8px; margin-bottom: 10px; gap: 12px; transition: border-color 0.2s ease;">
          <div style="display: flex; flex-direction: column; gap: 4px; align-items: center; justify-content: center; flex-shrink: 0;">
            <button type="button" class="btn-admin-reorder" onclick="moveGalleryItem(${idx}, -1)" ${idx === 0 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''} title="Move Up (toward Homepage Top 10)">▲</button>
            <button type="button" class="btn-admin-reorder" onclick="moveGalleryItem(${idx}, 1)" ${idx === galleryItems.length - 1 ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''} title="Move Down">▼</button>
          </div>
          <img src="${item.src}" class="admin-gallery-item-thumb" alt="thumb" style="width: 64px; height: 48px; object-fit: cover; border-radius: 6px; border: 1.5px solid rgba(197, 160, 89, 0.4); flex-shrink: 0;">
          <div class="admin-gallery-item-details" style="flex: 1; min-width: 0;">
            <div style="margin-bottom: 6px;">
              <input type="text" value="${title}" placeholder="Photo caption" onchange="updateGalleryField(${idx}, 'title', this.value)" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(197,160,89,0.3); color: #fff; font-size: 0.82rem; padding: 4px 8px; border-radius: 4px; width: 100%;">
            </div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              ${badge}
              <select onchange="updateGalleryField(${idx}, 'span', this.value)" style="background: #040F09; color: #C5A059; border: 1px solid rgba(197,160,89,0.3); font-size: 0.72rem; padding: 2px 6px; border-radius: 4px;">
                <option value="1" ${item.span === '1' || !item.span ? 'selected' : ''}>Standard Width (1 col)</option>
                <option value="2" ${item.span === '2' ? 'selected' : ''}>Featured Wide (2 cols)</option>
              </select>
              <label class="admin-btn-secondary" style="font-size: 0.7rem; padding: 3px 8px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; border-radius: 4px;">
                <span>Change Image</span>
                <input type="file" accept="image/*" style="display: none;" onchange="uploadGalleryImage(${idx}, this)">
              </label>
            </div>
          </div>
          <button type="button" class="btn-admin-del" onclick="deleteGalleryItem(${idx})" title="Delete '${title}'" style="background: rgba(220, 53, 69, 0.25); border: 1px solid rgba(220, 53, 69, 0.6); color: #FFA0A0; padding: 7px 14px; border-radius: 6px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 6px; white-space: nowrap;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            Delete
          </button>
        </div>`;
    });
    listContainer.innerHTML = html;
  }

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
    }, 3200);
  }
  window.showAdminToast = showAdminToast;
});
