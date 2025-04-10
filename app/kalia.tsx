import Department from "@/components/Department";
import Feeds from "@/components/Feeds";
import Header from "@/components/header";
import LatestDoctor from "@/components/LatestDoctor";
import Search from "@/components/search";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Kalia() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <Text>Profile</Text>
    </View>
  );
}
