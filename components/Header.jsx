import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
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
      <Text style={{ fontWeight: "800", fontSize: 18 }}>Hire a vehicle</Text>
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
  );
};

export default Header;

const styles = StyleSheet.create({});
