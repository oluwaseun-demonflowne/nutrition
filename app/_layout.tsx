import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    Nuni: require("../assets/fonts/NunitoSans_7pt_Condensed-Regular.ttf"),
    "nuni-medium": require("../assets/fonts/NunitoSans_7pt_Condensed-Medium.ttf"),
    "nuni-bold": require("../assets/fonts/NunitoSans_7pt_Condensed-Bold.ttf"),
  });
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
