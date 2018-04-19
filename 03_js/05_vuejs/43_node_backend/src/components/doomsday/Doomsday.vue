<template lang="html">
  <div id="doomsday">
    <h2>CodeCombat in ...</h2>
    <span id="date"> {{ doomsday }}</span>
    <p>getReady()</p>
  </div>
</template>

<script>
import moment from "moment";
import countdown from "moment-countdown";

export default {
  data() {
    return {
      doomsday: null
    }
  },
  methods: {
    getDate() {
      return moment().countdown("2018-05-25").toString();
    }
  },
  mounted() {
    const vm = this;
    this.doomsday = this.getDate();
    window.setInterval(() => {
      vm.doomsday = vm.getDate();
    }, 1000)
  },
  watch: {
    doomsday: (val) => {
      return this.doomsday = this.a.methods.getDate();
    }
  }
}
</script>

<style lang="css">
#doomsday {
  border: 2px solid;
  border-radius: .4rem;
  /* font-family: 'Creepster', cursive; */
  max-width: 400px;
  margin: 0 auto 20px;
  padding: 5px 5px 10px;
  position: relative;
  text-align: center;
}
#date {
  font-size: .9rem;
}
</style>
