/**
 * This file defines the ReadingScreen component.
 * The ReadingScreen component displays a Bible verse and recent posts.
 * It also includes a header and GPT icons.
 */

import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import VerseComponent from "../components/VerseComponent";

const text =
  "Then what is the advantage of the Jew? Or what is the benefit of circumcision? Great in every respect. To begin with, the Jews were entrusted with the oracles of God [His very words]. What then? If some did not believe or were unfaithful [to God], their lack of belief will not nullify and make invalid the faithfulness of God and His word, will it? Certainly not! Let God be found true [as He will be], though every person be found a liar, just as it is written [in Scripture], What then? Are we Jews any better off? No, not at all. For we have already charged that all, both Jews and Greeks, are under sin, as it is written:“None is righteous, no, not one;no one understands;no one seeks for God.All have turned aside; together they have become worthless;no one does good,not even one.”“Their throat is an open grave;they use their tongues to deceive.”“The venom of asps is under their lips.”“Their mouth is full of curses and bitterness.”“Their feet are swift to shed blood;in their paths are ruin and misery,and the way of peace they have not known.”“There is no fear of God before their eyes.”Now we know that whatever the law says it speaks to those who are under the law, so that every mouth may be stopped, and the whole world may be held accountable to God. For by works of the law no human being will be justified in his sight, since through the law comes knowledge of sin.";

interface UserPostProps { }
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
      {/* SearchBar */}
      {/* Search Bar */}
      <TextInput
        style={stylesHeader.searchBar}
        placeholder="Search for verse, topic, or subject."
      />


      {/* Header */}
      <SafeAreaView style={stylesHeader.bibleHeaderContainer}>
        <Text style={stylesHeader.bibleHeaderText}>Rom 3</Text>
        <Text style={stylesHeader.bibleHeaderText}>ESV</Text>
      </SafeAreaView>

      {/* Bible Text and recent posts */}
      <ScrollView>
        <SafeAreaView style={stylesBibleTextAndRecentPosts.container}>
          {/* Text */}
          <SafeAreaView style={stylesBibleTextAndRecentPosts.bibleTextContainer}>
            <VerseComponent key={1} number={0 + 1} verse={"Hehehe hi"} />
            <VerseComponent key={2} number={0 + 2} verse={"woah woah woah"} />
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
      </ScrollView>

      {/* GPT icons */}
      <SafeAreaView style={stylesGPTIcons.iconContainer}>
        <TouchableOpacity>
          {/* Todo opens model on touch https://gorhom.github.io/react-native-bottom-sheet/modal/ */}
          <Image
            source={require("../assets/icons/stars.png")}
            style={stylesGPTIcons.icon}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const stylesScreen = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 15,
    flex: 1, // ensure it takes up full height
  },
});

const stylesHeader = StyleSheet.create({
  searchBar: {
    height: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    borderColor: "grey",
    backgroundColor: '#f0f0f0',
  },

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
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
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

const stylesGPTIcons = StyleSheet.create({
  iconContainer: {
    flex: 1, // ensure it takes up full height
    justifyContent: 'flex-end', // align children to the bottom
  },
  icon: {
    position: "absolute",
    right: 10,
    bottom: 10,
    height: 50,
    width: 50
  },
});

export default ReadingScreen;
