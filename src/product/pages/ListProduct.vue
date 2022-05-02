<template>
  <div>
    <TemplateHeader>{{ getLabel("product.list") }}</TemplateHeader>
    <div v-for="product in products" :key="product.id">
      {{ product }}
    </div>
  </div>
</template>

<script lang="ts">
import TemplateHeader from "../../components/TemplateHeader.vue";
import { computed } from "@vue/runtime-core";
import useProduct from "../service/useProduct.service";
import useLabel from "../../labels/label.service";

export default {
  components: { TemplateHeader },
  setup() {
    const { getProducts } = useProduct();
    const { getLabel } = useLabel();
    const products = computed(() => {
      return getProducts();
    });

    return {
      products,
      getLabel,
    };
  },
};
</script>
