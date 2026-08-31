import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const StateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="COUNT +" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
  },
});

export default StateExample;
