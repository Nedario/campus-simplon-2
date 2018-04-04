<!DOCTYPE html>
<html lang="<?php echo $config->lang ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $page->title ?></title>

    <?php foreach($config->css as $css) {
        echo "<link rel=\"stylesheet\" href=\"$css\">";
    } ?>

    <?php foreach($config->js as $js) {
        echo "<script src=\"$js\"></script>";
    } ?>

</head>
<body>
