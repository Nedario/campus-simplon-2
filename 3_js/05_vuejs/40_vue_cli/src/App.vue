<template>
  <div id="app">
    <logo-stylise></logo-stylise>
    <h1>{{ msg }}</h1>
    <p>
    <b>Etape 1 =></b> Installer vue-cli, l'outil en ligne de commande @vuejs<br><br>
    <b>npm install -g @vue/cli</b><br><br>
    <b>Etape 2 =></b> créer un dossier. Depuis le dossier lancer le script shell d'installation :<br>
    <code>
      <b>vue init webpack-simple</b><br>
    </code>
    (D'autres templates d'initialisation sont dispnible, voir la doc.)<br><br>
    <b>Etape 3 =></b> Une fois le template téléchargé, installer les dépendance avec : <br>
    <code>
      <b>npm install</b><br><br>
    </code>
    <b>Etape 4 =></b> Pour démarrer l'apllication, lancer le script
    <code>
      <b>npm run dev</b><br>
    </code>
    </p>
  </div>
</template>

<script>
import LogoStylise from "./components/logo-stylise/LogoStylise.vue";
// console.log(LogoStylise);
export default {
  name: 'app',
  components: {
    LogoStylise
    /* syntaxe compacte es6 pour => */
    // LogoStylise: LogoStylise
    /* on peut renommer la balise hebergeant component => */
    // maBalise: LogoStylise //
  },
  data () {
    return {
      msg: 'get CLI@VueJS'
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html{
  font-size: 16px;
}

body {
  font-size: 1rem;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
