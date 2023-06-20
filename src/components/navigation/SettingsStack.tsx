import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserSettings from "../../views/settings_interface/UserSettings";
import Profile from "../../views/settings_interface/Profile";
import UnitMeasurements from "../../views/settings_interface/UnitMeasurements";
import WhatsNew from "../../views/settings_interface/WhatsNew";

const Stack = createNativeStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator initialRouteName="UserSettings">
      {/* Settings Interface*/}
      <Stack.Screen name="UserSettings" component={UserSettings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="UnitMeasurements" component={UnitMeasurements} />
      <Stack.Screen name="WhatsNew" component={WhatsNew} />
    </Stack.Navigator>
  );
}
