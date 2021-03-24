<template>
  <div class="card">
    <div class="title">Create Product</div>
    <form @submit="submit">
      <label for="fname">Name:</label>
      <input type="text" v-model="product.name" id="fname" name="name" required />
      <label for="fprice">Price:</label>
      <input type="number" v-model.number="product.age" id="fprice" name="price" required />
      <label for="fdescription">Decription:</label>
      <input type="text" v-model="product.description" id="fdescription" name="description" required />
      <div class="has_submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: null,
        age: null,
        description: null,
      },
    };
  },
  methods:{
    submit: function(evt){
      evt.preventDefault()
      this.$emit("submit",this.product)
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  width: 70%;
  max-width: 800px;
  min-height: 300px;
  padding: 30px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.2);
  }
}
.card .title {
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
}
.card input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: 0.3s;
  &:focus {
    outline: none !important;
    border: 1px solid blue;
    box-shadow: 0 0 1px blue;
  }
}
.has_submit {
  text-align: center;
}
.has_submit button {
  outline: none !important;
  margin: 5px;
  padding: 10px 30px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  background-color: blue;
  color: white;
  font-weight: bold;
}
</style>
