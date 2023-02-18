<?php

if (!isset($attributes['imgURL'])) {
    $attributes['imgURL'] = site_url('wp-content/uploads/2021/05/menu-servings.jpg');
}

?>

<header class="article-header" style="background-image: url('<?php echo $attributes['imgURL'] ?>'); background-position: <?php echo $attributes['imgFocalPoint']['x'] * 100?>% <?php echo $attributes['imgFocalPoint']['y'] * 100?>%">
    <?php echo $content; ?>
</header>