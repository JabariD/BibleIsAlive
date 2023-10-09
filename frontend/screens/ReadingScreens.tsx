import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";

export type Props = {};
const ReadingScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={stylesScreen.container}>
      {/* Header */}
      <SafeAreaView style={stylesHeader.bibleHeaderContainer}>
        <Text style={stylesHeader.bibleHeaderText}>Rom 3</Text>
        <Text style={stylesHeader.bibleHeaderText}>ESV</Text>
      </SafeAreaView>

      {/* Bible Text and recent posts */}
      <SafeAreaView></SafeAreaView>
      {/* GPT icons */}
      <SafeAreaView></SafeAreaView>
    </SafeAreaView>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 15,
  },
});

const stylesHeader = StyleSheet.create({
  bibleHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bibleHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

const stylesBibleTextAndRecentPosts = StyleSheet.create({});

const stylesGPTIcons = StyleSheet.create({});

export default ReadingScreen;
