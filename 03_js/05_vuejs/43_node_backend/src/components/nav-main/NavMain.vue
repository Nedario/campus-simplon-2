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

import { EventBus } from "./../../event-bus";

export default {
  created() {
    EventBus.$on("toggle-nav-main", status => {
      console.log(status);
    });
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
