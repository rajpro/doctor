import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, Button, TextInput } from "react-native";

export default function LoginScreen() {

    return (
        <View
            style={styles.container}
        >
            <Image
                source={require('../assets/images/icon.jpg')}
                style={styles.image} />
            <Text style={{ fontSize: 28, fontWeight: 600, marginTop: 15 }}>Odisha Doctors</Text>
            <Text style={{ fontSize: 28, fontWeight: 600, marginTop: 35 }}>Hi, Welcome Back!</Text>
            <Text style={{ fontSize: 18, fontWeight: 400 }}>Hope you're doing fine.</Text>

            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#aaa"
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#aaa"
                    secureTextEntry={true}
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={{position:"relative", width:"90%", alignItems:"center", marginVertical:25}}>
                <Text style={{textAlign:"center", backgroundColor:"#fff", zIndex:1, width:60}}>or</Text>
                <View style={{position:"absolute", width: "100%", borderBottomWidth:1, borderColor:"#acacac", bottom:5, left:0}}></View>
            </View>
            
            <TouchableOpacity>
                <Text style={{ color: "#1877F2" }}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row", marginTop:15}}>
                <Text>Don't have an account yet? </Text>
                <TouchableOpacity>
                    <Text style={{ color: "#1877F2" }}>Sign Up</Text>
                </TouchableOpacity>
            </View>
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