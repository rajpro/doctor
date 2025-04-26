import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView, View, Text } from "react-native";
import { Stack, useLocalSearchParams } from 'expo-router';
import DoctorsCard from "@/components/Cards/doctors";
import { DoctorProvider, useDoctorHook } from "@/hooks/useDoctorContext";


export default function DoctorScreen() {
  const { name } = useLocalSearchParams();
  return (
    <DoctorProvider>
      <Doctors name={String(name)}/>
    </DoctorProvider>
  );
}

interface DoctorProps {
  name?: string;
}
export function Doctors({name}: DoctorProps) {
  const { loading, doctors, getDoctor, getDoctorByDepartment } = useDoctorHook();

  useEffect(() => {
    if (name == "undefined") {
      getDoctor();
    } else {
      getDoctorByDepartment(String(name));
    }
  }, []);


  return (
    <>
      <Stack.Screen options={{
        title: name != "undefined" ? String(name) : 'Doctors', headerShown: true, headerTintColor: "#fff", headerStyle: {
          backgroundColor: "#a6252a",
        }
      }} />

      <ScrollView style={{ marginHorizontal: 20, marginVertical: 10 }} showsVerticalScrollIndicator={false}>
        {!loading ? (
          <ActivityIndicator size="large" color="#a6252a" />
        ) : doctors && doctors.length > 0 ? (
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
      </ScrollView>
    </>
  );
}