<template lang="html">
  <div id="about_me">
    <p id="text" :class="{'is-active': isEditing}" :contenteditable="isEditing"
      :style="{'max-width': `${charMax}ch`}"
      @paste="$event.preventDefault()"
      @keydown="captureInput($event)"
      @keyup="captureInput($event)">
      {{ about }}
    </p>
    <div id="tools">
      <span id="char_count"
        :class="{'is-hidden': !isEditing}">
        <span :class="{'is-warning': charCount > charMax}">{{ charCount }}</span> / {{ charMax }}
      </span>
      <span id="icon" @click="toggleEditMode($event)" :class="{'is-active': isEditing}">
        <font-awesome-icon :icon="'edit'" />
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { EventBus } from "./../../event-bus";

export default {
  created() {
    console.log("this.user @AboutMe")
    console.log(this.user)
    // this.$store.dispatch()
    this.about = this.user && this.user.about ? this.user.about : this.defaultPres;
    this.charCount = this.about.length;
  },
  computed: {
    user() {
      return this.$store.getters["users/user"];
    }
  },
  components: {
    FontAwesomeIcon,
  },
  mounted() {
    this.input = this.$el.querySelector("#text");
  },
  data() {
    return {
      about: null,
      charCount: null,
      charMax: 140,
      defaultPres: "Bienvenue sur votre Dashboard ! Vous n'avez pas encore saisi d'information. Merci de vous présenter à la communauté.",
      isEditing: false,
      input: null,
    }
  },
  methods: {
    hasCharsLeft(str) {
      this.charCount = str.length;
      return this.charMax - str.length > 0;
    },
    captureInput(e) {
      const userInput = e.target.innerText;
      if (!this.hasCharsLeft(userInput) && e.key !== "Backspace") {
        e.preventDefault();
      }
    },
    toggleEditMode() {
      this.isEditing = !this.isEditing;
      if (!this.isEditing) this.save();
      return this.isEditing;
    },
    save() {
      console.log("save@AboutMe");
      this.about = this.input.innerText;
      if (this.about !== this.defaultPres) {
        console.log("check if save");
        axios({
          method: "patch",
          url: "http://localhost:3000/about",
          data: {
            about: this.about
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
              EventBus.$emit("message-from-app", null);
            }, 2000);
          } else {
            EventBus.$emit("message-from-app", {
              txt: response.data.message,
              status: "warning"
            });
          }
        })
        .catch(error => {
          console.log("error axios");
          console.error(error);
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./../../styles/global.scss";

#about_me {
  max-width: 720px;
  position: relative;
}
#text {
  padding: 30px 20px 20px;
  outline: none;
  box-shadow: 0.1px 0 6px $theme_color_1;
}
#text.is-active {
  box-shadow: 0.1px 0 6px $color_is_active;
}
#tools {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 3;
}
#char_count {
  order: 1;
}
#char_count.is-hidden {
  visibility: hidden;
}
#icon {
  order: 2;
  cursor: pointer;
}
#icon:hover {
  color: $color_is_hover;
}
#icon.is-active {
  color: $color_is_active;
}
.is-warning {
  color: $warning_bg;
}
</style>
