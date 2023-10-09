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
    <SafeAreaView>
      {/* Header */}
      <SafeAreaView>
        <Text>Rom 3</Text>
      </SafeAreaView>

      {/* Bible Text and recent posts */}
      <SafeAreaView></SafeAreaView>
      {/* GPT icons */}
      <SafeAreaView></SafeAreaView>
    </SafeAreaView>
  );
};

const stylesHeader = StyleSheet.create({});

const stylesBibleTextAndRecentPosts = StyleSheet.create({});

const stylesGPTIcons = StyleSheet.create({});

export default ReadingScreen;
