import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function addEmergency() {
    return (<>
        <Stack.Screen options={{
            title: '', headerShown: true, headerTintColor: "#fff", headerStyle: {
                backgroundColor: "#a6252a",

            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 10 }}>
                  <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Cancel</Text>
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => {/* your submit logic here */}} style={{ marginRight: 10 }}>
                  <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>Post</Text>
                </TouchableOpacity>
              ),
        }} />
        <View style={{ marginHorizontal: 20, flex: 1 }} >
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    style={styles.input}
                    placeholder="What's happening?"
                    placeholderTextColor="#aaa"
                    
                />
            </View>
        </View>
    </>);
}

const styles = StyleSheet.create({
    
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        minHeight: "90%",
        alignItems: "flex-start",
        paddingHorizontal: 10,
        borderRadius: 10,
        height: 50,
        marginTop: 20,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1, // takes up the rest of the space
        fontSize: 16,
        color: '#333',
        height: "90%"
    }
});