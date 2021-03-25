<template>
  <div class="products">
    <div class="test">fhgfhgfg</div>
    <button class="btn bg-blue-500" @click="updateProduct('create', productDefault)">
      <i class="fa fa-plus" aria-hidden="true"></i>
      New product
    </button>
    <Form
      :show="show"
      :action="action"
      :product="product"
      @show="show = !show"
      @submit="submit"
    />
    <Table :products="products" @click="updateProduct" />
  </div>
</template>

<script>

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
      productDefault: {
        name: null,
        price: null,
        description: null,
      },
      product: {},
      action: "create",
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
        this.show = !this.show;
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
    async updateProduct(action, product) {
      this.action = action;
      this.product = product;
      this.show = !this.show
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
  font-size: 18px;
}
</style>
