import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
    // #a6252a
  return <>
    <Tabs screenOptions={{headerShown:false, tabBarStyle: {
      backgroundColor: '#a6252a',
    },}}>
      <Tabs.Screen name="favorite" options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" size={size} color="#fff"/>
        )
      }}/>
      <Tabs.Screen name="index" options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" size={size} color="#fff"/>
        )
      }}/>
      <Tabs.Screen name="profile" options={{
        tabBarShowLabel: false,
        tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" size={size} color="#fff"/>
        )
      }}/>
    </Tabs>
  </>;
}