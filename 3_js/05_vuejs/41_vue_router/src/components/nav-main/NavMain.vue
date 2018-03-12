<template lang="html">
  <nav id="nav_main">
    <ul class="list">
      <router-link v-for="(page, nth) in pages"
      :key="nth" :to="{ name: page }"  tag="li"
        class="item" :class="page === 'user' ? setActiveParent() : null" active-class="is-active" exact>
        <span>{{ page }}</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      pages: [
        "home",
        "about",
        "user",
      ]
    }
  },
  methods: {
    setActiveParent() {
      console.log(this.$route)
      return this.$route.path.match("user") ? "is-active" : null;
    }
  }
}
</script>

<style lang="scss" scoped>

$ma_color: #42b983;

#nav_main .item {
  cursor: pointer;
}

#nav_main .item:hover,
#nav_main .item.is-active {
  color: $ma_color;
}

</style>
