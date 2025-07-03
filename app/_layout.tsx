import { Stack } from 'expo-router';
import 'react-native-reanimated';
import {isLoggedIn} from "@/constants/Auth";

export const unstable_settings = {
    initialRouteName: 'index',
};

export default function RootLayout() {

  return (
      <Stack initialRouteName="index">
        <Stack.Screen name="index" />
        <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="(guest)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(creator)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
