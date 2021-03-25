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
        <button
          @click="$emit('click', 'update', product)"
          class="btn bg-yellow-500 px-3 py-1"
        >
          <i class="fa fa-pencil"></i>
        </button>
        <button
          @click="$emit('click', 'delete', product)"
          class="btn bg-red-500 px-3 py-1"
        >
          <i class="fa fa-trash"></i>
        </button>
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
  max-width: 95%;
  margin: auto;
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
