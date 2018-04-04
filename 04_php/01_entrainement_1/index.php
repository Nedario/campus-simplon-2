<?php

// commentaire mono-ligne
// PHP => PHP Hypertext Preprocessor

// commentaire multi-lignes
/*
  on ouvre PHP ainsi => <?php
  on ferme PHP ainsi => ?>
  note: dans un fichier .php, la fermeture est optionnelle
  (pas dans un fichier .html)
*/

// ############################################################################
// Pour afficher une valeur en PHP, on utilise l'instruction echo

echo "hello PHP";
echo "<p>" . (123 + 23) . "</p>";
echo '<p>retrouvez la documentation du language sur
<a href="http://php.net/docs.php" target="_blank">ce site</a></p>';
echo "<hr>";

// ############################################################################

// fonctions natives de déboguage

// void var_dump ( mixed $expression [, mixed $... ] )
// mixed print_r ( mixed $expression [, bool $return = false ] )

// NOTE : voir fonctions customs debug et debugX plus bas, section fonctions

// ############################################################################
// les types de données
// http://php.net/manual/fr/language.types.php

// Booléen
// Entiers (int pour integer)
// Décimaux (float)
// String
// Tableaux
// Objets
// NULL
// Ressources

/*
Opérateurs

=	  affectation
==	  comparaison de valeur
===	  comparaison de valeur et de type
!=	  différent de
!	  n'est pas
>	  supérieur à
<	  inférieur à
>=	  supérieur ou égal à
<=	  inférieur ou égal à
&&    ET (AND)
||    OU (OR)
XOR	  OU exclusif
ternaire   (expression) ? val : val
*/

echo "<p>#### OPERATEURS #####</p>";
var_dump(1 == "1.0");
var_dump(1 === "1.0");
var_dump(1 == "1");
var_dump(1 !== 1);
var_dump(1 == true);
var_dump(0 == true);
var_dump(0 == false);
var_dump(0 === false);
echo '<p>---XOR---</p>';
var_dump(true XOR true);   // false
var_dump(false XOR false); // false
var_dump(true XOR false);  // true
var_dump(false XOR true);  // true
echo "<hr>";

// ############################################################################
// connaître le type d'une valeur
// string gettype ( mixed $var )

// ############################################################################

// note sur la synaxe des instructions
// En PHP, le point virgule marquant la fin d'une instruction est OBLIGATOIRE !

// ############################################################################
// Variables

$bool = true || false;
$str = 'Je suis une chaîne de caractères';
$int = 100;
$dec = 1.1;
$arr = array(1, 2, 3, 4); // OU [val1, val2, val3]
$arr_multi_dimension = array(
  "cle_1" => "hello",
  "cle_2" => "world",
  "cle_3" => "PHP",
  "cle_4" => "c'est fun aussi !"
);
$obj = new stdClass();
$obj->prop1 = "ola !";
$obj->prop2 = "salut !";
$obj->prop3 = array("yes", "no", "maybe");
// PHP 7 =>
# @PHPDOC
$obj1 = new \stdClass; // Instantiate stdClass object
$obj2 = new class{}; // Instantiate anonymous class
$obj3 = (object)[]; // Cast empty array to object
// un exemple habituel depuis le début ... ^^
$cat = new stdClass();
$cat->name = "kitty";
$cat->color = "roux";
$vide = null;

// ############################################################################
// IMPORTANT
// Différences entre guillemets doubles et simples
$v1 = "interprétée...";
$v2 = "non interprétée...";
echo "Avec des guillemets doubles, une variable est $v1";
echo "<br>";
echo 'Avec des guillemets simples, une variable est $v2';
echo "<hr>";

// ############################################################################
// échapper un caractère
//
$ma_classe = "module";
$ma_phrase = 'On échappe l\'apostrophe avec backslash... mais aussi =><br><br>';
$ma_balise = "<div class=\"$ma_classe\">ma div peut contenir une classe CSS 'variable'</div>";
echo $ma_phrase;
echo $ma_balise;

echo "<hr>";

// ############################################################################
// Constantes

define("c1", "je suis la constante c1");
define("foo", "foo");
define("bar", "baar");
echo "Valeur des constantes => <br>";
echo "<ul>";
  echo "<li>" . c1  . "</li>";
  echo "<li>" . foo . "</li>";
  echo "<li>" . bar . "</li>";
