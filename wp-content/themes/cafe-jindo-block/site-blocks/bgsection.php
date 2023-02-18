<?php

if (!isset($attributes['imgURL'])) {
    $attributes['imgURL'] = site_url('wp-content/uploads/2021/05/food-splash.jpg');
}

?>

<section>
    <div class="parallax"
         style="background-image: url('<?php echo $attributes['imgURL'] ?>')"></div>
</section>