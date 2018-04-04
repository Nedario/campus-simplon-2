<template>
  <div id="app">
    <a id="back_home" @click="goHome()">go back to home</a>
    <nav-main></nav-main>
    <router-view></router-view>
  </div>
</template>

<script>

import NavMain from "./components/nav-main/NavMain.vue";

export default {
  components: {
    NavMain
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="scss">

@import "./styles/global.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color_text;
  margin-top: 60px;
}

#back_home {
  cursor: pointer;
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

.f-row {
  display: flex;
}

.btn {
  border: 1px solid;
  border-radius: .3rem;
  cursor: pointer;
  outline: none;
  padding: 5px;
}
.btn:hover {
  background: #1A1A1A;
  color: white;
}
</style>