echo "</ul>";

echo "<hr>";


// ############################################################################

// les conditions

if (1 >= 23) {
  echo "ça m'étonnerait !!!";

} else if (gettype($obj) === "NULL") {
  echo "rien n'est moins sûr !!!";

} else {
  echo "c'est par ici que ça se passe !<br>";

}

echo "<hr>";

// ############################################################################

// valeur par défaut d'une variables

$non_initialisée;

echo "Par défaut, une variable vaut Undefined. Mais undefined n'est pas un type en PHP";
echo $non_initialisée;

echo "<hr>";

// ############################################################################

// la portée des variables (block scope)
// les variables en PHP se comportent comme let en JS

$blok_scoped = "je suis block-scoped";

if (false) {
  $test = "je suis la var test";

} else {
  echo "je suis dans le else";
  $val_ici = $blok_scoped;
  $foo = "bar";
}

echo 'Valeur de la var $test => ' . $foo; //
echo "<hr>";

// testez vous-même en passant le paramètre du if à true ... que se passe-t'il ?

// ############################################################################

// les fonctions

function test() {
  echo "<p>je suis dans le corps de la fonction test !!!</p>";
}

test();

function hello($qui = "user anonyme") {
  echo "<p>Hello <b>" . $qui . " </b>!</p>";
}

hello("Johnny");
hello("Karim");
hello("Olga");

function myTimeStamp() {
  return time();
  // une fonction un peu idiote qui retourne la valeur
  // actuelle du temps UNIX
}

// echo myTimeStamp();
$mon_temps_unix_la_maintenant = myTimeStamp();
echo "Pendant ce temps, @UNIX ... <b>$mon_temps_unix_la_maintenant</b>";

echo "<hr>";

/**
 * Fonction de debug
 *
 * Affiche un print_r ou var_dump formaté sur une valeur ou expression
 *
 * @since 0.1
 * @param  mixed  $val  valeur ou expression à deboguer
 * @param  integer $mode [description]
 * @return void    RAS
 */
function debug($val, $mode = 0) {
    echo '<pre style="background:#' . substr(md5(rand()), 0, 6) . '">';
    if ($mode === 1) {
        var_dump($val);
    } else {
        print_r($val);
    }
    echo "</pre>";
}

/**
 * Fonction de debug provoquant la fin du programme
 *
 * Affiche un print_r ou var_dump formaté sur une valeur ou expression
 * puis lance une instruction exit
 *
 * @since 0.1
 * @param  mixed   $val  valeur ou expression à deboguer
 * @param  integer   $mode si précisé, lance var_dump, sinon print_r
 * @return void    RAS
 */
function debugX($val, $mode = 0) {
    echo '<pre style="background:#' . substr(md5(rand()), 0, 6) . '">';
    if ($mode === 1) {
        var_dump($val);
    } else {
        print_r($val);
    }
    echo "</pre>";
    exit;
}


// ############################################################################

// les boucles

// A - while

$c = 0;
while ($c < 25) {
  echo $c . "</br>";
  $c++;
}

echo "<p>fin de la boucle <b>while</b> ...</p>";
echo "<hr>";

// B - do-while

$c2 = 1;

do {
  echo $c2 . "<br>";
  $c2 *= 2;

} while ($c2 <= 100);

echo "<p>fin de la boucle <b>do-while</b> ...</p>";
echo "<hr>";

// C - for

for ($i = 0; $i < 25; $i++) {
  echo $i . "</br>";
}

echo "<p>fin de la boucle <b>for</b> ...</p>";
echo "<hr>";


// D - foreach

foreach ($arr_multi_dimension as $key => $value) {
  echo "la clé: " . $key . " contient la valeur <b>" . $value . "</b><br>";
}

echo "<p>fin de la boucle <b>foreach</b> ...</p>";
echo "<hr>";

// ############################################################################
// conversion de type (cast)

$strnb1 = "1";
$strnb2 = "1.23";
$b1 =  (boolean) NULL;
$n1 =  (int) $strnb2;
$f1 =  (float) $strnb1;
$o1 =  (object) array(
    "type" => "cat",
    "name" => "kitty",
    "color" => "white"
);
// etc ...
echo "<p>#### FONCTIONS DEBUG/DEBUGX #####</p>";
debug($n1);
debug($b1, 1);
debug($f1);
debug($o1);
debug($o1, 1);
