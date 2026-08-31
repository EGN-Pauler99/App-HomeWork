import React from "react";
import { SafeAreaView, Alert, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const FunctionPropsExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        title="กดธรรมดา"
        onPress={() => Alert.alert("คลิกแล้ว")}
      />
      <CustomButton
        title="ส่งค่า"
        onPress={() => Alert.alert("ค่า", "123")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default FunctionPropsExample;
