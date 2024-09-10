import { View, Text, Platform, Dimensions } from "react-native";
import React from "react";
import COLORS from "../../styles/colors";
import * as Animatable from "react-native-animatable";
import IonIcons from "react-native-vector-icons/Ionicons";

type Props = {};

const NoCompanyScreen = (props: Props) => {
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
      <Animatable.View animation={"fadeInRight"}>
        <Text style={{ fontSize: 50, fontWeight: "600", color: COLORS.purple }}>
          {"Lo sentimos :("}
        </Text>

        <View style={{ marginVertical: 8 }} />
        <Text style={{ fontSize: 20, fontWeight: "500", color: "gray" }}>
          En estos momentos las reservas no se encuentran disponibles para el
          local solicitado.
        </Text>

        <View style={{ marginVertical: 16 }} />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <IonIcons name="warning" size={300} color={COLORS.purple} />
        </View>

        <View style={{ marginVertical: 16 }} />
        <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
          Por favor intenta más tarde solicitar alguna reserva, si por algún
          motivo el problema persiste, comunicate con el comercio donde estás
          tratando de agendar tu mesa.
        </Text>
      </Animatable.View>
    </View>
  );
};

export default NoCompanyScreen;
