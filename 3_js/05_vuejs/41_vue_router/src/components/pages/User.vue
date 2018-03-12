<template lang="html">
  <div id="user">
    <h1 class="title"> {{ title }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, quia.
    </p>
    <user-list></user-list>
  </div>
</template>

<script>
import UserList from "./../user-list/UserList.vue";

export default {
  components: {
    UserList,
  },
  data() {
    return {
      title: "User"
    }
  },
}
</script>

<style lang="css" scoped>

</style>
