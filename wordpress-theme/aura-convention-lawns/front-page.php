<?php
/**
 * Template Name: Front Page Template
 * Description: Homepage template for Aura Convention & Lawns
 */

get_header();
?>

<!-- 2. HERO SECTION -->
<section class="hero-section" id="home">
  <!-- Cinematic Drone Aerial Background with Slow Ken Burns Zoom-In Effect -->
  <div class="hero-drone-bg-container" aria-hidden="true">
    <div class="hero-drone-slide hero-drone-slide-1"></div>
    <div class="hero-drone-slide hero-drone-slide-2"></div>
  </div>
  <div class="hero-overlay"></div>

  <!-- Notification-style Exclusive Partner Pill at Left Top Below Header -->
  <a href="https://kateringking.com" target="_blank" rel="noopener noreferrer" class="partner-notification-badge">
    <span class="partner-notification-icon">★</span>
    <span class="partner-notification-text">
      <span class="partner-notification-label">EXCLUSIVE FOOD & CATERING PARTNER</span>
      <span class="partner-notification-brand">KateringKing.com <span class="partner-notification-arrow">↗</span></span>
    </span>
  </a>

  <div class="container">
    <div class="hero-content">
      <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_logo_transparent.png" alt="Aura Emblem" class="hero-emblem">
      <span class="section-tag" style="color: var(--gold-light);">WELCOME TO AURA</span>
      <h1 class="hero-title">Where Celebrations Become Timeless Memories</h1>
      <p class="hero-subtitle">An urban oasis conceived to redefine the art of gathering, framed by majestic hillocks in Hyderabad’s financial corridor.</p>
      
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
          <span>1000+ Guests Capacity</span>
        </div>
        <div class="hero-badge-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
          <span>35,000+ Sq.Ft Area</span>
        </div>
        <a href="https://www.google.com/maps/place/AURA+Convention+%26+Lawns/@17.4307919,78.3605956,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93be75973279:0x7ebae846414c1aaf!8m2!3d17.4307919!4d78.3631705!16s%2Fg%2F11kcl9qh80?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="hero-badge-item hero-badge-link" title="Open Aura Convention & Lawns on Google Maps">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Prime Gachibowli Location ↗</span>
        </a>
        <div class="hero-badge-item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>
          <span>200+ Spacious Inside Valet Parking</span>
        </div>
      </div>

      <!-- Google Maps Luxury Button Feature (Styled like "Send an Inquiry" button) -->
      <div class="hero-maps-action-wrapper" style="margin-top: 18px; display: flex; justify-content: center;">
        <a href="https://www.google.com/maps/place/AURA+Convention+%26+Lawns/@17.4307919,78.3605956,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93be75973279:0x7ebae846414c1aaf!8m2!3d17.4307919!4d78.3631705!16s%2Fg%2F11kcl9qh80?entry=ttu&g_ep=EgoyMDI2MTAwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-hero-maps" title="Open Aura Convention & Lawns Location on Google Maps">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>GET LOCATION DIRECTIONS ON GOOGLE MAPS</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
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
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_grand_entrance_night.jpg" alt="Aura Convention & Lawns Architectural Grandeur" class="about-img-cover" style="height: 480px; width: 100%; object-fit: cover;">
        </div>
        <div class="about-badge-floating">
          <div class="years">Gachibowli</div>
          <div class="label">Hyderabad, Telangana</div>
        </div>
      </div>

      <div class="about-content">
        <span class="section-tag">ABOUT OUR VENUE</span>
        <h2 class="section-title">An Urban Oasis Framed by Nature & Modern Design</h2>
        <div class="divider-ornament" style="margin-left: 0;"><span></span></div>
        
        <p class="about-text">
          Beyond the glass and concrete of Hyderabad’s financial corridor lies an unexpected sanctuary. A place where the relentless pace of the city quietly dissolves into open skies, natural harmony, and architectural grandeur. Welcome to <strong>Aura Convention and Lawns</strong> - an urban oasis conceived to redefine the art of gathering.
        </p>
        <p class="about-text" style="margin-top: -12px;">
          Carved into a natural landscape framed by majestic, timeless hillocks, Aura Convention and Lawns merges raw natural topography with refined modern design. Winding botanical promenades, sculpted green terraces, and curated art installations bring texture and soul to every open space. Every angle has been engineered with photogenic intention: from dramatic golden-hour sightlines against the rocky horizon to intimate, glowing garden alcoves. Here, every photograph captures an heirloom memory, and every view invites stillness.
        </p>

        <div class="about-features-grid">
          <div class="feature-card-rich">
            <div class="feature-top">
              <div class="feature-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div class="feature-title-wrap">
                <h4>Natural Hillock Canvas</h4>
                <span class="feature-pill-gold">SERENE TOPOGRAPHY</span>
              </div>
            </div>
            <p>Carved into majestic hillocks, creating dramatic golden-hour sightlines and photographic memories.</p>
          </div>

          <div class="feature-card-rich">
            <div class="feature-top">
              <div class="feature-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 22h16M4 6h16M6 6v16M10 6v16M14 6v16M18 6v16M12 2 4 6h16l-8-4z"/></svg>
              </div>
              <div class="feature-title-wrap">
                <h4>Executive MICE & Summits</h4>
                <span class="feature-pill-gold">GLOBAL STANDARDS</span>
              </div>
            </div>
            <p>Acoustic precision, advanced presentation technology, and seamless VIP hospitality for enterprise summits.</p>
          </div>

          <div class="feature-card-rich">
            <div class="feature-top">
              <div class="feature-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="m12 11-2 2-1-1"/></svg>
              </div>
              <div class="feature-title-wrap">
                <h4>Starlit Royal Weddings</h4>
                <span class="feature-pill-gold">TIMELESS GRANDEUR</span>
              </div>
            </div>
            <p>Sprawling lawns under open night skies, designed for opulent celebrations and heirloom moments.</p>
          </div>

          <div class="feature-card-rich">
            <div class="feature-top">
              <div class="feature-icon-circle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>
              </div>
              <div class="feature-title-wrap">
                <h4>Epicurean Partner</h4>
                <span class="feature-pill-gold">KATERINGKING.COM</span>
              </div>
            </div>
            <p>Artisanal dining with separate 100% pure veg kitchens and live food counters.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Luxury Stats Ribbon - Wide & Perfectly Divided (Spans Full Container Width) -->
    <div class="about-stats-ribbon">
      <div class="stat-item">
        <div class="stat-icon-box">
          <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-number" data-aura-stat="area">35,000+</div>
          <div class="stat-label">SQ.FT ESTATE AREA</div>
        </div>
      </div>
      <div class="stat-item">
        <div class="stat-icon-box">
          <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="stat-info">
          <div class="stat-number" data-aura-stat="capacity">1,000+</div>
          <div class="stat-label">GUEST CAPACITY</div>
        </div>
      </div>
      <div class="stat-item stat-featured-parking">
        <div class="stat-icon-box">
          <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.3 2 11.6V16c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
        </div>
        <div class="stat-info">
          <span class="stat-featured-tag">★ HIGHLIGHTED</span>
          <div class="stat-number" data-aura-stat="parking">200+</div>
          <div class="stat-label">VALET CAR PARKING</div>
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
      <!-- Hall 1: Convention Hall -->
      <div class="hall-card">
        <div class="hall-image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_grand_stage_led_wall.jpg" alt="Convention Hall">
          <span class="hall-badge-tag">EXECUTIVE PRECISION</span>
        </div>
        <div class="hall-body">
          <h3 class="hall-title">Convention Hall</h3>
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
          <p class="hall-desc">Inside our convention hall, executive ambition meets uncompromising precision. Aura Convention and Lawns is built from the ground up for premier MICE engagements—from high-profile corporate conventions, international tech summits, and product unveils to strategic board retreats and expansive trade exhibitions. With intelligent acoustic engineering, advanced presentation infrastructure, and versatile modular floor plans, we deliver the structured focus, privacy, and flawless execution that global enterprise commands.</p>
          <a href="#contact" class="hall-link">
            VIEW DETAILS & PRICING
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <!-- Hall 2: Lawns -->
      <div class="hall-card">
        <div class="hall-image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_sprawling_lawns_evening.jpg" alt="Lawns">
          <span class="hall-badge-tag">UNDER THE NIGHT SKY</span>
        </div>
        <div class="hall-body">
          <h3 class="hall-title">Lawns</h3>
          <div class="hall-specs">
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              <span>2,000+ Guests</span>
            </div>
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              <span>20,000 sq.ft</span>
            </div>
          </div>
          <p class="hall-desc">Under the open night sky, Aura Convention and Lawns becomes a stage for life’s grandest milestones. Our sprawling lawns provide an unconstrained canvas for lavish weddings, vibrant sangeets, royal receptions, and intimate family galas. The sweeping lawns adapt effortlessly to your vision—whether you imagine an ethereal, traditional celebration framed by ancient stone, or a chic contemporary gala beneath the stars. Here, celebrations are not merely hosted; they are immortalized.</p>
          <a href="#contact" class="hall-link">
            VIEW DETAILS & PRICING
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <!-- Hall 3: Banquet Hall -->
      <div class="hall-card">
        <div class="hall-image">
          <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hall_grand_stage.jpg" alt="Banquet Hall">
          <span class="hall-badge-tag">OPULENT CLIMATE COMFORT</span>
        </div>
        <div class="hall-body">
          <h3 class="hall-title">Banquet Hall</h3>
          <div class="hall-specs">
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              <span>600 Guests</span>
            </div>
            <div class="spec-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              <span>6,000 sq.ft</span>
            </div>
          </div>
          <p class="hall-desc">For occasions that demand flawless climate-controlled comfort without sacrificing an ounce of grandeur, Aura Convention and Lawns proudly presents our pristine Indoor AC Banquet Hall. This opulent, fully air-conditioned space offers an elegant sanctuary for sophisticated celebrations, vibrant pre-wedding sangeets, and exclusive private galas. With plush interiors, customizable ambient lighting, and impeccable acoustics, the banquet hall ensures your guests remain immersed in absolute comfort and luxury, completely insulated from the seasons outside.</p>
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
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_stage_led_backdrop.jpg" alt="Grand Production Stage & LED Visual Backdrop">
        <div class="gallery-overlay">
          <span class="gallery-caption">Grand Production Stage & LED Visual Backdrop</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_lawns_banquet_setup.jpg" alt="Lush Sprawling Lawns & Royal Banquet Seating">
        <div class="gallery-overlay">
          <span class="gallery-caption">Lush Sprawling Lawns & Royal Banquet Seating</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_live_fruit_counter.jpg" alt="Exquisite Live Fruit Counter & Gourmet Display">
        <div class="gallery-overlay">
          <span class="gallery-caption">Exquisite Live Fruit Counter & Gourmet Display</span>
        </div>
      </div>

      <div class="gallery-item">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_artisanal_dessert_display.jpg" alt="Artisanal Dessert & Pastry Showcase by KateringKing">
        <div class="gallery-overlay">
          <span class="gallery-caption">Artisanal Dessert & Pastry Showcase by KateringKing</span>
        </div>
      </div>

      <!-- Bottom row: 2 wide images (100% Real Aerial & Interior Venue Shots) -->
      <div class="gallery-item span-2-col">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_canopy_buffet_hall.jpg" alt="Spacious Canopy Dining & Grand Buffet Hall">
        <div class="gallery-overlay">
          <span class="gallery-caption">Spacious Canopy Dining & Grand Buffet Hall</span>
        </div>
      </div>

      <div class="gallery-item span-2-col">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_drone_aerial_parking.jpg" alt="Expansive 200+ Inside Valet Parking Grounds">
        <div class="gallery-overlay">
          <span class="gallery-caption">Expansive 200+ Inside Valet Parking Grounds</span>
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

