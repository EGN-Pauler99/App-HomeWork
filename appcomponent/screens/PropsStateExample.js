import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import ChildComponent from "../components/ChildComponent";

const PropsStateExample = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Count: {count}</Text>
      <Text>Message: {message}</Text>

      <ChildComponent
        count={count}
        onIncrement={() => setCount((c) => c + 1)}
        onUpdateMessage={setMessage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default PropsStateExample;
