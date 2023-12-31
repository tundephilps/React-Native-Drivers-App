import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";
import { Entypo } from "@expo/vector-icons";

import MapView, { Marker } from "react-native-maps";

const Online = () => {
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
                backgroundColor: "#25D366B2",
                padding: 12,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: "500",

                    color: "#000",
                  }}
                >
                  You are currently
                  <Text style={{ color: "#B2FF65", fontWeight: "600" }}>
                    {" "}
                    ONLINE
                  </Text>
                </Text>
                <Text style={{ color: "#3F3535", fontWeight: "200" }}>
                  Receiving Dispatch Requests
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#A10F7ECC",
                  padding: 12,
                  borderRadius: 55,
                }}
              >
                <Text style={{ fontWeight: "500", color: "white" }}>
                  GO OFFLINE
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "white",
                padding: 12,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "200" }}>
                <Entypo name="location" size={24} color="#A10F7E" /> Rider’s
                Location: 25, Ogeretedo Street, Dopemu, Agege{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Online;

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
});
