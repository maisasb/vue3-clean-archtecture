import { Product } from "../domain/product";

export default interface ProductRepositoryInterface {
  setProducts(products: Product[]): void;
  getProducts(): Product[];
  getAll(): Product[];
  create(product: Product): void;
}
