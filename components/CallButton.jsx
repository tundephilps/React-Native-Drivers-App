import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Assuming you're using React Navigation

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCallButtonPress = () => {
    // You may want to pass the phone number to the custom call screen
    navigation.navigate("CustomCallScreen", { phoneNumber: "123456789" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Home Screen</Text>
      <TouchableOpacity
        onPress={handleCallButtonPress}
        style={styles.callButton}
      >
        <Text style={styles.buttonText}>Call Number</Text>
      </TouchableOpacity>
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
  callButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
