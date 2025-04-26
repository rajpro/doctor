import Department from "@/components/Department";
import FeedsScreen from "@/components/Feeds";
import Header from "@/components/header";
import LatestDoctor from "@/components/LatestDoctor";
import Search from "@/components/search";
import { DoctorProvider } from "@/hooks/useDoctorContext";
import { PostProvider } from "@/hooks/usePostContext";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
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
        </View>

        <Department />

        <View style={{
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Latest Doctor</Text>
          <TouchableOpacity onPress={() => {
            router.push('/doctors');
          }}>
            <Text style={{ color: "#bfbfbf" }}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 160 }}>
          <DoctorProvider>
            <LatestDoctor />
          </DoctorProvider>
        </View>
        <View style={{
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Emergency Feed Post</Text>
          <TouchableOpacity
            onPress={() => {
              router.push('/emergency');
            }}
          >
            <Text style={{ color: "#bfbfbf" }}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 160 }}>
          <PostProvider>
            <FeedsScreen />
          </PostProvider>
        </View>
      </ScrollView>
    </View>
  );
}