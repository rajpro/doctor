import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, ScrollView } from "react-native";

export default function Feeds() {
    const windowWidth = Dimensions.get('window').width;
    const boxWidth = (windowWidth - (150));

    const sections = [
        { title: "Sunrise Health Clinic" },
        { title: "Golden Cardiology" },
    ];
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator= {false}
            style={styles.container}
        >
            {sections.map((section, index) => (
                <View
                    key={index}
                    style={[styles.section, { width: boxWidth }]}
                >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flexGrow: 1, fontSize:20, fontWeight:600 }}>{section.title}</Text>
                        <Ionicons name="heart-outline" style={{ backgroundColor: "#ccc", color:"#fff", padding: 5, borderRadius: 50 }} />
                    </View>
                    <View style={{ flexDirection: "row", paddingVertical:10}}>
                        <Ionicons name="location-outline" style={{marginTop:5, marginRight:5, color:"#ccc"}}/>
                        <Text style={{ flexGrow: 1, fontSize:18, color:"#ccc" }}>{section.title}</Text>
                    </View>
                    <View style={styles.hr}></View>

                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name="location-outline" style={{marginTop:2, marginRight:3, color:"#ccc"}}/>
                            <Text style={{ flexGrow: 1, color:"#ccc" }}>2.5 Km/40min</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name="location-outline" style={{marginTop:2, marginRight:3, color:"#ccc"}}/>
                            <Text style={{ flexGrow: 1, color:"#ccc"}}>Hospital</Text>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        marginBottom:25
    },
    section: {
        borderRadius: 5,
        borderColor: '#cccccc',
        borderWidth: 1,
        marginRight: 20,
        padding: 10
    },
    hr: {
        borderBottomWidth: 1,
        borderColor: "#cccccc",
        marginVertical: 10
    }
});