import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { COLORS, images } from "../constants";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import BottomTabNavigation from "./BottomTabNavigation";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Home,
  PendingOrder,
  History,
  Wallet,
  Messages,
  Profile,
  Settings,
} from "../screens";
import { SafeAreaView } from "react-native-safe-area-context";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.white,
              }}
            >
              <Image
                source={require("../assets/face.jpeg")}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 999,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: COLORS.black,
                  marginBottom: 6,
                }}
              >
                Isabella Joanna
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.black,
                  fontWeight: "300",
                }}
              >
                Driver
              </Text>
            </View>
            <DrawerItemList {...props} />
            <TouchableOpacity
              style={{
                paddingVertical: 72,
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 18,
              }}
            >
              <MaterialIcons name="logout" size={24} color="black" />
              <Text style={{ fontWeight: "700", fontSize: 23 }}>LogOut</Text>
            </TouchableOpacity>
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        headerTintColor: COLORS.black,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home Page",
          title: "Home Page",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={BottomTabNavigation}
      />
      <Drawer.Screen
        name="PendingOrder"
        options={{
          drawerLabel: "PendingOrder",
          title: "PendingOrder",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="gift-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={PendingOrder}
      />
      <Drawer.Screen
        name="History"
        options={{
          drawerLabel: "History",
          title: "History",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="search-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={History}
      />

      <Drawer.Screen
        name="Wallet"
        options={{
          drawerLabel: "Wallet",
          title: "Wallet",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="location-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Wallet}
      />

      <Drawer.Screen
        name="Support"
        options={{
          drawerLabel: "Support",
          title: "Messages",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={Messages}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Feather name="settings" size={24} color={COLORS.black} />
          ),
        }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
