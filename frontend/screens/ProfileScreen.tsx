import React from "react";
import { StyleSheet, Text, SafeAreaView, Image } from "react-native";

/**
 * ProfileScreen
 *
 * Renders the profile screen component.
 *
 * User can see their congregation they are a part of.
 * User can see their favorite churches (member of), (deacon to).
 * User can see their level.
 * User can see their posts.
 */
export type Props = {};
const ProfileScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={profileScreenStyles.container}>

        {/* TODO: Add user level. */}
      <SafeAreaView style={headerStyles.container}>
        <SafeAreaView style={headerStyles.profileImageNameAndTimeContainer}>
          {/* Image */}
          <Image
            source={require("../assets/images/profile-image.png")}
            style={{
              width: 90,
              height: 90,
              borderRadius: 50,
            }}
          />

          {/* Name and Last Active */}
          <SafeAreaView style={headerStyles.nameAndTimeContainer}>
            <Text style={headerStyles.name}>First Name Last Name</Text>
            <Text>Last Active: 5 mins ago</Text>
          </SafeAreaView>
        </SafeAreaView>

        {/* Edit Icon */}
        <Image
          source={require("../assets/icons/edit.png")}
          style={{ width: 20, height: 20 }}
        ></Image>
      </SafeAreaView>

      {/* Bio */}
      <SafeAreaView style={bioStyles.container}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          doloremque! Veritatis similique distinctio maiores quibusdam libero,
          ipsum sit eum eaque ea facere consectetur illo, voluptas mollitia
          ullam velit non. Cum!
        </Text>
      </SafeAreaView>

      {/* Churches */}
      <SafeAreaView>
        <Text>Churches</Text>
      </SafeAreaView>

      {/* Footer */}
      <SafeAreaView style={footerStyles.container}>
        <Text style={footerStyles.text}>Contact Support &gt;</Text>
        <Text style={footerStyles.text}>Log Out</Text>
        <Text style={footerStyles.deleteAccountText}>Delete Your Account</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const profileScreenStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
    marginTop: 30,
  },
});

const headerStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileImageNameAndTimeContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  nameAndTimeContainer: {
    margin: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

const bioStyles = StyleSheet.create({
   container: {
       marginTop: 20,
       marginBottom: 70
   } 
});

const footerStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    marginBottom: 20,
    rowGap: 10,
  },

  text : {
    fontSize: 16,
    fontWeight: "bold",
  },

  deleteAccountText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
