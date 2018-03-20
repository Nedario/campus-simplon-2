<template lang="html">
  <main id="main">
    <ul id="list" class="list">
      <li class="item">
        <b>Logo@HeaderMain</b> => Au click sur le logo, revenir à la page d'accueil.
      </li>
      <li class="item">
        <b>Avatar@Dashboard</b> => Au click sur Avatar, ouvrir une boite de dialogue
        de type <b>file</b>.<br> Vérifier le type mime de la donnée à uploader :
        le fichier doit être une image.
      </li>
      <li class="item">
        <b>Avatar@Dashboard</b> => Vérifier également que l'image à uploader pèse moins de 2mo.
      </li>
      <li class="item">
        <b>Burger@NavMain</b> => Créer un component burger écoutant les clicks<br>
        Envoyer un event vers la nav principale via <b>EventBus</b>.<br>
        Effectuer un toggle sur NavMain et Burger (is-active/!is-active).<br>
      </li>
      <li class="item">
        <b>checkForm()@form/Register</b><br>
        Implanter une fonction de vérification du formulaire d'inscription.<br>
        Vérifier si tous les champs requis sont bien remplis.<br>
        Sinon, ajouter une classe warning sur les champs manquants.<br>
      </li>
      <li class="item">
        <b>Users@myAPI</b> =><br>
        Se renseigner sur les verbes HTTP disponibles pour la construction de votre API Users.<br>
        Créer une base de données nommée node-backend dans <b>phpMyAdmin</b>.<br>
        Créer un fichier src/api/basic.js dans votre application Vue<br>
        Créer un fichier src/api/models/users.js dans votre application Vue<br>
      </li>
      <li class="item">
        Créer une table users. Proposition de <b>modèle</b>:<br>
        <br>
        <span><b>id</b> => PK SMALLINT UNSIGNED AI</span><br>
        <span><b>mail</b> => VARCHAR(254) NOT NULL</span><br>
        <span><b>password</b> => VARCHAR(128) NOT NULL</span><br>
        <span><b>avatar</b> => VARCHAR(512) DEFAULT-NULL</span><br>
      </li>
      <li class="item">
        <b>sendForm()@form/Register</b><br>
        Effectuer un appel AJAX vers le serveur node. pour envoyer les données du formulaire au format JSON.<br>
        Si le mail est unique en base de données, insérer le nouvel utilisateur, puis
        retourner un message de confirmation au client.<br>
        Sinon, retourner une erreur au client et l'afficher.
        <br>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

#list {
  list-style: circle;
  padding-left: 40px;
}

.item {
  margin-bottom: 15px;
}
</style>
