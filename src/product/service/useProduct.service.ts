import { Ref, ref } from "vue";
import { Product } from "../domain/product";
import productRepository from "../repository/product.repository";

export default function useProduct() {
  const product: Ref<Product> = ref({
    description: "",
    id: "0",
    name: "",
    price: 0,
  });
  const getProducts = (): Product[] => {
    return productRepository.getProducts();
  };
  const addProduct = () => {
    const products = productRepository.getProducts().slice();
    product.value.id = products.length + 1 + "";
    products.push(product.value);
    productRepository.setProducts(products);
  };

  const setName = (name: string) => {
    product.value.name = name;
  };

  const setPrice = (price: number) => {
    product.value.price = price;
  };

  const setDescription = (description: string) => {
    product.value.description = description;
  };

  return {
    getProducts,
    addProduct,
    setName,
    setPrice,
    setDescription,
    product: product.value,
  };
}
