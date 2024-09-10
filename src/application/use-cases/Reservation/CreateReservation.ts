import { Reservation } from "../../../domian/entities/Reservation";
import { Error } from "../../../domian/entities/Error";
import { ReservationRepository } from "../../../domian/repositories/ReservationRepository";
import { CreateReservation } from "../../../domian/entities/Reservation";

export class MakeReservation {
  private reservationRepository: ReservationRepository;

  constructor(reservationRepository: ReservationRepository) {
    this.reservationRepository = reservationRepository;
  }

  async execute(
    reservation: CreateReservation
  ): Promise<CreateReservation | Error> {
    if (reservation) {
      const newReservation = await this.reservationRepository.createReservation(
        reservation
      );
      if (!newReservation)
        return { message: "Cannot create reservation", error: true };
      return newReservation;
    }

    return { message: "All fields are required", error: true };
  }
}
