import { Priest } from "./priest";

export interface Product {
        id: number;
        name: string;
        category: string;
        price: number;
        discount: number;
        isAvailable: boolean;
        quantity: number;
        image: File | null; 
}
