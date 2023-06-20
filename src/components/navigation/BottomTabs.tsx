{
  /* Bottom Material Navigator*/
}

import React from "react";
import { Text, View } from "react-native";
import NavigationContainer from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Days from "../../views/workouts/Days";
import Exercises from "../../views/exercises/Exercises";
import Progress from "../../views/progress/Progress";
import UserSettings from "../../views/settings_interface/UserSettings";
import WorkoutsStack from "./WorkoutsStack";
import ExercisesStack from "./ExcersisesStack";
import ProgressStack from "./ProgresStack";
import SettingsStack from "./SettingsStack";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="WorkoutsDaysTab"
      activeColor="#fff"
      barStyle={{ backgroundColor: "#000" }}
    >
      <Tab.Screen
        name="WorkoutDaysTab"
        component={WorkoutsStack}
        options={{
          tabBarLabel: "Workouts",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ExercisesTab"
        component={ExercisesStack}
        options={{
          tabBarLabel: "Exercises",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="UserSettingsTab"
        component={ProgressStack}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={SettingsStack}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
