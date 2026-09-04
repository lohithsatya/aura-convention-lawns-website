<?php
/**
 * Template Name: Front Page Template
 * Description: Homepage template for Aura Convention & Lawns
 */

get_header();
?>

<!-- 2. HERO SECTION -->
<section class="hero-section" id="home">
  <div class="hero-overlay"></div>
  <div class="container">
    <div class="hero-content">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_logo_transparent.png" alt="Aura Emblem" class="hero-emblem">
      <span class="section-tag" style="color: var(--gold-light);">WELCOME TO AURA</span>
      <h1 class="hero-title">Where Celebrations Become Timeless Memories</h1>
      <p class="hero-subtitle">A perfect blend of royal tradition, architectural elegance, and world-class hospitality in Telecom Nagar Extension, Gachibowli, Hyderabad.</p>
      
      <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
        <a href="#contact" class="btn btn-gold">
          SEND AN INQUIRY
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#halls" class="btn btn-outline-gold" style="color: #FFFFFF; border-color: rgba(255,255,255,0.6);">
          EXPLORE SPACES
        </a>
      </div>

      <div class="hero-badges">
        <div class="hero-badge-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <span>2000+ Guests Capacity</span>
        </div>
        <div class="hero-badge-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
          <span>35,000+ Sq.Ft Area</span>
        </div>
        <div class="hero-badge-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Prime Gachibowli Location</span>
        </div>
        <div class="hero-badge-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
          <span>300+ Dedicated Car Parking</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 3. ABOUT SECTION -->
<section class="about-section" id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-image-wrapper">
        <div class="about-image-main">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero_banner_highres.jpg" alt="Aura Convention & Lawns Entrance" style="height: 420px; width: 100%; object-fit: cover;">
        </div>
        <div class="about-badge-floating">
          <div class="years">Gachibowli</div>
          <div class="label">Hyderabad, Telangana</div>
        </div>
      </div>

      <div class="about-content">
        <span class="section-tag">ABOUT OUR VENUE</span>
        <h2 class="section-title">Crafting Unforgettable Celebrations</h2>
        <div class="divider-ornament" style="margin-left: 0;"><span></span></div>
        
        <p class="about-text">
          Nestled amidst serene surroundings in Telecom Nagar Extension, Gachibowli, <strong>Aura Convention & Lawns</strong> is thoughtfully designed to make your special moments truly extraordinary. With traditional charm, opulent modern interiors, and heartfelt service, we turn your wedding dreams into beautiful, unforgettable realities.
        </p>

        <div class="about-features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/serene-location.svg" alt="Serene Location" width="26" height="26">
            </div>
            <div class="feature-info">
              <h4>Serene Location</h4>
              <p>Surrounded by tranquil nature, conveniently located in Gachibowli.</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/elegant-ambiance.svg" alt="Elegant Ambiance" width="26" height="26">
            </div>
            <div class="feature-info">
              <h4>Elegant Ambiance</h4>
              <p>Seamless blend of traditional grandeur and modern aesthetics.</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/trusted-service.svg" alt="Trusted Service" width="26" height="26">
            </div>
            <div class="feature-info">
              <h4>Trusted Service</h4>
              <p>Warm, attentive hospitality dedicated to flawless execution.</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/memorable-events.svg" alt="Memorable Events" width="26" height="26">
            </div>
            <div class="feature-info">
              <h4>Memorable Events</h4>
              <p>From grand royal weddings to corporate galas and cultural expos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 4. HALLS & SPACES -->
