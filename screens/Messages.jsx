// Messages.js
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { View, TouchableOpacity, Image, Platform, Text } from "react-native";
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
  Bubble,
} from "react-native-gifted-chat";
import ImagePicker from "react-native-image-picker";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const admin = {
    _id: 2,
    name: "Admin",
    avatar: require("../assets/face.jpeg"), // Replace with the path to the admin's avatar
    online: true,
  };

  useEffect(() => {
    // Load initial messages or fetch from your backend
    setMessages([
      {
        _id: 1,
        text: "Hello! How can I help you?",
        createdAt: new Date(),
        user: admin,
      },
    ]);
  }, []);

  const onSend = (newMessages) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
    // Send newMessages to your backend here
  };

  const renderSend = (props) => (
    <Send {...props}>
      <View
        style={{
          marginBottom: 5,
          backgroundColor: "#A10F7E",
          padding: 10,
          borderRadius: 8,
        }}
      >
        <Feather name="send" size={14} color="white" />
      </View>
    </Send>
  );

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#A10F7E",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
            fontWeight: "300",
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#A10F7E" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          gap: 12,
          backgroundColor: "#A10F7E",
        }}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
        <Image
          source={admin.avatar}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontWeight: "400", color: "white" }}>
            {admin.name}
          </Text>
          {admin.online ? (
            <Text style={{ color: "green" }}>Online </Text>
          ) : (
            <Text>Offline</Text>
          )}
        </View>
      </View>

      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1, // User's ID
        }}
        alwaysShowSend
        scrollToBottom
        renderBubble={renderBubble}
        scrollToBottomComponent={scrollToBottomComponent}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: "white",
              borderTopWidth: 1,
              borderTopColor: "#e0e0e0",
              paddingHorizontal: 16,
              backgroundColor: "#E6CEF280",
              borderRadius: 6,
            }}
          />
        )}
        renderSend={renderSend}
        renderActions={() => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              paddingVertical: 12,
            }}
          >
            <TouchableOpacity
            //onPress={handleAttachment}
            >
              <Entypo name="attachment" size={20} color="#A10F7E" />
            </TouchableOpacity>
            <TouchableOpacity
            //</View>onPress={handleVoiceNote}
            >
              <Icon
                name={isRecording ? "stop-circle-o" : "microphone"}
                size={20}
                color="#A10F7E"
              />
            </TouchableOpacity>
            <TouchableOpacity
            //  onPress={handleGalleryPicker}
            >
              <Icon name="image" size={20} color="#A10F7E" />
            </TouchableOpacity>
          </View>
        )}
        renderComposer={(props) => (
          <Composer
            {...props}
            multiline={true}
            placeholder="Type your message..."
            textInputStyle={{
              color: "black",
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Messages;
