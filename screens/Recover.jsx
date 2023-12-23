import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Recover = () => {
  const [email, setEmail] = useState("");

  //   const handleResetPassword = async () => {
  //     try {
  //       // Call your backend API to reset the password
  //       // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual endpoint
  //       const response = await fetch("YOUR_BACKEND_API_ENDPOINT/reset-password", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email }),
  //       });

  //       if (response.ok) {
  //         // Password reset successful
  //         Alert.alert(
  //           "Password Reset",
  //           "Check your email for further instructions."
  //         );
  //       } else {
  //         // Password reset failed
  //         Alert.alert("Password Reset Failed", "Please try again later.");
  //       }
  //     } catch (error) {
  //       console.error("Error resetting password:", error);
  //       Alert.alert("Error", "An unexpected error occurred. Please try again.");
  //     }
  //   };
  return (
    <View style={styles.container}>
      <Text style={styles.logIn}>Recover</Text>
      <View style={{ height: 58 }} />
      <View style={{ width: "100%", alignSelf: "center" }}>
        <Text style={{ fontSize: 16, color: "#030229", marginBottom: 8 }}>
          Email Address
        </Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="example@gmail.com"
          placeholderTextColor="#6b7280"
          style={{
            height: 50,
            borderColor: "lightgray",
            borderRadius: 5,
            paddingHorizontal: 12,
            backgroundColor: "#F7F7F8",
          }}
        />
      </View>

      <View style={{ height: 26 }} />
      <View
        style={{
          width: "100%",
        }}
      >
        <TouchableOpacity

        //onPress={handleResetPassword}
        >
          <View
            style={{
              backgroundColor: "#B847EF", // Background color
              height: 50,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Reset Your Password
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recover;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  logIn: {
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
    alignSelf: "center",
  },
});
