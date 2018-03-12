<template lang="html">
  <div v-if="message" id="app_message" :class="messageStatus">
    {{ message }}
  </div>
</template>

<script>
import { EventBus } from "./../../event-bus.js";

export default {
  created() {
    // EventBus.$on("message-from-app", function(msg) { // syntaxe ES5
    EventBus.$on("message-from-app", msg => {
      console.log("message reçu ! " + msg)
      this.setMessageStyle(msg);
      this.message = (typeof msg === "object" && msg !== null) ? msg.txt : msg;
    });
  },
  data() {
    return {
      message: null,
      messageStatus: undefined,
    }
  },
  methods: {
    setMessageStyle(msg) {
      const statuses = ["error", "success", "warning"]; // liste des status ok
      if (typeof msg !== "object") return; // si msg n('est pas object, RAS
      if (!msg || !msg.status) return; // si msg est falsy ou ne contient pas status RAS
      // easy ... on vérifie si le status est correct
      this.messageStatus = statuses.find(s => { // on parcoure statuses
        return s === msg.status; // si msg.status est trouvé, on affecte this.messageStatus
        // sinon undefined est retourné
      })
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

#app_message {
  align-items: center;
  border: 2px solid;
  border-radius: .3rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 320px;
  padding: 10px;
  position: relative;
  top: 70px;
}
</style>
