import React from "react";

import { Button, View, StyleSheet } from "react-native";

const DummyComponent = props => {
  return (
    <View style={styles.containerView}>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

export default DummyComponent;

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
