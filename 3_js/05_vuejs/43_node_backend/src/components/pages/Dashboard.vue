<template lang="html">
  <main id="main" class="dashboard">
    <h1 class="title">DASHBOARD</h1>
    <div id="intro">
      <avatar></avatar>
      <p id="about">IAM DASHBOARD... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, obcaecati optio nemo similique veniam repellat vero quas delectus ducimus doloribus saepe possimus accusamus recusandae, ullam quibusdam consectetur eveniet sed earum!</p>
    </div>
    <h2 class="title">Users</h2>
    <tabler
       :editable="false"
       :deletable="true"
       :callbackDelete="tablerDelete"
       :callbackSort="tablerSort"
       :headerRows="[
           {name: 'id', sortable: true},
           {name: 'mail', sortable: true},
           {name: 'avatar', sortable: true},
           {name: 'delete', sortable: false},
       ]"
       :bodyRows="users">
   </tabler>
  </main>
</template>

<script>
import axios from 'axios';
import { EventBus } from "./../../event-bus.js";
import Avatar from "./../dashboard-elements/Avatar.vue";
import Tabler from "./../tabler/Tabler.vue";

export default {
  created() {

    EventBus.$emit("message-from-app", null);

    this.getUsers(users => {
      this.users = users;
    }, error => {
      console.error(error);
    });
  },
  components: {
    Avatar,
    Tabler
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    getUsers(resolve, reject) {
      console.log("getUsers@Dashboard");
      axios({
        method: "get",
        url: "http://localhost:3000/user",
      }).then(response => {
        console.log("response axios");
        console.log(response);
        resolve(response.data);
      })
      .catch(error => {
        console.log("error axios");
        reject(error);
      });
    },
    tablerDelete(evt, id) {
      console.log("tablerDelete@Dashboard");
      axios({
        method: "delete",
        url: `http://localhost:3000/user/${id}`
      }).then(response => {
        console.log("response axios");
        console.log(response);
        this.getUsers(users => {
          this.users = users;
        }, error => {
          console.error(error);
        });
      })
      .catch(error => {
        console.log("error axios");
      });
    },
    tablerSort(v) {
    }
  }
}
</script>

<style lang="css" scoped>
#intro {
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-column-gap: 20px;
}
#about {
  max-width: 720px;
}
</style>
