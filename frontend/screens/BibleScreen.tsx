import React from "react";
import { SafeAreaView, Text } from "react-native";

export type Props = {};

/**
 * BibleScreen
 * 
 * An engaging, learning, experience as we go through God's words.
 * 
 */
const BibleScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView>
      <Text>Welcome to the Bible Screen!</Text>
    </SafeAreaView>
  );
};

export default BibleScreen;
