import React, { useState } from 'react';
import { Modal, View, Text, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

interface ChatModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isVisible, onClose }) => {
    const [chatInput, setChatInput] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = () => {
        if (chatInput.trim()) {
            const aiResponse = "This is a placeholder response from the AI.";
            setMessages([...messages, `You: ${chatInput}`, `AI: ${aiResponse}`]);
            setChatInput('');
        }
    };

    // Get the screen dimensions
    const { width, height } = Dimensions.get('window');

    return (
        <Modal
            visible={isVisible}
            onRequestClose={onClose}
            transparent={true} // Set modal background to be transparent
            animationType="slide" // Optional: Adds slide animation
        >
            {/* Overlay with blur effect */}
            {isVisible && (
                <View style={tw`absolute inset-0 bg-black bg-opacity-10`}></View>
            )}
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={tw`flex-1 justify-center items-center px-4`}>
                    <TouchableWithoutFeedback>
                        <View style={tw`w-full h-1/4  rounded-t-lg shadow-lg p-4`}>
                            <View style={tw`p-4 bg-white rounded-lg shadow`}>
                                <Text style={tw`text-xl font-semibold mb-4`}>Chat with AI</Text>
                                <ScrollView style={tw`h-64 mb-4`}>
                                    {messages.map((message, index) => (
                                        <Text key={index} style={tw`mb-2`}>{message}</Text>
                                    ))}
                                </ScrollView>
                                <View style={tw`flex-row`}>
                                    <TextInput
                                        style={tw`flex-1 p-2 mr-2 bg-gray-200 rounded-md`}
                                        placeholder="Type your message..."
                                        value={chatInput}
                                        onChangeText={setChatInput}
                                        onSubmitEditing={handleSendMessage}
                                    />
                                    <TouchableOpacity
                                        style={tw`p-2 bg-blue-500 rounded-md shadow`}
                                        onPress={handleSendMessage}
                                    >
                                        <Text style={tw`text-white font-medium`}>Send</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ChatModal;