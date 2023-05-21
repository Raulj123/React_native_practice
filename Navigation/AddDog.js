import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";

export default function AddDog({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Fumi
        style={styles.first}
        label={"Dogs Name"}
        iconClass={FontAwesomeIcon}
        iconName={"paw"}
        iconColor={"#f95a25"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      />
      <Fumi
        style={styles.second}
        label={"Gender"}
        iconClass={FontAwesomeIcon}
        iconName={"venus-mars"}
        iconColor={"#f95a25"}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  first: {
    marginTop: "70%",
    width: "90%",
    margin: 10,
  },
  second: {
    width: "90%",
  },
});
