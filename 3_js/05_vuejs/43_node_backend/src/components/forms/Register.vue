<template lang="html">
  <div>
    <form id="register">
      <input id="mail" type="mail" placeholder="votre email" class="input" value="test-user@test.io">
      <input id="password" type="password" placeholder="votre mot de passse" class="input" value="test">
      <input id="password_confirm" type="password" placeholder="confirmez votre mot de passe" class="input" value="test">
      <input type="submit" class="btn" value="ok" @click="createUser($event)">
      <input type="submit" class="btn" value="ok" @click="createUser($event)">
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    this.$emit("set-page-title", "Register");
  },
  methods: {
    checkForm(e) {
      return {
        valid: true,
        data: {
          mail: this.$el.querySelector("#mail").value,
          password: this.$el.querySelector("#password").value,
        }
      }
    },
    createUser(e) {
      console.log("clicked");
      e.preventDefault();
      const check = this.checkForm();
      // if (check.valid) {
      //   console.log(axios)
        axios({
          method: "post",
          url: "http://localhost:3000/user",
          data: {
            mail: check.data.mail,
            password: check.data.password,
            mail: check.data.mail,
            password: check.data.password,
          }
        });
      // }
    }
  }
}
</script>

<style lang="css" scoped>
#register {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}

</style>
