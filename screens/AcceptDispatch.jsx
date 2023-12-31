import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";

import MapView, { Marker } from "react-native-maps";

import { useNavigation } from "@react-navigation/native";

const AcceptDispatch = () => {
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

                <View style={{ flexDirection: "row", gap: 12 }}>
                  <View
                    style={{
                      backgroundColor: "#A10F7E",
                      padding: 12,
                      borderRadius: 99,
                    }}
                  >
                    <AntDesign name="message1" size={14} color="white" />
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
              </View>

              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingTop: 22,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 22,
                  }}
                >
                  <View
                    style={{
                      padding: 12,
                      backgroundColor: "#A10F7E",
                      borderRadius: 99,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="bike-fast"
                      size={14}
                      color="white"
                    />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "600" }}>Enroute Pickup</Text>
                    <Text style={{ fontWeight: "600" }}>Percel ID</Text>
                  </View>
                </View>

                <View>
                  <Text>#A1287845</Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingTop: 22,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 22,
                  }}
                >
                  <View
                    style={{
                      padding: 12,
                      backgroundColor: "#A10F7E",
                      borderRadius: 99,
                    }}
                  >
                    <EvilIcons name="location" size={14} color="white" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "600" }}>
                      25, Ogeretedo Street, Dopemu, Agege, Lagos.
                    </Text>
                  </View>
                </View>

                <View>
                  <Text></Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  paddingTop: 22,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 22,
                  }}
                >
                  <View
                    style={{
                      padding: 12,
                      backgroundColor: "#A10F7E",
                      borderRadius: 99,
                    }}
                  >
                    <EvilIcons name="location" size={14} color="white" />
                  </View>
                  <View>
                    <Text style={{ fontWeight: "600" }}>
                      Kilometre 55, Lekki-Epe, Expressway, Sangotedo
                      Ibeju-Lekki, Lagos.
                    </Text>
                  </View>
                </View>

                <View>
                  <Text></Text>
                </View>
              </View>
              <View style={styles.card}>
                <View>
                  <TextInput style={styles.input} />
                  <View style={{ height: 22 }} />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("TripEnd")}
                    style={{
                      borderRadius: 40,
                      backgroundColor: "#A10F7E",

                      width: "100%",
                      paddingVertical: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "#fff",
                        alignSelf: "center",
                      }}
                    >
                      Input code to end dispatch
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AcceptDispatch;

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

  input: {
    borderRadius: 30,
    borderStyle: "solid",
    borderColor: "#A10F7E",
    borderWidth: 1,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 13,
    alignSelf: "center",
    textAlign: "center",

    fontSize: 24,
    fontWeight: "500",
    paddingHorizontal: 12,
  },
});
