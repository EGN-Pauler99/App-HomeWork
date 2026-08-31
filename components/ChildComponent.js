import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ChildComponent = ({ count, onIncrement, onUpdateMessage }) => {
  return (
    <View style={styles.card}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={onIncrement} />
      <Button
        title="Update Message"
        onPress={() => onUpdateMessage("Updated from Child")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#fde68a",
    borderRadius: 12,
    marginTop: 10,
  },
});

export default ChildComponent;
