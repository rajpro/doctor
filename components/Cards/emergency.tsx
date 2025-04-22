import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function EmergencyCard() {

  return (
    <>
        <View style={{flexDirection: "row", marginTop:20, borderBottomWidth:1, paddingBottom:10, borderBottomColor: "#acacac"}}>
          
          <View style={{flex:1}}>
            <Text style={{fontWeight:600, marginBottom:5}}>Rajesh Sardar</Text>
            <Text style={{color: "#868686"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus elit quis mauris feugiat vehicula. Mauris in nulla eu augue condimentum volutpat at vitae nulla. Quisque tempus condimentum lacinia. Curabitur vel ante ut lectus pharetra pretium ac nec tortor. Etiam eu vulputate purus. Morbi in dui ultrices, condimentum libero vitae, viverra arcu. Vestibulum porta facilisis ligula, et pharetra nisl faucibus at. Mauris quis posuere magna. Pellentesque pretium tincidunt gravida. Sed hendrerit augue vel elit porttitor, quis ultricies ante vestibulum. Fusce est erat, ultricies nec lectus quis, posuere iaculis nibh. Vivamus sodales pharetra sollicitudin.</Text>

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