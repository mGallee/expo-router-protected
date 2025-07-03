import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function Screen() {
    return (
        <View>
            <Text>Guest index</Text>
            <Link href={{
                pathname: '/campaign-details/[id]',
                params: {
                    id: '123'
                }
            }}>Go to campaign details 123</Link>
        </View>
    )
}