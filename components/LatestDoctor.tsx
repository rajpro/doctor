import { useDoctorHook } from "@/hooks/useDoctorContext";
import React, { useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from "react-native";
import DoctorsCard from "./Cards/doctors";

export default function LatestDoctor() {
    const windowWidth = Dimensions.get('window').width;
    const boxWidth = (windowWidth - (150));
    const { loading, doctors, getLatestDoctor } = useDoctorHook();

    useEffect(() => {
        getLatestDoctor();
    },[]);
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {!loading ? (
                <ActivityIndicator size="large" color="#a6252a" />
            ) : doctors && doctors.length > 0 ? (
                doctors.map((doctor: any, index: number) => (
                    <View key={index} style={{ marginBottom: 15, marginRight:15, width: boxWidth}}>
                        <DoctorsCard doctor={doctor} />
                    </View>
                ))
            ) : (
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text>No Record Found</Text>
                </View>
            )}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
    }
});