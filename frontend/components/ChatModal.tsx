import React, { useState, useEffect } from 'react';
import { Keyboard, Modal, SafeAreaView, Text, ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

interface ChatModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ isVisible, onClose }) => {
    const [chatInput, setChatInput] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    // TODO: Consider using a reducer for managing complex state logic
    // State to hold keyboard visibility
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    // Subscribe to keyboard show/hide events
    useEffect(() => {
        const handleKeyboardDidShow = () => setKeyboardVisible(true);
        const handleKeyboardDidHide = () => setKeyboardVisible(false);

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

        // Cleanup function to remove event listeners
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    // TODO: Implement backend integration for sending and receiving messages
    // Function to handle sending messages
    const handleSendMessage = () => {
        if (chatInput.trim()) {
            const aiResponse = "This is a placeholder response from the AI.";
            setMessages([...messages, `You: ${chatInput}`, `AI: ${aiResponse}`]);
            setChatInput('');
        }
    };

    // TODO: Refactor modal container style logic into a custom hook for reusability
    // Determine modal container style based on keyboard visibility
    const getModalContainerStyle = () => (
        isKeyboardVisible
            ? tw`justify-end items-center px-4 pb-4` // Adjust for keyboard, align modal above the keyboard with padding
            : tw`flex-1 justify-center items-center px-4` // Center modal when keyboard is hidden
    );

    // TODO: Consider memoizing the renderMessage function to prevent unnecessary re-renders
    // Render a single message
    const renderMessage = (message: string, index: number) => (
        <Text key={index} style={tw`mb-2`}>{message}</Text>
    );

    // TODO: Improve accessibility features, such as adding ARIA labels
    // Render the modal content
    const renderModalContent = () => (
        <SafeAreaView style={tw`w-full max-w-md mx-auto rounded-t-lg shadow-lg p-4`}>
            <SafeAreaView style={tw`p-4 bg-white rounded-lg shadow`}>
                <SafeAreaView style={tw`flex-row items-center justify-between p-4`}>
                    <Text style={tw`text-xl font-semibold flex-1 text-center`}>Chat with AI</Text>
                    <TouchableOpacity onPress={onClose} style={tw`p-2 bg-red-500 rounded-md shadow`}>
                        <Text style={tw`text-white font-medium`}>Back</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <ScrollView style={tw`h-64 mb-4 px-4`}>
                    {messages.map(renderMessage)}
                </ScrollView>
                <SafeAreaView style={tw`flex-row py-4 px-4`}>
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
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    );

    return (
        <Modal
            visible={isVisible}
            onRequestClose={onClose}
            transparent={true}
            animationType="slide"
        >
            {isVisible && <SafeAreaView style={tw`absolute inset-0 bg-black bg-opacity-10`}></SafeAreaView>}
            <TouchableWithoutFeedback onPress={onClose}>
                <SafeAreaView style={getModalContainerStyle()}>
                    <TouchableWithoutFeedback>
                        {renderModalContent()}
                    </TouchableWithoutFeedback>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ChatModal;