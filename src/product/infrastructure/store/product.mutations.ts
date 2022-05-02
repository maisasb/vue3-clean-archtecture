import { Product } from "../../domain/product";
import { ProductState } from "./product.state";
import * as types from "./product.types";
export default {
  [types.SET_PRODUCTS](state: ProductState, products: Product[]) {
    state.products = products;
  },
};
