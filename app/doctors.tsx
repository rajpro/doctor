import React from "react";
import { ScrollView, View } from "react-native";
import { Stack, useLocalSearchParams } from 'expo-router';
import DoctorsCard from "@/components/Cards/doctors";

export default function Doctors() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{
        title: name ? String(name) : 'Doctors', headerShown: true, headerTintColor: "#fff", headerStyle: {
          backgroundColor: "#a6252a",
        }
      }} />

      <ScrollView style={{ margin: 20 }} showsVerticalScrollIndicator={false}>
        <View style={{marginBottom:15}}>
          <DoctorsCard />
        </View>
        <View style={{marginBottom:15}}>
          <DoctorsCard />
        </View>
      </ScrollView>
    </>
  );
}
