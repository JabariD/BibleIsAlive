import { StyleSheet, Text, Image, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./utils/theme";

// Screens
import HomeScreen from "./screens/HomeScreen";
import BibleScreen from "./screens/BibleScreen";

const Tab = createBottomTabNavigator();

// Temporary to assume user signed in.
const isSignedIn = true;

// See https://reactnavigation.org/docs/bottom-tab-navigator#header-related-options for props.
function HeaderBar(props) {
  return (
    <SafeAreaView style={stylesHeader.container}>
      <SafeAreaView>
      <Image
          source={require("./assets/icons/bookmark.png")}
          style={{
            width: 30,
            height: 30,
            marginLeft: 10,
          }}
        />
      </SafeAreaView>
      <Text style={stylesHeader.text}>{props.options.tabBarLabel}</Text>
      <SafeAreaView>
        <Image
          source={require("./assets/icons/user.png")}
          style={{
            width: 30,
            height: 30,
            marginRight: 10,
          }}
        />
      </SafeAreaView>

    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Make StatusBar white. */}
      <StatusBar barStyle="light-content" />
      {isSignedIn ? (
        <Tab.Navigator>
          {/* HomeScreen */}
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              // Header bar
              header: (props) => <HeaderBar {...props} />,
              // Label of tab icon
              tabBarLabel: "Home",
              // Image of icon
              tabBarIcon: ({ focused, color, size }) => (
                <Image
                  source={require("./assets/icons/home.png")}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              ),
            }}
          />
          {/* BibleScreen */}
           <Tab.Screen
            name="Bible"
            component={BibleScreen}
            options={{
              // Header bar
              header: (props) => <HeaderBar {...props} />,
              // Label of tab icon
              tabBarLabel: "Bible",
              // Image of icon
              tabBarIcon: ({ focused, color, size }) => (
                <Image
                  source={require("./assets/icons/bible.png")}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Text>Logged Out</Text>
      )}
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  customHeaderContainer: {
    backgroundColor: "#000",
  },
});

const stylesHeader = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",

    backgroundColor: theme.colors.primary,
    height: 100,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
