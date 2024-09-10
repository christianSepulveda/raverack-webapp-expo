import { MakeReservation } from "../../application/use-cases/Reservation/CreateReservation";
import { Customer } from "../entities/Customer";
import { Error } from "../entities/Error";
import { CreateReservation, Reservation } from "../entities/Reservation";

export interface ReservationRepository {
  createReservation(
    reservation: CreateReservation
  ): Promise<CreateReservation | Error>;
}
