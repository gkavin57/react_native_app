import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-2xl font-rubik-bold">WElcome to my app</Text>
      <Link href="/sign-in">sign-in</Link>
      <Link href="/explore">explore</Link>
      <Link href="/profile">profie</Link>
    </View>
  );
}
