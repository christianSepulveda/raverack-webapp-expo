import * as Animatable from "react-native-animatable";
import { View, Text, ScrollView } from "react-native";
import React from "react";
import COLORS from "../../styles/colors";
import { TextInput } from "react-native-paper";
import RaveRackButton from "../RaveRackButton";
import Customer from "../../../domian/Entities/Customer";

type Props = {
  prevStep: () => void;
  nextStep: () => void;
  customer: Customer;
  setCustomer: (customer: Customer) => void;
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
          value={props.customer.fullname ?? ""}
          onChangeText={(text) =>
            props.setCustomer({ ...props.customer, fullname: text })
          }
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
          value={props.customer.rut ?? ""}
          onChangeText={(text) =>
            props.setCustomer({ ...props.customer, rut: text })
          }
          maxLength={9}
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
          value={props.customer.phone ?? ""}
          onChangeText={(text) =>
            props.setCustomer({ ...props.customer, phone: text })
          }
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
          value={props.customer.email ?? ""}
          onChangeText={(text) =>
            props.setCustomer({ ...props.customer, email: text })
          }
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
