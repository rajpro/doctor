import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return <>
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  </>;
}