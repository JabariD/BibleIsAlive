import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

// Card component used on the user's homepage. Reusable and can hold multiple types of information. E.g. prayers, notes, etc.
export type Props = {};

const HomeCardComponent: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styleHomeCardComponent.container}>
        {/* Image */}
        <SafeAreaView style={styleHomeCardComponent.imageContainer}>
          <Image
            key="a"
            source={require("../assets/badges/sword.png")}
            style={styleHomeCardComponent.image}
          />
        </SafeAreaView>

        {/* Title / Given user name */}
        <SafeAreaView style={styleHomeCardComponent.titlesContainer}>
          <Text style={styleHomeCardComponent.title}>Lorem ipsum, d...</Text>
          <Text style={styleHomeCardComponent.subTitle}>Lorem ipsum dolor.</Text>
        </SafeAreaView>

        <SafeAreaView></SafeAreaView>
      {/* Relative date created */}
      <SafeAreaView style={styleHomeCardComponent.relativeDateContainer}>
        <Text style={styleHomeCardComponent.relativeDateText}>1d</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styleHomeCardComponent = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",

    padding: 20,
    marginTop: 10,

    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },

  subContainer: {
    paddingRight: 20,
  },

  imageContainer: {
    margin: 5,
    marginRight: 10,
  },

  image: {
    width: 50,
    height: 50,
  },

  titlesContainer: {
    margin: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 5, // control spacing between title and subtitle.
  },

  subTitle: {
    fontSize: 17,
    color: "grey",
  },

  relativeDateContainer: {
    marginLeft: "auto", // move relative date all the way to the right
    marginRight: 15,
    marginTop: 5,
  },

  relativeDateText: {
    fontSize: 18,
    color: "grey",
  },
});

export default HomeCardComponent;
