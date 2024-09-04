import { View, Text, Platform, Dimensions } from "react-native";
import React from "react";
import COLORS from "../../styles/colors";
import * as Animatable from "react-native-animatable";
import IonIcons from "react-native-vector-icons/Ionicons";
import DateSelectionStep from "../../components/DateSelectionStep";
import TableSizeList from "../../components/TableSizeList";
import CustomerDataStep from "../../components/CustomerDataStep";
import Customer from "../../../domian/Entities/Customer";
import Error from "../../../domian/Entities/Error";
import { Card } from "react-native-paper";

type Props = {
  date: Date;
  hour: string;
  step: number;
  tableCapacity: string;
  error: Error | undefined;
  customer: Customer;

  nextStep: () => void;
  prevStep: () => void;

  setHour: (hour: string) => void;
  setDate: (date: Date) => void;
  setCustomer: (customer: Customer) => void;
  setTableCapacity: (tableCapacity: string) => void;
};

const ReservationScreen = (props: Props) => {
  const { width } = Dimensions.get("screen");

  const isPCMonitor = width >= 1024;
  const containerWidth = isPCMonitor ? "30%" : "100%";

  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        paddingTop: "10%",
        width: containerWidth,
        alignSelf: "center",
      }}
    >
      {props.error && props.error.error && (
        <Animatable.View animation={"fadeInDown"}>
          <Card
            style={{
              backgroundColor: COLORS.red,
              padding: 10,
              marginBottom: 30,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
              {props.error.message}
            </Text>
          </Card>
        </Animatable.View>
      )}

      {props.step === 1 && (
        <DateSelectionStep
          date={props.date}
          setDate={props.setDate}
          nextStep={props.nextStep}
          hour={props.hour}
          setHour={props.setHour}
        />
      )}

      {props.step === 2 && (
        <TableSizeList
          prevStep={props.prevStep}
          nextStep={props.nextStep}
          tableCapacity={props.tableCapacity}
          setTableCapacity={props.setTableCapacity}
        />
      )}

      {props.step === 3 && (
        <CustomerDataStep
          prevStep={props.prevStep}
          nextStep={props.nextStep}
          customer={props.customer}
          setCustomer={props.setCustomer}
        />
      )}

      {props.step === 4 && (
        <Animatable.View animation={"fadeInRight"}>
          <Text
            style={{ fontSize: 50, fontWeight: "600", color: COLORS.purple }}
          >
            Todo Listo!
          </Text>

          <View style={{ marginVertical: 8 }} />
          <Text style={{ fontSize: 20, fontWeight: "500", color: "gray" }}>
            La confirmación llegará a tu correo pronto.
          </Text>

          <View style={{ marginVertical: 16 }} />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <IonIcons name="checkmark-circle" size={300} color={COLORS.green} />
          </View>

          <View style={{ marginVertical: 16 }} />
          <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
            En caso de no recibir la confirmación, por favor contacta al
            comercio donde reservaste e informa la situación mencionando tu
            nombre y fecha de reserva.
          </Text>
        </Animatable.View>
      )}
    </View>
  );
};

export default ReservationScreen;
