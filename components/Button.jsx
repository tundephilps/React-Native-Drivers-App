import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Button = () => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 22,
      }}
      onPress={() => {
        /* handle onPress */
      }}
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
          Log in
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
