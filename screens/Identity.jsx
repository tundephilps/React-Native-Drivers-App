import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
  Permissions,
} from "react-native";
import React, { useState, useRef, useEffect, Component } from "react";
import { Camera, CameraType } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Identity = () => {
  const cameraRef = useRef(null);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const navigation = useNavigation();
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const handleCapture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync({
          quality: 0.5, // Adjust quality as needed
        });

        // Send the captured image to the backend
        console.log("Captured Image URI:", uri);
        // Implement your backend API call to send the image

        setCapturedImage(uri);
        setModalVisible(true);
      } catch (error) {
        console.error("Error capturing image:", error);
      }
    }
  };

  const handleCameraReady = () => {
    setIsCameraReady(true);
  };

  const handleSaveImage = () => {
    // Implement your backend API call to send the image
    console.log("Image saved:", capturedImage);
    setModalVisible(false);
    // Implement the logic to upload the image to the backend

    // Navigate to the home screen

    navigation.navigate("Agree");
    //  navigation.navigate('Home'); // Replace 'Home' with the name of your home screen
  };

  return (
    <SafeAreaView>
      {/* Header */}
      <View
        style={{
          padding: 16,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: "#f8f8f8",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="arrow-back-outline" size={18} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "800", fontSize: 18 }}>
          Facial Recognition
        </Text>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: "#f8f8f8",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
          }}
        >
          <Ionicons name="arrow-back-outline" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 16, paddingHorizontal: 16 }}>
        <Text style={styles.logIn}>Verify Identity</Text>
        <Text style={{ fontSize: 16, color: "#111", textAlign: "center" }}>
          Position your bare face clearly in the camera No face mask or glasses
        </Text>
        <View
          style={{
            height: 200,
            width: 200,
            borderRadius: 99,
            alignSelf: "center",
          }}
        >
          <Camera
            ref={cameraRef}
            style={styles.camera}
            onCameraReady={handleCameraReady}
            type={type}
          >
            <View style={styles.overlay}>
              <View style={styles.cameraCircle} />
            </View>
          </Camera>
        </View>

        <View style={{ flexDirection: "row", gap: 20, alignSelf: "center" }}>
          <TouchableOpacity
            onPress={toggleCameraType}
            style={styles.cameraicons}
          >
            <Text>
              <MaterialIcons name="flip-camera-ios" size={32} color="white" />
            </Text>
          </TouchableOpacity>
          {isCameraReady && (
            <TouchableOpacity
              style={styles.cameraicons}
              onPress={handleCapture}
              onPressIn={() => requestPermission(true)}
            >
              <Text>
                <AntDesign name="camera" size={32} color="white" />
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Modal */}
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Capture Successful!</Text>

            <View style={{ height: 120 }} />
            <View style={styles.modalImageContainer}>
              {capturedImage && (
                <Image
                  source={{ uri: capturedImage }}
                  style={styles.modalImage}
                />
              )}
            </View>
            <View style={{ height: 120 }} />
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveImage}
            >
              <Text style={styles.saveButtonText}>Save Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Identity;

const styles = StyleSheet.create({
  cameraicons: {
    backgroundColor: "#A10F7E",
    padding: 18,
    borderRadius: 8,
  },
  logIn: {
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    alignSelf: "center",
  },
  camera: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 99,
  },
  overlay: {
    justifyContent: "center",
    alignItems: "center",
  },
  cameraCircle: {
    width: 200,
    height: 200,
    borderRadius: 99,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "transparent",
  },
  captureButton: {
    marginTop: 20,
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 5,
  },
  captureButtonText: {
    color: "white",
    fontSize: 18,
  },

  modalContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  modalImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  modalImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
  closeButton: {
    backgroundColor: "#e74c3c",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,

    fontWeight: "300",
  },
});
