import { Product } from "./product";
import { Puja } from "./puja";
import { User } from "./user";

export interface WishList {
    id: number;
    pujaUser: User;
    userWishlistProducts: Product[];
    userPujas: Puja[];
}
