import { Product } from "../domain/product";
import ProductStoreAdapterInterface from "./product.store.adapter.interface";
import store from "./store/index";
import * as types from "./store/product.types";

export default class ProductStoreAdapter
  implements ProductStoreAdapterInterface
{
  getProducts(): Product[] {
    return store.state.products;
  }
  setProducts(products: Product[]): void {
    store.dispatch(types.SET_PRODUCTS, products);
  }
}
