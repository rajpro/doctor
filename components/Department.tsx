import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export default function Department() {
    const windowWidth = Dimensions.get('window').width;
    const boxWidth = (windowWidth - (20 + 20 + 20 + 20 + 20)) / 4;

    const sections = [
        { color: "#dc9593", icon: "home-outline", title: "Dentristy" },
        { color: "#93c09f", icon: "mail-outline" },
        { color: "#f1ae7f", icon: "home-outline" },
        { color: "#aba1cc", icon: "home-outline" },
        { color: "#4c9c92", icon: "home-outline" },
        { color: "#332360", icon: "home-outline" },
        { color: "#dfb6b4", icon: "home-outline" },
        { color: "#86ceda", icon: "home-outline" }
    ];

    return (
        <View
            style={styles.container}
        >
            {sections.map((section, index) => (
                <View style={{marginBottom:20}}>
                    <View
                        key={index}
                        style={[
                            styles.sections,
                            {
                                backgroundColor: section.color,
                                height: boxWidth,
                                width: boxWidth,
                                marginRight: (index + 1) % 4 === 0 ? 0 : 20, // Remove marginRight on every 4th item
                            },
                        ]}
                    >
                        <View style={styles.sectionDesignOne}></View>
                        <Ionicons name={section.icon} style={styles.sectionIcons} />
                    </View>
                    <Text style={styles.sectionTitle}>{section.title || "Dentristy"}</Text>
                </View>
            ))}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    sections: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: "relative",
        overflow: "hidden"
    },
    sectionIcons: {
        color: "#f2f2f2",
        fontSize: 40
    },
    sectionDesignOne: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: "absolute",
        backgroundColor: "#fff",
        opacity: 0.2,
        top: -60,
        left: -60,
        zIndex: 1
    },
    sectionTitle: {
        marginVertical: 5
    }
});