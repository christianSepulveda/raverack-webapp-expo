import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import ReservationContainer from "./src/ui/containers/Reservations/ReservationContainer";

export default function Main() {
  return (
    <PaperProvider>
      <ReservationContainer />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("Reservas", () => Main);
