import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the appropriate icon library

import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [fullname, setFullname] = useState("");

  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Logging in with:", { email, password, rememberMe });
  };

  const handleResetPassword = () => {
    // Implement your password reset logic here
    console.log("Resetting password for:", email);
    setPassword("");
  };

  const navigation = useNavigation(); // Get the navigation object

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.logIn}>Sign Up</Text>
        <View style={{ height: 20 }} />
        {/* Social */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 12,
            alignSelf: "center",
          }}
        >
          <View style={styles.bgIcon}>
            <Image
              style={{ height: 18, width: 18 }}
              source={require("../assets/google.png")}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#030229" }}>
              Google
            </Text>
          </View>

          <View style={styles.bgIcon}>
            <Image
              style={{ height: 18, width: 19 }}
              source={require("../assets/facebook.png")}
              resizeMode="cover"
            />
            <Text style={{ fontSize: 16, fontWeight: "400", color: "#030229" }}>
              Facebook
            </Text>
          </View>
        </View>
        {/* OR */}
        <View style={{ paddingVertical: 16, alignSelf: "center" }}>
          <View style={styles.formSpacer}>
            <Text style={styles.formSpacerText}>Or </Text>

            <View style={styles.formSpacerDivider} />
          </View>
        </View>
        {/* Your Email Component Content */}
        <View style={{ paddingTop: 8, gap: 8, paddingHorizontal: 40 }}>
          <View style={{ width: "110%", alignSelf: "center" }}>
            <Text style={{ fontSize: 15, color: "#030229", marginBottom: 8 }}>
              Full Name
            </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              value={fullname}
              onChangeText={(text) => setEmail(text)}
              placeholder="John Doe"
              placeholderTextColor="#6b7280"
              style={{
                height: 50,
                borderColor: "lightgray",
                borderRadius: 5,
                paddingHorizontal: 12,
                width: "100%",
                backgroundColor: "#F7F7F8",
              }}
            />
          </View>

          <View style={{ width: "110%", alignSelf: "center" }}>
            <Text style={{ fontSize: 15, color: "#030229", marginBottom: 8 }}>
              Email address
            </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="example@gmail.com"
              placeholderTextColor="#6b7280"
              style={{
                height: 50,
                borderColor: "lightgray",
                borderRadius: 5,
                paddingHorizontal: 12,
                width: "100%",
                backgroundColor: "#F7F7F8",
              }}
            />
          </View>

          <View style={{ width: "110%", alignSelf: "center" }}>
            <Text style={{ fontSize: 15, color: "#030229", marginBottom: 8 }}>
              Username
            </Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              value={username}
              onChangeText={(text) => setEmail(text)}
              placeholder="example@gmail.com"
              placeholderTextColor="#6b7280"
              style={{
                height: 50,
                borderColor: "lightgray",
                borderRadius: 5,
                paddingHorizontal: 12,
                width: "100%",
                backgroundColor: "#F7F7F8",
              }}
            />
          </View>

          <View style={{ width: "110%", alignSelf: "center" }}>
            <Text style={{ fontSize: 15, color: "#030229", marginBottom: 8 }}>
              Password
            </Text>
            <View style={{ position: "relative" }}>
              <TextInput
                autoCorrect={false}
                // keyboardType="visible-password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="********"
                placeholderTextColor="#6b7280"
                secureTextEntry={!showPassword}
                style={{
                  height: 50,
                  borderRadius: 5,
                  paddingHorizontal: 12,
                  width: "100%",
                  backgroundColor: "#F7F7F8",
                }}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={{ position: "absolute", top: "40%", right: "10%" }}
              >
                <Icon
                  name={showPassword ? "eye" : "eye-slash"}
                  size={14}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ height: 15 }} />

        <View
          style={{
            display: "flex",
            alignItems: "center",

            paddingHorizontal: 28,
            flexDirection: "row",
            width: "80%",
            gap: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Checkbox
              value={rememberMe}
              onValueChange={(value) => setRememberMe(value)}
            />
          </View>
          <Text style={{ fontWeight: "200", color: "#030229" }}>
            By creating an account you agree to the
            <Text style={{ color: "#B847EF" }}> terms of use</Text> and our{" "}
            <Text style={{ color: "#B847EF" }}>privacy policy.</Text>
          </Text>
        </View>

        <View style={{ height: 10 }} />
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
              backgroundColor: "#B847EF", // Background color
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
                fontSize: 15, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Create account
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ height: 10 }} />

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{ alignSelf: "center", fontWeight: "200", fontSize: 16 }}
          >
            Already have an account?
            <Text style={{ color: "#605BFF" }}> Log in</Text>{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  logIn: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000",
    alignSelf: "center",
  },
  bgIcon: {
    width: 150,
    height: 45,
    backgroundColor: "#F7F7F8",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  formSpacer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
  },
  formSpacerText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#030229",
    lineHeight: 20,
    paddingHorizontal: 27,
    backgroundColor: "#fff",
    zIndex: 9,
  },
  formSpacerDivider: {
    borderBottomWidth: 2,
    borderColor: "#eff1f5",
    position: "absolute",
    top: 9,
    left: 0,
    right: 0,

    width: 300,
  },
});
