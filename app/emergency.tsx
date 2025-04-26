import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { router, Stack } from 'expo-router';
import EmergencyCard from "@/components/Cards/emergency";
import { PostProvider, usePostHook } from "@/hooks/usePostContext";
import { Ionicons } from "@expo/vector-icons";
import emitter from "@/utils/events";

export default function EmergencyScreen() {
  return (
    <PostProvider>
      <Emergency />
    </PostProvider>
  );
}

export function Emergency() {
  const { loading, post, getPost } = usePostHook();

  useEffect(() => {
    getPost();
    emitter.on("refreshFeed", getPost);
    return () => {
      emitter.off("refreshFeed", getPost);
    };

  }, []);

  return (
    <>
      <Stack.Screen options={{
        title: 'Emergency', headerShown: true, headerTintColor: "#fff", headerStyle: {
          backgroundColor: "#a6252a",

        }
      }} />

      <ScrollView style={{ marginHorizontal: 20, marginVertical: 10 }} showsVerticalScrollIndicator={false}>
        {!loading ? (
            <ActivityIndicator size="large" color="#a6252a" />
        ): post && post.length > 0 ? (
            post.map((p: any, index: number) => (
              <View key={index} style={{ marginBottom: 15 }}>
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

      <TouchableOpacity onPress={() => {
        router.push("/add_emergency");
      }}>
        <View style={{
          position: "absolute", bottom: 30, right: 20, width: 50, height: 50, backgroundColor: "#a6252a",
          borderRadius: 50, justifyContent: "center", alignItems: "center"
        }}>
          <Ionicons name="add-outline" style={{ fontSize: 26, color: "white" }} />
        </View>
      </TouchableOpacity>
    </>
  );
}