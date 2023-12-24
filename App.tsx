import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Recover from "./screens/Recover";
import SplashScreen from "./screens/SplashScreen";
import PersonalDetails from "./screens/PersonalDetails";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <PersonalDetails />
      {/* <SplashScreen /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <Recover /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
