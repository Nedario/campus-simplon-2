<template lang="html">
  <div>
    <ul id="user_list" class="list">
      <li v-for="(user, n) in users" :key="n" class="item">
        <router-link :to="{name: 'user-profile', params: {id: user.id }}" class="link" active-class="is-active" exact>
          {{ user.name }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Johnny",
          id: 1
        },
        {
          name: "Eva",
          id: 2
        },
        {
          name: "Samia",
          id: 3
        },
        {
          name: "Albert",
          id: 4
        },
        {
          name: "Hao",
          id: 5
        },
        {
          name: "Igor",
          id: 6
        }
      ],
    }
  }
}
</script>

<style lang="css">
.link {
  color: inherit;
  text-decoration: none;
}
.link.is-active{
  color: #42b983;
}
</style>
