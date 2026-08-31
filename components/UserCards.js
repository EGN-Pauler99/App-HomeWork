import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const UserCard1 = (props) => (
  <View style={styles.card}>
    <Text>ชื่อ: {props.name}</Text>
    <Text>อายุ: {props.age}</Text>
    <Text>ตำแหน่ง: {props.role}</Text>
  </View>
);

export const UserCard2 = ({ name, age, role }) => (
  <View style={styles.card}>
    <Text>ชื่อ: {name}</Text>
    <Text>อายุ: {age}</Text>
    <Text>ตำแหน่ง: {role}</Text>
  </View>
);

export const UserCard3 = ({
  name = "ไม่ระบุชื่อ",
  age = "0",
  role = "ไม่ระบุตำแหน่ง",
}) => (
  <View style={styles.card}>
    <Text>ชื่อ: {name}</Text>
    <Text>อายุ: {age}</Text>
    <Text>ตำแหน่ง: {role}</Text>
  </View>
);

export const UserCard4 = ({
  name,
  contact: { email, phone },
  settings: { theme = "light" } = {},
}) => (
  <View style={styles.card}>
    <Text>ชื่อ: {name}</Text>
    <Text>อีเมล: {email}</Text>
    <Text>โทร: {phone}</Text>
    <Text>ธีม: {theme}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    marginBottom: 12,
  },
});
