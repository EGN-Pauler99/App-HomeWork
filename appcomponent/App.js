import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

import PropsExample from "./screens/PropsExample";
import ChildrenExample from "./screens/ChildrenExample";
import FunctionPropsExample from "./screens/FunctionPropsExample";
import StateExample1 from "./screens/StateExample1";
import StateExample2 from "./screens/StateExample2";
import StateExample3 from "./screens/StateExample3";

export default function App() {
  const [screen, setScreen] = useState("props");

  const renderScreen = () => {
    switch (screen) {
      case "props":
        return <PropsExample />;
      case "children":
        return <ChildrenExample />;
      case "function":
        return <FunctionPropsExample />;
      case "state1":
        return <StateExample1 />;
      case "state2":
        return <StateExample2 />;
      case "state3":
        return <StateExample3 />;
      default:
        return null;
    }
  };

  const Tab = ({ title, value }) => (
    <Pressable
      onPress={() => setScreen(value)}
      style={[
        styles.tab,
        screen === value && styles.activeTab,
      ]}
    >
      <Text style={styles.tabText}>{title}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* ===== TOP MENU ===== */}
      <View style={styles.menuWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menu}
        >
          <Tab title="PROPS" value="props" />
          <Tab title="CHILDREN" value="children" />
          <Tab title="FUNC" value="function" />
          <Tab title="STATE 1" value="state1" />
          <Tab title="STATE 2" value="state2" />
          <Tab title="STATE 3" value="state3" />
        </ScrollView>
      </View>

      {/* ===== CONTENT ===== */}
      <ScrollView contentContainerStyle={styles.content}>
        {renderScreen()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuWrapper: {
    backgroundColor: "#2196f3",
    paddingTop: 8, // ดันลงจาก SafeArea
  },
  menu: {
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginRight: 8,
    borderRadius: 8,
    backgroundColor: "#1e88e5",
  },
  activeTab: {
    backgroundColor: "#1565c0",
  },
  tabText: {
    color: "white",
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
});
