<template>
  <div>
    <button @click="show = !show">New product</button>
    <Form :show="show" @show="show = !show" @submit="submit" />
  </div>
</template>

<script>
import "@/assets/css/main.css";
import Form from "./Form";
import api from "@/apis/product";
export default {
  components: {
    Form,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    submit: async function(product) {
      debugger; // eslint-disable-line
      try {
        let data = await api.create(product);
        console.log({ data });
      } catch (err) {
        console.log({ err });
      }
    },
  },
};
</script>

<style scoped></style>
