import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";

import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const History = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar style="auto" backgroundColor="#b847ef" />
      <View style={styles.status}>
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
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="arrow-back-outline" size={18} color="white" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "800", fontSize: 18, color: "white" }}>
            History
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
        <View
          style={{
            paddingVertical: 5,
            backgroundColor: "white",
            width: 80,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",

            borderRadius: 10,
          }}
        >
          <Text style={{ fontWeight: "200" }}>Online</Text>
        </View>
      </View>
      <ScrollView style={{ paddingVertical: 32, paddingHorizontal: 16 }}>
        {/* Card */}

        <View style={styles.card}>
          <View style={{ padding: 12 }}>
            <Text style={{ fontWeight: "600", textTransform: "capitalize" }}>
              #A1287845
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Octicons name="dot" size={28} color="#B847EF" />
                <View style={{ display: "flex", gap: 3 }}>
                  <View style={styles.dash} />
                  <View style={styles.dash} />
                  <View style={styles.dash} />
                </View>

                <Entypo name="location-pin" size={24} color="blue" />
              </View>

              <View style={{ width: "60%", gap: 30 }}>
                <Text>iPhone 14 Pro Max</Text>
                <Text style={{ fontSize: 12, fontWeight: "200" }}>
                  KM 55, Lekki-Epe Expressway, Sangotedo, Ibeju-Lekki
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <View
                  style={{
                    height: 32,
                    width: 90,
                    backgroundColor: "#B847EF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ fontWeight: "400", color: "white" }}>
                    Paid
                  </Text>
                </View>

                <View
                  style={{
                    height: 32,
                    width: 90,
                    backgroundColor: "gray",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: 15,
                  }}
                >
                  <Text style={{ fontWeight: "400", color: "white" }}>
                    Completed
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* Card */}

        <View style={styles.card}>
          <View style={{ padding: 12 }}>
            <Text style={{ fontWeight: "600", textTransform: "capitalize" }}>
              #A1287845
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Octicons name="dot" size={28} color="#B847EF" />
                <View style={{ display: "flex", gap: 3 }}>
                  <View style={styles.dash} />
                  <View style={styles.dash} />
                  <View style={styles.dash} />
                </View>

                <Entypo name="location-pin" size={24} color="blue" />
              </View>

              <View style={{ width: "60%", gap: 30 }}>
                <Text>Bluetooth Speakers</Text>
                <Text style={{ fontSize: 12, fontWeight: "200" }}>
                  KM 55, Lekki-Epe Expressway, Sangotedo, Ibeju-Lekki
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <View
                  style={{
                    height: 32,
                    width: 90,
                    backgroundColor: "#B847EF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ fontWeight: "400", color: "white" }}>
                    Paid
                  </Text>
                </View>

                <View
                  style={{
                    height: 32,
                    width: 90,
                    backgroundColor: "gray",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: 15,
                  }}
                >
                  <Text style={{ fontWeight: "400", color: "white" }}>
                    Completed
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Card */}

        <View style={styles.card}>
          <View style={{ padding: 12 }}>
            <Text style={{ fontWeight: "600", textTransform: "capitalize" }}>
              #A1287845
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Octicons name="dot" size={28} color="#B847EF" />
                <View style={{ display: "flex", gap: 3 }}>
                  <View style={styles.dash} />
                  <View style={styles.dash} />
                  <View style={styles.dash} />
                </View>

                <Entypo name="location-pin" size={24} color="blue" />
              </View>

              <View style={{ width: "60%", gap: 30 }}>
                <Text>Samsung Galaxy</Text>
                <Text style={{ fontSize: 12, fontWeight: "200" }}>
                  5 Araromi street Onipepeye, Igando, Lagos
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <View
                  style={{
                    height: 32,
                    width: 90,
                    backgroundColor: "#B847EF",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 15,
                  }}
                >
                  <Text style={{ fontWeight: "400", color: "white" }}>
                    Paid
                  </Text>
                </View>

                <View
                  style={{
                    height: 32,
                    width: 90,
                    backgroundColor: "gray",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: 15,
                  }}
                >
                  <Text style={{ fontWeight: "400", color: "white" }}>
                    Completed
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Card */}

        <View style={{ padding: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default History;

const styles = StyleSheet.create({
  dash: {
    width: 1.5,
    height: 8,
    backgroundColor: "gray",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    zIndex: 99,
  },
  completedParent: {
    borderRadius: 28,
    backgroundColor: "rgba(46, 42, 42, 0.8)",
    width: 120,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },
  paidParent: {
    borderRadius: 28,
    backgroundColor: "#b847ef",
    width: 120,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32,
  },
  status: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#b847ef",
    height: 130,
    overflow: "hidden",
    width: "100%",
  },
  card: {
    borderRadius: 12,
    backgroundColor: "white",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
