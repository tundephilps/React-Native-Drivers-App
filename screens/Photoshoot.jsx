import { Camera, CameraType } from "expo-camera";
import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isSnapping, setSnapping] = useState(false);
  const [capturedImageUri, setCapturedImageUri] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  async function takePicture() {
    if (isSnapping) {
      // Avoid taking multiple pictures in quick succession
      return;
    }

    setSnapping(true);

    try {
      const { uri } = await camera.takePictureAsync();
      setCapturedImageUri(uri);
      setModalVisible(true);
    } catch (error) {
      console.error("Error taking picture:", error);
    } finally {
      setSnapping(false);
    }
  }

  function closeModal() {
    setModalVisible(false);
    setCapturedImageUri(null);
  }

  async function saveImageToBackend() {
    // Implement your logic to send the image to the backend API
    // You can use the capturedImageUri state to get the URI of the captured image
    console.log("Save image to backend:", capturedImageUri);

    // Close the modal after saving

    navigation.navigate("Agree");
    closeModal();
  }

  let camera;

  return (
    <SafeAreaView style={styles.container}>
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

      <Text style={styles.logIn}>Verify Identity</Text>
      <Text
        style={{
          fontSize: 16,
          color: "#111",
          textAlign: "center",
          width: "90%",
          alignSelf: "center",
        }}
      >
        Position your bare face clearly in the camera No face mask or glasses
      </Text>

      <View style={styles.cameraContainer}>
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            camera = ref;
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>
            <MaterialIcons name="flip-camera-ios" size={32} color="white" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text>
            <AntDesign name="camera" size={32} color="white" />
          </Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} transparent>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Capture Successful!</Text>
          <Image source={{ uri: capturedImageUri }} style={styles.modalImage} />
          <View style={styles.modalButtonContainer}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={saveImageToBackend}
            >
              <Text style={styles.modalButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  cameraContainer: {
    height: 310,
    width: 310,
    borderRadius: 300,
    overflow: "hidden",
    margin: 16,
    alignSelf: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#B847EF",
    padding: 18,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
  },
  logIn: {
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    alignSelf: "center",
  },
});
