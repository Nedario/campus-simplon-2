<template lang="html">
  <div id="avatar" @click="uploadAvatar()">
    <input type="file" id="input_file">
    <font-awesome-icon  v-if="!user || !user.avatar" class="icon" :icon="'user-circle'" size="4x"/>
    <img v-else :src="avatar.src" :alt="`avatar de ${user.mail}`"
    class="img">
  </div>
</template>
<script>
// import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { EventBus } from "./../../event-bus.js";

export default {
  created() {
    console.log("this.user@Avatar")
    console.log(this.user)
  },
  components: {
    FontAwesomeIcon
  },
  computed: {
    user() {
      return this.$store.getters["users/user"];
    }
  },
  data() {
    return {
      input: null,
    }
  },
  mounted() {
    this.input = this.$el.querySelector("#input_file");
  },
  methods: {
    checkFileSize(size) {
      return (size / 1024) / 1024 <= 2;
    },
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
          let checked = this.checkMimeType(file.type);
          if (!checked) reject("je ne veux pas de ton fichier"); // si ce n'est pas une image...
          checked = this.checkFileSize(file.size);
          if (!checked) reject("fichier supérieur à 2mo ..."); //si le fichier est trop lourd
          else resolve(file); // sinon on la retourne via le callback de succès
        };
      });
    },
    sendToServer(img) {
      const fd = new FormData();
      fd.append('id', this.user.id);
      fd.append('avatar', img);
      this.$store.dispatch("users/patchAvatar", fd);

      // return;
      // axios({
      //   method: "patch",
      //   url: "http://localhost:3000/avatar",
      //   data: fd,
      //   onUploadProgress: function (evt) {
      //     // Do whatever you want with the native progress event
      //     let percentLoaded = Math.floor((evt.loaded * 100) / evt.total);
      //     console.log(percentLoaded + "%");
      //   },
      // });
    },
    uploadAvatar() {
      // getImageFile retourne une Promise (introduire de l'asynchronicité)
      // ici, la promesse est d'obtenir une image valide
      this.getImageFile().then(img => {
        // si la promesse est tenue ...
        this.sendToServer(img);
        EventBus.$emit("message-from-app", null);

      }).catch(err => {
        // sinon on utilise EventBUs pour communiquer avec le composant AppMessage !
        EventBus.$emit("message-from-app", {
          txt: err,
          status: "warning"
        }); //envoi msg erreur
      });
    }
  }
}
</script>
<style lang="scss" scoped>

@import  "./../../styles/global.scss";

#avatar {
  align-items: center;
  border: 2px solid;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 75px;
  justify-content: center;
  width: 75px;
}
#avatar:hover {
  border-color: $color_is_hover;
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
