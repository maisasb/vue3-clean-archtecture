<template>
  <div>
    <TemplateHeader>{{ getLabel("product.create") }}</TemplateHeader>
    <div>{{ getLabel("product.name") }}</div>
    <InputForm :value="product.name" @input="setName" />
    <div>{{ getLabel("product.price") }}</div>
    <InputForm :value="product.price" @input="setPrice" />
    <div>{{ getLabel("product.description") }}</div>
    <InputForm :value="product.description" @input="setDescription" />

    <button @click="addProduct">{{ getLabel("product.add") }}</button>
  </div>
</template>
<script>
import TemplateHeader from "../../components/TemplateHeader.vue";
import InputForm from "../../components/InputForm.vue";
import useProduct from "../service/useProduct.service";
import useLabel from "../../labels/label.service";
export default {
  components: { InputForm, TemplateHeader },
  setup() {
    const { setName, setPrice, setDescription, addProduct, product } =
      useProduct();
    const { getLabel } = useLabel();

    return {
      setName,
      setPrice,
      setDescription,
      addProduct,
      product,
      getLabel,
    };
  },
};
</script>
