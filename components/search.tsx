import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Search() {
  return (
    <View
      style={styles.container}
    >
        <Ionicons name="search" style={styles.searchIcon}/>
        <TextInput placeholder="Search" style={styles.search}/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: "relative",
        height: 40
    },
    searchIcon:{
        position: "absolute",
        top:8,
        left:0,
        fontSize:20,
        color: "#2e2e2e",
        zIndex:1,
        marginLeft:10
    },
    search: {
        backgroundColor: "#FFF",
        flex:1,
        borderRadius: 5,
        paddingLeft: 40
    }
});