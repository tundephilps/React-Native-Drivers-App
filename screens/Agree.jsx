import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Checkbox from "expo-checkbox";

const Agree = () => {
  const [agree, setAgree] = useState(false);
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
        <Text style={{ fontWeight: "800", fontSize: 18 }}></Text>
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
        <Image
          style={{ height: 80, width: 80 }}
          source={require("../assets/Accept.png")}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 24,
            lineHeight: 36,
            fontWeight: "500",
          }}
        >
          Accept SmartBest Terms & Review Privacy Policy
        </Text>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 22,
          }}
        >
          By selecting “I Agree” Below, I have reviewed and agree to the Terms
          of Use and acknowledge the Privacy Policy. I am at least 18 years of
          age.
        </Text>

        <View style={{ height: "38%" }} />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Checkbox value={agree} onValueChange={(value) => setAgree(value)} />
          <Text style={{ fontWeight: "200", color: "#030229" }}>I Agree</Text>
        </View>

        <TouchableOpacity
          style={{}}
          onPress={() => {
            /* handle onPress */
          }}
        >
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
              Submit
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Agree;

const styles = StyleSheet.create({});
