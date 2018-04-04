<?php

function debug($val, $mode = 0) {
    echo '<pre style="background:#' . substr(md5(rand()), 0, 6) . '">';
    if ($mode === 1) {
        var_dump($val);
    } else {
        print_r($val);
    }
    echo "</pre>";
}


// disclaimer : ceci est loin d'être la meilleure implantation du driver PDO
$cnx = new PDO("mysql:host=127.0.0.1;dbname=villes_fr", "root", "@mysql");

// c'est suffisant pour effectuer quelques requêtes :)

$sql1 = "SELECT code, nom, slug, nom_soundex
            FROM departement
              WHERE code >= 27
              AND nom LIKE 'm%'";

// on utilise ici la version simple : une requête non-préparée
$statement = $cnx->query($sql1);
// on verra comment protéger nos requêtes des injections SQL
$depts = $statement->fetchAll(PDO::FETCH_OBJ);
// debug($depts);

if (count($depts) > 0) {
  echo "<ul class=\"list\">";
  foreach ($depts as $dept) {
    echo "<li class=\"item\">
      <span>$dept->nom</span>
      <span>|</span>
      <span>$dept->code</span>
      <span>($dept->slug)</span>
    </li>";
  }
  echo "</ul>";
}
