<template lang="html">
    <font-awesome-icon @click="logout()" title="se déconnecter"
      v-if="true" id="logout" :icon="'sign-out-alt'" size="1x" />
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
export default {
  components: {
    FontAwesomeIcon
  },
  computed: {
    user() {
      return this.$store.getters["users/current"];
    },
  },
  methods: {
    logout() {
      console.log("bye")
      this.$store.dispatch("users/logout")
      .then(res => {
        console.log("logout success");
        this.$router.push("/login");
      })
      .catch(err => {
        console.log("logout error");
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./../../styles/global.scss";

#logout {
  cursor: pointer;
}
#logout:hover {
  color: $color_is_hover;
}
</style>
