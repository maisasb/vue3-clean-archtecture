import { Product } from "../domain/product";

export default interface ProductStoreAdapterInterface {
  getProducts(): Product[];
  setProducts(products: Product[]): void;
}
