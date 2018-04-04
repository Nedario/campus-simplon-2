<h1 class="title"><?php echo $page->title ?></h1>
<h2 class="title">TP Contact Form</h2>
<p class="intro">
    Coder un formulaire de contact.<br><br>
    Maquettez/intégrez le formulaire.<br>Choisissez les champs comme si c'était votre <b>portfolio</b>.<br><br>
    Insérez deux bouttons en fin de formulaire :<br>
    1 pour appel synchrone,
    1 pour appel ajax.<br>
    Tester les deux méthodes !<br><br>
    Les données du formulaire sont traitées par  <b>./libs/form.php</b>.<br>
    Dans un premier temps, afficher simplement les données du POST.
    <br><br>Puis se lancer dans l'intégration de la librairie <a target="_blank" href="https://github.com/PHPMailer/PHPMailer">PHPMailer</a>.<br>
</p>
<h2 class="title">Help</h2>
<p>
  Prérequis: <br>
  Installer composer : <a target="_blank" href="https://www.hostinger.fr/tutoriels/installer-utiliser-composer/">voir ce tuto</a>
   et la <a target="_blank" href="https://getcomposer.org/download/">doc officielle</a>
  <br>
  Installer PHPMailer : <a target="_blank" href="https://packagist.org/packages/phpmailer/phpmailer">c'est par ici ...</a>

</p>
<?php include("modules/contact/contact.php"); ?>
