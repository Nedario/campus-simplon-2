<template>
  <div id="app">
    <logo-stylise></logo-stylise>
    <!-- <text-box bg="yellow"></text-box>
    <text-box message="salut"></text-box>
    <text-box message="foo" bg="red" color="blue"></text-box>
    <text-box message="bar" bg="darkgreen" color="silver"></text-box>
    <text-box message="baz" bg="orange" color="purple"></text-box> -->
    <h1>{{ msg }}</h1>
    <p>
    <b>Etape 1 =></b> Installer vue-cli, l'outil en ligne de commande @vuejs<br><br>
    <b>[unix => sudo] npm install -g @vue/cli</b><br><br>
    <b>Etape 2 =></b> créer un dossier. Depuis le dossier lancer le script shell d'installation :<br>
    <code>
      <b>vue init webpack-simple [windows => nom-du-proj]</b><br>
    </code>
    (D'autres templates d'initialisation sont disponibles, <a href="https://github.com/vuejs/vue-cli/blob/dev/docs/README.md" target="_blank">voir la doc.</a>)<br><br>

    <b>Etape 3 =></b> Une fois le template téléchargé, installer les dépendances avec : <br>
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
import TextBox from "./components/text-box/TextBox.vue";
// console.log(LogoStylise);
export default {
  name: 'app',
  components: {
    LogoStylise,
    TextBox,
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
  margin-top: 20px;
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
