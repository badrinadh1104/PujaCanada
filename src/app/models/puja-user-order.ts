import { CartItem } from "./cart-item";
import { DeliveryAgent } from "./delivery-agent";
import { Payment } from "./payment";
import { PujaAppointment } from "./puja-appointment";
import { User } from "./user";

export interface PujaUserOrder {
    id: number;
    user: User;
    orderedProducts: CartItem[];
    pujaOrders: PujaAppointment[];
    payments: Payment[];
    deliveryAgent: DeliveryAgent;
    total: number;
    paymentStatus: boolean;
    deliveryStatus: boolean;
}
