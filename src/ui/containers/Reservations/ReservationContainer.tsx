import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import ReservationScreen from "../../screens/Reservations/ReservationScreen";
import { Error } from "../../../domian/entities/Error";
import { Customer } from "../../../domian/entities/Customer";
import { CompanyController } from "../../../infraestructure/api/CompanyController";
import { useLocalSearchParams } from "expo-router";
import { Company } from "../../../domian/entities/Company";
import NoCompanyScreen from "../../components/NoCompany";
import { ActivityIndicator } from "react-native-paper";
import COLORS from "../../styles/colors";
import { ReservationController } from "../../../infraestructure/api/ReservationController";
import { CreateReservation } from "../../../domian/entities/Reservation";

type Props = {};

const ReservationContainer = (props: Props) => {
  const companyController = new CompanyController();
  const reservationController = new ReservationController();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const companyID = urlParams.get("id");

  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>(new Date());
  const [hour, setHour] = useState<string>("19:00");
  const [error, setError] = useState<Error>();
  const [customer, setCustomer] = useState<Customer>();
  const [tableCapacity, setTableCapacity] = useState<string>("");
  const [company, setCompany] = useState<Company>();
  const [loading, setLoading] = useState<boolean>(false);
  const [noCompany, setNoCompany] = useState<boolean>(false);

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

    const now = new Date();
    const reservationTime = new Date(date);
    reservationTime.setHours(Number(hour.split(":")[0]));
    reservationTime.setMinutes(Number(hour.split(":")[1]));

    const timeDifference = reservationTime.getTime() - now.getTime();
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    if (hoursDifference < 2) {
      const error = {
        error: true,
        message: "Debes hacer la reserva con al menos 2 horas de anticipación.",
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

  const getCompanyInfo = async () => {
    setLoading(true);

    if (!companyID) setNoCompany(true);

    if (companyID) {
      const company = (await companyController.findCompanyById(
        companyID
      )) as Company & Error;

      setCompany(company as Company);

      if (company.error) {
        setNoCompany(true);
        setLoading(false);
        return;
      }

      const expirationDate = new Date(company.expirationDate);
      const currentDate = new Date();

      if (expirationDate < currentDate) {
        setNoCompany(true);
        setLoading(false);
        return;
      }
    }
    setLoading(false);
  };

  const createReservation = async () => {
    if (company && customer) {
      const reservation = {
        date,
        time: hour,
        capacity: tableCapacity,
        companyid: company?.id,
        fullname: customer?.fullname,
        rut: customer?.rut,
        phone: customer?.phone,
        email: customer?.email,
      } as CreateReservation;

      const newReservation = (await reservationController.createReservation(
        reservation
      )) as CreateReservation & Error;

      if (newReservation.error) {
        setError(newReservation);
        return;
      }

      nextStep();
    }
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={100} color={COLORS.purple} />
      </View>
    );
  }

  if (noCompany) {
    return <NoCompanyScreen />;
  }

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
      createReservation={createReservation}
    />
  );
};

export default ReservationContainer;
