import { StyleSheet, Text, Image, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./utils/theme";

import { createStackNavigator } from "@react-navigation/stack";
import { TransitionSpecs } from "@react-navigation/stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import BibleScreen from "./screens/BibleScreen";
import TimelineScreen from "./screens/TimelineScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ChatScreen from "./screens/ChatScreen";
import KnowledgeScreen from "./screens/KnowledgeScreen";
import ReadingScreen from "./screens/ReadingScreens";

// Components
import HeaderBarComponent from "./components/HeaderBarComponent";

const Tab = createBottomTabNavigator();

/**
 * Renders a tab navigation component.
 *
 * @return {ReactNode} The rendered tab navigation component.
 */
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      {/* HomeScreen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // Header bar
          header: (props) => <HeaderBarComponent {...props} />,
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
          header: (props) => <HeaderBarComponent {...props} />,
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
      {/* TimelineScreen */}
      <Tab.Screen
        name="Timeline"
        component={TimelineScreen}
        options={{
          // Header bar
          header: (props) => <HeaderBarComponent {...props} />,
          // Label of tab icon
          tabBarLabel: "Explore",
          // Image of icon
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/icons/magnifying-glass.png")}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
      {/* ChatScreen */}
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          // Header bar
          header: (props) => <HeaderBarComponent {...props} />,
          // Label of tab icon
          tabBarLabel: "Chat",
          // Image of icon
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/icons/bubble-chat.png")}
              style={{
                width: 30,
                height: 30,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* Make StatusBar white. or set to auto? */}
      <StatusBar barStyle="light-content" />

      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigationHome"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Knowledge"
          component={KnowledgeScreen}
          options={{
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Reading"
          component={ReadingScreen}
          options={{
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
