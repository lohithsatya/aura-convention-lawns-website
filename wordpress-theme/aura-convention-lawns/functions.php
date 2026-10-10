<?php
/**
 * Aura Convention & Lawns Theme Functions
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function aura_theme_setup() {
    // Add default title tag support
    add_theme_support('title-tag');

    // Add support for Featured Images
    add_theme_support('post-thumbnails');

    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 280,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary-menu' => __('Primary Navigation', 'aura-convention-lawns'),
        'footer-menu'  => __('Footer Navigation', 'aura-convention-lawns'),
    ));
}
add_action('after_setup_theme', 'aura_theme_setup');

function aura_enqueue_scripts() {
    // Google Fonts
    wp_enqueue_style(
        'aura-fonts',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    // Theme CSS
    wp_enqueue_style(
        'aura-main-style',
        get_template_directory_uri() . '/assets/css/style.css',
        array(),
        '1.0.0'
    );

    // EmailJS SDK
    wp_enqueue_script(
        'emailjs-sdk',
        'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
        array(),
        null,
        true
    );

    // Theme JS
    wp_enqueue_script(
        'aura-main-js',
        get_template_directory_uri() . '/assets/js/main.js',
        array('emailjs-sdk'),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'aura_enqueue_scripts');

/**
 * Customizer settings for Venue Contact details
 */
function aura_customize_register($wp_customize) {
    $wp_customize->add_section('aura_contact_section', array(
        'title'    => __('Venue Contact Info', 'aura-convention-lawns'),
        'priority' => 30,
    ));

    // Phone
    $wp_customize->add_setting('aura_phone', array('default' => '+91 77779 98789'));
    $wp_customize->add_control('aura_phone', array(
        'label'    => __('Phone Number', 'aura-convention-lawns'),
        'section'  => 'aura_contact_section',
        'type'     => 'text',
    ));

    // WhatsApp
    $wp_customize->add_setting('aura_whatsapp', array('default' => '917777998789'));
    $wp_customize->add_control('aura_whatsapp', array(
        'label'    => __('WhatsApp Number (no plus or spaces)', 'aura-convention-lawns'),
        'section'  => 'aura_contact_section',
        'type'     => 'text',
    ));

    // Email
    $wp_customize->add_setting('aura_email', array('default' => 'info@auraconvention.com'));
    $wp_customize->add_control('aura_email', array(
        'label'    => __('Inquiry Email', 'aura-convention-lawns'),
        'section'  => 'aura_contact_section',
        'type'     => 'email',
    ));

    // Address
    $wp_customize->add_setting('aura_address', array('default' => 'Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032'));
    $wp_customize->add_control('aura_address', array(
        'label'    => __('Full Address', 'aura-convention-lawns'),
        'section'  => 'aura_contact_section',
        'type'     => 'textarea',
    ));
}
add_action('customize_register', 'aura_customize_register');
