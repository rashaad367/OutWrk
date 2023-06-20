import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

function UnitMeasurements() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Units of Measurements</Text>
      <View style={styles.extraSmallBlock}></View>
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
  extraSmallBlock: {
    width: 340,
    height: 66,
    backgroundColor: "#d9d9d9",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default UnitMeasurements;
