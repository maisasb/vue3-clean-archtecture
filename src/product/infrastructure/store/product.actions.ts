import { Product } from "../../domain/product";
import * as types from "./product.types";
export default {
  setProducts({ commit }: any, products: Product[]) {
    commit(types.SET_PRODUCTS, products);
  },
};
