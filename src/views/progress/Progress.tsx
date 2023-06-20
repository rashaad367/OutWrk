import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

function Progress() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Finished workouts</Text>
      <View style={styles.smallBlock}></View>
      <Text>Progress graph</Text>
      <View style={styles.mediumBlock}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 96,
  },
  grayBlock: {
    width: 129,
    height: 6,
    backgroundColor: "#d9d9d9",
  },
  smallBlock: {
    width: 340,
    height: 120,
    backgroundColor: "#d9d9d9",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  mediumBlock: {
    width: 340,
    height: 314,
    backgroundColor: "#d9d9d9",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default Progress;
