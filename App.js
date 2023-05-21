import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import HomeScreen from "./Navigation/HomeScreen";
import AddDog from "./Navigation/AddDog";
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="blue"
        inactiveColor="#3e2465"
        barStyle={{ paddingBottom: 0 }}
      >
        <Tab.Screen
          name="Dogs"
          component={HomeScreen}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="dog" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AddDog"
          component={AddDog}
          options={{
            tabBarLabel: "Add a Dog",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
