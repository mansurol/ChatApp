import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../Screen/HomePage";
import ChattingScreen from "../Components/ChattingScreen";

const Stack = createNativeStackNavigator();
export default function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Chatting" component={ChattingScreen} />
    </Stack.Navigator>
  );
}
