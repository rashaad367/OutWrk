import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Settings } from "react-native";

const Bottom: React.FC = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50, // Adjust the height as per your requirements
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});

export default Bottom;
