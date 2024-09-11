import { Priest } from "./priest";
import { Puja } from "./puja";
import { User } from "./user";

export interface PujaAppointment {
    id: number;
    puja: Puja;
    appointmentDate: string;  // Format: yyyy-MM-dd
    appointmentTime: string;  // Format: HH:mm
    isConfirmed: boolean;
    userPujaAppointment: User;
    completedStatus: boolean;
    pujaPriest: Priest;
    pujaFee: number;
}
