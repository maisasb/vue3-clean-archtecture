<template>
  <div>
    <h2>{{ getLabel("product.products") }}</h2>
    <ListProducts />
    <CreateProduct />
  </div>
</template>

<script>
import ListProducts from "./product/pages/ListProduct.vue";
import CreateProduct from "./product/pages/CreateProduct.vue";
import useLabel from "./labels/label.service";
export default {
  name: "App",
  components: { ListProducts, CreateProduct },
  setup() {
    const { getLabel } = useLabel();

    return {
      getLabel,
    };
  },
};
</script>
