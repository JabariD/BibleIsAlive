import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

export type Props = {};

// Returns the user's current badges.
// Note: Hardcoded for now.
const getBadges = () => {
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

const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styleHomeScreen.container}>
      {/* Welcome Header */}
      <SafeAreaView>
        <Text style={styleWelcomeHeader.welcomeBack}>Welcome Back,</Text>
        <Text style={styleWelcomeHeader.name}>Payton</Text>
      </SafeAreaView>

      {/* Badges */}
      <SafeAreaView>
        <Text style={styleBadges.header}>Badges</Text>
        {/* Rows and columns of badges in grid format. */}
        <SafeAreaView style={styleBadges.badgeContainer}>{getBadges().map((badge) => badge)}</SafeAreaView>
      </SafeAreaView>

      {/* Pinned */}
      <SafeAreaView>
        <Text>Pinned</Text>
      </SafeAreaView>

      {/* Prayer card */}
      <SafeAreaView>
        <Text>Scrolling inside prayer card (not a scrollview)</Text>
      </SafeAreaView>

      {/* Notes */}
      <SafeAreaView>
        <Text>Notes</Text>
      </SafeAreaView>

      {/* Highlights */}
      <SafeAreaView>
        <Text>Highlights</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

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

export default HomeScreen;
