import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

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
          <Text style={sharedStyles.subText}>Start fresh...</Text>
        </SafeAreaView>

        {/* Image */}
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
    marginBottom: 30,
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
    marginBottom: 10,
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
    gap: 3,

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
  },

  verseName: {
    fontSize: 16,
    fontWeight: "bold",
  },

  verseText: {
    fontSize: 14,
    color: "grey",
  },
});

export default BibleScreen;
