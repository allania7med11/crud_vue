<template>
  <div id="app" >
    <Products />
  </div>
</template>

<script>
import Products from "./components/Products";

export default {
  name: "App",
  components: {
    Products,
  },
};
</script>

<style>
body{
  background-color: ghostwhite;
}
</style>
