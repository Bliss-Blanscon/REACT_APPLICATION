import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl text-light-300 font-bold">Welcome Y'all</Text>
      <Link href="/onboarding">Onboarding</Link>
      <Link href="/movie/avangers">Avanger Movie</Link>
    </View>
  );
}
