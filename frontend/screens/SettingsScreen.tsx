import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Switch, StyleSheet } from "react-native";

/**
 * SettingsScreen
 *
 * Renders the settings screen component.
 *
 */
export type Props = {};
const SettingsScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Language</Text>
        <Text>English</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  settingText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SettingsScreen;
