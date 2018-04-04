<?php include("app.php"); ?>

<?php include("inc/head.php") ?>

<?php include("inc/header.php") ?>

<?php include("modules/navbar/navbar.php") ?>

<div id="app" class="page">
    <!-- inclusion de la page active -->
    <?php include($page->html); ?>
</div>

<?php include("inc/footer.php") ?>
