import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SignUp />
      {/* <Login /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
