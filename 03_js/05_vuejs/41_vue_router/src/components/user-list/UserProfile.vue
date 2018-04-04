<template lang="html">
  <div>
    <h1 class="title">User {{ id }} Profile</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br>
      Doloremque vero quas dolor iste, quisquam sint rerum ab earum
    </p>
  </div>
</template>
<script>
export default {
  watch: {
    "$route"(to, from) {
      this.id = to.params.id;
    }
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
