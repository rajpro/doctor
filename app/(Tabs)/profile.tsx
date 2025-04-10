import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Profile() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Profile</Text>
    </View>
  );
}
