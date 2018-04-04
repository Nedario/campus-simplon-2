<template lang="html">
  <div id="logo_stylise" @click="changeStyle()"
  :class="{'is-active': isActive}">
    <h1 class="title">{{ title }}</h1>
    <img id="vue_logo" src="./../../assets/logo.png">
    <p @click="changerBg()">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vel quae ad beatae ratione tempore nesciunt optio itaque dolore! Facilis enim, velit tenetur ea harum amet! Nulla nesciunt inventore repellendus.
    </p>
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
    changerBg() {

    },
    changeStyle() {
      this.isActive = !this.isActive;
    }
  }
}
</script>
<style lang="scss" scoped>
.is-active {
  border: 2px solid orange;
}
.title {
  display: inline-block;
  vertical-align: middle;
  font-size: 1rem;
}
#vue_logo {
  display: inline-block;
  vertical-align: middle;
  max-width: 50px;
}
</style>
