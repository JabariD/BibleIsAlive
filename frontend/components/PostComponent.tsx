import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

/**
 * PostComponent
 *
 * A component that displays a post.
 *
 */

const fakeText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus recusandae id, incidunt quae dignissimos nihil cumque culpa ex deserunt quos hic sapiente asperiores suscipit placeat unde labore provident? Enim, reiciendis.";

export type Props = {};
const PostComponent: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={postStyles.container}>
      {/* Header */}
      <SafeAreaView style={postHeaderStyles.container}>
        {/* Left */}
        <SafeAreaView style={postHeaderStyles.profileImageNameAndTimeContainer}>
          <Image
            source={require("../assets/images/profile-image.png")}
            style={{ height: 50, width: 50, borderRadius: 30, marginRight: 10 }}
          />

          <SafeAreaView>
            <Text style={postHeaderStyles.name}>First Name Last Name</Text>
            <Text style={postHeaderStyles.time}>5 mins ago</Text>
          </SafeAreaView>
        </SafeAreaView>

        {/* Right */}
        <SafeAreaView>
          <Image
            source={require("../assets/icons/option.png")}
            style={{ height: 30, width: 30 }}
          />
        </SafeAreaView>
      </SafeAreaView>

      {/* Text */}
      <SafeAreaView style={postTextContainerStyles.container}><Text>{fakeText}</Text></SafeAreaView>

      {/* Referenced Bible verse */}
      <SafeAreaView></SafeAreaView>

      {/* Footer */}
      <SafeAreaView></SafeAreaView>
    </SafeAreaView>
  );
};

const sharedStyles = StyleSheet.create({});

const postStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",

    // Temporary
    borderWidth: 1,
    borderColor: "black",
  },
});

const postHeaderStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },

  profileImageNameAndTimeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 15,
    fontWeight: "bold",
  },

  time: {
    fontSize: 12,
    color: "gray",
  },
});

const postTextContainerStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

export default PostComponent;
