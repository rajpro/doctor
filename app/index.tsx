import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <View style={{
        height: 200,
        backgroundColor: "#3498db",
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: "center",
        paddingTop: 20
      }}>
        <View style={{
          flexDirection: "row",
          position: "relative"
        }}>
          <TextInput
            style={{
              width: '80%',
              backgroundColor: "#FFFFFF",
              borderRadius: 20,
              fontSize: 18,
              paddingHorizontal: 10
            }}
            placeholder="Search Doctors"
          />
          <TouchableOpacity onPress={() => { }} style={{
            position: "absolute",
            right: 10,
            top: 10
          }}>
            <Ionicons name="search-outline" size={20} color="#888" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
