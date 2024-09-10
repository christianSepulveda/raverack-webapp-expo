import { CreateReservation } from "../../domian/entities/Reservation";
import { Error } from "../../domian/entities/Error";
import { ReservationRepository } from "../../domian/repositories/ReservationRepository";
import makeFetch from "../config/makeFetch";

export class ReservationController implements ReservationRepository {
  async createReservation(
    reservation: CreateReservation
  ): Promise<CreateReservation | Error> {
    const response = await makeFetch(`reservation/create`, "POST", reservation);

    const error: Error = {
      error: true,
      message: "No se pudieron obtener los clientes.",
      status: response.status,
    };

    if (response.status !== 200) return error;
    return response.data as CreateReservation;
  }
}
