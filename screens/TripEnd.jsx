import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";

import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

const TripEnd = ({}) => {
  const [rating, setRating] = useState(0);

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

  //   const handleRating = (selectedRating) => {
  //     // Send the selectedRating to your backend

  //     setRating(selectedRating);
  //     onRate(selectedRating);
  //     console.log(`User rated ${selectedRating} stars`);
  //     // Add your backend API call logic here
  //   };

  const navigation = useNavigation(); // Get the navigation object

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={{ flex: 1, position: "relative" }}
    >
      <View style={styles.overlay}>
        {/* Heder */}
        <View style={{ padding: 12 }} />
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
        </View>

        <View style={{ padding: 16 }}>
          <View style={styles.rectangleView}>
            <AntDesign
              name="checkcircle"
              size={80}
              color="#A10F7E"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                alignSelf: "center",
                color: "#111",
                textAlign: "left",
                paddingTop: 12,
              }}
            >
              Dispatch Trip Ended
            </Text>

            <View style={styles.card}>
              <View style={{ padding: 12 }}>
                <Text style={{ fontWeight: "600", textTransform: "uppercase" }}>
                  3RD DECEMBER 2023, 12:00PM
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
                    <Text>25, Ogeretedo Street Dopemu, Agege, Lagos.</Text>
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
                        11:23
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
                        12:00
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* 5 Star */}
          <View style={{ padding: 12 }} />
          <View style={styles.card}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
                gap: 12,
                padding: 32,
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <TouchableOpacity
                  key={star}
                  onPress={() => handleStarPress(star)}
                  activeOpacity={0.7}
                >
                  <Icon
                    name={star <= rating ? "star" : "star-o"}
                    size={40}
                    color="#A10F7E"
                    style={styles.starIcon}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Button */}
          <View style={{ padding: 52 }} />
          <TouchableOpacity
            style={{}}
            onPress={() => navigation.navigate("Home")}
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
                Rate
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TripEnd;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Adjust the opacity as needed
    height: "100%",
    //position: "absolute",
  },
  rectangleView: {
    paddingTop: 32,
    borderRadius: 23,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowRadius: 13.2,
    elevation: 13.2,
    shadowOpacity: 1,

    width: "100%",
  },

  card: {
    borderRadius: 23,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowRadius: 13.2,
    elevation: 13.2,
    shadowOpacity: 1,
    width: "100%",
  },
  dash: {
    width: 1.5,
    height: 8,
    backgroundColor: "gray",
  },
});
