import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Settings } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../views/start_interface/Login";
import SignUp from "../../views/start_interface/SignUp";
import General from "../../views/profile_info/General";
import Split from "../../views/create_workout/Split";
import WorkoutDuration from "../../views/create_workout/WorkoutDuration";
import Days from "../../views/workouts/Days";
import Details from "../../views/workouts/Details";
import EachExercise from "../../views/workouts/EachExercise";
import ExerciseToAdd from "../../views/workouts/add_exercise/ExerciseToAdd";
import Exercises from "../../views/exercises/Exercises";
import Progress from "../../views/progress/Progress";
import UserSettings from "../../views/settings_interface/UserSettings";
import Profile from "../../views/settings_interface/Profile";
import UnitMeasurements from "../../views/settings_interface/UnitMeasurements";
import WhatsNew from "../../views/settings_interface/WhatsNew";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      {/* Profile Informaiton */}
      <Stack.Screen name="General" component={General} />
    </Stack.Navigator>
  );
}
