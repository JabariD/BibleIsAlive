// typescript react component for the timeline screen

import React from 'react';

import { SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";

// Components
import PostComponent from '../components/PostComponent';

export type Props = {};

/**
 * TimelineScreen
 *
 * 
 *
 */
const TimelineScreen: React.FC<Props> = () => {
    return (
        <ScrollView>
            <SafeAreaView style={screenTimelineStyles.container}>
                <Text>TimelineScreen</Text>
                <PostComponent />
            </SafeAreaView>
        </ScrollView> 
    );
}

const sharedStyles = StyleSheet.create({});

const screenTimelineStyles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        margin: 20,
    },
});

export default TimelineScreen;