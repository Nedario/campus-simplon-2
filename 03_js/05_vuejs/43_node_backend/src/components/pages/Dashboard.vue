<template lang="html">
  <main id="main" class="dashboard">
    <h1 class="title">DASHBOARD</h1>
    <div id="intro">
      <avatar :avatar="user ? user.avatar : null"></avatar>
      <about-me :about="user ? user.about : null"></about-me>
    </div>
    <nav-admin></nav-admin>
    <router-view></router-view>
  </main>
</template>

<script>
// import { mapGetters } from "vuex";
import NavAdmin from "./../navigations/NavAdmin.vue";
import Avatar from "./../dashboard-elements/Avatar.vue";
import AboutMe from "./../dashboard-elements/AboutMe.vue";


export default {
  beforeCreate() {
    this.$store.dispatch("users/getAll");
  },
  created() {
    this.$ebus.$emit("reset-app-message");
  },
  components: {
    AboutMe,
    Avatar,
    NavAdmin
  },
  computed: {
    user() {
      return this.$store.getters["users/current"];
    },
    users() {
      return this.$store.getters["users/all"];
    },
  },
}
</script>

<style lang="scss" scoped>
#intro {
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-column-gap: 20px;
}
</style>
