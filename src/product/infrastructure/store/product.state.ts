import { Product } from "../../domain/product";

export default {
  products: [],
};

export interface ProductState {
  products: Product[];
}
