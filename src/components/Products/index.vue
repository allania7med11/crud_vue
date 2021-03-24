<template>
  <div class="container">
    <Form @submit="submit" />
  </div>
</template>

<script>
import Form from "./Form";
export default {
  components: {
    Form,
  },
  methods: {
    submit: function(product) {
      console.log(product);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
