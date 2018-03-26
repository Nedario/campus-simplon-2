<template lang="html">
  <span id="burger" :class="{'is-active': isActive}" @click="toggleNav()">
    <font-awesome-icon class="icon" :icon="activeIcon" />
  </span>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { EventBus } from "./../../event-bus";

export default {
  data() {
    return {
      activeIcon: "bars",
      isActive: false,
    }
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
      this.activeIcon = this.isActive ? "times" : "bars";
      EventBus.$emit("toggle-nav-main", this.isActive);
    }
  }
}
</script>

<style lang="scss" scoped>

@import  "./../../styles/global.scss";

#burger {
  cursor: pointer;
}
#burger > * {
  pointer-events: none;
}
.is-active .icon {
  color: $color_is_active;
}

</style>
