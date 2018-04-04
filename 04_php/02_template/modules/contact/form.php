<?php

//Load composer's autoloader
require 'utility.php';
require 'composer/vendor/autoload.php';

$mail = new PHPMailer(true);

debug($mail);
