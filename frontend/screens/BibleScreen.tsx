import React from "react";
import { SafeAreaView, Text, Image, StyleSheet } from "react-native";

export type Props = {};

/**
 * BibleScreen
 *
 * An engaging, learning, experience as we go through God's words.
 *
 */
const BibleScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={screenStyles.container}>
      {/* Continue Reading section*/}
      <SafeAreaView style={continueReadingStyles.container}>
        {/* Row */}
        <SafeAreaView style={continueReadingStyles.header}>
          <Text style={sharedStyles.text}>Continue Reading</Text>
          <Text style={sharedStyles.subText}>New reading</Text>
        </SafeAreaView>

        {/* Image */}
        <Image
          source={require("../assets/images/cross.jpg")}
          style={{ height: 200, width: "100%", borderRadius: 15, marginBottom: 10, resizeMode: "cover" }}
        />

        {/* Text */}
        <Text style={continueReadingStyles.verseText}>Bible text. Love the lord your God...</Text>
        {/* Translation */}
        <Text style={continueReadingStyles.verseTranslation}>The King James Bible</Text>
      </SafeAreaView>

      {/* Passages of the Day */}
      <SafeAreaView></SafeAreaView>

      {/* Trending verses*/}
      <SafeAreaView></SafeAreaView>

      {/* Featured sermons from church */}
      <SafeAreaView></SafeAreaView>
    </SafeAreaView>
  );
};

const screenStyles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

const sharedStyles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },

  subText: {
    fontSize: 18,
    color: "grey",
  },
});

const continueReadingStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginBottom: 10,
  },

  verseText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  verseTranslation: {
    fontSize: 12,
  },
});

export default BibleScreen;
