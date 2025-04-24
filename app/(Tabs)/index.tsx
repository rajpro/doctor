import Department from "@/components/Department";
import Feeds from "@/components/Feeds";
import Header from "@/components/header";
import LatestDoctor from "@/components/LatestDoctor";
import Search from "@/components/search";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleOpen = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  return (
    <BottomSheetModalProvider>
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#fff"
      }}
    >
      <Header />
      <Search />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
          flexDirection: "row",
          marginVertical: 20
        }}>
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Department</Text>
        </View>

        <Department />

        <View style={{
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Latest Doctor Post</Text>
          <TouchableOpacity onPress={() => {
            router.push('/doctors');
          }}>
            <Text style={{ color: "#bfbfbf" }}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 160 }}>
          <LatestDoctor />
        </View>
        <View style={{
          flexDirection: "row",
          marginBottom: 20
        }}>
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Emergency Feed Post</Text>
          <TouchableOpacity
            onPress={() => {
              router.push('/emergency');
            }}
          >
            <Text style={{ color: "#bfbfbf" }}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 160 }}>
          <Feeds />
        </View>
      </ScrollView>

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        backdropComponent={() => null}
        enablePanDownToClose={true}
      >
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>👋 Hello from the Bottom Sheet!</Text>
        </View>
      </BottomSheetModal>
    </View>
    </BottomSheetModalProvider>
  );
}
