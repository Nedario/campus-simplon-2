<template lang="html">
  <div id="home">
    <h1 class="title"> {{ title }}</h1>
    <div id="intro">
      <img id="vue_logo" src="./../../assets/logo.png">
      <p>
        <b>Etape 1 =></b> Installer la dépendance vue-router, plugin officiel de routing<br><br>
        <b>npm install --save vue-router</b><br><br>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Accueil"
    }
  },
}
</script>

<style lang="css" scoped>

</style>
