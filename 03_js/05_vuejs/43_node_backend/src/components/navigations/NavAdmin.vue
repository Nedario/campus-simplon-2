<template lang="html">
  <nav id="nav">
    <ul id="list">
      <li v-for="p in panes" class="item">
        <router-link :to="{ name: p.name }" active-class="is-active" exact tag="span" class="label">
          {{ p.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      panes: [
        {name: "statistics", label: "statistics"},
        {name: "manage-users", label: "manage users"},
        {name: "manage-products", label: "manage products"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

@import "./../../styles/global.scss";

#list {
  display: flex;
  list-style: none;
  height: 32px;
  border-top: 1px solid $theme_color_1;
  border-bottom: 3px solid $theme_color_1;
  margin-bottom: 20px;
  margin-top: 20px;
}
.item {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.label.is-active {
  color: $color_is_active;
}
</style>
