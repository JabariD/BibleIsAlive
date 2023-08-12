import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export type Props = {};

const HomeScreen : React.FC<Props> = () => { 
    return (
        <SafeAreaView style={styleHeader.container}>
            <Text>Welcome Back</Text>
            <Text style={styleHeader.name}>Payton</Text>
        </SafeAreaView>
    );
};

const styleHeader = StyleSheet.create({
    container: {
        marginLeft: 20,
    },

    name: {
      fontSize: 40,
      fontWeight: 'bold',
    },
  });

export default HomeScreen;