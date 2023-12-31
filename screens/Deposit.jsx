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

const Deposit = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
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
        <Text style={{ fontWeight: "800", fontSize: 18 }}>Deposit</Text>
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

      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ alignSelf: "center", fontSize: 24, fontWeight: "600" }}>
          {" "}
          Deposit To
        </Text>
        <View style={{ padding: 12 }} />
        <View
          style={{
            backgroundColor: "#D8C7FF",
            padding: 32,
            gap: 12,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 25 }}>
            Emmanuel Jonah
          </Text>

          <Text style={{ fontWeight: "200", fontSize: 16 }}>Wema Bank</Text>
          <Text style={{ fontWeight: "700", fontSize: 20 }}>
            018653527278278
          </Text>
        </View>
      </View>
      <View style={{ padding: "40%" }} />
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
        }}
        onPress={() => {
          /* handle onPress */
        }}
      >
        <View
          style={{
            backgroundColor: "#A10F7E", // Background color
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
            Pay
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Deposit;

const styles = StyleSheet.create({});
