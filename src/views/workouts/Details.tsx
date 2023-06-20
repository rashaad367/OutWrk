import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";

type DetailsProps = {
  navigation: NavigationProp<Record<string, object>>;
};

const Details = ({ navigation }: DetailsProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Day 1 - Upper Body</Text>
      <View style={styles.wrapperBlock}>
        <Button
          title="Add exercise"
          onPress={() =>
            navigation.navigate({ name: "ExerciseToAdd", params: {} })
          }
        />
      </View>
      <Button
        title="Start"
        onPress={() =>
          navigation.navigate({ name: "EachExercise", params: {} })
        }
      />
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

export default Details;
