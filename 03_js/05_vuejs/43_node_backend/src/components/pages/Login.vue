<template lang="html">
  <main id="main" class="login-register">
    <h1 class="title">{{ title }}</h1>
    <div id="wrap">
      <component :is="activeComponent" @set-page-title="setPageTitle($event)"
      class="form"></component>
      <button id="switch_component" @click="setActiveComponent()" class="btn">
        <span>{{ msg }}</span>
      </button>
    </div>
  </main>
</template>
<script>
import FormLogin from "./../forms/Login.vue";
import FormRegister from "./../forms/Register.vue";

export default {
  components: {
    FormLogin,
    FormRegister
  },
  created() {
    this.setActiveMessage();
  },
  data() {
    return {
      title: null,
      activeComponent: "FormLogin",
    }
  },
  methods: {
    setActiveComponent() {
      this.activeComponent = (this.activeComponent === "FormLogin")
       ? "FormRegister" : "FormLogin";
      this.setActiveMessage();
    },
    setActiveMessage() {
      this.msg = (this.activeComponent === "FormLogin")  ?
      "Pas encore de compte ?" : "Déjà Inscris ?";
    },
    setPageTitle(title) {
      this.title = title;
    }
  }
}
</script>

<style lang="css" scoped>
#wrap {
  display: flex;
}
.form {
  border-right: 2px solid;
  margin-right: 20px;
  max-width: 320px;
  padding-right: 20px;
}
.btn {
  width: 140px;
}
</style>
