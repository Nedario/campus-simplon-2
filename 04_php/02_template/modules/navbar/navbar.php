<nav id="navbar" class="navbar">
    <ul class="list">
        <?php foreach($config->nav->main as $item) {
            echo "<li class=\"item\">
                <a class=\"link\" href=\"$item\">$item</a>
            </li>";
        } ?>
    </ul>
</nav>
