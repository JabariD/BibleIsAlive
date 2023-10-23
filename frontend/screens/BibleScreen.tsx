/**
 * BibleScreen.tsx
 *
 * This is a React Native screen component for the Bible section of the application.
 * It includes several sections such as "Continue Reading", "Trending Verses", "Recommended Posts", and "Featured Sermons".
 * 
 * The "Continue Reading" section provides a way for users to continue reading from where they left off.
 * The "Trending Verses" section displays popular Bible verses.
 * The "Recommended Posts" section suggests posts that might be interesting to the user.
 * The "Featured Sermons" section is intended to display sermons from the church.
 * 
 * This screen also uses a reusable component, TrendingVerse, to display each trending verse.
 */

import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export type Props = {};

/**
 * BibleScreen
 *
 * An engaging, learning, experience as we go through God's words.
 *
 */
const BibleScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  const navigateToReading = () => {
    navigation.navigate("Reading");
  };

  return (
    <ScrollView>
      <SafeAreaView style={screenStyles.container}>
        {/* Continue Reading section*/}
        <SafeAreaView style={continueReadingStyles.container}>
          {/* Row */}
          <SafeAreaView style={continueReadingStyles.header}>
            <Text style={sharedStyles.text}>Continue Reading</Text>
            <Text style={sharedStyles.subText}>Start fresh...</Text>
          </SafeAreaView>

          {/* Image */}
          <TouchableOpacity onPress={navigateToReading}>
            <Image
              source={require("../assets/images/cross.jpg")}
              style={{
                height: 200,
                width: "100%",
                borderRadius: 15,
                marginBottom: 10,
                resizeMode: "cover",
              }}
            />
          </TouchableOpacity>

          {/* Text */}
          <Text style={continueReadingStyles.verseText}>
            Bible text. Love the lord your God...
          </Text>
          {/* Translation */}
          <Text style={continueReadingStyles.verseTranslation}>
            The King James Bible
          </Text>
        </SafeAreaView>

        {/* Trending Verses section */}
        <SafeAreaView style={trendingVersesStyles.container}>
          {/* Header */}
          <SafeAreaView style={trendingVersesStyles.header}>
            <Text style={sharedStyles.text}>Trending Verses</Text>
            <Text style={sharedStyles.subText}>See all</Text>
          </SafeAreaView>
          {/* Map each verse this. */}
          <ScrollView horizontal={true}>
            <SafeAreaView style={trendingVersesStyles.trendingVerseContainer}>
              <TrendingVerse verse="Bible Verse 1" />
              <TrendingVerse verse="Bible Verse 2" />
              <TrendingVerse verse="Bible Verse 3" />
              <TrendingVerse verse="Bible Verse 4" />
            </SafeAreaView>
          </ScrollView>
        </SafeAreaView>

        {/* Recommended post*/}
        <SafeAreaView style={recommendedPostStyle.container}>
          <Text style={sharedStyles.text}>Posts You Might Find Interesting</Text>
          <Text style={sharedStyles.subText}>John 3:16</Text>
          <Text>context of verse?</Text>
        </SafeAreaView>

        {/* Featured sermons from church */}
        <SafeAreaView></SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
};

// Styles
const screenStyles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

const sharedStyles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subText: {
    fontSize: 18,
    color: "grey",
    marginBottom: 10,
  },
});

const continueReadingStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  verseText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  verseTranslation: {
    fontSize: 12,
    marginBottom: 20,
  },
});

const trendingVersesStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  trendingVerseContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
});

const recommendedPostStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    marginBottom: 30,
  },
});

/**
 * Reusable Trending Verse component
 */
type TrendingVerseProps = {
  verse: string;
};
const TrendingVerse: React.FC<TrendingVerseProps> = (props) => {
  return (
    <SafeAreaView style={reusableTrendingVerseComponentStyles.container}>
      <Image
        source={require("../assets/images/trending-verse.jpg")}
        style={{
          height: 100,
          width: 110,
          borderRadius: 15,
          marginBottom: 10,
          resizeMode: "cover",
        }}
      />
      <Text style={reusableTrendingVerseComponentStyles.verseName}>
        Example Name
      </Text>
      <Text style={reusableTrendingVerseComponentStyles.verseText}>
        {props.verse}
      </Text>
    </SafeAreaView>
  );
};

const reusableTrendingVerseComponentStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },

  verseName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  verseText: {
    fontSize: 14,
    color: "grey",
    marginBottom: 10,
  },
});

export default BibleScreen;
