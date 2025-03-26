import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return <>
  <GestureHandlerRootView>
  <StatusBar backgroundColor="#3498db" barStyle="light-content" />
  <Stack screenOptions={{
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: '#3498db', // Set header background color
    },
    headerTintColor: '#fff', // Set text/icon color
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}/>
  </GestureHandlerRootView>
  </>;
}