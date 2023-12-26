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

import MapView, { Marker } from "react-native-maps";
import CardOrder from "../components/CardOrder";

const PendinOrder = () => {
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
            onPress={() => bottomSheetRef.current.open()}
          >
            <Text style={{ fontWeight: "800", fontSize: 14 }}>
              Pending Orders
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

          <BottomSheet
            ref={bottomSheetRef}
            closeOnDragDown
            //     dragFromTopOnly
            containerStyle={styles.bottomSheetContainer}
            height={600}
          >
            <ScrollView style={styles.bottomSheetScrollView}>
              <View>
                <View style={{ padding: 0 }}>
                  <CardOrder />
                  <CardOrder />
                  <CardOrder />
                </View>
              </View>
              <View style={{ padding: 32 }} />
            </ScrollView>
          </BottomSheet>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PendinOrder;

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
