import { CartList } from "./cart-list";
import { Product } from "./product";

export interface CartItem {
    id:number;
    cartList:CartList;
    product:Product;
    quantity:number;
    total:number;
}
