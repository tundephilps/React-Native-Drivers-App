import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
const CardOrder = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <TouchableOpacity
      onPress={() => {
        // handle onPress
      }}
    >
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text>
            <Text style={styles.cardTitle}>Dell latitude Laptop </Text>
            <Text style={styles.cardAirport}>LAG</Text>
          </Text>

          <View style={styles.cardRow}>
            <View style={styles.cardRowItem}>
              <Ionicons name="md-calendar-outline" size={14} color="black" />

              <Text style={styles.cardRowItemText}>Mar 21, 2024</Text>
            </View>
          </View>

          <Text style={styles.cardPrice}>
            <Text>Amt </Text>

            <Text style={styles.cardPriceValue}>N45,000</Text>

            <Text style={styles.cardPriceCurrency}> NGN</Text>
          </Text>

          <View>
            <Text style={{ color: "#868686", fontWeight: 200 }}>
              Pick Up: FRANK LTS; Kilometre 55, Lekki- Epe
            </Text>
            <Text style={{ color: "#868686", fontWeight: 200, lineHeight: 22 }}>
              Delivery: Expressway Sangotedo Ibeju-Lekki
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Picked")}
            style={{ alignSelf: "flex-end" }}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Accept</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "stretch",
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: "#e8e8e8",
  },

  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#A10F7E",
    marginRight: 8,
  },
  cardAirport: {
    fontSize: 13,
    fontWeight: "600",
    color: "#5f697d",
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: -8,
    flexWrap: "wrap",
  },
  cardRowItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  cardRowItemText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "500",
    color: "#5f697d",
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: "500",
    color: "#5f697d",
  },
  cardPriceValue: {
    fontSize: 21,
    fontWeight: "700",
    color: "#173153",
  },
  cardPriceCurrency: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6f61c4",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#31D0AA",
    marginTop: 6,
  },
  btnText: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
