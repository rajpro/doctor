import { useProfileHook } from "@/hooks/useProfileHook";
import { getToken } from "@/storage";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, Button, TextInput } from "react-native";

export default function ProfileScreen() {
    const {Logout} = useProfileHook();
    const [role, setRole] = useState("");
    useEffect(() => {
        v();
    }, []);

    const v = async ()  => {
        const r = await getToken("role");
        setRole(String(r));
    };
    
    

    return (
        <View
            style={styles.container}
        >
            <View style={{ alignItems: "center", marginTop: 25 }}>
                <Image
                    source={require('../assets/images/icon.png')}
                    style={styles.image} />
                <Text style={{ fontSize: 28, fontWeight: 600, marginTop: 15 }}>Rajesh Sardar</Text>
                <Text style={{ fontSize: 16, fontWeight: 400 }}>Customer</Text>
            </View>
            <View style={{ width: "100%"}}>
                <Image
                    source={require('../assets/images/profileseparetor.png')}
                    style={{width:"100%" }} 
                    resizeMode= "contain"
                    />
            </View>

            <View>
                <TouchableOpacity>
                    <View style={[styles.listTilesContainer, {borderTopWidth:1, borderTopColor: "#fafafa"}]}>
                        <Ionicons name="person-outline" style={styles.listTilesIcon} />
                        <Text style={styles.listTilesText}>My Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    router.push('/favorite');
                }}>
                    <View style={styles.listTilesContainer}>
                        <Ionicons name="heart-outline" style={styles.listTilesIcon} />
                        <Text style={styles.listTilesText}>Saved</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.listTilesContainer}>
                        <Ionicons name="settings-outline" style={styles.listTilesIcon} />
                        <Text style={styles.listTilesText}>Setting</Text>
                    </View>
                </TouchableOpacity>
                {role == "admin"? (<TouchableOpacity onPress={()=>{router.push('/add_doctor')}}>
                        <View style={styles.listTilesContainer}>
                            <Ionicons name="people-outline" style={styles.listTilesIcon} />
                            <Text style={styles.listTilesText}>Add Doctor</Text>
                        </View>
                    </TouchableOpacity>):(<></>)}
                <TouchableOpacity onPress={Logout}>
                    <View style={styles.listTilesContainer}>
                        <Ionicons name="log-out-outline" style={styles.listTilesIcon} />
                        <Text style={styles.listTilesText}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    listTilesContainer: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        flexDirection: "row",
        borderBottomColor: "#fafafa",
        borderBottomWidth:1
    },
    listTilesIcon: {
        fontSize: 20,
        marginRight: 35
    },
    listTilesText: {
        fontSize: 20
    }
});