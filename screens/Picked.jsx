import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import BottomSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";

import MapView, { Marker } from "react-native-maps";

const Picked = () => {
  const bottomSheetRef = useRef(null);

  const [userLocation, setUserLocation] = useState(null);
  const [destinationLocation, setDestinationLocation] = useState({
    latitude: 37.78825, // Add your destination latitude here
    longitude: -122.4324, // Add your destination longitude here
  });

  const [isChecked, setIsChecked] = useState(false);

  const buttonBackgroundColor = isChecked ? "#00FF80" : "lightgray";
  const buttonTextColor = isChecked ? "black" : "white";

  useEffect(() => {
    // Fetch or use any method to get the user's current location
    // For simplicity, I'm just setting an example location here
    setUserLocation({
      latitude: 37.7749, // Example user's latitude
      longitude: -122.4194, // Example user's longitude
    });
  }, []);

  const navigation = useNavigation(); // Get the navigation object

  return (
    <SafeAreaView>
      <View style={{ height: "100%", position: "relative" }}>
        {/* Header */}
        <View
          style={{
            padding: 16,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            width: "100%",
            left: 0,
            zIndex: 99,
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
            <Ionicons name="menu-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: "#E6CEF2", borderRadius: 50, padding: 8 }}
            //  onPress={() => bottomSheetRef.current.open()}
          >
            <Text style={{ fontWeight: "800", fontSize: 14 }}>
              Dispatch Orders
            </Text>
          </TouchableOpacity>
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
            <Ionicons name="locate-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {userLocation && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              {/* User's Marker */}
              <Marker
                coordinate={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                }}
                title="You are here"
                description="Your current location"
              >
                <View style={styles.markerContainer}>
                  <Text style={styles.markerText}>👤</Text>
                </View>
              </Marker>

              {/* Destination Marker */}
              <Marker
                coordinate={destinationLocation}
                title="Destination"
                description="Final destination"
              >
                <View style={styles.markerContainer}>
                  <Text style={styles.markerText}>🚌</Text>
                </View>
              </Marker>
            </MapView>
          )}

          {/* Bottom Sheet */}

          <View>
            <View
              style={{
                backgroundColor: "white",
                padding: 12,
              }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View style={{ flexDirection: "row", gap: 12 }}>
                  <View>
                    <Image
                      style={{ height: 55, width: 55, borderRadius: 99 }}
                      source={require("../assets/face.jpeg")}
                      resizeMode="cover"
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#000",
                        textAlign: "left",
                      }}
                    >
                      James Tarver
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        lineHeight: 11,
                        color: "#3c3a3a",
                        textAlign: "left",
                      }}
                    >
                      jamestarver@gmail.com
                    </Text>
                    <Text>09073552620</Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: "#A10F7E",
                    padding: 12,
                    borderRadius: 99,
                  }}
                >
                  <Ionicons name="call-outline" size={14} color="white" />
                </View>
              </View>
              <View style={styles.card}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 17,
                      fontWeight: "500",
                      color: "#A10F7E",
                      textAlign: "left",
                      gap: 12,
                    }}
                  >
                    Dell Latitude Laptop{"    "}
                  </Text>

                  <Text
                    style={{
                      fontSize: 16,
                      textTransform: "capitalize",
                      fontWeight: "600",
                      color: "#111",
                      textAlign: "left",
                    }}
                  >
                    N4,589.55
                  </Text>
                </View>
                <View style={{ paddingTop: 12 }}>
                  <Text>
                    <Text style={{ fontWeight: "700" }}>PICKUP:</Text> Frank
                    LTS, Kilometre 55, Lekki-Epe
                  </Text>
                  <Text>
                    <Text style={{ fontWeight: "700" }}>DELIVERY:</Text>{" "}
                    Expressway Sangotedo Ibeju-Lekki
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 12,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PackageCamera")}
                  >
                    <Text
                      style={{
                        padding: 6,
                        backgroundColor: "#A10F7E",
                        borderRadius: 8,
                        fontWeight: "700",
                        color: "white",
                      }}
                    >
                      Verify Pickup
                    </Text>
                  </TouchableOpacity>

                  <Text style={{ fontWeight: "200", color: "#A10F7E" }}>
                    ---------Swipe ---------
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Picked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  markerText: {
    fontSize: 20,
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetScrollView: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40, // Adjust padding as needed
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5.7,
    elevation: 8,
    shadowOpacity: 1,
    width: "100%",
    overflow: "hidden",
    padding: 12,
  },
});
