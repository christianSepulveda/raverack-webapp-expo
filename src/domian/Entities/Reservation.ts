export interface Reservation {
  id?: string;
  date: Date;
  time: string;
  capacity: number;
  customerId: string;
  companyId: string;
  active: boolean;
}

export interface CreateReservation {
  date: Date;
  time: string;
  capacity: string;
  companyid: string | undefined;
  fullname?: string | undefined;
  rut?: string | undefined;
  phone?: string | undefined;
  email?: string | undefined;
}
