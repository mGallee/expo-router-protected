import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function CreatorLayout() {
    return (
        <Stack initialRouteName="index">
            <Stack.Screen name="index" />
            <Stack.Screen name="campaign-details/[id]/index" />
        </Stack>
    );
}
