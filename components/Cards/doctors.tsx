import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DoctorCardProps {
    doctor: {
        name: string;
        address?: string;
        mobile: string;
        region: string;
        distance?: string;
        department?: string;
        visiting_details?: {
            day: string,
            timing: string
        }[]
    };
}

export default function DoctorsCard({ doctor }: DoctorCardProps) {
    const [saved, setSaved] = useState<boolean>(false);

    function handelSaved() {
        setSaved(true);
    }

    return (
        <>
            <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 10, elevation: 2 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flexGrow: 1, fontSize: 20, fontWeight: 600 }}>{doctor.name}</Text>
                    <TouchableOpacity onPress={handelSaved}>
                        <Ionicons name="heart-outline" style={{ backgroundColor: (saved) ? "red" : "#ccc", color: "#fff", padding: 5, borderRadius: 50 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                    <Ionicons name="location-outline" style={{ marginTop: 5, marginRight: 5, color: "#363636" }} />
                    <Text style={{ flexGrow: 1, fontSize: 16, color: "#363636" }}>{doctor.address}</Text>
                </View>
                <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                    <Ionicons name="time-outline" style={{ marginTop: 5, marginRight: 5, color: "#363636" }} />
                    <View style={{flexDirection: "column"}}>
                        {doctor.visiting_details != undefined ? (
                            doctor.visiting_details.map((data: any, index: number) => (
                                <Text key={index} style={{ flexGrow: 1, fontSize: 16, color: "#363636" }}>{data.day}: {data.timing}</Text>
                            ))
                        ) :(
                            <Text style={{ flexGrow: 1, fontSize: 16, color: "#363636" }}>{doctor.address}</Text>
                        )}
                    </View>
                </View>

                <View style={{ borderBottomWidth: 1, borderColor: "#cccccc", marginVertical: 10 }}></View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="call-outline" style={{ marginTop: 2, marginRight: 3, color: "#363636" }} />
                        <Text style={{ flexGrow: 1, color: "#363636" }}>{doctor.mobile}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="location-outline" style={{ marginTop: 2, marginRight: 3, color: "#363636" }} />
                        <Text style={{ flexGrow: 1, color: "#363636" }}>{doctor.region}</Text>
                    </View>
                </View>
            </View>
        </>
    );
}