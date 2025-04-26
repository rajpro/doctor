import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from "react-native";
import EmergencyCard from "./Cards/emergency";
import { usePostHook } from "@/hooks/usePostContext";

export default function FeedsScrean() {
    const windowWidth = Dimensions.get('window').width;
    const boxWidth = (windowWidth - (150));
    const { loading, post, getLatestPost } = usePostHook();

    useEffect(() => {
        getLatestPost();
    }, []);
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {!loading ? (
                <ActivityIndicator size="large" color="#a6252a" />
            ) : post && post.length > 0 ? (
                post.map((p: any, index: number) => (
                    <View key={index} style={{ marginBottom: 15, marginRight: 15, width: boxWidth }}>
                        <EmergencyCard posts={p} />
                    </View>
                ))
            ) : (
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text>No Record Found</Text>
                </View>
            )
            }
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    }
});