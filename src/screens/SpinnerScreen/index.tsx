import React from "react";
import { StyleSheet, View } from "react-native";

import Spinner from "../../components/Spinner";

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <Spinner />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default App;