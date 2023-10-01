"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var theme_1 = require("../utils/theme");
var native_1 = require("@react-navigation/native");
/**
 * The custom header bar component.
 *
 * See https://reactnavigation.org/docs/bottom-tab-navigator#header-related-options for props.
 *
 * <HeaderBar options={{ tabBarLabel: 'Home' }} />
 */
var HeaderBarComponent = function () {
    var navigation = native_1.useNavigation();
    var navigateToProfile = function () {
        navigation.navigate("Profile");
    };
    var navigateToSettings = function () {
        navigation.navigate("Settings");
    };
    return (react_1["default"].createElement(react_native_1.SafeAreaView, { style: stylesHeader.container },
        react_1["default"].createElement(react_native_1.SafeAreaView, null,
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: navigateToSettings },
                react_1["default"].createElement(react_native_1.Image, { source: require("../assets/icons/settings.png"), style: {
                        width: 30,
                        height: 30,
                        marginLeft: 15
                    } }))),
        react_1["default"].createElement(react_native_1.Text, { style: stylesHeader.text }, "Home"),
        react_1["default"].createElement(react_native_1.SafeAreaView, null,
            react_1["default"].createElement(react_native_1.TouchableOpacity, { onPress: navigateToProfile },
                react_1["default"].createElement(react_native_1.Image, { source: require("../assets/icons/user.png"), style: {
                        width: 30,
                        height: 30,
                        marginRight: 15
                    } })))));
};
var stylesHeader = react_native_1.StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: theme_1.theme.colors.primary,
        height: 110
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20
    }
});
exports["default"] = HeaderBarComponent;
