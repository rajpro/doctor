import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView, View, Text } from "react-native";
import { Stack, useLocalSearchParams } from 'expo-router';
import DoctorsCard from "@/components/Cards/doctors";
import { DoctorProvider, useDoctorHook } from "@/hooks/useDoctorContext";

export default function Doctors() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{
        title: name ? String(name) : 'Doctors', headerShown: true, headerTintColor: "#fff", headerStyle: {
          backgroundColor: "#a6252a",
        }
      }} />

      <ScrollView style={{ margin: 20}} showsVerticalScrollIndicator={false}>
        <DoctorProvider>
          <DoctorPro name={name ? String(name) : 'Doctor'} />
        </DoctorProvider>
      </ScrollView>
    </>
  );
}

interface DoctorProProps {
  name: string;
}

export function DoctorPro({ name }: DoctorProProps) {
  const { loading, doctors, getDoctor, getDoctorByDepartment } = useDoctorHook();

  useEffect(() => {
    if(name == "Doctor"){
      getDoctor();
    }else{
      getDoctorByDepartment(name);
    }
  }, []);

  if (!loading) {
    return <ActivityIndicator size="large" color="#a6252a" />;
  }

  return (
    <>
      {doctors && doctors.length > 0 ? (
        doctors.map((doctor: any, index: number) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <DoctorsCard doctor={doctor} />
          </View>
        ))
      ) : (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text>No Record Found</Text>
        </View>
      )}
    </>
  );
}