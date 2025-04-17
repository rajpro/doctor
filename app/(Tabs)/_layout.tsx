import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar, View, StyleSheet } from "react-native";

export default function TabLayout() {
  // #a6252a
  return <>
    <StatusBar backgroundColor="#a6252a" barStyle="light-content" />
    <Tabs screenOptions={{
      headerShown: false, tabBarStyle: {
        backgroundColor: '#a6252a',
        height: 60,
      },
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen name="favorite" options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={[styles.iconView, { backgroundColor: focused ? '#fff' : 'transparent' }]}>
            <Ionicons name="heart-outline" size={size} color={focused ? "#a6252a" : "#fff"} />
          </View>
        )
      }} />
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={[styles.iconView, { backgroundColor: focused ? '#fff' : 'transparent' }]}>
            <Ionicons name="home-outline" size={size} color={focused ? "#a6252a" : "#fff"} />
          </View>
        )
      }} />
      <Tabs.Screen name="profile" options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={[styles.iconView, { backgroundColor: focused ? '#fff' : 'transparent' }]}>
            <Ionicons name="person-outline" size={size} color={focused ? "#a6252a" : "#fff"} />
          </View>
        )
      }} />
    </Tabs>
  </>;
}

const styles = StyleSheet.create({
  iconView: {
    padding: 10,
    height: 45,
    width: 45,
    marginTop: 22,
    borderRadius: 30,
  }
})