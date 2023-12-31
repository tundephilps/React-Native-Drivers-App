import React from "react";
import { View, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, icons } from "../constants";
import { Home, Messages, PendingOrder, Profile, Search } from "../screens";
import { Ionicons, Feather } from "@expo/vector-icons";
import Notification from "../screens/Notification";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: Platform.OS === "ios" ? 90 : 60,
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={PendingOrder}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={focused ? "shopping-bag" : "shopping-bag"}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
                height: Platform.OS === "ios" ? 70 : 60,
                width: Platform.OS === "ios" ? 70 : 60,
                top: Platform.OS === "ios" ? -20 : -30,
                borderRadius: Platform.OS === "ios" ? 35 : 30,
                borderWidth: 2,
                borderColor: COLORS.white,
              }}
            >
              <Ionicons name="search-outline" size={24} color={COLORS.white} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "notifications-sharp" : "notifications-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? COLORS.primary : COLORS.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
