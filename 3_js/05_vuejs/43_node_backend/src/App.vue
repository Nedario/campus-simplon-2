<template>
  <div id="app">
    <header id="header_main">
      <img src="./assets/logo.png" id="logo" @click="goHome()">
      <nav-main></nav-main>
      <burger></burger>
    </header>
    <app-message></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessage from "./components/app-message/AppMessage.vue";
import NavMain from "./components/nav-main/NavMain.vue";

import Burger from "./components/burger/Burger.vue";

export default {
  name: 'app',
  components: {
    AppMessage,
    Burger,
    NavMain,
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
html {
  font-size: 16px;
}
body {
  font-size: 1rem;
}
h1, h2, h3, h4, h5, h6 {
  font-size: 1.4rem;
  font-weight: bold;
  margin: 15px 0;
}
a {
  color: #42b983;
}
code {
  font-size: 1.2rem;
}
#app {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  position: relative;
}
#header_main {
  align-items: center;
  background: white;
  display: flex;
  height: 60px;
  position: fixed;
  width: 100vw;
  z-index: 10;
  border-bottom: 2px solid;
  padding: 5px 20px;
}
#main {
  position: relative;
  top: 60px;
  padding: 20px;
}
#logo {
  height: 100%;
  margin-right: 20px;
  cursor: pointer;
}
.btn {
  align-items: center;
  border: 2px solid rgb(0, 0, 0);
  border-radius: .3rem;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  max-width: 140px;
  outline: none;
  padding: 5px;
}
.input {
  border: 2px solid rgb(0, 0, 0);
  flex-direction: column;
  height: 32px;
  margin-bottom: 10px;
  outline: none;
  padding: 2px 0 2px 32px;
  min-width: 220px;
}
</style>
