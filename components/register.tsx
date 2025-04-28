import {useProfileHook } from "@/hooks/useProfileHook";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, Button, TextInput } from "react-native";

export default function RegisterScreen() {
    const { username, password, mobile, fullName, setUsername, setPassword, setFullName, setMobile, Register } = useProfileHook();

    return (
        <View
            style={styles.container}
        >
            <Image
                source={require('../assets/images/icon.jpg')}
                style={styles.image} />
            <Text style={{ fontSize: 28, fontWeight: 600, marginTop: 15 }}>Odisha Doctors</Text>

            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Full Name"
                    placeholderTextColor="#aaa"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    value={username}
                    onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="call-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Mobile No."
                    placeholderTextColor="#aaa"
                    keyboardType="phone-pad"
                    value={mobile}
                    onChangeText={setMobile}
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={Register}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        width: "90%",
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
    },
    button: {
        backgroundColor: '#a6252a',
        paddingVertical: 16,
        paddingHorizontal: 25,
        borderRadius: 25,
        width: "90%",
        elevation: 3, // adds shadow on Android
        shadowColor: '#000', // adds shadow on iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 25
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: "center",
    },
});