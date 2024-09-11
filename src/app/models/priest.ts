import { Earnings } from "./earnings";
import { Puja } from "./puja";
import { PujaAppointment } from "./puja-appointment";
import { User } from "./user";

export interface Priest {
    id:number;
    user:User;
    priestPujas:Puja[];
    pujasTodo:PujaAppointment[];
    priestEarnings:Earnings[];
    isAvailable:boolean;
}
