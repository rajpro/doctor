import LoginScreen from "@/components/Login";
import ProfileScreen from "@/components/Profile";
import { useProfileHook, ProfileProvider } from "@/hooks/useProfileHook";
import React from "react";
import { View } from "react-native";

export default function Profile() {
  return (
    <ProfileProvider>
      <View style={{ flex: 1 }}>
        <ProfileScreens />
      </View>
    </ProfileProvider>
  );
}

export function ProfileScreens() {
  const { loginStatus } = useProfileHook();

  if(loginStatus == true){
    return (<ProfileScreen />);
  }else{
    return (<LoginScreen />);
  }
}