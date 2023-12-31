import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const Wallet = () => {
  return (
    <SafeAreaView>
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
            backgroundColor: "#f8f8f8",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="arrow-back-outline" size={18} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "800", fontSize: 18 }}>Wallet</Text>
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

      <ScrollView style={{ padding: 16 }}>
        {/* Card */}
        <View
          style={{ backgroundColor: "black", padding: 12, borderRadius: 6 }}
        >
          <Text style={{ color: "white", fontSize: 12 }}>Total Balance</Text>
          <View style={{ padding: 12 }} />
          <Text style={{ fontSize: 22, color: "white" }}>N4,589.55</Text>

          <View style={{ padding: 12 }} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 18,
            }}
          >
            <TouchableOpacity
              style={{
                padding: 8,
                width: 145,
                backgroundColor: "#A10F7E",
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", alignSelf: "center" }}>
                Deposit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 8,
                width: 145,
                backgroundColor: "#A10F7E",
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "white", alignSelf: "center" }}>
                Withdrawal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ padding: 12 }} />
        <Text style={{ fontSize: 24, fontWeight: "600", color: "#000" }}>
          Payment Methods
        </Text>
        <View style={styles.frameParent}>
          <Image
            style={{ height: 24, width: 36 }}
            source={require("../assets/mastercard.png")}
            resizeMode="cover"
          />
          <Text style={{ fontWeight: "700", fontSize: 17 }}>...9876</Text>
        </View>
        <View style={styles.frameParent}>
          <Image
            style={{ height: 24, width: 36 }}
            source={require("../assets/visa.png")}
            resizeMode="cover"
          />
          <Text style={{ fontWeight: "700", fontSize: 17 }}>...5681</Text>
        </View>
        <View style={{ padding: 12 }} />
        <TouchableOpacity style={styles.button}>
          <Ionicons name="add-outline" size={24} color="black" />
          <Text style={styles.buttontext}>Add Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="history" size={24} color="black" />
          <Text style={styles.buttontext}>Transaction History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name="payment" size={24} color="black" />
          <Text style={styles.buttontext}>Credit or Debit Card</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  frameParent: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: "#ae8ff7",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    marginTop: 12,
  },
  button: {
    backgroundColor: "#e8e8e8",
    flexDirection: "row",
    gap: 42,
    alignItems: "center",
    padding: 12,
    marginTop: 12,
    borderRadius: 8,
  },
  buttontext: {
    fontSize: 20,
    color: "#111",
    textAlign: "left",
    fontWeight: "300",
  },
});
