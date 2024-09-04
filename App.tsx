import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { es, registerTranslation } from "react-native-paper-dates";

import ReservationContainer from "./src/ui/containers/Reservations/ReservationContainer";

export default function Main() {
  registerTranslation("es", es);

  return (
    <PaperProvider>
      <ReservationContainer />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("Reservas", () => Main);
