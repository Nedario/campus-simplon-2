<template lang="html">
    <form id="register">
      <input id="mail" type="mail" placeholder="votre email" class="input" value="test-user@test.io">
      <input id="password" type="password" placeholder="votre mot de passse" class="input" value="test">
      <input id="password_confirm" type="password" placeholder="confirmez votre mot de passe" class="input" value="test">
      <input type="submit" class="btn" value="ok" @click="createUser($event)">
    </form>
</template>

<script>
import axios from 'axios';
import { EventBus } from "./../../event-bus";

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
    createUser(e) {
      console.log("clicked@createUser");
      e.preventDefault();
      const check = this.checkForm();
      if (!check.error) {
        axios({
          method: "post",
          url: "http://localhost:3000/user",
          data: {
            mail: check.data.mail,
            password: check.data.password,
          }
        }).then(response => {
          console.log("response axios");
          console.log(response);
          if (!response.data.error) {
            EventBus.$emit("message-from-app", {
              txt: response.data.message,
              status: "success"
            });
            window.setTimeout(() => {
              this.$router.push({name: "dashboard"});
            }, 3000);
          } else {
            EventBus.$emit("message-from-app", {
              txt: response.data.message,
              status: "warning"
            });
          }
        })
        .catch(error => {
          console.log("error axios");
          console.log(error);
        });
      }
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
