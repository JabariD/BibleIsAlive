import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator();

// Temporary to assume user signed in.
const isSignedIn = true;

export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeScreen /> */}
      {isSignedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
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
});
