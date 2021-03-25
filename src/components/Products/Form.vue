<template>
  <div
    class="modal"
    ref="modal"
    @click="updateShow"
    :style="{ display: show ? 'block' : 'none' }"
  >
    <div v-if="action !== 'delete'" class="card">
      <div @click="$emit('show')" class="close">X</div>
      <form @submit="submit">
        <div class="title">{{ title }}</div>
        <label for="fname">Name:</label>
        <input
          type="text"
          v-model="product.name"
          id="fname"
          name="name"
          required
        />
        <label for="fprice">Price:</label>
        <input
          type="number"
          v-model.number="product.price"
          id="fprice"
          name="price"
          required
        />
        <label for="fdescription">Decription:</label>
        <input
          type="text"
          v-model="product.description"
          id="fdescription"
          name="description"
          required
        />
        <div class="text-center">
          <button v-if="action == 'create'" type="submit" class="btn primary">
            Create
            <i class="fa fa-plus"></i>
          </button>
          <button v-else type="submit" class="btn warning">
            Update
            <i class="fa fa-pencil"></i>
          </button>
        </div>
      </form>
    </div>
    <div class="card" v-else>
      <div @click="$emit('show')" class="close">X</div>
      <form class="text-center">
        Are you sure you want to delete
        <span class="font-bold">{{ product.name }}</span> product?
        <div class="text-center">
          <button class="danger" type="submit">
            Delete
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show", "action", "product"],
  computed: {
    title() {
      return this.action == "create" ? "Create new product" : "Update product";
    },
  },
  methods: {
    submit: function(evt) {
      evt.preventDefault();
      this.$emit("submit", this.product);
    },
    updateShow(evt) {
      if (evt.target == this.$refs.modal) {
        this.$emit("show");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  //display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.2); /* Black w/ opacity */
}
.card {
  position: relative;
  z-index: 2;
  margin: auto;
  background-color: white;
  max-width: 800px;
  padding: 30px 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.3);
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
.card .close {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 10px;
  padding: 5px;
  color: gainsboro;
  &:hover {
    color: #000;
  }
}
</style>
