<template lang="html">
  <div>
    <h2 class="title">Manage Users</h2>
    <tabler v-if="user && user.is_admin"
       :editable="false"
       :deletable="true"
       :callbackDelete="tablerDelete"
       :callbackSort="tablerSort"
       :headerRows="[
           {name: 'id', sortable: true},
           {name: 'mail', sortable: true},
           {name: 'avatar', sortable: true},
           {name: 'about', sortable: true},
           {name: 'is Admin', sortable: true},
           {name: 'delete', sortable: false},
       ]"
       :bodyRows="users">
    </tabler>
  </div>
</template>

<script>
import Tabler from "./../tabler/Tabler.vue";
export default {
  computed: {
    user() {
      return this.$store.getters["users/current"];
    },
    users() {
      return this.$store.getters["users/all"];
    },
  },
  components: {
    Tabler
  },
  methods: {
    tablerDelete(evt, id) {
      console.log("tablerDelete@Dashboard");
      this.$store.dispatch("deleteUser", id)
      .then(res => {
        console.log("fetch users list after tabler user delete")
        // this.$store.dispatch("users/get");
      }, err => {
        console.error(err);
      });
    },
    tablerSort(v) {}
  }
}
</script>

<style lang="scss" scoped>
</style>
