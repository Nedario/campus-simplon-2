<template lang="html">
  <div id="text_box" :style="`color: ${_color}; background: ${_bg}`">
    {{ msg }}
  </div>
</template>
<!-- <text-box message="hello world" color="red" bg="blue"></text-box>  -->
<script>
export default {
  created() {
    // si le message est en prop, on le prend, sinon on prend msg par défaut
    this.msg = this.message || this.msg;
    // pareil pour le background
    this._bg = this.bg || this._bg;
    // et pareil pour la couleur
    this._color = this.color || this._color;
  },
  data() {
    return {
      _bg: "white",
      _color: "black",
      msg: "message par défaut"
    }
  },
  props: ["message", "bg", "color"]
}
</script>
<style lang="scss" scoped>
#text_box {
  border: 2px solid black;
  border-radius: .4rem;
  min-height: 30px;
}
</style>