<section class="halls-section" id="halls">
  <div class="container">
    <div class="halls-header">
      <span class="section-tag">OUR VENUES</span>
      <h2 class="section-title">Halls & Spaces</h2>
      <div class="divider-ornament"><span></span></div>
      <p class="section-subtitle">Exquisite indoor ballrooms and vast open-air lawns designed for every celebration scale.</p>
    </div>

    <div class="halls-grid">
      <!-- Hall 1: Grand Ballroom -->
      <div class="hall-card">
        <div class="hall-image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hall_grand_stage.jpg" alt="Aura Grand Ballroom">
          <span class="hall-badge-tag">INDOOR PILLARLESS</span>
        </div>
        <div class="hall-body">
          <h3 class="hall-title">Grand Ballroom</h3>
          <div class="hall-specs">
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              <span>1,500 Guests</span>
            </div>
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              <span>12,000 sq.ft</span>
            </div>
          </div>
          <p class="hall-desc">Our flagship pillarless convention hall with soaring ceilings, crystal chandeliers, a palatial elevated stage, and centralized climate control. Built for grand weddings and galas.</p>
          <a href="#contact" class="hall-link">
            VIEW DETAILS & PRICING
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <!-- Hall 2: Lotus Banquet Hall -->
      <div class="hall-card">
        <div class="hall-image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/expo_canopy.jpg" alt="Aura Lotus Hall">
          <span class="hall-badge-tag">INTIMATE BANQUET</span>
        </div>
        <div class="hall-body">
          <h3 class="hall-title">Lotus Hall</h3>
          <div class="hall-specs">
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              <span>500 Guests</span>
            </div>
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              <span>4,500 sq.ft</span>
            </div>
          </div>
          <p class="hall-desc">Gracefully styled hall designed for engagements, sangeet parties, intimate family ceremonies, corporate seminars, and pre-wedding functions.</p>
          <a href="#contact" class="hall-link">
            VIEW DETAILS & PRICING
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <!-- Hall 3: Aura Royal Lawns -->
      <div class="hall-card">
        <div class="hall-image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/lawn_night_stage.jpg" alt="Aura Royal Lawns">
          <span class="hall-badge-tag">OPEN-AIR LAWNS</span>
        </div>
        <div class="hall-body">
          <h3 class="hall-title">Aura Royal Lawns</h3>
          <div class="hall-specs">
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              <span>2,000 Guests</span>
            </div>
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              <span>20,000 sq.ft</span>
            </div>
          </div>
          <p class="hall-desc">Expansive open-air manicured lawns surrounded by lush greenery and ambient fairy lighting. Ideal for starlit wedding receptions, outdoor mandaps, and cultural expos.</p>
          <a href="#contact" class="hall-link">
            VIEW DETAILS & PRICING
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 5. AMENITIES SECTION -->
<section class="amenities-section" id="amenities">
  <div class="container">
    <div class="amenities-header">
      <span class="section-tag" style="color: var(--gold);">PREMIUM CONVENIENCES</span>
      <h2 class="section-title light">World-Class Amenities</h2>
      <div class="divider-ornament"><span></span></div>
      <p style="color: #D2DDD6; max-width: 600px; margin: 0 auto;">Everything your event needs for seamless celebration and utmost guest comfort.</p>
    </div>

    <div class="amenities-grid">
      <div class="amenity-item">
        <div class="amenity-icon">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/bridal-room.svg" alt="Bridal Rooms" width="28" height="28">
        </div>
        <span class="amenity-label">Bridal & Green Rooms</span>
      </div>

      <div class="amenity-item">
        <div class="amenity-icon">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/catering.svg" alt="In-house Catering" width="28" height="28">
        </div>
        <span class="amenity-label">In-House Catering</span>
      </div>

      <div class="amenity-item">
        <div class="amenity-icon">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/valet.svg" alt="Valet Parking" width="28" height="28">
        </div>
        <span class="amenity-label">Valet Parking</span>
      </div>

      <div class="amenity-item">
        <div class="amenity-icon">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/power-backup.svg" alt="Power Backup" width="28" height="28">
        </div>
        <span class="amenity-label">100% Power Backup</span>
      </div>

      <div class="amenity-item">
        <div class="amenity-icon">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/air-conditioned.svg" alt="Air Conditioned" width="28" height="28">
        </div>
        <span class="amenity-label">Centrally Air-Conditioned</span>
      </div>

      <div class="amenity-item">
        <div class="amenity-icon">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/event-planning.svg" alt="Event Planning" width="28" height="28">
        </div>
        <span class="amenity-label">Event Planning Support</span>
      </div>

      <div class="amenity-item">
        <div class="amenity-icon">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/parking.svg" alt="Ample Parking" width="28" height="28">
        </div>
        <span class="amenity-label">Ample Parking Space</span>
      </div>
    </div>
  </div>
</section>

