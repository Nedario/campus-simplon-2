<template lang="html">
    <font-awesome-icon @click="login()" v-if="true" id="login" :icon="'sign-in-alt'" size="1x" title="se connecter"/>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
export default {
  components: {
    FontAwesomeIcon
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./../../styles/global.scss";

#login {
  cursor: pointer;
}
#login:hover {
  color: $color_is_hover;
}
</style>
