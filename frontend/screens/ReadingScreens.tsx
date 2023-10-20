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

const text =
  "Then what is the advantage of the Jew? Or what is the benefit of circumcision? Great in every respect. To begin with, the Jews were entrusted with the oracles of God [His very words]. What then? If some did not believe or were unfaithful [to God], their lack of belief will not nullify and make invalid the faithfulness of God and His word, will it? Certainly not! Let God be found true [as He will be], though every person be found a liar, just as it is written [in Scripture],";

interface UserPostProps {}
const UserPost: React.FC<UserPostProps> = () => {
  return (
    <SafeAreaView style={trendingPostsStyles.container}>
      {/* Image */}
      <SafeAreaView>
        <Image
          source={require("../assets/images/profile-image.png")}
          style={{ height: 40, width: 40, borderRadius: 30 }}
        ></Image>
      </SafeAreaView>
      {/* Icon Type + Views */}
      <SafeAreaView>
        <Text>💙 212k</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const trendingPostsStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

export type Props = {};
const ReadingScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={stylesScreen.container}>
      {/* Header */}
      <SafeAreaView style={stylesHeader.bibleHeaderContainer}>
        <Text style={stylesHeader.bibleHeaderText}>Rom 3</Text>
        <Text style={stylesHeader.bibleHeaderText}>ESV</Text>
      </SafeAreaView>

      {/* Bible Text and recent posts */}
      <SafeAreaView style={stylesBibleTextAndRecentPosts.container}>
        {/* Text */}
        <SafeAreaView style={stylesBibleTextAndRecentPosts.bibleTextContainer}>
          <Text style={stylesBibleTextAndRecentPosts.bibleText}>{text}</Text>
        </SafeAreaView>
        {/* Recent Posts */}
        <SafeAreaView
          style={stylesBibleTextAndRecentPosts.recentPostsContainer}
        >
          <UserPost />
          <UserPost />
          <UserPost />
        </SafeAreaView>
      </SafeAreaView>

      {/* GPT icons */}
      <SafeAreaView></SafeAreaView>
    </SafeAreaView>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 15,
  },
});

const stylesHeader = StyleSheet.create({
  bibleHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bibleHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

const stylesBibleTextAndRecentPosts = StyleSheet.create({
  container: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bibleTextContainer: {
    width: "80%",
  },

  bibleText: {
    fontSize: 20,
    lineHeight: 30,
  },

  recentPostsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 70,
  },
});

const stylesGPTIcons = StyleSheet.create({});

export default ReadingScreen;
