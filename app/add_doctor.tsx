import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Constant } from "@/constants/Constant";

export default function addDoctor() {
    const [modalVisible, setModalVisible] = useState(false);
    const [deptOpen, setDeptOpen] = useState(false);
    const [deptValue, setDeptValue] = useState(null);
    const [deptItems, setDeptItems] = useState([{}]);

    const [regOpen, setRegOpen] = useState(false);
    const [regValue, setRegValue] = useState(null);
    const [regItems, setRegItems] = useState([{}]);

    useEffect(() => {
        department();
        region();
    }, []);

    const department = () => {
        const v = Constant.department.map((value) => ({
            label: value.title,
            value: value.title,
        }));
        setDeptItems(v);
    }

    const region = () => {
        const v = Constant.odisha_districts.map((value) => ({
            label: value,
            value: value,
        }));
        setRegItems(v);
    }

    return (<>
        <Stack.Screen options={{
            title: 'Add Doctor', headerShown: true, headerTintColor: "#fff", headerStyle: {
                backgroundColor: "#a6252a",
            },
        }} />
        <View style={{ marginHorizontal: 20, flex: 1 }} >
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Doctor Name"
                    placeholderTextColor="#aaa"
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Doctor Email"
                    placeholderTextColor="#aaa"
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Doctor Mobile"
                    placeholderTextColor="#aaa"
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.icon} />
                <View style={{ flex: 1 }}>
                    <DropDownPicker
                        zIndex={2000}
                        zIndexInverse={1000}
                        open={deptOpen}
                        value={deptValue}
                        items={deptItems}
                        setOpen={setDeptOpen}
                        setValue={setDeptValue}
                        setItems={setDeptItems}
                        placeholder="Select Department"
                        style={{
                            borderWidth: 0,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: "#ccc"
                        }}
                        textStyle={{ color: '#000' }}
                        dropDownContainerStyle={{ borderColor: '#ccc' }}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={24} color="#666" style={styles.icon} />
                <View style={{ flex: 1 }}>
                    <DropDownPicker
                        zIndex={1000}
                        zIndexInverse={2000}
                        open={regOpen}
                        value={regValue}
                        items={regItems}
                        setOpen={setRegOpen}
                        setValue={setRegValue}
                        setItems={setRegItems}
                        placeholder="Select Location"
                        style={{
                            borderWidth: 0,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: "#ccc"
                        }}
                        textStyle={{ color: '#000' }}
                        dropDownContainerStyle={{ borderColor: '#ccc' }}
                    />
                </View>
            </View>
            <View style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: '#ccc', paddingHorizontal: 10, borderRadius: 10, marginTop: 20 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomColor: "#ccc", borderBottomWidth: 1 }}>
                    <Text>Days</Text>
                    <Text>Open</Text>
                    <Text>Close</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                    <Text>Mon</Text>
                    <Text>9AM</Text>
                    <Text>2PM</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                    <Text>Wed</Text>
                    <Text>9AM</Text>
                    <Text>2PM</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                    <Text>Sat</Text>
                    <Text>9AM</Text>
                    <Text>2PM</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}}>
                <Text style={{padding: 10, borderRadius:10, backgroundColor: "blue", textAlign: "center", color: "#FFF", fontSize: 16, fontWeight: 600, marginTop: 20}}>Add Timing</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={{flex: 1}}>
                    <View >
                        <Text >Hello World!</Text>
                        <TouchableOpacity onPress={() => {
                            setModalVisible(!modalVisible)
                        }}>
                            <Text >Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    </>);
}

const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
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