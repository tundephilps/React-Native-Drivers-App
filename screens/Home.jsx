import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { Octicons } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        padding: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",

          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontWeight: "700", fontSize: 30 }}>
            Welcome <Text style={{ color: "#A10F7E" }}>Mark</Text>{" "}
          </Text>
          <Text>Lagos, Nigeria</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{
              height: 45,
              width: 45,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.gray,
            }}
          >
            <Ionicons name="menu" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 22 }} />
      <ScrollView style={{ gap: 12 }} showsVerticalScrollIndicator={false}>
        <View style={{ gap: 12 }}>
          <Text
            style={{ fontWeight: "700", fontSize: 29, textAlign: "center" }}
          >
            Track Your Shipment Instantly
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 12,
              borderRadius: 55,
              backgroundColor: "rgba(161, 15, 126, 0.1)",
              alignItems: "center",
              padding: 8,
              paddingHorizontal: 32,
            }}
          >
            <Entypo name="globe" size={24} color="black" />
            <TextInput
              placeholder="Enter tracking number"
              style={{ fontSize: 20 }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#A10F7E",
                padding: 12,
                borderRadius: 99,
              }}
            >
              <AntDesign name="scan1" size={16} color="white" />
            </TouchableOpacity>
          </View>
          {/* Banner Image */}

          <View
            style={{ width: "100%", borderRadius: 12, position: "relative" }}
          >
            <View
              style={{
                position: "absolute",
                top: "10%",
                left: "5%",
                zIndex: 9,
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 18 }}>
                Shipping Without Worries
              </Text>
              <Text style={{ fontSize: 10, fontWeight: "200" }}>
                Charges affordable prices for shipping
              </Text>
            </View>
            <Image
              style={{ height: 160, width: "100%", borderRadius: 12 }}
              source={require("../assets/delivery.jpeg")}
              resizeMode="cover"
            />
          </View>

          <View style={{ width: "100%", height: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "700", fontSize: 20 }}>
                Current Shipment
              </Text>

              <Text style={{ fontWeight: "200", color: "gray" }}>See all</Text>
            </View>

            {/* Card */}

            <View style={styles.card}>
              <View style={{ padding: 12 }}>
                <Text
                  style={{ fontWeight: "600", textTransform: "capitalize" }}
                >
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
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <Octicons name="dot" size={28} color="#A10F7E" />
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
                        backgroundColor: "#A10F7E",
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
                        In Transit
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* Card */}

            <View style={styles.card}>
              <View style={{ padding: 12 }}>
                <Text
                  style={{ fontWeight: "600", textTransform: "capitalize" }}
                >
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
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <Octicons name="dot" size={28} color="#A10F7E" />
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
                        backgroundColor: "#A10F7E",
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
          </View>
        </View>
        <View style={{ padding: 42 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  dash: {
    width: 1.5,
    height: 8,
    backgroundColor: "gray",
  },

  card: {
    borderRadius: 12,
    backgroundColor: "white",
    marginTop: 14,
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
