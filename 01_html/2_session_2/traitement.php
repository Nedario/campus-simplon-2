<?php

echo "<p>hello world !</p>";
echo "<hr>";
echo "<pre>";
print_r($_POST);
echo "</pre>";
echo "<pre>";
print_r($_FILES);
echo "</pre>";
echo "<hr>";

if (isset($_POST["register"])) {
    echo "l'user veut s'enregister ! <br>";
    echo $_POST["name"] . " " . $_POST["lastname"];
}
