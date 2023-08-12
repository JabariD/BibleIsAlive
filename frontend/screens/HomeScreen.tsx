import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export type Props = {};

const HomeScreen : React.FC<Props> = () => { 
    return (
        <SafeAreaView>
            {/* Welcome Header */}
            <SafeAreaView style={styleWelcomeHeader.container}>
                <Text>Welcome Back</Text>
                <Text style={styleWelcomeHeader.name}>Payton</Text>
            </SafeAreaView>

            {/* Badges */}
            <SafeAreaView style={styleBadges.container}>
                <Text style={styleBadges.header}>Badges</Text>
            </SafeAreaView>

            {/* Pinned */}
            <SafeAreaView >
                <Text>Pinned</Text>
            </SafeAreaView>

            {/* Prayer card */}
            <SafeAreaView >
                <Text>Scrolling inside prayer card (not a scrollview)</Text>
            </SafeAreaView>

            {/* Notes */}
            <SafeAreaView >
                <Text>Notes</Text>
            </SafeAreaView>

            {/* Highlights */}
            <SafeAreaView >
                <Text>Highlights</Text>
            </SafeAreaView>

        </SafeAreaView>
    );
};

const styleWelcomeHeader = StyleSheet.create({
    container: {
        marginLeft: 20,
    },

    name: {
      fontSize: 40,
      fontWeight: 'bold',
    },
  });

const styleBadges = StyleSheet.create({
    container: {
        margin: 15,
    },

    header: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default HomeScreen;