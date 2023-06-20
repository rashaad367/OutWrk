import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Settings } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Progress from "../../views/progress/Progress";

const Stack = createNativeStackNavigator();

export default function ProgressStack() {
  return (
    <Stack.Navigator>
      {/* Progress*/}
      <Stack.Screen name="Progress" component={Progress} />
    </Stack.Navigator>
  );
}
