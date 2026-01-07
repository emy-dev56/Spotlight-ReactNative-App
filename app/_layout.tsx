import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "Home", headerShown: false }} />
          <Stack.Screen name="notification" options={{ title: "Notification"}} />
          <Stack.Screen name="profile" options={{ title: "Profile" }} />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