<!-- 6. GALLERY SECTION -->
<section class="gallery-section" id="gallery">
  <div class="container">
    <div class="gallery-header">
      <span class="section-tag">PORTFOLIO</span>
      <h2 class="section-title">Photo Gallery</h2>
      <div class="divider-ornament"><span></span></div>
      <p class="section-subtitle">A glimpse of magical weddings, vibrant expos, and unforgettable memories hosted at Aura.</p>
    </div>

    <div class="gallery-grid">
      <div class="gallery-item span-2-col">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hall_grand_stage.jpg" alt="Grand Ballroom Stage Setup">
        <div class="gallery-overlay">
          <span class="gallery-caption">Grand Ballroom Royal Stage</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/lawn_night_stage.jpg" alt="Open-Air Lawn Night Reception">
        <div class="gallery-overlay">
          <span class="gallery-caption">Aura Lawns Evening Reception</span>
        </div>
      </div>

      <div class="gallery-item span-2-row">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/art_craft_exhibition.jpg" alt="Handicraft & Art Exhibition">
        <div class="gallery-overlay">
          <span class="gallery-caption">Cultural & Art Expo Gallery</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/expo_canopy.jpg" alt="Flea Market & Exhibition Pavilion">
        <div class="gallery-overlay">
          <span class="gallery-caption">Outdoor Flea Market Pavilion</span>
        </div>
      </div>

      <div class="gallery-item span-2-col">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/catering_buffet_highres.jpg" alt="Grand Royal Indian Buffet">
        <div class="gallery-overlay">
          <span class="gallery-caption">Royal Banquet Culinary Spread</span>
        </div>
      </div>
    </div>

    <div class="gallery-footer">
      <a href="#contact" class="btn btn-outline-gold" style="padding: 12px 30px;">
        VIEW FULL GALLERY & REEL
      </a>
    </div>
  </div>
</section>

<!-- 7. CATERING & PACKAGES -->
<section class="catering-section" id="catering">
  <div class="container">
    <div class="catering-card">
      <div class="catering-content">
        <span class="section-tag">GASTRONOMIC EXCELLENCE</span>
        <h2 class="section-title">Delicious Moments Made to Perfection</h2>
        <div class="divider-ornament" style="margin-left: 0;"><span></span></div>
        
        <p class="catering-text">
          From traditional South Indian banana leaf feasts and authentic Hyderabadi Dum Biryani to royal multi-cuisine spreads, our in-house culinary masters add signature flavors to your every celebration.
        </p>

        <div class="catering-tags">
          <span class="catering-tag">Royal Hyderabadi Biryani</span>
          <span class="catering-tag">Traditional Banana Leaf Feasts</span>
          <span class="catering-tag">Pure Veg & Non-Veg Kitchens</span>
          <span class="catering-tag">Live Chaat & Dessert Counters</span>
          <span class="catering-tag">Customized Tasting Sessions</span>
        </div>

        <div>
          <a href="#contact" class="btn btn-gold">
            EXPLORE PACKAGES
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <div class="catering-image">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/catering_buffet_highres.jpg" alt="Traditional Indian Catering Buffet">
      </div>
    </div>
  </div>
</section>

