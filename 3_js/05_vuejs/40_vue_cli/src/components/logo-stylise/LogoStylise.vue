<template lang="html">
  <div id="logo_stylise" @click="changeStyle()"
  :class="{'is-active': isActive}">
    <h1 class="title">{{ title }}</h1>
    <img id="vue_logo" src="./../../assets/logo.png">
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "logo stylisé",
      isActive: false
    }
  },
  methods: {
    changeStyle() {
      this.isActive = !this.isActive;
    }
  },
  created() {
    console.log(this.title);
  }
}
</script>
<style lang="css">
.is-active {
  border: 2px solid orange;
}
</style>
