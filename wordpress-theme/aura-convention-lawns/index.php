<?php
get_header();
?>
<main style="padding: 100px 0; min-height: 60vh;">
  <div class="container">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <article style="margin-bottom: 40px;">
        <h1 class="section-title"><?php the_title(); ?></h1>
        <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-dark);">
          <?php the_content(); ?>
        </div>
      </article>
    <?php endwhile; else : ?>
      <p><?php esc_html_e('No posts found.', 'aura-convention-lawns'); ?></p>
    <?php endif; ?>
  </div>
</main>
<?php
get_footer();
