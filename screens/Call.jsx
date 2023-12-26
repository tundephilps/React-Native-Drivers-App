import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Call = () => {
  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: "white", padding: 16 }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
      >
        <Ionicons name="chevron-down" size={24} color="black" />
        <Text style={{ fontWeight: "600", fontSize: 15 }}>Minimize</Text>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <View
        style={{
          borderRadius: 20,
          backgroundColor: "#b847ef",
          width: "100%",
          height: 182,
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text
          style={{
            alignSelf: "center",
            fontSize: 32,
            fontWeight: "500",
            color: "#fff",
            textAlign: "center",
          }}
        >
          James Tarver
        </Text>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 99,
            height: 100,
            width: 100,
            alignSelf: "center",
            position: "absolute",
            bottom: "-30%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 99,
            }}
            source={require("../assets/face.jpeg")}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={{ height: 55 }} />
      <Text
        style={{
          color: "gray",
          fontWeight: "300",
          alignSelf: "center",
          fontSize: 16,
        }}
      >
        Calling...
      </Text>

      <View style={{ padding: "40%" }} />

      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{ padding: 18, backgroundColor: "#e8e8e8", borderRadius: 99 }}
        >
          <Ionicons name="volume-high-outline" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 18, backgroundColor: "#e8e8e8", borderRadius: 99 }}
        >
          <Feather name="mic" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 18, backgroundColor: "#ED2323", borderRadius: 99 }}
        >
          <MaterialIcons name="call-end" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Call;

const styles = StyleSheet.create({});