<!-- 8. INQUIRY & CONTACT SECTION -->
<section class="inquiry-section" id="contact">
  <div class="container">
    <div class="inquiry-header">
      <span class="section-tag">RESERVATIONS</span>
      <h2 class="section-title">Let's Plan Your Special Day</h2>
      <div class="divider-ornament"><span></span></div>
      <p class="section-subtitle">Reach out to check date availability, schedule a venue walk-through, or receive customized pricing.</p>
    </div>

    <div class="inquiry-wrapper">
      <!-- Left: Contact Details -->
      <div class="contact-info-panel">
        <div>
          <h3>Get In Touch</h3>
          <p>Our event directors are here to assist you with hall tours, date bookings, and custom package quotations.</p>

          <div class="info-items">
            <div class="info-item">
              <div class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div class="info-details">
                <h5>Call Direct</h5>
                <a href="tel:<?php echo esc_attr(get_theme_mod('aura_phone', '+91 77779 98789')); ?>"><?php echo esc_html(get_theme_mod('aura_phone', '+91 77779 98789')); ?></a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div class="info-details">
                <h5>Email Inquiries</h5>
                <a href="mailto:<?php echo esc_attr(get_theme_mod('aura_email', 'info@auraconvention.com')); ?>"><?php echo esc_html(get_theme_mod('aura_email', 'info@auraconvention.com')); ?></a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="info-details">
                <h5>Venue Address</h5>
                <p><?php echo esc_html(get_theme_mod('aura_address', 'Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032')); ?></p>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-whatsapp-box">
          <p>Prefer chatting directly? Message our venue manager on WhatsApp.</p>
          <a href="#" id="whatsappInquireBtn" class="btn btn-whatsapp" style="width: 100%;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.42C8.95 7.42 8.78 7.47 8.65 7.64C8.4 7.94 7.74 8.57 7.74 9.85C7.74 11.13 8.68 12.36 8.81 12.53C8.95 12.7 10.65 15.33 13.25 16.45C13.87 16.72 14.35 16.88 14.73 17C15.36 17.2 15.92 17.17 16.38 17.1C16.89 17.03 17.95 16.46 18.17 15.83C18.39 15.21 18.39 14.67 18.33 14.56C18.26 14.45 18.1 14.39 17.85 14.27C17.6 14.14 16.38 13.54 16.15 13.46C15.93 13.37 15.76 13.33 15.6 13.58C15.43 13.83 14.96 14.39 14.81 14.56C14.67 14.72 14.53 14.75 14.28 14.62C14.03 14.5 12.98 14.15 11.73 13.04C10.76 12.17 10.11 11.1 9.94 10.81C9.78 10.56 9.92 10.43 10.05 10.3C10.16 10.19 10.3 10.01 10.42 9.87C10.55 9.73 10.59 9.62 10.67 9.46C10.76 9.29 10.71 9.15 10.65 9.03C10.59 8.91 10.09 7.68 9.88 7.18C9.68 6.69 9.48 6.75 9.33 6.75C9.18 6.74 9.11 7.42 9.11 7.42Z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <!-- Right: Inquiry Form -->
      <div class="inquiry-form-panel">
        <form id="inquiryForm">
          <div class="form-grid">
            <div class="form-group">
              <label for="guestName">Your Name *</label>
              <input type="text" id="guestName" class="form-control" placeholder="e.g. Ramesh Kumar" required>
            </div>

            <div class="form-group">
              <label for="guestPhone">Phone Number *</label>
              <input type="tel" id="guestPhone" class="form-control" placeholder="+91 98765 00000" required>
            </div>

            <div class="form-group">
              <label for="guestEmail">Email Address</label>
              <input type="email" id="guestEmail" class="form-control" placeholder="ramesh@example.com">
            </div>

            <div class="form-group">
              <label for="eventType">Event Type *</label>
              <select id="eventType" class="form-control" required>
                <option value="" disabled selected>Select Event Type</option>
                <option value="Grand Wedding">Grand Wedding</option>
                <option value="Reception Ceremony">Reception Ceremony</option>
                <option value="Sangeet / Mehendi">Sangeet / Mehendi</option>
                <option value="Engagement / Roka">Engagement / Roka</option>
                <option value="Corporate Gala / Seminar">Corporate Gala / Seminar</option>
                <option value="Exhibition / Flea Market">Exhibition / Flea Market</option>
                <option value="Birthday / Anniversary">Birthday / Anniversary</option>
              </select>
            </div>

            <div class="form-group">
              <label for="eventDate">Preferred Event Date *</label>
              <input type="date" id="eventDate" class="form-control" required>
            </div>

            <div class="form-group">
              <label for="guestCount">Estimated Guests</label>
              <select id="guestCount" class="form-control">
                <option value="100 - 300 Guests">100 - 300 Guests</option>
                <option value="300 - 600 Guests">300 - 600 Guests</option>
                <option value="600 - 1000 Guests">600 - 1000 Guests</option>
                <option value="1000 - 1500 Guests">1000 - 1500 Guests</option>
                <option value="1500 - 2500+ Guests">1500 - 2500+ Guests</option>
              </select>
            </div>

            <div class="form-group span-full">
              <label for="guestMessage">Special Requirements / Message</label>
              <textarea id="guestMessage" class="form-control" placeholder="Tell us about your catering preferences, stage decor, or any custom requirements..."></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" style="flex: 1;">
              SEND INQUIRY
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>

          <div id="formSuccessMsg" class="form-success-msg">
            ✓ Thank you! Your inquiry has been received. Our venue management team in Gachibowli will reach out shortly.
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();
