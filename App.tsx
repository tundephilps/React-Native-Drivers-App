import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Recover from "./screens/Recover";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Recover />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
