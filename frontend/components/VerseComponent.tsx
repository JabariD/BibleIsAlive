import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

// Interface for VerseProps
interface VerseProps {
  verse: string;
  number: number;
  onVerseSelect: (verseNumber: number) => void;
  isSelected: boolean;
}

// Verse component
// Displays a verse with a number and opens a modal on press
const VerseComponent: React.FC<VerseProps> = ({ verse, number, onVerseSelect, isSelected }) => {
  // State

  // State Management
  const handlePress = () => {
    onVerseSelect(number);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text>
          <Text style={styles.verseNumber}>{number}</Text> 
          <Text style={[styles.verseText, isSelected && styles.underline]}> {verse}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  verseNumber: {
    fontWeight: "bold",
  },
  verseText: {
    fontSize: 20,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default VerseComponent;