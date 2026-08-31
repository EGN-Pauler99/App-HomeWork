import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  UserCard1,
  UserCard2,
  UserCard3,
  UserCard4,
} from "../components/UserCards";

const PropsExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <UserCard1 name="สมชาย" age={25} role="โปรแกรมเมอร์" />
      <UserCard2 name="สมหญิง" age={30} role="นักออกแบบ" />
      <UserCard3 />
      <UserCard4
        name="สมศรี"
        contact={{ email: "somsri@email.com", phone: "0891234567" }}
        settings={{ theme: "dark" }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default PropsExample;
