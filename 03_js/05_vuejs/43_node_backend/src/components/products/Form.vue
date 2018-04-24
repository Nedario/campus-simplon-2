<template lang="html">
  <div>
    <h1>Add a new product</h1>
    <form id="form_add_product" @submit.prevent="addProduct()">
      <input type="text" name="label" class="input" placeholder="product's name" required value="gni">
      <input type="number" name="number" class="input" placeholder="product's price" min="1" required value="1">
      <select name="category" class="select">
        <option value="blank">cats here</option>
      </select>
      <button class="btn">ok</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    addProduct() {
      if (this.checkForm()) {
        console.log("no errors")
        this.$store.dispatch("products/getCategory")
      }
    },
    checkForm() {
      const required = this.$el.querySelectorAll("[required]");
      let errors = 0;
      required.forEach(r => {
        if (!r.value) errors += 1;
      })

      return errors === 0;
    }
  }
}
</script>

<style lang="scss" scoped>
#form_add_product {
  display: flex;
  flex-direction: column;
  max-width: 320px;
}
#form_add_product .input {
  margin-bottom: 10px;
}
</style>
