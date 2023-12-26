import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  StyleSheet,
} from "react-native";
import CallKeep from "react-native-callkeep";
import InCallManager from "react-native-incall-manager";
import Icon from "react-native-vector-icons/Ionicons";

const CustomCallScreen = () => {
  useEffect(() => {
    const checkPermissions = async () => {
      try {
        if (Platform.OS === "android") {
          const permissions = [
            PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
            PermissionsAndroid.PERMISSIONS.CALL_PHONE,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.MODIFY_AUDIO_SETTINGS,
          ];

          const granted = await PermissionsAndroid.requestMultiple(permissions);

          if (
            granted[PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            granted[PermissionsAndroid.PERMISSIONS.CALL_PHONE] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            granted[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            granted[PermissionsAndroid.PERMISSIONS.MODIFY_AUDIO_SETTINGS] ===
              PermissionsAndroid.RESULTS.GRANTED
          ) {
            initializeCallKeep();
          } else {
            console.warn("Permissions not granted.");
          }
        } else {
          // For iOS, you typically don't need to request permissions explicitly.
          initializeCallKeep();
        }
      } catch (error) {
        console.error("Error requesting permissions:", error);
      }
    };

    checkPermissions();

    return () => {
      // Clean up when component unmounts
      CallKeep.unregister();
    };
  }, []);

  const initializeCallKeep = () => {
    // Initialize CallKeep
    CallKeep.setup({
      ios: {
        appName: "YourAppName",
      },
      android: {
        alertTitle: "Permissions required",
        alertDescription:
          "This application needs to access your phone accounts",
        cancelButton: "Cancel",
        okButton: "OK",
      },
    });

    // Start InCallManager
    InCallManager.start({ media: "audio", auto: true });
  };

  const handleEndCall = () => {
    // Handle end call button press
    InCallManager.stop();
    CallKeep.endAllCalls();
  };

  const handleMute = () => {
    // Handle mute button press
    InCallManager.setMicrophoneMute(!InCallManager.isMicrophoneMuted());
  };

  const handleSpeaker = () => {
    // Handle speaker button press
    InCallManager.setSpeakerphoneOn(!InCallManager.isSpeakerphoneOn());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calling...</Text>

      {/* Icons for mute, speaker, end call */}
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={handleMute}>
          <Icon
            name={InCallManager.isMicrophoneMuted() ? "mic-off" : "mic"}
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSpeaker} style={styles.speakerIcon}>
          <Icon
            name={
              InCallManager.isSpeakerphoneOn() ? "volume-high" : "volume-mute"
            }
            size={30}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEndCall}>
          <Icon name="call-outline" size={30} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  speakerIcon: {
    marginLeft: 20,
    marginRight: 20,
  },
});

export default CustomCallScreen;
