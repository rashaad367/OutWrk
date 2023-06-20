import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Settings } from "react-native";
import React from "react";
import MyNavigatorStack from "./src/components/navigation/StartStack";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import Bottom from "./src/components/Bottom";
import BottomTabs from "./src/components/navigation/BottomTabs";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
      {/* Bottom Material Navigator*/}
      <Bottom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
