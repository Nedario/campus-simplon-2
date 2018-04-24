<template lang="html">
    <span title="ajouter un produit">
      <font-awesome-icon @click="addProduct()" v-if="true" id="icon" :icon="'plus'" size="1x"/>
    </span>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
export default {
  components: {
    FontAwesomeIcon
  },
  methods: {
    addProduct() {
      this.$router.push({name: "add-product"});
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./../../styles/global.scss";

#icon {
  cursor: pointer;
}
#icon:hover {
  color: $color_is_hover;
}
</style>
