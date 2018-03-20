<template lang="html">
  <form id="login">
    <input type="mail" placeholder="votre email" class="input">
    <input type="password" placeholder="votre mot de passe" class="input">
    <input type="submit" class="btn" value="ok" @click="checkForm($event)">
  </form>
</template>
<script>
export default {
  mounted() {
    this.$emit("set-page-title", "Login");
  },
  methods: {
    checkForm(e) {
      console.log("clicked");
      e.preventDefault();
    }
  }
}
</script>
<style lang="css" scoped>
#login {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
</style>
