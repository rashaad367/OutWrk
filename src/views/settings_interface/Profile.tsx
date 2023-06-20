import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

function Profile() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>My profile</Text>
      <View style={styles.profileCircle}></View>
      <Text>Profile</Text>
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
  mediumBlock: {
    width: 340,
    height: 232,
    backgroundColor: "#d9d9d9",
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#d9d9d9",
  },
});

export default Profile;
