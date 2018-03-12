<template lang="html">
  <div id="avatar" @click="uploadAvatar()">
    <input type="file" id="input_file">
    <i v-if="!hasAvatar" id="icon" class="fas fa-user-circle"></i>
    <img v-else :src="avatar.src" :alt="`avatar de ${user.mail}`"
    class="img">
  </div>
</template>
<script>
import axios from 'axios';
import { EventBus } from "./../../event-bus.js";
console.log(EventBus);

export default {
  data() {
    return {
      hasAvatar: false,
      user: null,
      input: null,
    }
  },
  mounted() {
    this.input = this.$el.querySelector("#input_file");
  },
  methods: {
    checkMimeType(type) {
      const isAuthorized = [
        "image/gif",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
      ].find(mime => { // chaque case du tableau est parcourue
        return mime === type;
        // si le type du fichier est trouvé, retourne la case
        // sinon si aucune valeur ne correpond, undefined est retourné
      });
      return Boolean(isAuthorized); // conversion en boolean
    },
    getImageFile() {
      return new Promise((resolve, reject) => { // cette fonction retourne une promesse
        // une promesse peut être tenue (resolved) ou non (rejected) ...
        this.input.click(); // opère un click sur l'input file (hidden par CSS)

        this.input.onchange = (e) => { // à chaque event change sur l'input
          const file = e.target.files["0"]; // on récupère le fichier sélectionné ...
          const checked = this.checkMimeType(file.type); // si c'est une image...
          if (checked) resolve(file); // on la retourne via le callback de succès
          else reject("je ne veux pas de ton fichier"); // sinon callback d'erreur -> msg
        };
      });
    },
    sendToServer(img) {
      axios({
        method: "patch",
        url: "http://localhost:3000/user",
        data: {
          avatar: img
        }
      });
    },
    uploadAvatar() {
      // getImageFile retourne une Promise (introduire de l'asynchronicité)
      // ici, la promesse est d'obtenir une image valide
      this.getImageFile().then(img => {
        // si la promesse est tenue ...
        console.log("file type ok, let's continue");
        console.log(img);
        EventBus.$emit("message-from-app", null);

      }).catch(err => {
        // sinon ... On utilise notre bus d'Event pour communiquer
        // avec le composant AppMessage !
        EventBus.$emit("message-from-app", {
          txt: err,
          status: "warning"
        }); //envoi msg erreur
        // EventBus.$emit("message-from-app", err); //envoi msg erreur
        console.log(err);
      });
    }
  }
}
</script>
<style lang="css" scoped>
#avatar {
  border: 2px solid;
  cursor: pointer;
  height: 70px;
  width: 70px;
}
#wrap {
  position: relative;
}
#input_file {
  display: none;
}
#icon {
  font-size: 4rem;
}
</style>
