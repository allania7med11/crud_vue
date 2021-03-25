<template>
  <div class="grid-container">
    <div v-for="field in fields" :key="field.label" class="header">
      {{ field.label }}
    </div>
    <div class="header">Actions</div>
    <template v-for="(product, id) in products">
      <div v-for="(field, id) in fields" :key="field.value + id" class="item">
        {{ product[field.value] }}
      </div>
      <div class="item" :key="'action' + id">
        <i class="icon-pencil icon warning" title="edit"></i>
        <i class="icon-trash-empty icon danger" title="delete"></i>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      fields: [
        { label: "Name", value: "name" },
        { label: "Price", value: "price" },
        { label: "Description", value: "description" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: white;
  box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 0px 8px 8px 0 rgba(0, 0, 0, 0.3);
  }
}
.header {
  background-color: rgb(1, 152, 122);
  color: white;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
}
.item {
  padding: 10px;
  color: rgb(107, 99, 110);
}
.icon{
  cursor: pointer;
  padding: 5px;
  margin: 4px;
  color: white;
  border-radius:4px ;
}
.warning{
  background-color:#ffc107 ;
}
.danger{
  background-color: #dc3545;
}
</style>
