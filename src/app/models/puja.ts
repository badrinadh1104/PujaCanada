import { Priest } from "./priest";

export interface Puja {
    id: number ;                 
    name: string;
    description?: string;       
    price: number;
    discount: number;
    // image?: Uint8Array;
    image: File | null;          
    priests?: Priest[]; 
}
