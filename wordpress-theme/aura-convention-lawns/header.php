<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container">
    <nav class="navbar">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-logo">
        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/aura_logo_transparent.png" alt="<?php bloginfo('name'); ?>">
        <div class="brand-text">
          <span class="title">AURA</span>
          <span class="subtitle">Convention & Lawns</span>
        </div>
      </a>

      <?php
      if (has_nav_menu('primary-menu')) {
          wp_nav_menu(array(
              'theme_location' => 'primary-menu',
              'container'      => false,
              'menu_class'     => 'nav-menu',
              'fallback_cb'    => false,
          ));
      } else {
      ?>
      <ul class="nav-menu">
        <li><a href="#home" class="nav-link active">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#halls" class="nav-link">Halls & Spaces</a></li>
        <li><a href="#amenities" class="nav-link">Amenities</a></li>
        <li><a href="#gallery" class="nav-link">Gallery</a></li>
        <li><a href="#catering" class="nav-link">Catering</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
      <?php } ?>

      <div class="nav-actions">
        <a href="https://kateringking.com/" target="_blank" rel="noopener noreferrer" class="partner-header-pill" title="Exclusive Culinary Partner: KateringKing.com">
          <span class="partner-pill-icon">👑</span>
          <span class="partner-pill-text">EXCLUSIVE FOOD PARTNER: <strong>KateringKing.com</strong></span>
        </a>
        <a href="#contact" class="btn btn-primary" style="padding: 10px 22px; font-size: 0.82rem;">
          INQUIRE NOW
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <button class="hamburger" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </div>
</header>
