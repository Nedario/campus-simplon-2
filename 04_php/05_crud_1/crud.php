<?php

// ag@todo : check autoload psr4 pour autoload dependances + namespaces

// inclusion du fichier de fonctions utilitaires
include_once "libs/utility.php";
// inclusions des fonctions crud pour le module bills (factures)
include_once "modules/bills/bills-model.php";
// inclusions des fonctions crud pour le module users (utilisateurs)
include_once "modules/users/users-model.php";
// exécution d'une fonction (@utility.php) pour affichage explicite des erreurs PHP
enablePHPMaxErros();

// mettre à jour $base_url ci-dessous avec la route de votre dossier crud1
$base_url = "http://localhost/~guillaumeamg/campus-simplon-2/4_php/05_crud_1/";

// au chargement de la page
// on récupère tous les utilisateurs stockés en bdd
$users = getUsers();
// debug($users, 1);
// on récupère toutes les factures stockées en bdd
$bills = getBills();
// debug($bills, 1);
/*
  ##### Logique de l'application (SYNCHRONE) #####
  on utilise les verbes HTTP get ou post pour
  que le client (le navigateur) puisse envoyer des requêtes au serveur
*/
if (isset($_GET["id"])) {
  $user = getUser($_GET["id"]);
}

if (isset($_POST["update_user"])) {
  updateUser();
}

if (isset($_POST["delete_users"]) &&
    isset($_POST["delete_user_ids"]) &&
    count($_POST["delete_user_ids"])) {
        deleteUser();
}

if (isset($_POST["create_user"])) {
    createUser();
}

if (isset($_POST["action"]) && $_POST["action"] === "get_bills") {
    getBills();
}
