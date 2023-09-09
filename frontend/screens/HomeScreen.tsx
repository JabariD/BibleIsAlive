import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  View,
} from "react-native";
import { Button } from "react-native-elements";

import HomeCardComponent from "../components/HomeCardComponent";

// Returns the user's current badges.
// Note: Hardcoded for now.
const fetchBadges = () => {
  // Get badges from backend.
  // Return badges.
  return [
    <Image
      key="a"
      source={require("../assets/badges/sword.png")}
      style={styleBadges.badgeImage}
    />,
    <Image
      key="b"
      source={require("../assets/badges/sword.png")}
      style={styleBadges.badgeImage}
    />,
    <Image
      key="c"
      source={require("../assets/badges/sword.png")}
      style={styleBadges.badgeImage}
    />,
  ];
};

// Returns the user's current prayers.
// Note: Hardcoded for now.
const fetchUserPrayers = () => {
  return [
    <HomeCardComponent
      key="123"
      useImage={true}
      title={"This is a title."}
      subTitle={"This is a subtitle."}
    />,
  ];
};

// Returns the user's current notes.
// Note: Hardcoded for now.
const fetchUserNotes = () => {};

// Returns the user's current highlights.
// Note: Hardcoded for now.
const fetchUserHighlights = () => {};

// Home screen component for the user. Lists badges, prayers, notes, and highlights. Serves as main hub for the user.
export type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styleHomeScreen.container}>
      {/* Welcome Header */}
      <SafeAreaView>
        <Text style={styleWelcomeHeader.welcomeBack}>Welcome Back,</Text>
        <Text style={styleWelcomeHeader.name}>Payton</Text>
      </SafeAreaView>

      {/* Level - Quick actions? */}
      <SafeAreaView style={styleLevel.container}>
        <Text style={styleLevel.levelTitle}>Level: 1</Text>
        <Text style={styleLevel.levelSubTitle}>Add more experiences to mature!</Text>
        {/* Progress bar */}
        <SafeAreaView style={styleLevel.progressBar}><SafeAreaView></SafeAreaView></SafeAreaView>
        <Text style={styleLevel.rewardText}>Level 2 Reward: NEW BADGE!</Text>
      </SafeAreaView>

      {/* Badges */}
      <SafeAreaView>
        <Text style={styleBadges.header}>Badges</Text>
        {/* Rows and columns of badges in grid format. */}
        <SafeAreaView style={styleBadges.badgeContainer}>
          {fetchBadges().map((badge) => badge)}
        </SafeAreaView>
      </SafeAreaView>

      <ScrollView>
        {/* Prayer card */}
        <SafeAreaView style={styleSection.container}>
          <SafeAreaView style={styleSectionHeader.headerContainer}>
            <Text style={styleSectionHeader.header}>Recent Prayers</Text>
            <Text style={styleSectionHeader.seeAll}>See all</Text>
          </SafeAreaView>
          {/* List top 3 recent prayers */}
          {fetchUserPrayers().map((prayer) => prayer)}
        </SafeAreaView>

        {/* Notes */}
        <SafeAreaView style={styleSection.container}>
          <SafeAreaView style={styleSectionHeader.headerContainer}>
            <Text style={styleSectionHeader.header}>Notes</Text>
            <Text style={styleSectionHeader.seeAll}>See all</Text>
          </SafeAreaView>
          <HomeCardComponent
            key="123"
            useImage={false}
            title={"Note #1"}
            subTitle={"God is my savior."}
          />
        </SafeAreaView>

        {/* Highlights */}
        <SafeAreaView style={styleSection.container}>
          <SafeAreaView style={styleSectionHeader.headerContainer}>
            <Text style={styleSectionHeader.header}>Highlights</Text>
            <Text style={styleSectionHeader.seeAll}>See all</Text>
          </SafeAreaView>
          <HomeCardComponent
            key="123"
            useImage={false}
            title={"Romans 12:1-2"}
            subTitle={"Present your body as a..."}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
};

/** Styles */
const styleHomeScreen = StyleSheet.create({
  container: {
    display: "flex",
    margin: 25,
    rowGap: 20,
  },
});

const styleWelcomeHeader = StyleSheet.create({
  welcomeBack: {
    fontSize: 20,
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

const styleLevel = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",

    minHeight: 120,

    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "grey",
  },

  levelTitle: {
    fontSize: 20,
    margin: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },

  levelSubTitle: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 15,
    color: "grey",
  },

  rewardText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 12,
    color: "grey",
  },

  progressBar: {
    marginLeft: 10,

    width: "80%",
    height: 25,
    borderRadius: 10,
    backgroundColor: "grey",
  },
});

const styleBadges = StyleSheet.create({
  badgeContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    marginTop: 10,
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",
  },

  badgeImage: {
    height: 30,
    width: 30,
  },
});

const styleSection = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

const styleSectionHeader = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",
  },

  seeAll: {
    fontSize: 20,
    color: "grey",
  },
});

export default HomeScreen;
