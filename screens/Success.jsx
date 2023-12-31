import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Success = () => {
  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: "white", padding: 16 }}
    >
      <Text style={styles.withdrawal}>Withdrawal</Text>
      <View style={{ height: 120 }} />
      <Ionicons
        name="checkmark-circle-sharp"
        size={120}
        color="#A10F7E"
        style={{ alignSelf: "center" }}
      />
      <Text
        style={{
          fontSize: 36,
          fontWeight: "500",
          color: "#000",
          alignSelf: "center",
        }}
      >
        Success
      </Text>
      <View style={{ height: 60 }} />
      <Text
        style={{
          fontSize: 14,
          letterSpacing: 0,
          lineHeight: 22,
          textTransform: "capitalize",
          fontWeight: "500",
          color: "#817c7c",
          alignSelf: "center",
        }}
      >
        You Have successfully withdrawn
      </Text>
      <Text
        style={{
          letterSpacing: -1,
          textTransform: "capitalize",
          fontWeight: "800",
          color: "#2e2a2a",
          fontSize: 40,
          alignSelf: "center",
        }}
      >
        N50,000
      </Text>

      <View style={{ padding: 27 }} />
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          paddingVertical: 8,
          paddingHorizontal: 18,
          backgroundColor: "#E6CEF2",
          alignSelf: "center",
          borderRadius: 8,
        }}
      >
        <Entypo name="share-alternative" size={18} color="black" />
        <Text style={{ fontWeight: "700" }}>Share receipt</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
  withdrawal: {
    fontSize: 24,
    textTransform: "capitalize",
    fontWeight: "500",
    color: "#111",
    textAlign: "center",
  },
});
