import LoginScreen from "@/components/Login";
import ProfileScreen from "@/components/Profile";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* <LoginScreen /> */}
      <ProfileScreen />
      
    </View>
  );
}
