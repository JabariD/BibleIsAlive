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
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Tailwind
import tw from 'twrnc';

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
      <SafeAreaView style={tw`m-5`}>
        {/* Continue Reading section*/}
        <SafeAreaView style={tw`flex-col mb-6`}>
          {/* Row */}
          <SafeAreaView style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-xl font-bold`}>Continue Reading</Text>
            <Text style={tw`text-lg text-gray-500`}>Start fresh...</Text>
          </SafeAreaView>

          {/* Image */}
          <TouchableOpacity onPress={navigateToReading} style={tw`mb-2`}>
            <Image
              source={require("../assets/images/cross.jpg")}
              style={tw`h-50 w-full rounded-lg`}
              resizeMode="cover"
            />
          </TouchableOpacity>

          {/* Text */}
          <Text style={tw`text-lg font-bold`}>
            Bible text. Love the lord your God...
          </Text>
          {/* Translation */}
          <Text style={tw`text-sm text-gray-500`}>
            The King James Bible
          </Text>
        </SafeAreaView>

        {/* Trending Verses section */}
        <SafeAreaView style={tw`flex-col mb-2`}>
          {/* Header */}
          <SafeAreaView style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-lg font-bold`}>Trending Verses</Text>
            <Text style={tw`text-md text-gray-500`}>See all</Text>
          </SafeAreaView>
          {/* Map each verse this. */}
          <ScrollView horizontal={true}>
            <SafeAreaView style={tw`flex-row gap-5`}>
              <TrendingVerse verse="Bible Verse 1" />
              <TrendingVerse verse="Bible Verse 2" />
              <TrendingVerse verse="Bible Verse 3" />
              <TrendingVerse verse="Bible Verse 4" />
            </SafeAreaView>
          </ScrollView>
        </SafeAreaView>

        {/* Recommended post*/}
        <SafeAreaView style={tw`flex-col items-center mb-1`}>
          <Text style={tw`text-xl font-bold`}>Posts You Might Find Interesting</Text>
          <Text style={tw`text-lg text-gray-500`}>John 3:16</Text>
          <Text style={tw`text-base`}>context of verse?</Text>
        </SafeAreaView>

        {/* Featured sermons from church */}
        <SafeAreaView></SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
};

/**
 * Reusable Trending Verse component
 */
type TrendingVerseProps = {
  verse: string;
};
const TrendingVerse: React.FC<TrendingVerseProps> = (props) => {
  return (
    <SafeAreaView style={tw`flex flex-col items-center mb-5`}>
      <Image
        source={require("../assets/images/trending-verse.jpg")}
        style={tw`h-25 w-28 rounded-lg mb-2.5`}
        resizeMode="cover"
      />
      <Text style={tw`text-md font-bold mb-1.5`}>
        Example Name
      </Text>
      <Text style={tw`text-sm text-gray-500 mb-2.5`}>
        {props.verse}
      </Text>
    </SafeAreaView>
  );
};

export default BibleScreen;
