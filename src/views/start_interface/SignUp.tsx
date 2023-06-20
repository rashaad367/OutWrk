import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

function SignUp() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is sign up page.</Text>
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
  wrapperBlock: {
    width: 340,
    height: 491,
    backgroundColor: "#d9d9d9",
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUp;
