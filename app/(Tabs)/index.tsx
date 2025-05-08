import Department from "@/components/Department";
import FeedsScreen from "@/components/Feeds";
import Header from "@/components/header";
import LatestDoctor from "@/components/LatestDoctor";
import Search from "@/components/search";
import { DoctorProvider } from "@/hooks/useDoctorContext";
import { PostProvider } from "@/hooks/usePostContext";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import React, { useCallback, useMemo, useRef } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handleSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);

  const handleOpenPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(1); // open to 50%
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (<>
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
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
          <Text style={{ fontSize: 18, fontWeight: 600, flexGrow: 1 }}>Latest Doctor</Text>
          <TouchableOpacity onPress={() => {
            router.push('/doctors');
          }}>
            <Text style={{ color: "#bfbfbf" }}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 160 }}>
          <DoctorProvider>
            <LatestDoctor />
          </DoctorProvider>
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
          <PostProvider>
            <FeedsScreen />
          </PostProvider>
        </View>
      </ScrollView>
    </View>

    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
    >
      <BottomSheetView >
        <Text>Awesome 🎉</Text>
      </BottomSheetView>
    </BottomSheet>
  </>);
}