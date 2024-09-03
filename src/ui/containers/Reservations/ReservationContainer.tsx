import { View, Text } from "react-native";
import React, { useState } from "react";
import ReservationScreen from "../../screens/Reservations/ReservationScreen";

type Props = {};

const ReservationContainer = (props: Props) => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<string>("19:00");
  const [tableCapacity, setTableCapacity] = useState<string>("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
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
    />
  );
};

export default ReservationContainer;
