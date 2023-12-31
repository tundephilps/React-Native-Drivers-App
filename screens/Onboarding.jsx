import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";

const Onboarding = ({ navigation }) => {
  const [showOnboarding, setShowOnboarding] = useState(false);

  // useEffect(() => {
  //   // Check if the onboarding screen has been shown before
  //   AsyncStorage.getItem("onboardingShown").then((value) => {
  //     if (!value) {
  //       setShowOnboarding(true);
  //       //navigation.navigate("Main"); // Replace 'Home' with the name of your home screen
  //       navigation.push("Main");
  //     }
  //   });
  // }, [navigation]);

  // const handleSkip = async () => {
  //   // Mark the onboarding screen as shown
  //   await AsyncStorage.setItem("onboardingShown", "true");
  //   setShowOnboarding(false);
  // };

  // if (!showOnboarding) {
  //   // If the onboarding screen has been shown, return null or navigate to the next screen
  //   return null;
  // }

  useEffect(() => {
    const checkIntroSeen = async () => {
      try {
        const Onboarding = await AsyncStorage.getItem("Onboarding");
        if (Onboarding) {
          navigation.navigate("Main");
        }
      } catch (error) {
        console.error("Error checking intro seen:", error);
      }
    };

    checkIntroSeen();
  }, [navigation]);

  const markIntroSeen = async () => {
    try {
      await AsyncStorage.setItem("Onboarding", "true");
      navigation.navigate("Main");
    } catch (error) {
      console.error("Error marking intro seen:", error);
    }
  };

  return (
    <View
      style={{ height: "100%", position: "relative", backgroundColor: "white" }}
    >
      <View style={{ padding: 32 }} />
      <Image
        style={{
          height: "100%",
          position: "absolute",
          right: "-3%",
          zIndex: 9,
        }}
        source={require("../assets/onboard.png")}
        resizeMode="contain"
      />
      <Image
        style={{
          position: "absolute",
          right: "5%",
          top: "66%",
          zIndex: 12,
          height: 32,
          width: 32,
        }}
        source={require("../assets/arrow.png")}
        resizeMode="contain"
      />
      <Swiper
        activeDotColor="#A10F7E"
        activeDotStyle={{ width: 40, height: 8, marginBottom: 32 }}
        dotStyle={{ width: 22, height: 8, marginBottom: 32 }}
        autoplay={true}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "100%" }}>
            <Image
              style={{ height: 340, width: "100%" }}
              source={require("../assets/Onboard1.png")}
              resizeMode="cover"
            />
          </View>
          <View style={{ padding: 12 }} />
          <View style={{ paddingHorizontal: 16, width: "100%" }}>
            <Text style={styles.title}>Swift Solutions, Speedy Service</Text>
            <View style={{ padding: 8 }} />
            <Text style={styles.content}>
              Experience the thrill of swift deliveries with DashX. Your goods,
              our priority – because time matters
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "100%" }}>
            <Image
              style={{ height: 340, width: "100%" }}
              source={require("../assets/Onboard2.png")}
              resizeMode="cover"
            />
          </View>
          <View style={{ padding: 12 }} />
          <View style={{ paddingHorizontal: 16, width: "100%" }}>
            <Text style={styles.title}>
              Affordable Delivery, Unbeatable Value
            </Text>
            <View style={{ padding: 8 }} />
            <Text style={styles.content}>
              Enjoy the luxury of low-cost delivery without compromising on
              service. DashX brings you quality at a price that fits your
              budget.
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "100%" }}>
            <Image
              style={{ height: 340, width: "100%" }}
              source={require("../assets/Onboard3.png")}
              resizeMode="cover"
            />
          </View>
          <View style={{ padding: 12 }} />
          <View style={{ paddingHorizontal: 16, width: "100%" }}>
            <Text style={styles.title}>
              Versatile Rides, Infinite Possibilities
            </Text>
            <View style={{ padding: 8 }} />
            <Text style={styles.content}>
              No matter the size, we've got the wheels. From small parcels to
              bulky items, DashX delivers convenience at every dimension
            </Text>
          </View>
        </View>
      </Swiper>
      <TouchableOpacity
        //    onPress={handleSkip}
        onPress={markIntroSeen}
        style={{ position: "absolute", bottom: 16, right: 16 }}
      >
        <Text style={styles.skip}>Skip --&gt; </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  content: {
    fontSize: 14,
    lineHeight: 21,
    color: "#001f3f",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
    textTransform: "capitalize",
    fontWeight: "700",
    color: "#221662",
    width: "50%",
  },
  skip: {
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "700",
    color: "#001f3f",
    textAlign: "left",
  },
});
