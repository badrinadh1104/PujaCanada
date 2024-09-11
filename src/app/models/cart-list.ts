import { CartItem } from "./cart-item";
import { PujaAppointment } from "./puja-appointment";
import { User } from "./user";

export interface CartList {
    id:number;
    pujaUser:User
    cartItems:CartItem[];
    userCartListPujas:PujaAppointment[];
}
