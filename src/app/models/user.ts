import { CartList } from "./cart-list";
import { PujaAppointment } from "./puja-appointment";
import { PujaUserOrder } from "./puja-user-order";
import { UserAddress } from "./user-address";
import { WishList } from "./wish-list";

export interface User {
     id:number;
     userName:string;
     email:string;
     phone:string;
     password:string;
     userAddress:UserAddress;
     userWishList:WishList;
     userCartList:CartList;
     orders:PujaUserOrder[];
     pujaAppointments:PujaAppointment[];
     
     
}
