import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { Card, TitleCard } from "../components/Card";

const ChildrenExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Text>นี่คือ children</Text>
        <Text>ใส่ได้หลายบรรทัด</Text>
      </Card>

      <TitleCard title="ข้อมูลผู้ใช้">
        <Text>ชื่อ: สมชาย</Text>
        <Text>อายุ: 25 ปี</Text>
      </TitleCard>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ChildrenExample;
