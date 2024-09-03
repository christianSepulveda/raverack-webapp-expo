import * as Animatable from "react-native-animatable";
import { View, Text, ScrollView } from "react-native";
import React from "react";
import COLORS from "../../styles/colors";
import { TextInput } from "react-native-paper";
import RaveRackButton from "../RaveRackButton";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
};

const CustomerDataStep = (props: Props) => {
  return (
    <ScrollView>
      <Animatable.View animation={"fadeInRight"}>
        <Text style={{ fontSize: 50, fontWeight: "600", color: COLORS.purple }}>
          Contacto
        </Text>

        <View style={{ marginVertical: 8 }} />
        <Text style={{ fontSize: 20, fontWeight: "500", color: "gray" }}>
          Dejanos tus datos para validar tu reserva y enviarte la confirmación.
        </Text>

        <View style={{ marginVertical: 16 }} />
        <TextInput
          label="Nombre Completo"
          value={""}
          onChangeText={() => {}}
          mode="outlined"
          inputMode="text"
          contentStyle={{ color: COLORS.purple }}
          theme={{
            colors: {
              primary: COLORS.purple,
              background: COLORS.white,
            },
          }}
        />

        <View style={{ marginVertical: 8 }} />
        <TextInput
          label="RUT (Sin puntos ni guión)"
          value={""}
          onChangeText={() => {}}
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

        <View style={{ marginVertical: 8 }} />
        <TextInput
          label="Número de Teléfono"
          value={""}
          onChangeText={() => {}}
          mode="outlined"
          inputMode="tel"
          contentStyle={{ color: COLORS.purple }}
          theme={{
            colors: {
              primary: COLORS.purple,
              background: COLORS.white,
            },
          }}
        />

        <View style={{ marginVertical: 8 }} />
        <TextInput
          label="Correo Electrónico"
          value={""}
          onChangeText={() => {}}
          mode="outlined"
          inputMode="email"
          contentStyle={{ color: COLORS.purple }}
          theme={{
            colors: {
              primary: COLORS.purple,
              background: COLORS.white,
            },
          }}
        />

        <View style={{ marginVertical: 16 }} />
        <RaveRackButton label="Listo" onPress={props.nextStep} mode="dark" />

        <View style={{ marginVertical: 8 }} />
        <RaveRackButton
          label="Anterior"
          onPress={props.prevStep}
          mode="light"
        />
      </Animatable.View>
    </ScrollView>
  );
};

export default CustomerDataStep;
