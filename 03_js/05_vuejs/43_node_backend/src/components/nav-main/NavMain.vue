<template lang="html">
  <nav id="nav_main">
    <ul id="list">
      <router-link v-for="(page, n) in pages"
      :to="{name: page}" :key="n" tag="li"
      class="item" active-class="is-active" exact>
        <span>{{ page }}</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>

export default {
  created() {
    this.$ebus.$on("toggle-nav-main", status => {
      console.log("nav-main status =>", status);
    });
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["users/isLoggedIn"];
    },
  },
  data() {
    return {
      pages: [
        "home",
        "login",
        "dashboard",
        "todo"
      ]
    }
  }
}
</script>

<style lang="css" scoped>
#nav_main {

}
#list {
  display: flex;
  list-style: none;
  padding: 0;
}
#list .item {
  font-size: 1rem;
  margin-right: 15px;
  cursor: pointer;
}
#list .item:hover,
#list .is-active {
  color: #42b983;
}
</style>
