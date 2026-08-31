import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Card = ({ children }) => (
  <View style={styles.card}>{children}</View>
);

export const TitleCard = ({ title, children }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#eef2ff",
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
});
