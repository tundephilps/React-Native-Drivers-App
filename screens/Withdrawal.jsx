import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import FeatherIcon from "react-native-vector-icons/Feather";

const INPUT_OFFSET = 150;

const Withdrawal = () => {
  const [form, setForm] = useState({
    bank: "",
    amount: "",
  });

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
        <Text style={{ fontWeight: "800", fontSize: 18 }}>Withdrawal</Text>
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
        <View style={styles.container}>
          <View>
            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Withdraw to</Text>

                <TextInput
                  onChangeText={(bank) => setForm({ ...form, bank })}
                  placeholder="Bank Account"
                  placeholderTextColor="#BFBFBF"
                  style={styles.inputControl}
                  value={form.bank}
                />
              </View>

              <View style={styles.input}>
                <Text style={styles.inputLabel}>Amount</Text>

                <TextInput
                  autoCorrect={false}
                  onChangeText={(amount) => setForm({ ...form, amount })}
                  placeholder="N50,000"
                  placeholderTextColor="#BFBFBF"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  value={form.amount}
                />
              </View>

              <View style={{ padding: "30%" }} />
              {/* Withdraw Money to  */}
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    lineHeight: 36,
                    textTransform: "capitalize",
                    fontWeight: "500",
                    color: "#111",
                    textAlign: "center",
                  }}
                >
                  Withdraw Money To
                </Text>
              </View>
              <View style={styles.bank}>
                <MaterialCommunityIcons name="bank" size={24} color="black" />
                <Text style={{ fontWeight: "200" }}>Bank Account</Text>
                <Text>*********6277</Text>
              </View>

              <View style={styles.bank}>
                <EvilIcons name="credit-card" size={28} color="black" />
                <Text style={{ fontWeight: "200" }}>Credit Card</Text>
                <Text>*********6277</Text>
              </View>

              <View style={styles.formAction}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}
                >
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Pay</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <Text style={styles.formFooter}>
                By Paying to this account, you agree to the
                <Text style={{ color: "#3F62D0", fontWeight: "600" }}>
                  {" "}
                  Terms & Conditions{" "}
                </Text>
                and
                <Text style={{ color: "#3F62D0", fontWeight: "600" }}>
                  {" "}
                  Privacy Policy
                </Text>
                .
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Withdrawal;

const styles = StyleSheet.create({
  formAction: {
    marginTop: 24,
  },
  formFooter: {
    paddingHorizontal: 16,
    marginTop: 16,
    fontSize: 14,
    lineHeight: 20,
    color: "#44465a",
  },
  input: {
    marginBottom: 0,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#f2f2f2",
  },
  inputLabel: {
    position: "absolute",
    width: INPUT_OFFSET,
    lineHeight: 44,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: "500",
    color: "#54565f",
    zIndex: 9,
    textTransform: "uppercase",
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingLeft: INPUT_OFFSET,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 13,
    fontWeight: "500",
    color: "#222",
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 0.133,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#000",
  },
  headerAction: {
    width: 40,
    height: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: "#A10F7E",
  },
  bank: {
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.04)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 11,
    justifyContent: "space-around",
    marginTop: 12,
  },
});
