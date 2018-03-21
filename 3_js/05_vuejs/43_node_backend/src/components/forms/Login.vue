<template lang="html">
  <form id="login">
    <input type="mail" name="mail" placeholder="votre email" class="input"
      required value="test-user@test.io">
    <input type="password" name="password" placeholder="votre mot de passe" class="input"
      required value="test">
    <input type="submit" id="submit" class="btn" value="ok" @click="prepareLogin($event)">
  </form>
</template>
<script>
import axios from "axios";
import { EventBus } from "./../../event-bus";

export default {
  mounted() {
    this.$emit("set-page-title", "Login"); // envoit le titre du component au component parent
    this.btn = this.$el.querySelector("#submit");
    this.inputs = this.$el.querySelectorAll("[required]");;
  },
  data() {
    return {
      btn: null,
      inputs: null
    };
  },
  methods: {
    checkCredentials(loginInfos) {
      console.log("checkCredentials@Login");
      console.log(loginInfos);
      axios({
        method: "post",
        url: "http://localhost:3000/login",
        data: loginInfos
      }).then(res => {
        console.log("axios response");
        console.log(res);
        console.log(res.data.id);

        EventBus.$emit("message-from-app", {
          txt: res.data.message,
          status: "success"
        });

        window.setTimeout(() => {
          this.$router.push({name: "dashboard"});
        }, 2000);

      }).catch(err => {
        console.log("axios error");
        console.log(err);

        EventBus.$emit("message-from-app", {
          txt: err,
          status: "error"
        });
      });
    },
    checkForm() {
      const data = {};
      var error = 0;

      this.inputs.forEach(input => {
        let value = input.value;

        if (!value) {
          error += 1;
          input.classList.add("is-error");
        } else {
          error = (error - 1 >= 0) ? error - 1 : 0;
          input.classList.remove("is-error");
          data[input.name] = value;
        }
      });

      if (!error) this.btn.classList.remove("is-error");
      else this.btn.classList.add("is-error");

      return {
        error: error === 0,
        data: data
      }
    },
    prepareLogin(e) {
      e.preventDefault();
      const check = this.checkForm();

      if (check.error) {
        EventBus.$emit("message-from-app", null);
        this.checkCredentials(check.data);
      } else {
        EventBus.$emit("message-from-app", {
          txt: "gniiii... mauvais combo poto !",
          status: "error"
        });
      }
    },
  }
}
</script>
<style lang="scss" scoped>

@import "./../../styles/global.scss";

#login {
  display: flex;
  flex-direction: column;
  max-width: 300px;
}
.input.is-error {
  border-color: $error_bg;
}
#submit.is-error {
  background: $error_bg;
  color: $error_color;
}
</style>
