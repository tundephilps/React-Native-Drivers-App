import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const notifications = [
  {
    id: "1",
    title: "New Message",
    message: "You have a new message from John Doe.",
    timestamp: "1 hour ago",
  },
  {
    id: "2",
    title: "Reminder",
    message: "Don't forget your meeting at 3 PM.",
    timestamp: "2 hours ago",
  },
  // Add more notifications as needed
];

const Notification = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
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
        <Text style={{ fontWeight: "800", fontSize: 18 }}>Notifications</Text>
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
      <View style={{ paddingHorizontal: 16 }}>
        <View style={styles.notificationItem}>
          <Text style={styles.title}>Reminder</Text>
          <Text style={styles.message}>Dont forget your meeting at 3pm</Text>
          <Text style={styles.timestamp}>7 hours ago</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    fontSize: 16,
    marginBottom: 4,
  },
  timestamp: {
    color: "#888",
  },
});

export default Notification;
