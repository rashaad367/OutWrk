import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

type ExercisesProps = {
  navigation: NavigationProp<Record<string, object>>;
};

const Exercises = ({ navigation }: ExercisesProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>My Exercises</Text>
      {/* Same page add exercise*/}
      <View style={styles.wrapperBlock}>
        <Button
          title="Add new exercise"
          onPress={() => navigation.navigate({ name: "Exercises", params: {} })}
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
  wrapperBlock: {
    width: 340,
    height: 491,
    backgroundColor: "#d9d9d9",
    marginTop: 20,
    borderRadius: 20,
    alignItems: "center",
  },
});

export default Exercises;
