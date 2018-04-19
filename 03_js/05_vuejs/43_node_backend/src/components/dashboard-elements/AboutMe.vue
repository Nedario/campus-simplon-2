<template lang="html">
  <div id="about_me">
    <p id="text" :class="{'is-active': isEditing}" :contenteditable="isEditing"
      :style="{'max-width': `${charMax}ch`}"
      @paste="$event.preventDefault()"
      @keydown="captureInput($event)"
      @keyup="captureInput($event)">
      {{ _about }}
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

export default {
  created() {
    this.charCount = this.about.length;
  },
  computed: {
    _about() {
      return this.$props.about;
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
      charCount: null,
      charMax: 140,
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
      this.about = this.input.innerText;
      if (this.about !== this.defaultPres) {
        axios({
          method: "patch",
          url: "http://localhost:3000/about",
          data: {
            about: this.about
          }
        })
        .then(response => {
          if (!response.data.error) {
            this.$ebus.$emit("display-app-message", {
              txt: response.data.message,
              status: "success"
            });
            window.setTimeout(() => {
              this.$ebus.$emit("reset-app-message");
            }, 2000);
          } else {
            this.$ebus.$emit("display-app-message", {
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
  },
  props: ["about"]
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
