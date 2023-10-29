/**
 * This file defines the ReadingScreen component.
 * The ReadingScreen component displays a Bible verse and recent posts.
 * It also includes a header and GPT icons.
 */

import React, { useState } from "react";
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
  // State
  const [selectedVerses, setSelectedVerses] = useState<number[]>([]);
  const [searchText, setSearchText] = useState(''); 

  // State Management
  // Function to handle verse selection
  const handleVerseSelection = (selectedVerseNumber: number) => {
    // Update the selected verses state
    setSelectedVerses(previousSelectedVerses => {
      let updatedSelectedVerses;
      // Check if the verse is already selected
      if (previousSelectedVerses.includes(selectedVerseNumber)) {
        // If the verse is already selected, remove it from the array
        updatedSelectedVerses = previousSelectedVerses.filter(verseNumber => verseNumber !== selectedVerseNumber);
      } else {
        // If the verse is not selected, add it to the array
        updatedSelectedVerses = [...previousSelectedVerses, selectedVerseNumber];
      }

      return updatedSelectedVerses;
    });
  };

  return (
    <>
    <SafeAreaView style={stylesScreen.container}>
      {/* Search Bar */}
      <TextInput
        style={stylesHeader.searchBar}
        placeholder="Search for verse, topic, or subject."
        value={searchText}
        onChangeText={setSearchText}
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
            <VerseComponent key={1} number={0 + 1} verse={"Hehehe hi"} onVerseSelect={handleVerseSelection} isSelected={selectedVerses.includes(1)} />
            <VerseComponent key={2} number={0 + 2} verse={"woah woah woah"} onVerseSelect={handleVerseSelection} isSelected={selectedVerses.includes(2)} />
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
      {selectedVerses.length === 0 && (
        <SafeAreaView style={stylesGPTIcons.iconContainer}>
          <TouchableOpacity>
            {/* Todo opens model on touch https://gorhom.github.io/react-native-bottom-sheet/modal/ */}
            <Image
              source={require("../assets/icons/stars.png")}
              style={stylesGPTIcons.icon}
            />
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </SafeAreaView>
    {/* Bottom Component */}
    {selectedVerses.length > 0 && (
        <SafeAreaView style={stylesBottomScreenModal.bottomView}>
          <Text>Action for verses {selectedVerses.join(', ')}</Text>
          <TouchableOpacity
            style={stylesBottomScreenModal.closeButton}
            onPress={() => setSelectedVerses([])}
          >
            <Text style={stylesBottomScreenModal.textStyle}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </>
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

const stylesBottomScreenModal = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF', // Change this to match your app's design
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 15,

    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: -2 }, // Shadow offset for iOS
    shadowOpacity: 0.25, // Shadow opacity for iOS
    shadowRadius: 4, // Shadow radius for iOS
    elevation: 5, // Shadow for Android
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ReadingScreen;
