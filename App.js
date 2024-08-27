import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FormScreen from "./screens/FormScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ title: "Formulário" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
