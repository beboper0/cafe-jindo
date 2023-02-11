<?php

if (!isset($attributes['imgURL'])) {
    $attributes['imgURL'] = site_url('/wp-content/uploads/2021/04/cafe-jindo-seating.jpg');
}

?>

<section>
    <div class="parallax reveal-on-load" style="background-image: url('<?php echo $attributes['imgURL'] ?>')" }}></div>
    <div id="splash-message" class="splash-container reveal-on-load">
        <?php echo $content; ?>
    </div>
</section>