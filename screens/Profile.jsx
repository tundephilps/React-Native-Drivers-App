import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Profile = () => {
  const [isPressed, setPressed] = useState(false);
  const [isProfilePressed, setProfilePressed] = useState(false);
  const [isWithdrawalsPressed, setWithdrawalsPressed] = useState(false);
  const [isSettingsPressed, setSettingsPressed] = useState(false);
  const [isVehiclesPressed, setVehiclesPressed] = useState(false);

  const handlePress = (item) => {
    switch (item) {
      case "profile":
        setProfilePressed(!isProfilePressed);
        break;
      case "withdrawals":
        setWithdrawalsPressed(!isWithdrawalsPressed);
        break;
      case "settings":
        setSettingsPressed(!isSettingsPressed);
        break;
      case "vehicles":
        setVehiclesPressed(!isVehiclesPressed);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView>
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
            Profile
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
        {/* Avatar */}
        <TouchableOpacity
          onPress={() => {
            // handle onPress
          }}
        >
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt=""
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
              }}
              style={styles.profileAvatar}
            />

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.profileAction}>
                <EvilIcons name="pencil" size={24} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <Text style={styles.name}>James Tarver</Text>
        <Text
          style={{
            color: "#fff",
            alignSelf: "center",
            fontWeight: "200",
            fontSize: 12,
          }}
        >
          Online
        </Text>

        <View style={{ height: 18 }} />
        {/* Meters */}

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View>
              <SimpleLineIcons name="speedometer" size={14} color="white" />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                70 km/h
              </Text>
              <Text style={{ fontSize: 10, fontWeight: "100", color: "white" }}>
                Top Speed
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View>
              <FontAwesome name="map-o" size={14} color="white" />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                11,789 km
              </Text>
              <Text style={{ fontSize: 10, fontWeight: "100", color: "white" }}>
                Distance Covered
              </Text>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <View>
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={14}
                color="white"
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "700",
                  color: "#fff",
                }}
              >
                70
              </Text>
              <Text style={{ fontSize: 10, fontWeight: "100", color: "white" }}>
                Total Trips
              </Text>
            </View>
          </View>
          {/* <View   style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}>
          <View
          
          >
            
            <FontAwesome name="map-o" size={14} color="black" />
            <Text>11,789 km</Text>
            <Text>Top Speed</Text>
            </View>
          </View>
     */}
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 32,
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isProfilePressed
                ? "rgba(230, 206, 242, 0.4)"
                : "white",
            },
          ]}
          onPress={() => handlePress("profile")}
        >
          <View style={styles.box}>
            <SimpleLineIcons name="user" size={24} color="#B847EF" />
          </View>
          <View>
            <Text style={styles.text}>Profile info</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isWithdrawalsPressed
                ? "rgba(230, 206, 242, 0.4)"
                : "white",
            },
          ]}
          onPress={() => handlePress("withdrawals")}
        >
          <View style={styles.box}>
            <AntDesign name="creditcard" size={24} color="#B847EF" />
          </View>
          <View>
            <Text style={styles.text}>Withdrawals</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isSettingsPressed
                ? "rgba(230, 206, 242, 0.4)"
                : "white",
            },
          ]}
          onPress={() => handlePress("settings")}
        >
          <View style={styles.box}>
            <Ionicons name="settings-outline" size={24} color="#B847EF" />
          </View>
          <View>
            <Text style={styles.text}>Settings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isVehiclesPressed
                ? "rgba(230, 206, 242, 0.4)"
                : "white",
            },
          ]}
          onPress={() => handlePress("vehicles")}
        >
          <View style={styles.box}>
            <AntDesign name="car" size={24} color="#B847EF" />
          </View>
          <View>
            <Text style={styles.text}>Vehicles</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingVertical: 30,
            borderTopWidth: 1,
            borderTopColor: "lightgray",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 12,
              alignItems: "center",
            }}
          >
            <MaterialIcons name="logout" size={24} color="#B847EF" />
            <Text style={{ color: "#B847EF", fontSize: 20, fontWeight: "500" }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 6,
    borderRadius: 6,
    marginBottom: 12,
  },
  box: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#e8e8e8",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7c7b7b",
  },

  status: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: "#b847ef",
    height: 300,
    overflow: "hidden",
    width: "100%",
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 9999,
  },
  profileAvatarWrapper: {
    position: "relative",
    alignSelf: "center",
  },
  profileAction: {
    position: "absolute",
    right: -4,
    bottom: -3,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: "white",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    paddingTop: 6,
  },
});
