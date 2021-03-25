<template>
  <div class="grid-container">
    <div v-for="field in fields" :key="field.label" class="header">
      {{ field.label }}
    </div>
    <div class="header">Actions</div>
    <template v-for="(product, idPr) in products">
      <div
        v-for="field in fields"
        :key="field.value + idPr"
        :class="`rg_${Number(idPr) % 2}`"
        class="item col"
      >
        {{ product[field.value] }}
      </div>
      <div
        :class="`rg_${Number(idPr) % 2}`"
        class="item"
        :key="'action' + idPr"
      >
        <i
          @click="$emit('click', 'update', product)"
          class="fa fa-pencil icon warning"
        ></i>
        <i
          @click="$emit('click', 'delete', product)"
          class="fa fa-trash icon danger"
        ></i>
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
  align-items: stretch;
  align-content: center;
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
.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.item {
  padding: 10px;
  color: rgb(107, 99, 110);
  font-size: 18px;
}
.rg_1 {
  background-color: #f8f8ff;
  color: #01987a;
}
.icon {
  cursor: pointer;
  padding: 7px;
  margin: 5px;
  color: white;
  border-radius: 4px;
}

</style>
