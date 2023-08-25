import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
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
  return [<HomeCardComponent key="123" useImage={true} title={"This is a title."} subTitle={"This is a subtitle."}/>];
};

// Returns the user's current notes.
// Note: Hardcoded for now.
const fetchUserNotes = () => {

}

// Returns the user's current highlights.
// Note: Hardcoded for now.
const fetchUserHighlights = () => {

}

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
      </SafeAreaView>

      {/* Badges */}
      <SafeAreaView>
        <Text style={styleBadges.header}>Badges</Text>
        {/* Rows and columns of badges in grid format. */}
        <SafeAreaView style={styleBadges.badgeContainer}>
          {fetchBadges().map((badge) => badge)}
        </SafeAreaView>
      </SafeAreaView>

      {/* Prayer card */}
      <SafeAreaView>
        <SafeAreaView style={styleSectionHeader.headerContainer}>
          <Text style={styleSectionHeader.header}>Recent Prayers</Text>
          <Text style={styleSectionHeader.seeAll}>See all</Text>
        </SafeAreaView>
        {/* List top 3 recent prayers */}
        {fetchUserPrayers().map((prayer) => prayer)}
      </SafeAreaView>

      {/* Notes */}
      <SafeAreaView>
        <SafeAreaView style={styleSectionHeader.headerContainer}>
          <Text style={styleSectionHeader.header}>Notes</Text>
          <Text style={styleSectionHeader.seeAll}>See all</Text>
        </SafeAreaView>
        <HomeCardComponent key="123" useImage={false} title={"Note #1"} subTitle={"God is my savior."}/>
      </SafeAreaView>

      {/* Highlights */}
      <SafeAreaView>
        <SafeAreaView style={styleSectionHeader.headerContainer}>
          <Text style={styleSectionHeader.header}>Highlights</Text>
          <Text style={styleSectionHeader.seeAll}>See all</Text>
        </SafeAreaView>
        <HomeCardComponent key="123" useImage={false} title={"Romans 12:1-2"} subTitle={"Present your body as a..."}/>
      </SafeAreaView>
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
    flexDirection: "row",
    justifyContent: "space-between",

    minHeight: 120,

    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "grey",
  },

  levelTitle: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  }
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
