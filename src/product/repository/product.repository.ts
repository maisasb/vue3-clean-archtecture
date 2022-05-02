import { Product } from "../domain/product";
import ProductStoreAdapter from "../infrastructure/product.store.adapter";
import ProductStoreAdapterInterface from "../infrastructure/product.store.adapter.interface";
import ProductRepositoryInterface from "./product.repository.interface";

export class ProductRepository implements ProductRepositoryInterface {
  constructor(protected productStoreAdapter: ProductStoreAdapterInterface) {}
  getProducts(): Product[] {
    return this.productStoreAdapter.getProducts();
  }
  setProducts(products: Product[]) {
    this.productStoreAdapter.setProducts(products);
  }
  getAll(): Product[] {
    //Call httpClient
    return [];
  }
  create(product: Product): void {
    //Call httpClient
  }
}

export default new ProductRepository(new ProductStoreAdapter());
