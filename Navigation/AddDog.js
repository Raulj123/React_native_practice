import * as React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Fumi } from "react-native-textinput-effects";
export default function AddDog({ navigation }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#476491",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
        Add your pet here!
      </Text>
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
      <TouchableOpacity style={styles.button} onPress={() => alert("yes")}>
        <Text style={styles.buttonText}>Add Dog</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  first: {
    marginTop: "30%",
    width: "90%",
    margin: 10,
  },
  second: {
    width: "90%",
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 20,
    backgroundColor: "#f95a25",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
