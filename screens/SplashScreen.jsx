import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#B847EF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Image
          style={{ height: 99, width: 213, alignSelf: "center" }}
          source={require("../assets/splash.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
