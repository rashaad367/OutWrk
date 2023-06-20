import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

type UserSettingsProps = {
  navigation: NavigationProp<Record<string, object>>;
};

const UserSettings = ({ navigation }: UserSettingsProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Settings</Text>
      <View style={styles.extraSmallBlock}>
        <Button
          title="My profile"
          onPress={() => navigation.navigate({ name: "Profile", params: {} })}
        />
      </View>
      <View style={styles.extraSmallBlock}>
        <Button
          title="Units of Measurement"
          onPress={() =>
            navigation.navigate({ name: "UnitMeasurements", params: {} })
          }
        />
      </View>

      <View style={styles.mediumBlock}>
        <Button title="Help" />
        <Button title="Rate the app" />
        <Button
          title="What's new"
          onPress={() => navigation.navigate({ name: "WhatsNew", params: {} })}
        />
      </View>
    </View>
  );
};

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
  mediumBlock: {
    width: 340,
    height: 232,
    backgroundColor: "#d9d9d9",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default UserSettings;
