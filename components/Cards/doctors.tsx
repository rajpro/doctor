import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DoctorsCard() {

    return (
        <>
            <View style={{borderRadius: 5, borderColor: '#cccccc', borderWidth: 1, padding: 10}}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ flexGrow: 1, fontSize: 20, fontWeight: 600 }}>Sunrise Health Clinic</Text>
                    <Ionicons name="heart-outline" style={{ backgroundColor: "#ccc", color: "#fff", padding: 5, borderRadius: 50 }} />
                </View>
                <View style={{ flexDirection: "row", paddingVertical: 10 }}>
                    <Ionicons name="location-outline" style={{ marginTop: 5, marginRight: 5, color: "#ccc" }} />
                    <Text style={{ flexGrow: 1, fontSize: 18, color: "#ccc" }}>Address</Text>
                </View>
                <View style={{borderBottomWidth: 1, borderColor: "#cccccc", marginVertical: 10}}></View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="location-outline" style={{ marginTop: 2, marginRight: 3, color: "#ccc" }} />
                        <Text style={{ flexGrow: 1, color: "#ccc" }}>2.5 Km/40min</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="location-outline" style={{ marginTop: 2, marginRight: 3, color: "#ccc" }} />
                        <Text style={{ flexGrow: 1, color: "#ccc" }}>Hospital</Text>
                    </View>
                </View>
            </View>
        </>
    );
}