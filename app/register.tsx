import RegisterScreen from "@/components/register";
import { ProfileProvider } from "@/hooks/useProfileHook";
import React from "react";
import { View } from "react-native";

export default function Register() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ProfileProvider>
        <RegisterScreen />
      </ProfileProvider>
    </View>
  );
}
