import Department from "@/components/Department";
import Feeds from "@/components/Feeds";
import Header from "@/components/header";
import LatestDoctor from "@/components/LatestDoctor";
import Search from "@/components/search";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
      }}
    >
      <Header />
      <Search />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flexDirection: "row",
          marginVertical: 20
        }}>
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Department</Text>
          <TouchableOpacity>
            <Text style={{ color: "#bfbfbf" }}>See All</Text>
          </TouchableOpacity>
        </View>

        <Department />

        <View style={{
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Latest Doctor Post</Text>
          <TouchableOpacity>
            <Text style={{ color: "#bfbfbf" }}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 160 }}>
          <LatestDoctor />
        </View>
        <View style={{
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Emergency Feed Post</Text>
          <TouchableOpacity>
            <Text style={{ color: "#bfbfbf" }}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 160 }}>
          <Feeds />
        </View>
      </ScrollView>
    </View>
  );
}
