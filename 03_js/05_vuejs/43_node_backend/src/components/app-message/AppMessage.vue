<template lang="html">
  <div v-if="message" id="app_message" :class="messageStatus">
    {{ message }}
  </div>
</template>

<script>

export default {
  created() {
    this.$ebus.$on("display-app-message", msg => {
      // console.log("message reçu ! ");
      // console.log(msg);

      if (!msg) return this.resetMessage();

      if (this.checkMessage(msg)) {
        this.message = msg.txt;
        this.setMessageStyle(msg);
      } else {
        console.error("message mal formé: payload attendu => {txt: 'message', status: 'error|warning|success'}");
      }
    });

    this.$ebus.$on("reset-app-message", msg => {
      this.resetMessage();
    });
  },
  data() {
    return {
      message: null,
      statuses: ["error", "success", "warning"] // liste des status ok
    }
  },
  methods: {
    checkMessage(msg) {
      var errors = 0;
      errors += (typeof msg !== "object") ? 1 : 0;
      errors += (!msg.txt) ? 1 : 0;
      return errors === 0;
    },
    resetMessage() {
      this.message = null;
    },
    setMessageStyle(msg) {
      // on vérifie si le status est correct
      const found = this.statuses.find(s => {
        return s === msg.status; // retourne le status trouvé OU undefined
      });
      this.messageStatus = found ? found : "blank";
    }
  }
}
</script>

<style lang="scss" scoped>
.warning {
  color: #856404;
  background: #fff3cd;
}
.success {
  color: #155724;
  background: #c3e6cb;
}
.error {
  color: #721c24;
  background: #f8d7da;
}
.blank {
  color: inherit;
  background: transparent;
}

#app_message {
  align-items: center;
  border: 2px solid;
  border-radius: .3rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 720px;
  padding: 10px;
  position: relative;
  top: 70px;
}
</style>
