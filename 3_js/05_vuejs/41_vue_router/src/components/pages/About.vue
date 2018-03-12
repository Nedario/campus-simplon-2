<template lang="html">
  <div id="about">
    <h1 class="title"> {{ title }}</h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>
        Voluptatum praesentium fuga aliquam atque soluta laudantium facere voluptate amet<br>
        nisi excepturi est doloribus harum possimus fugit consectetur, neque eos laboriosam ullam.
    </p>
    <my-slider></my-slider>
    <div class="blocks-wrap f-row">
      <custom-block @custom-block-send-data="getChildContent($event)"></custom-block>
      <custom-block content="foo" color="dodgerblue" bg="black"></custom-block>
      <custom-block content="bar" bg="#D11D05"></custom-block>
      <custom-block content="baz" color="#707020"></custom-block>
    </div>
  </div>
</template>

<script>

import MySlider from "./../my-slider/MySlider.vue";
import CustomBlock from "./../custom-block/CustomBlock.vue";

export default {
  components: {
    CustomBlock,
    MySlider,
  },
  data() {
    return {
      title: "À propos"
    }
  },
  methods: {
    getContent() {
      return 50 * 2;
    },
    getChildContent(val) {
      console.log(val);
    }
  }
}
</script>

<style lang="css" scoped>

.blocks-wrap {
  margin: 40px auto;
  justify-content: center;
}
</style>
