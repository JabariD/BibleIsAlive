import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

//
/**
 * Renders a container for a church with the provided props.
 * @param image - The image to display for the church.
 * @param churchName - The name of the church.
 * @param subtitle - The subtitle for the church.
 * @returns A React component that displays the church container.
 */
const ChurchContainer = ({
  image,
  churchName,
  subtitle,
}: {
  image: any;
  churchName: string;
  subtitle: string;
}) => {
  // Render the church container with the provided props
  return (
    <View style={churchStyles.churchContainer}>
      <Image source={image} style={churchStyles.image} />
      <View style={churchStyles.textContainer}>
        <Text style={churchStyles.headerText}>{churchName}</Text>
        <Text style={churchStyles.subtitleText}>{subtitle}</Text>
      </View>
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/next.png")}
          style={churchStyles.arrow}
        />
      </TouchableOpacity>
    </View>
  );
};

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
        <View style={churchStyles.headerContainer}>
          <Text style={churchStyles.header}>Your Churches</Text>
          <TouchableOpacity>
            <Text style={churchStyles.addNew}>Add New</Text>
          </TouchableOpacity>
        </View>
        <ChurchContainer
          image={require("../assets/images/church.jpg")}
          churchName="Church Name 1"
          subtitle="Role: Member"
        />
        <ChurchContainer
          image={require("../assets/images/church.jpg")}
          churchName="Church Name 2"
          subtitle="Role: Follower"
        />
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
    marginBottom: 70,
  },
});

const footerStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 100,
    marginBottom: 20,
    rowGap: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
  },

  deleteAccountText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const churchStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  addNew: {
    fontSize: 18,
    color: "grey",
  },
  churchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 16,
    color: "gray",
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default ProfileScreen;
