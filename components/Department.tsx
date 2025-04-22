import { Constant } from "@/constants/Constant";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

export default function Department() {
    const windowWidth = Dimensions.get('window').width;
    const boxWidth = (windowWidth - (20 + 20 + 20 + 20 + 20)) / 4;

    const sections = Constant.department;

    return (
        <View
            style={styles.container}
        >
            {sections.map((section, index) => (
                <View key={index} style={{marginBottom:20}}>
                    <TouchableOpacity onPress={() => {
                        router.push({
                            pathname: '/doctors',
                            params: { name: section.title },
                          });
                    }}>
                    <View
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
                    </TouchableOpacity>
                    <Text style={[styles.sectionTitle, {maxWidth: boxWidth}]} numberOfLines={1}
  ellipsizeMode="tail">{section.title}</Text>
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