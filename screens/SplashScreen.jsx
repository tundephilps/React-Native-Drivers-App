import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate("Login"), 2500);
  }, []);

  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Image
          style={{ height: 99, width: 213, alignSelf: "center" }}
          source={require("../assets/splash2.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
