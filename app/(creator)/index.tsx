import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function Screen() {
    return (
        <View style={{ padding: 25, gap: 25 }}>
            <Text>Creator index</Text>
            <Link style={{ textDecorationStyle: 'solid', textDecorationLine: 'underline' }}
                  href={{
                pathname: '/campaign-details/[id]',
                params: {
                    id: '123'
                }
            }}>Go to campaign details 123</Link>
        </View>
    )
}