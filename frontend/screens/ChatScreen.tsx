import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

/**
 * ChatScreen
 *
 *
 *
 */

type Message = {
  text: string;
  isUser: boolean;
};

export type Props = {};
const ChatScreen: React.FC<Props> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  /**
   * Adds a new user message to the chat screen.
   *
   * If the input text is not empty, a new message object is created with the input text and a flag indicating that it is a user message.
   * The new message object is then added to the messages array using the spread operator.
   * Finally, the input text is cleared by setting it to an empty string.
   */
  const sendUserMessageToScreen = () => {
    if (inputText.trim() !== "") {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText("");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {/* Wrap the entire ChatScreen component with KeyboardAvoidingView to adjust the screen when the keyboard is shown */}
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.chatContainer}>
            {/* Map through the messages array and render each message in a message container */}
            {messages.map((message, index) => (
              <View
                key={index}
                style={[
                  styles.messageContainer,
                  message.isUser
                    ? styles.userMessageContainer
                    : styles.botMessageContainer,
                ]}
              >
                <Text
                  style={
                    message.isUser
                      ? styles.userMessageText
                      : styles.botMessageText
                  }
                >
                  {message.text}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.inputContainer}>
            {/* Render the input field */}
            <TextInput
              style={styles.input}
              value={inputText}
              onChangeText={setInputText}
              placeholder="Type your message here"
              placeholderTextColor="#999"
            />
            {/* Render the send button */}
            <Button title="Send" onPress={sendUserMessageToScreen} />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 15,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessageContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
  },
  botMessageContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#eee",
  },
  userMessageText: {
    color: "#000",
  },
  botMessageText: {
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
});

export default ChatScreen;
