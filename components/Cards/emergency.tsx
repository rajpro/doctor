import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface EmergencyCardProps {
  posts: {
      _id: string;
      post?: string;
      user_detail: {
        user_name: string,
        _id: string
      }
  };
}

export default function EmergencyCard({ posts }: EmergencyCardProps) {

  return (
    <>
        <View style={{flexDirection: "row", marginTop:20, borderBottomWidth:1, paddingBottom:10, borderBottomColor: "#acacac"}}>
          
          <View style={{flex:1}}>
            <Text style={{fontWeight:600, marginBottom:5}}>{posts.user_detail.user_name}</Text>
            <Text style={{color: "#868686"}}>{posts.post}</Text>

            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop:10}}>
              <View style={{flexDirection: "row"}}>
                <Ionicons name="chatbubble-outline" style={{fontSize: 14, marginRight:3, color: "#868686"}}/>
                <Text style={{fontSize: 14, color: "#868686"}}>26K</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <Ionicons name="heart-outline" style={{fontSize: 14, marginRight:3, color: "#868686"}}/>
                <Text style={{fontSize: 14, color: "#868686"}}>26K</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <Ionicons name="share-social-outline" style={{fontSize: 14, marginRight:3, color: "#868686"}}/>
                <Text style={{fontSize: 14, color: "#868686"}}>26K</Text>
              </View>
            </View>
          </View>
        </View>
    </>
  );
}