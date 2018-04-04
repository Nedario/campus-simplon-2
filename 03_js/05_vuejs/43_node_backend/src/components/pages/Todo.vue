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
        <b class="todo">Avatar@Dashboard</b> => Vérifier également que l'image à uploader pèse moins de 2mo.
      </li>
      <li class="item">
        <b class="todo">@ProgressBar</b> => Créer un component bar de progrès.<br>
        Ce widget prend au minimum une <b>prop</b> en entrée: un number pouvant aller de 0 à 100 pour représenter
        le pourcentage de chargement.<br>
        Intégrer le component dans le Dashboard pour monitorer l'upload des avatars.
      </li>
      <li class="item">
        <b class="todo">Burger@NavMain</b> => Créer un component burger écoutant les clicks<br>
        Envoyer un event vers la nav principale via <b>EventBus</b>.<br>
        Effectuer un toggle sur NavMain et Burger (is-active/!is-active).<br>
      </li>
      <li class="item">
        <b>Users@myAPI</b> =><br>
        Se renseigner sur les <a target="_blank" href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html">verbes</a> HTTP disponibles pour la construction de votre API Users.<br>
        Approfondir aussi votre connaissance des <a target="_blank" href="https://www.w3.org/Protocols/HTTP/HTRESP.html">status</a> HTPP.<br>
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
        <span><b>about_me</b> => VARCHAR(280) DEFAULT-NULL</span><br>
        <span><b>is_admin</b> => BOOLEAN DEFAULT-FALSE</span><br>
      </li>
      <li class="item">
        <b>@API =></b><br>
        <b>Mettre en place une API Rest simple avec ExpressJS.</b><br>
        Modulariser l'API et ses blocks fonctionnels en modules (voir nodeschool - make it modular).
      </li>
      <li class="item">
        <b class="todo">checkForm()@form/Register (front)</b><br>
        Implanter une fonction de vérification du formulaire d'inscription.<br>
        Vérifier si tous les champs requis sont bien remplis.<br>
        Sinon, ajouter une classe warning sur les champs manquants.<br>
      </li>
      <li class="item">
        <b>sendForm()@form/Register (back)</b><br>
        Effectuer un appel AJAX vers le serveur node. pour envoyer les données du formulaire.<br>
        <b>Si</b> le mail est unique en base de données, insérer le nouvel utilisateur.<br>
        Puis retourner un message de confirmation et l'id inséré au client .<br>
        <b>Sinon</b>, retourner une erreur au client et l'afficher.
        <br>
      </li>
      <li class="item">
        <b class="todo">checkForm()@form/Login</b><br>
        Implanter une fonction de vérification du formulaire de connexion.<br>
        Vérifier si tous les champs requis sont bien remplis.<br>
        Sinon, ajouter une classe warning sur les champs manquants.<br>
      </li>
      <li class="item">
        <b  class="todo">checkForm()@form/Login</b><br>
        Effectuer un appel AJAX pour vérifier les données saisies.<br>
        <b>Si</b> la combinaison mail/password est correcte, retourner un message de confirmation
        et l'id du nouvel utilisateur au client.<br>
        Puis rediriger l'utilisateur vers le dashboard.<br>
        <b>Sinon</b> retourner un message d'erreur.
      </li>
      <li class="item">
        <b  class="todo">AboutMe()</b><br>
        Créer un component AboutMe() et l'intégrer au dashboard.<br>
        Ce component permet à l'utilisateur de créer et éditer une description le concernant.<br>
        Si l'utilisateur n'a pas encore fourni de secription, afficher un texte par défaut.<br>
        Proposer une icône permettant de saisir le texte.<br>
        Utiliser l'attribut HTML5 content-editable pour améliorer l'expérience utilisateur.<br>
        Un appel AJAX enregistre le texte en base.
      </li>
      <li class="item">
        <b  class="todo">@BDDChoses + @ChosesCreate + @ChosesList() + @ChoseTabler(deletable, editable)</b><br><br>
        Créer une table "choses", listant les choses de votre choix. Proposition de <b>modèle</b>:<br>
        <br>
        <span><b>id</b> => PK SMALLINT UNSIGNED AI</span><br>
        <span><b>label</b> => VARCHAR(128) NOT NULL</span><br>
        <span><b>img</b> => VARCHAR(512) NOT NULL</span><br>
        ETC ... Lister des produits, des guitares, des chaussures, des commentaires, ce que vous voulez.<br><br>
        Ajouter un component de <b>type form</b> au dashboard permettant d'ajouter des "choses" en BDD.<br>
        Ajouter un component de <b>type liste</b> au dashboard pour lister les "choses". Pour aller plus loin, tester de l'implanter avec CSS grid.
      </li>
      <li class="item">
        <b  class="todo">@LikeChose()</b><br>
        Implanter un CRUD permettant à l'utilisateur de liker des choses.<br>
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

.todo {
  color: purple;
  font-weight: bold;
}
</style>
