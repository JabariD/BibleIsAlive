import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { theme } from "../utils/theme";
import { useNavigation } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
/**
 * The custom header bar component.
 *
 * See https://reactnavigation.org/docs/bottom-tab-navigator#header-related-options for props.
 *
 * <HeaderBar options={{ tabBarLabel: 'Home' }} />
 */
const HeaderBarComponent = (props: any) => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  const navigateToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView style={stylesHeader.container}>
      <SafeAreaView>
        <TouchableOpacity onPress={navigateToSettings}>
          <Image
            source={require("../assets/icons/settings.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 15,
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <Text style={stylesHeader.text}>{props.title}</Text>
      <SafeAreaView>
        <TouchableOpacity onPress={navigateToProfile}>
          <Image
            source={require("../assets/icons/user.png")}
            style={{
              width: 30,
              height: 30,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const stylesHeader = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: theme.colors.primary,
    height: 110,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HeaderBarComponent;
