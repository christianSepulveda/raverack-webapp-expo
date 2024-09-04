import { View, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import React, { useRef, useState } from "react";
import { DatePickerInput, TimePickerModal } from "react-native-paper-dates";
import COLORS from "../../styles/colors";
import RaveRackButton from "../RaveRackButton";
import { TextInput } from "react-native-paper";

type Props = {
  date: Date;
  hour: string;
  setDate: (date: Date) => void;
  setHour: (hour: string) => void;
  nextStep: () => void;
};

const DateSelectionStep = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const textInputRef = useRef<any>(null);

  return (
    <Animatable.View animation={"fadeInRight"}>
      <Text style={{ fontSize: 50, fontWeight: "600", color: COLORS.purple }}>
        Bienvenido
      </Text>
      <View style={{ marginVertical: 8 }} />
      <Text style={{ fontSize: 20, fontWeight: "500", color: "gray" }}>
        Por favor, indica la fecha de tu reserva. Si deseas reservar para hoy
        solo presiona siguiente.
      </Text>
      <View style={{ marginVertical: 16 }} />
      <View>
        <DatePickerInput
          locale="es"
          label="Reservar"
          value={props.date}
          onChange={(d) => props.setDate(d ?? new Date())}
          inputMode="start"
          mode="outlined"
          iconColor="white"
          iconStyle={{
            backgroundColor: COLORS.purple,
            borderRadius: 100,
            alignSelf: "center",
          }}
          contentStyle={{ color: COLORS.purple }}
          withModal={true}
          theme={{
            colors: {
              primary: COLORS.purple,
              background: COLORS.white,
            },
          }}
        />
      </View>

      <View style={{ marginVertical: 16 }} />
      <TextInput
        ref={textInputRef}
        label="Hora de Llegada"
        value={props.hour}
        onChangeText={() => {}}
        mode="outlined"
        onFocus={() => {
          setVisible(true);
          textInputRef.current?.blur();
        }}
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

      <TimePickerModal
        visible={visible}
        locale="es"
        onDismiss={() => setVisible(false)}
        onConfirm={(hour) => {
          props.setHour(`${hour.hours}:${hour.minutes}`);
          setVisible(false);
        }}
        hours={12}
        minutes={14}
        defaultInputType="keyboard"
      />
    </Animatable.View>
  );
};

export default DateSelectionStep;
