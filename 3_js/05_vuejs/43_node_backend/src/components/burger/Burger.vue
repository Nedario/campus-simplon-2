<template lang="html">
  <span id="burger" @click="toggleNav()">
    <i :class="['fa', activeIcon]"></i>
  </span>
</template>

<script>

import { EventBus } from "./../../event-bus";

export default {
  data() {
    return {
      activeIcon: "fa-bars",
      isActive: false,
    }
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
      this.activeIcon = this.isActive ? "fa-times" : "fa-bars";
      EventBus.$emit("toggle-nav-main", this.isActive);
    }
  }
}
</script>

<style lang="css">
#burger {
  cursor: pointer;
}
#burger > * {
  pointer-events: none;
}
</style>
