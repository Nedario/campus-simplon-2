<?php
// on récupère le contenu de notre fichier de config en json
// on le converti en objet PHP
$config = json_decode(file_get_contents("my-config.json"));
// debug($config);
// nous incluons notre jeu de données
include "data.php";
// et aussi nos fonctions de debug utiles
include "libs/utility.php";

function getModules($page) {
  $filtered = (object)["css" => [], "js" => []];
  // nous parcourons les pages du fichier de config
  // si la page courante a une propriété modules et si cette prop est un tableau
  if (isset($page->mods) && count($page->mods)) {
    // alors on lance une boucle sur les modules de la page courante
    foreach ($page->mods as $mod) {
      $files = scandir("modules/$mod"); // lecture du dossier du module en cours ( exemple: modules/maps )
      $prefilter = array_diff($files, array('.', '..')); // nettoyage du résultat de scandir...
      // debug($prefilter);
      foreach ($prefilter as $key => $file) {
        // on liste tous les fichiers du modules
        if (preg_match('/js$/', $file)) {
          $filtered->js[] =  "modules/$mod/$file"; // on garde les fichier js
        } elseif (preg_match('/css$/', $file)) {
          $filtered->css[] = "modules/$mod/$file"; // on garde aussi les fichiers css
        }
      }
    }
  }
  return $filtered;
}

// on récupère l'url courante
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// debug($url);
// conversion de l'url en array avec le séparateur '/'
$segments = explode('/', $url);
// debug($segments);
// on récupère le dernier segment de l'url (nom de la page souhaitée, par exemple: home )
$page_name = $segments[count($segments) - 1];
// isolation de la propriété config->page
// on converti l'objet associé en array multidimensionnel
$pages = (array)$config->pages;
// debug($pages);
if (isset($pages[$page_name])) {
    // si l'array page contient la clé page name
     // voir pages dans my-config.json
    $page_check = @fopen($pages[$page_name]->html, 'r');
    // on tente de lire le contenu du fichier de template html
    if ($page_check === false) {
        // si le fichier html de la page n'existe pas
        $page = $pages["notfound"];
    } else {
        $page = $pages[$page_name]; // cette variable est utilisée dans le template (index.php)
    }
    // on récupères les fichiers css et js liés aux modules de la page
    $page_modules = getModules($page);
    // fusion dans un tableau unique des css modules avec les css globaux
    $config->css = array_merge($config->css, $page_modules->css);
    $config->js = array_merge($config->js, $page_modules->js);
    // fusion dans un tableau unique des js modules avec les js globaux
    // $config->css et $config->js sont utilisées dans le fichier inc/head.php
    // debug('page_modules ===> ');
    // debug($config);
    // debug($page_modules);
} else {
    // sinon, page non trouvée. voir pages dans my-config.json
    $page = $pages["notfound"];
}
