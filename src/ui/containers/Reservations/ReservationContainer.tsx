import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ReservationScreen from "../../screens/Reservations/ReservationScreen";
import Error from "../../../domian/Entities/Error";
import Customer from "../../../domian/Entities/Customer";

type Props = {};

const ReservationContainer = (props: Props) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<string>("19:00");
  const [error, setError] = useState<Error>();
  const [customer, setCustomer] = useState<Customer>();
  const [tableCapacity, setTableCapacity] = useState<string>("");

  const validateDateAndHour = () => {
    if (!date || date === null) {
      const error = {
        error: true,
        message: "Debes indicar una fecha para tu reserva.",
      };

      setError(error);
      return false;
    }

    if (!hour || hour === "") {
      const error = {
        error: true,
        message: "Debes indicar una hora para tu reserva.",
      };

      setError(error);
      return false;
    }

    return true;
  };

  const validateTableCapacity = () => {
    if (!tableCapacity || tableCapacity === "") {
      const error = {
        error: true,
        message: "Debes indicar el tamaño de la mesa.",
      };

      setError(error);
      return false;
    }
    return true;
  };

  const validateCustomerData = () => {
    if (!customer) {
      const error = {
        error: true,
        message: "Debes ingresar tus datos personales.",
      };

      setError(error);
      return false;
    }

    if (!customer.fullname || customer.fullname === "") {
      const error = {
        error: true,
        message: "Debes ingresar tu nombre completo.",
      };

      setError(error);
      return false;
    }

    if (!customer.rut || customer.rut === "" || customer.rut.length < 8) {
      const error = {
        error: true,
        message: "Debes ingresar un RUT válido.",
      };

      setError(error);
      return false;
    }

    if (
      !customer.phone ||
      customer.phone === "" ||
      customer.phone.length < 9 ||
      customer.phone.length > 12
    ) {
      const error = {
        error: true,
        message: "Debes ingresar un número de teléfono válido.",
      };

      setError(error);
      return false;
    }

    if (!customer.email || customer.email === "") {
      const error = {
        error: true,
        message: "Debes ingresar tu correo electrónico.",
      };

      setError(error);
      return false;
    }

    return true;
  };

  const nextStep = () => {
    if (step === 1 && !validateDateAndHour()) return;
    if (step === 2 && !validateTableCapacity()) return;
    if (step === 3 && !validateCustomerData()) return;

    setError(undefined);
    setStep(step + 1);
  };

  const prevStep = () => {
    setError(undefined);
    setStep(step - 1);
  };

  return (
    <ReservationScreen
      date={date}
      step={step}
      setDate={setDate}
      nextStep={nextStep}
      prevStep={prevStep}
      hour={hour}
      setHour={setHour}
      tableCapacity={tableCapacity}
      setTableCapacity={setTableCapacity}
      customer={customer ?? ({} as Customer)}
      setCustomer={setCustomer}
      error={error}
    />
  );
};

export default ReservationContainer;
