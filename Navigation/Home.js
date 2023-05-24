import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Home({ navigation }) {
  return (
    <View style={styles.nav}>
      <Text
        onPress={() => alert("Dogs")}
        style={{ textAlign: "center", fontSize: 36, marginBottom: 20 }}
      >
        <MaterialCommunityIcons
          name="dog"
          size={36}
          style={{ marginRight: 10 }}
        />
        MealCheck
      </Text>

      <Text style={{ flex: 2, backgroundColor: "#476491" }}>All dogs here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#F3EDF5",
    flex: 1,
    marginTop: 40,
  },
});
