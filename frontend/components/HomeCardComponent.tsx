import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

// Card component used on the user's homepage. Reusable and can hold multiple types of information. E.g. prayers, notes, etc.
export type Props = {
  // if true, shows image in card component. If false, image is hidden.
  // required
  useImage: boolean; 

  // title of card component.
  // required
  title: string;

  // subtitle of card component.
  // required
  subTitle: string;
};

const HomeCardComponent: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styleHomeCardComponent.container}>
      {/* Dynamically show image if useImage prompt is on. */}
      {props.useImage ? (
        <SafeAreaView style={styleHomeCardComponent.imageContainer}>
          <Image
            key="a"
            source={require("../assets/badges/sword.png")}
            style={styleHomeCardComponent.image}
          />
        </SafeAreaView>
      ) : (
        <SafeAreaView></SafeAreaView>
      )}

      {/* Title / Given user name */}
      <SafeAreaView style={styleHomeCardComponent.titlesContainer}>
        <Text style={styleHomeCardComponent.title}>{props.title}</Text>
        <Text style={styleHomeCardComponent.subTitle}>{props.subTitle}</Text>
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

    maxHeight: 75, // limit height of card component so that we do not dynamically resize if more content

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
