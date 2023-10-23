/**
 * HomeScreen.tsx
 *
 * This is the home screen of the application. It serves as the main hub for the user.
 * It displays the user's current badges, prayers, notes, and highlights.
 * The user can navigate to the Knowledge screen from here.
 * 
 * The data displayed is currently hardcoded.
 * 
 */

import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import HomeCardComponent from "../components/HomeCardComponent";

type ProgressBarProps = {
  percent: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ percent }) => (
  <SafeAreaView style={styleLevel.progressBar}>
    <SafeAreaView style={{ ...styleLevel.progressFill, width: `${percent}%` }}></SafeAreaView>
  </SafeAreaView>
);

// Define the properties for the ActionButton component
type ActionButtonProps = {
  title: string;
  onPress: () => void;
};

// ActionButton component
// This component is a button with a title and an onPress event
const ActionButton: React.FC<ActionButtonProps> = ({ title, onPress }) => (
  // The button is wrapped in a SafeAreaView for proper alignment and spacing
  <SafeAreaView style={styleQuickActions.actionableCard}>
    {/* TouchableOpacity is used to make the button interactive */}
    <TouchableOpacity style={styleQuickActions.gradientButton} onPress={onPress}>
      {/* The title of the button is displayed as a Text component */}
      <Text style={styleQuickActions.buttonText}>{title}</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

/**
 * HomeScreen Component
 *
 * This is the main component for the Home Screen of the application.
 * It serves as the main hub for the user, displaying the user's current badges, prayers, notes, and highlights.
 * It also provides quick navigation to the Knowledge and Bible Reading screens.
 *
 * The data displayed is currently hardcoded.
 */
export type Props = {};
const HomeScreen: React.FC<Props> = () => {
  const navigation = useNavigation();

  // Function to navigate to the Knowledge Screen
  const navigateToKnowledgeScreen = () => {
    navigation.navigate("Knowledge");
  };

  const navigateToReadingScreen = () => {
    navigation.navigate("Reading");
  };

  // Extracted function for Welcome Header
  const renderWelcomeHeader = () => (
    <SafeAreaView>
      <Text style={styleWelcomeHeader.welcomeBack}>Welcome Back,</Text>
      <Text style={styleWelcomeHeader.name}>Payton</Text>
    </SafeAreaView>
  );

  // Extracted function for Level
  const renderLevel = () => (
    <SafeAreaView style={styleLevel.container}>
      <Text style={styleLevel.levelTitle}>Level: 1</Text>
      <Text style={styleLevel.levelSubTitle}>
        Add more experiences to mature!
      </Text>
      {/* Progress bar */}
      <SafeAreaView style={styleLevel.progressBarContainer}>
        <ProgressBar percent={80} />
      </SafeAreaView>

      <Text style={styleLevel.rewardText}>Level 2 Reward: NEW BADGE!</Text>
    </SafeAreaView>
  );

  // Extracted function for Quick Actions
  const renderQuickActions = () => (
    <SafeAreaView style={styleQuickActions.container}>
      <ActionButton title="Your Knowledge" onPress={navigateToKnowledgeScreen} />
      <ActionButton title="Your Bible" onPress={navigateToReadingScreen} />
    </SafeAreaView>
  );

  // Extracted function for Badges
  const renderBadges = () => (
    <SafeAreaView>
      <Text style={styleBadges.header}>Badges</Text>
      {/* Rows and columns of badges in grid format. */}
      <SafeAreaView style={styleBadges.badgeContainer}>
        {fetchBadges().map((badge) => badge)}
      </SafeAreaView>
    </SafeAreaView>
  );

  // Extracted function for Prayer card
  const renderPrayerCard = () => (
    <SafeAreaView style={styleSection.container}>
      <SafeAreaView style={styleSectionHeader.headerContainer}>
        <Text style={styleSectionHeader.header}>Recent Prayers</Text>
        <TouchableOpacity onPress={navigateToKnowledgeScreen}><Text style={styleSectionHeader.seeAll}>See all</Text></TouchableOpacity>
      </SafeAreaView>
      {/* List top 3 recent prayers */}
      {fetchUserPrayers().map((prayer) => prayer)}
    </SafeAreaView>
  );

  // Extracted function for Notes
  const renderNotes = () => (
    <SafeAreaView style={styleSection.container}>
      <SafeAreaView style={styleSectionHeader.headerContainer}>
        <Text style={styleSectionHeader.header}>Notes</Text>
        <TouchableOpacity onPress={navigateToKnowledgeScreen}><Text style={styleSectionHeader.seeAll}>See all</Text></TouchableOpacity>
      </SafeAreaView>
      <HomeCardComponent
        key="123"
        useImage={false}
        title={"Note #1"}
        subTitle={"God is my savior."}
      />
    </SafeAreaView>
  );

  // Extracted function for Highlights
  const renderHighlights = () => (
    <SafeAreaView style={styleSection.container}>
      <SafeAreaView style={styleSectionHeader.headerContainer}>
        <Text style={styleSectionHeader.header}>Highlights</Text>
        <TouchableOpacity onPress={navigateToKnowledgeScreen}><Text style={styleSectionHeader.seeAll}>See all</Text></TouchableOpacity>
      </SafeAreaView>
      <HomeCardComponent
        key="123"
        useImage={false}
        title={"Romans 12:1-2"}
        subTitle={"Present your body as a..."}
      />
    </SafeAreaView>
  );

  // Returns the user's current notes.
  // Note: Hardcoded for now.
  const fetchUserNotes = () => { };

  // Returns the user's current highlights.
  // Note: Hardcoded for now.
  const fetchUserHighlights = () => { };

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

  return (
    <ScrollView>
      <SafeAreaView style={styleHomeScreen.container}>
        {renderWelcomeHeader()}
        {renderLevel()}
        {renderQuickActions()}
        {renderBadges()}
        {renderPrayerCard()}
        {renderNotes()}
        {renderHighlights()}
      </SafeAreaView>
    </ScrollView>
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
    marginBottom: 5,
  },
  name: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

const styleLevel = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 10,

    minHeight: 120,

    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "grey",
  },

  levelTitle: {
    fontSize: 20,
    margin: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },

  levelSubTitle: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 15,
    color: "grey",
  },

  rewardText: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    color: "grey",
  },

  progressBarContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },

  progressBar: {
    flexDirection: 'row',
    height: 30,
    width: '90%',
    backgroundColor: '#D9D9D9',
    borderColor: '#000',
    borderRadius: 10, // Increase this to make the ends more curved
    position: 'relative',
  },
  progressFill: {
    backgroundColor: '#152D3C',
    borderRadius: 10, // Make sure this is the same as the borderRadius of progressBar
  },
});

const styleQuickActions = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,

    gap: 10,
  },

  actionableCard: {
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  gradientButton: {
    backgroundColor: "#EDD47C",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: 175,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16, // Increase font size for more prominence
  },
});

const styleBadges = StyleSheet.create({
  badgeContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    marginTop: 10,
    marginBottom: 20,
  },

  header: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
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
    marginBottom: 10,
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
