// ChatScreen.js
import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  GiftedChat,
  InputToolbar,
  Composer,
  Send,
} from "react-native-gifted-chat";
import ImagePicker from "react-native-image-picker";
import AudioRecorderPlayer from "react-native-audio-recorder-player";
import Icon from "react-native-vector-icons/FontAwesome";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const audioRecorderPlayer = new AudioRecorderPlayer();

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

  const handleAttachment = () => {
    // Implement logic for attaching files
  };

  const handleVoiceNote = async () => {
    if (!isRecording) {
      try {
        setIsRecording(true);
        const result = await audioRecorderPlayer.startRecorder();
        console.log(result);
      } catch (error) {
        console.error("Error recording voice note:", error);
      }
    } else {
      const result = await audioRecorderPlayer.stopRecorder();
      setIsRecording(false);
      console.log(result);
    }
  };

  const handleGalleryPicker = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const imageMessage = [
          {
            _id: Math.random().toString(),
            image: response.uri,
            createdAt: new Date(),
            user: admin,
          },
        ];
        onSend(imageMessage);
      }
    });
  };

  const renderSend = (props) => (
    <Send {...props}>
      <View style={{ marginRight: 10, marginBottom: 5 }}>
        <Feather name="send" size={24} color="black" />
      </View>
    </Send>
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          backgroundColor: "#e8e8e8",
        }}
      >
        <Image
          source={admin.avatar}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
        />
        <View>
          <Text>{admin.name}</Text>
          {admin.online ? (
            <Text style={{ color: "green" }}>Online</Text>
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
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{
              backgroundColor: "white",
              borderTopWidth: 1,
              borderTopColor: "#e0e0e0",
              justifyContent: "space-between",
            }}
          />
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
        renderSend={renderSend}
        renderActions={() => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <TouchableOpacity onPress={handleAttachment}>
              <Icon name="attachment" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleVoiceNote}>
              <Icon
                name={isRecording ? "stop" : "microphone"}
                size={30}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGalleryPicker}>
              <Icon name="image" size={30} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ChatScreen;
