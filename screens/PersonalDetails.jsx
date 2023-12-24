import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const PersonalDetails = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] = useState("");
  const [nextOfKinName, setNextOfKinName] = useState("");
  const [nextOfKinPhoneNumber, setNextOfKinPhoneNumber] = useState("");
  const [progress, setProgress] = useState(0);

  const handleContinue = () => {
    // Validate input fields and update progress
    if (
      firstName &&
      lastName &&
      phoneNumber &&
      email &&
      nextOfKinName &&
      nextOfKinPhoneNumber
    ) {
      setProgress(0.5);
      navigation.navigate("VehicleInfo");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
            Personal Details
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

        <KeyboardAvoidingView
          style={{ paddingHorizontal: 16, gap: 16, flex: 1 }}
        >
          <View style={{ position: "relative" }}>
            <Text style={styles.label}>First Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your first name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <Octicons
              name="person"
              size={18}
              color="black"
              style={{ position: "absolute", bottom: "20%", left: "5%" }}
            />
          </View>
          <View style={{ position: "relative" }}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your last name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
            <Octicons
              name="person"
              size={18}
              color="black"
              style={{ position: "absolute", bottom: "20%", left: "5%" }}
            />
          </View>

          <View style={{ position: "relative" }}>
            <Text style={styles.label}>Phone Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="phone-pad"
            />
            <SimpleLineIcons
              name="screen-smartphone"
              size={18}
              color="black"
              style={{ position: "absolute", bottom: "20%", left: "5%" }}
            />
          </View>

          <View style={{ position: "relative" }}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={email}
              onChangeText={(text) => setEmail(text)}
              keyboardType="email-address"
            />
            <MaterialCommunityIcons
              name="email-outline"
              size={18}
              color="black"
              style={{ position: "absolute", bottom: "20%", left: "5%" }}
            />
          </View>
          <View style={{ position: "relative" }}>
            <Text style={styles.label}>Next of Kin Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter next of kin's name"
              value={nextOfKinName}
              onChangeText={(text) => setNextOfKinName(text)}
            />
            <Feather
              name="users"
              size={18}
              color="black"
              style={{ position: "absolute", bottom: "20%", left: "5%" }}
            />
          </View>

          <View style={{ position: "relative" }}>
            <Text style={styles.label}>Next of Kin Phone Number:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter next of kin's phone number"
              value={nextOfKinPhoneNumber}
              onChangeText={(text) => setNextOfKinPhoneNumber(text)}
              keyboardType="phone-pad"
            />
            <MaterialIcons
              name="phone-iphone"
              size={18}
              color="black"
              style={{ position: "absolute", bottom: "20%", left: "5%" }}
            />
          </View>

          <TouchableOpacity style={{}} onPress={handleContinue}>
            <View
              style={{
                backgroundColor: "#B847EF", // Background color
                marginTop: 6, // Margin top
                height: 50,
                paddingHorizontal: 18,
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
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  Header: {
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    alignSelf: "center",
  },
  label: {
    fontSize: 13,
    color: "#030229",
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 42,
    width: "100%",
    backgroundColor: "#F7F7F8",
  },
});
