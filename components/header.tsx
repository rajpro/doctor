import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import BottomSheet from '@gorhom/bottom-sheet';

export default function Header() {
  const router = useRouter();
  

  return (
    <View
      style={styles.container}
    >
      
      <View style={{ flexGrow: 1 }}>
        <Text style={styles.location}>Location</Text>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="location" style={styles.locationIcon} />
          <Text style={styles.h3}>Bhubaneswar, Odisha</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => {
          router.push("/login");
        }}>
          <Image source={require('../assets/images/dicon.jpg')} style={{width:50, height:50}}/>
        </TouchableOpacity>
      </View>

      
    </View>
  );
}

// odisha_districts

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 15
  },
  location: {
    fontSize: 18,
    color: '#a1a1a1'
  },
  locationIcon: {
    fontSize: 20
  },
  h3: {
    fontSize: 18
  }
});