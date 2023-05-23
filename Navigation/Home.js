import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.contianer}>
      <Text
        onPress={() => alert("Dogs")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Dogs here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    backgroundColor: "	#FFF5EE",
    flex: 1,
    justifyContent: "center",
  },
});
