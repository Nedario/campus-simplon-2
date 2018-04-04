<?php
// On utilise les namespaces (espaces de noms) de PHPMailer et ses Exceptions
// les namespaces en 120 secondes :
// https://knpuniversity.com/screencast/php-namespaces-in-120-seconds/namespaces
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
// chargement de notre librairie d'utilitaires
require 'utility.php';
// composer se charge de l'implantation du code de PHPMailer
require 'composer/vendor/autoload.php';
// l'objet est maintenant disponible pour instanciation
$mail = new PHPMailer(true);
debug($mail);
// à nous de coder le programme selon nos besoins ...
debug($_POST);
