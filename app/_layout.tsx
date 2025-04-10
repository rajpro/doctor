import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return <>
    <GestureHandlerRootView>
      <Stack>
        <StatusBar backgroundColor="#a6252a" barStyle="light-content"/>
        <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  </>;
}