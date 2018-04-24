<template>
  <div id="app">
    <header id="header_main">
      <img src="./../static/img/logo.png" id="logo" @click="goHome()">
      <nav-main></nav-main>
      <burger></burger>
      <component :is="loginOrLogout"></component>
    </header>
    <app-message></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessage from "./components/app-message/AppMessage.vue";
import NavMain from "./components/navigations/NavMain.vue";
import LoginIcon from "./components/login/LoginIcon.vue";
import LogoutIcon from "./components/logout/LogoutIcon.vue";
import Burger from "./components/burger/Burger.vue";

export default {
  name: 'app',
  components: {
    AppMessage,
    Burger,
    NavMain,
    LoginIcon,
    LogoutIcon,
  },
  beforeCreate() {
    console.log("before create the whole app")
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["users/isLoggedIn"];
    },
    loginOrLogout() {
      return this.isLoggedIn ? "LogoutIcon" : "LoginIcon";
    }
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
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
  display: grid;
  grid-template-columns: 48px 1fr 32px 32px;
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
  max-width: 32px;
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
.select {
  border: 2px solid rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  margin-bottom: 10px;
  outline: none;
  padding: 2px 0 2px 32px;
  min-width: 220px;
}
</style>
