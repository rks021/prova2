import React from "react";
import { View, StyleSheet } from "react-native";
import FormComponent from "../components/FormComponent";

const FormScreen = () => {
  return (
    <View style={styles.container}>
      <FormComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default FormScreen;
