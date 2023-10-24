/**
 * This is the main entry point for the application.
 * It sets up the navigation structure of the app using React Navigation.
 * 
 * The app uses a combination of stack navigation and tab navigation.
 * The stack navigator is the root navigator, and one of its screens is the tab navigator.
 * 
 * The tab navigator has four screens: Home, Bible, Timeline, and Chat.
 * Each tab screen is associated with an icon and a component that gets rendered when the tab is active.
 * 
 * The stack navigator has five screens: TabNavigationHome, Profile, Settings, Knowledge, and Reading.
 * The TabNavigationHome screen is the tab navigator described above.
 * The other screens are individual components that get rendered when navigating from the tab screens.
 * 
 * The output of this file is the main App component that renders the NavigationContainer wrapping the stack navigator.
 */

import { Image, StatusBar, Text } from "react-native";

// React Native Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

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

// Icons
import homeIcon from './assets/icons/home.png';
import bibleIcon from './assets/icons/bible.png';
import timelineIcon from './assets/icons/magnifying-glass.png';
import chatIcon from './assets/icons/bubble-chat.png';

const Tab = createBottomTabNavigator();

/**
 * Renders a tab navigation component.
 *
 * This component is used in the main App component to provide tab navigation functionality.
 * It is used to navigate between the Home, Bible, Timeline, and Chat screens.
 *
 * @return {ReactNode} The rendered tab navigation component.
 */
const TabNavigation = () => {
  const tabScreens = [
    { name: "Home", component: HomeScreen, icon: homeIcon },
    { name: "Bible", component: BibleScreen, icon: bibleIcon },
    { name: "Timeline", component: TimelineScreen, icon: timelineIcon },
    { name: "Chat", component: ChatScreen, icon: chatIcon },
  ];

  return (
    <Tab.Navigator>
      {tabScreens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            header: (props) => <HeaderBarComponent {...props} title={screen.name} />,
            tabBarLabel: ({ focused, color, size }) => (<Text style={{ color: "gray" }}>{screen.name}</Text>),
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={screen.icon}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? '#EDD47C' : 'gray', // Change color to blue when focused
                }}
                resizeMode="contain" // Ensure the icon images are resized properly
              />
            ),
            tabBarLabelStyle: {
              fontSize: 12, // Adjust the font size
              marginBottom: 3, // Add some margin to the bottom for better alignment
            },
            tabBarIconStyle: {
              marginTop: 3, // Add some margin to the top for better alignment
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

/**
 * Renders the main application component.
 *
 * This component is used as the root component of the application. It sets up the navigation stack
 * and includes the TabNavigation component for navigating between the Home, Bible, Timeline, and Chat screens.
 * It also includes the StatusBar and other screens like Profile, Settings, Knowledge, and Reading.
 *
 * @return {JSX.Element} The rendered application component.
 */
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* Make StatusBar white. or set to auto? */}
      <StatusBar barStyle="light-content" />

      {/* These options apply  to all stack navigator screens unless overriden.*/}
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#152D3C', // Set the header background color.
        },
        headerBackTitle: "Back", // Set the back title/
        headerTintColor: 'white' // Set the tint color of the header.
      }}>
        {[
          { name: "TabNavigationHome", component: TabNavigation, options: { headerShown: false } },
          { name: "Profile", component: ProfileScreen, options: { headerBackTitle: "Back" } },
          { name: "Settings", component: SettingsScreen, options: { headerBackTitle: "Back" } },
          { name: "Knowledge", component: KnowledgeScreen, options: { headerBackTitle: "Back" } },
          { name: "Reading", component: ReadingScreen, options: { headerBackTitle: "Back" } },
        ].map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
