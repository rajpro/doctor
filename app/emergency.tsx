import React from "react";
import { ScrollView } from "react-native";
import { Stack } from 'expo-router';
import EmergencyCard from "@/components/Cards/emergency";

export default function Emergency() {
  const status = false;

  return (
    <>
      <Stack.Screen options={{
        title: 'Emergency', headerShown: true, headerTintColor: "#fff", headerStyle: {
          backgroundColor: "#a6252a",

        }
      }} />

      <ScrollView style={{marginHorizontal: 20}} showsVerticalScrollIndicator={false}>
        <EmergencyCard />
        <EmergencyCard />
        <EmergencyCard />
        <EmergencyCard />
      </ScrollView>
    </>
  );
}
