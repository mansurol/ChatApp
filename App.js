import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNav from "./Src/Navigation/StackNav";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./Src/Screen/HomePage";
import ChattingScreen from "./Src/Components/ChattingScreen";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <NavigationContainer>
        <StackNav />
        {/* <ChattingScreen /> */}
      </NavigationContainer>
    </View>
  );
}
