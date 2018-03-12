<template lang="html">
  <div class="block" :title="content"
  :style="`color: ${_color};background: ${_bg}`">
    {{ text }}
    <button @click="sendDataToParent()" class="btn">
      envoyer données au composant parent
    </button>
  </div>
</template>
<!-- <custom-block content="foo" color="dodgerblue" bg="black"></custom-block> -->
<script>
export default {
  created() {
    this.text = this._props.content || this.text;
    this._bg = this._props.bg || this._bg;
    this._color = this._props.color || this._color;
  },
  data() {
    return {
      text: "defaut",
      _bg: "white",
      _color: "#1A1A1A",
    }
  },
  methods: {
    sendDataToParent() {
      this.$emit("custom-block-send-data", this.text);
    }
  },
  props: ["content", "color", "bg"]
}
</script>

<style lang="css">
.block {
  padding: 20px;
  background: white;
  box-shadow: 0 0 2px 0 #1A1A1A;
  color: #1A1A1A;
  height: 128px;
  width: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 2rem;
}
</style>
