<h1 class="title"><?php echo $page->title ?></h1>
<h2 class="title">I - Données synchrones : </h2>
<p>
    Ci-dessous, on récupère les infos depuis PHP.<br> Cette requête http est effectuée de façon <b>synchrone</b> : à chaque rechargement, les données sont téléchargées depuis le serveur et affichées lorsque le navigateur "render" la page.
</p>
<h3 class="title">Personnages</h3>
<ul class="list persos">
<?php foreach(getPersos() as $key => $perso) {
    echo "<li class=\"perso\">
            <span class=\"name\">$perso->name</span>
            <span class=\"genre\">$perso->genre</span>
        </li>";
} ?>
</ul>

<h2 class="title">II - Données asynchrones</h2>
<p>
    Ci-dessous, on récupère les infos depuis PHP ou l'api publique paris open data.<br> Ces requêtes http sont effectuées de façon <b>asynchrone</b> : à chaque exécution d'une fonction JS, le serveur requêté retourne des jeux de données sous forme de chaînes JSON.
</p>
<h3 class="title">TP ArrayFilter</h3>
<p>
    Modifier les deux modules ci-dessous pour filter respectivement les listes de cafés et de personnages lors de l'event keydown sur les champs textes. Utiliser la response  xhr pour appliquer le filtrer directement sur l'objet.<b>Indice js: Array.filter !</b>
</p>
<!-- Modules de travail en asynchrone => -->

<?php include("modules/personnages/persos.html"); ?>

<hr>

<?php include("modules/cafes/cafes.html"); ?>