<!-- 7. FOOD & CATERING & PACKAGES -->
<section class="catering-section" id="catering">
  <div class="container">
    <div class="catering-card">
      <div class="catering-content">
        <div class="partner-header-pill" style="margin-bottom: 14px; display: inline-flex;">
          <span class="partner-pill-icon">👑</span>
          <span class="partner-pill-text">EXCLUSIVE FOOD & CATERING PARTNER: <strong>KateringKing.com</strong></span>
        </div>
        <span class="section-tag" style="display: block;">ROYAL FOOD & CATERING</span>
        <h2 class="section-title">An Unforgettable Food & Dining Experience</h2>
        <div class="divider-ornament" style="margin-left: 0;"><span></span></div>
        
        <p class="catering-text">
          No event is complete without an unforgettable food experience. At Aura Convention and Lawns, dining is elevated through our partnership with KateringKing.com. Known for artisanal menu creation, exquisite live food stations, and flawless banquet hospitality, KateringKing curates dining experiences tailored to royal tastes. Together, we ensure your guests savor every bite of your occasion.
        </p>

        <div class="catering-tags">
          <span class="catering-tag">Artisanal Menu Creation</span>
          <span class="catering-tag">Exquisite Live Food Counters</span>
          <span class="catering-tag">Flawless Banquet Hospitality</span>
          <span class="catering-tag">100% Segregated Pure Veg Facilities</span>
          <span class="catering-tag">Customized Tasting Sessions</span>
        </div>

        <div style="display: flex; gap: 14px; flex-wrap: wrap; margin-top: 20px;">
          <a href="https://kateringking.com/" target="_blank" rel="noopener noreferrer" class="btn btn-kateringking">
            <span>VISIT KATERINGKING.COM</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <a href="https://wa.me/917777998789?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20food%20tasting%20session%20with%20KateringKing%20at%20Aura%20Convention." target="_blank" class="btn btn-outline-gold" data-aura-href="whatsapp" data-wa-text="Hi, I would like to schedule a food tasting session with KateringKing at Aura Convention.">
            SCHEDULE TASTING
          </a>
        </div>
      </div>

      <div class="catering-image">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_royal_buffet_spread.jpg" alt="Aura Convention and Lawns Royal Buffet Spread by KateringKing">
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
              INQUIRE NOW
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>

          <div id="formSuccess" class="form-success-msg">
            ✓ Thank you! Your inquiry has been received. Our venue management team in Gachibowli will reach out shortly.
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<?php
get_footer();
