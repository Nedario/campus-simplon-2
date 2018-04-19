<template lang="html">
    <form id="register" autocomplete="on">
      <input id="mail" type="mail" placeholder="votre email" class="input"
        autocomplete="mail" value="test-user@test.io">
      <input id="password" type="text" placeholder="votre mot de passe"
        class="input" value="test">
      <input id="password_confirm" type="text" placeholder="confirmez votre mot de passe"
        class="input" value="test">
      <input type="submit" class="btn" value="ok" @click="register($event)">
    </form>
</template>

<script>
import axios from 'axios';;

export default {
  mounted() {
    this.$emit("set-page-title", "Register");
  },
  methods: {
    checkForm(e) {
      return {
        error: false,
        data: {
          mail: this.$el.querySelector("#mail").value,
          password: this.$el.querySelector("#password").value,
        }
      }
    },
    register(e) {
      console.log("clicked@createUser");
      e.preventDefault();
      const check = this.checkForm();
      if (!check.error) {
        this.$store.dispatch('users/register', check.data)
        .then(res => {
          this.$ebus.$emit("display-app-message", {
            txt: res.data.message,
            status: "success"
          });
          window.setTimeout(() => {
            this.$router.push({path: `/dashboard/${this.$store.getters["users/user"].id}`});
          }, 2000);
        })
        .catch(err => {
          this.$ebus.$emit("display-app-message", {
            txt: err.trim(),
            status: "error"
          });
        });
      } else {
        this.$ebus.$emit("display-app-message", {
          txt: "Merci de vérifier vos informations !",
          status: "error"
        });
      }
    }
  }
}
</script>

<style lang="css" scoped>

@import "./../../styles/global.scss";

#register {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}

</style>
