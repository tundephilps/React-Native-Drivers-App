import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const SplashScreen = () => {
  return (
    <View style={styles.splashScreenUser}>
      <Image
        style={styles.logoRemovebgPreview1Icon}
        resizeMode="cover"
        source={require("../assets/icon.png")}
      />
      <LinearGradient
        style={[styles.splashScreenUserChild, styles.splashLayout]}
        locations={[0.17, 1]}
        colors={["#221662", "#a10f7e"]}
        useAngle={true}
        angle={-46.96}
      />
      <LinearGradient
        style={[styles.splashScreenUserItem, styles.splashLayout]}
        locations={[0.17, 1]}
        colors={["#221662", "#a10f7e"]}
        useAngle={true}
        angle={-46.96}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashLayout: {
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "135deg",
      },
    ],
    height: 218,
    width: 218,
    borderWidth: 4,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderStyle: "solid",
    borderRadius: 48,
    position: "absolute",
    overflow: "hidden",
  },
  logoRemovebgPreview1Icon: {
    marginTop: -139,
    marginLeft: -140,
    top: "50%",
    left: "50%",
    width: 279,
    height: 279,
    position: "absolute",
  },
  splashScreenUserChild: {
    bottom: "-10%",
    left: "-10%",
  },
  splashScreenUserItem: {
    top: "-10%",
    right: "-10%",
  },
  dispatch: {
    top: 0,
    left: 31,
    fontSize: 20,
    lineHeight: 28,
    textTransform: "capitalize",
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  evacarFillIcon1: {
    top: 4,
    left: 0,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  dispatchParent: {
    bottom: 0,
    left: 15,
    width: 110,
    height: 28,
    position: "absolute",
  },
  splashScreenUser: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default SplashScreen;
