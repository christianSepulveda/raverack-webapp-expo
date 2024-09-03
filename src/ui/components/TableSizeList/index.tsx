import * as Animatable from "react-native-animatable";
import { View, Text } from "react-native";
import React from "react";
import COLORS from "../../styles/colors";
import RaveRackButton from "../RaveRackButton";
import { TextInput } from "react-native-paper";

type Props = {
  tableCapacity: string;
  setTableCapacity: (tableCapacity: string) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const TableSizeList = (props: Props) => {
  return (
    <Animatable.View animation={"fadeInRight"}>
      <Text style={{ fontSize: 50, fontWeight: "600", color: COLORS.purple }}>
        Acompañantes
      </Text>

      <View style={{ marginVertical: 8 }} />
      <Text style={{ fontSize: 20, fontWeight: "500", color: "gray" }}>
        Indicanos el número de personas que estará en la mesa.
      </Text>

      <View style={{ marginVertical: 16 }} />
      <TextInput
        label="Número de Personas"
        value={props.tableCapacity}
        onChangeText={props.setTableCapacity}
        mode="outlined"
        inputMode="numeric"
        contentStyle={{ color: COLORS.purple }}
        theme={{
          colors: {
            primary: COLORS.purple,
            background: COLORS.white,
          },
        }}
      />

      <View style={{ marginVertical: 16 }} />
      <RaveRackButton label="Siguiente" onPress={props.nextStep} mode="dark" />

      <View style={{ marginVertical: 8 }} />
      <RaveRackButton label="Anterior" onPress={props.prevStep} mode="light" />
    </Animatable.View>
  );
};

export default TableSizeList;
