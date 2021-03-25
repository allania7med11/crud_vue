<template>
  <div class="products">
    <i class="icon-pencil"></i>
    <i class="icon-trash-empty"></i>
    <button @click="show = !show">New product</button>
    <Form :show="show" @show="show = !show" @submit="submit" />
    <Table :products="products" />
  </div>
</template>

<script>
import "@/assets/css/fontello.css";
import "@/assets/css/main.css";
import Form from "./Form";
import Table from "./Table";
import api from "@/apis/product";
export default {
  components: {
    Form,
    Table,
  },
  data() {
    return {
      show: false,
      products: [],
    };
  },
  async created() {
    await this.updateProducts();
  },
  methods: {
    async submit(product) {
      try {
        await api.create(product);
        await this.updateProducts();
        this.show = !this.show
      } catch (err) {
        console.log({ err });
      }
    },
    async updateProducts() {
      try {
        let response = await api.read();
        this.products = response.data;
      } catch (err) {
        console.log({ err });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  margin: auto;
  max-width: 1000px;
}
.products > button {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
