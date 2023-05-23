import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Home from "./Navigation/Home";
import AddDog from "./Navigation/AddDog";
import RemoveDog from "./Navigation/RemoveDog";
const Tab = createMaterialBottomTabNavigator();

function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="blue"
          inactiveColor="#3e2465"
          barStyle={{ paddingBottom: 0 }}
        >
          <Tab.Screen
            name="Dogs"
            component={Home}
            options={{
              tabBarLabel: "Dogs",
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
          <Tab.Screen
            name="Remove"
            component={RemoveDog}
            options={{
              tabBarLabel: "Remove a Dog",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cancel" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
export default App;
