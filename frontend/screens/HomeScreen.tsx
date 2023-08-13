import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

export type Props = {};

const HomeScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styleHomeScreen.container}>
      {/* Welcome Header */}
      <SafeAreaView>
        <Text style={styleWelcomeHeader.welcomeBack}>Welcome Back,</Text>
        <Text style={styleWelcomeHeader.name}>Payton</Text>
      </SafeAreaView>

      {/* Badges */}
      <SafeAreaView style={styleBadges.container}>
        <Text style={styleBadges.header}>Badges</Text>
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
    margin: 25,
  }
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
  container: {
    margin: 15,
  },

  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreen;
