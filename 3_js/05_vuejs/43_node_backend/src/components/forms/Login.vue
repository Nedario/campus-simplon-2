<template lang="html">
  <form id="login" autocomplete="on">
    <input type="mail" name="mail" placeholder="votre email" class="input"
      autocomplete="email" required value="test-user@test.io">
    <input type="password" name="password" placeholder="votre mot de passe"
      autocomplete="current-password" class="input" required value="test">
    <input type="submit" id="submit" class="btn" value="ok" @click="login($event)">
  </form>
</template>
<script>
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
        error: error !== 0,
        data: data
      }
    },
    login(e) {
      e.preventDefault();
      const check = this.checkForm();
      console.warn(this.$store)
      if (!check.error) {
        EventBus.$emit("message-from-app", null);
        this.$store.dispatch("users/login", check.data)
        .then(res => {
          EventBus.$emit("message-from-app", {
            txt: res.data.message,
            status: "success"
          });
          window.setTimeout(() => {
            this.$router.push({path: `/dashboard/${this.$store.getters["users/user"].id}`});
          }, 2000);
        })
        .catch(err => {
          EventBus.$emit("message-from-app", {
            txt: err,
            status: "error"
          });
        });
      } else {
        EventBus.$emit("message-from-app", {
          txt: "Merci de vérifier vos informations !",
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
