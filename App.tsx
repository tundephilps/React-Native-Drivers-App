import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Recover from "./screens/Recover";
import SplashScreen from "./screens/SplashScreen";
import PersonalDetails from "./screens/PersonalDetails";
import TransportDetails from "./screens/TransportDetails";
import Agree from "./screens/Agree";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Identity from "./screens/Identity";
import Photoshoot from "./screens/Photoshoot";
import Profile from "./screens/Profile";
import DispatchDetails from "./screens/DispatchDetails";
import History from "./screens/History";
import Call from "./screens/Call";
import Success from "./screens/Success";
import PendinOrder from "./screens/PendingOrder";
import Bottom from "./screens/Bottom";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        //   initialRouteName="SplashScreen"
      >
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />

        <Stack.Screen name="Recover" component={Recover} />

        <Stack.Screen name="Agree" component={Agree} />

        <Stack.Screen name="Photoshoot" component={Photoshoot} />

        <Stack.Screen name="TransportDetails" component={TransportDetails} />
        
        <Stack.Screen name="Call" component={Call} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="SplashScreen" component={Profile} />
        <Stack.Screen name="Success" component={Success} />
        */}

        <Stack.Screen name="DispatchDetails" component={DispatchDetails} />
        {/* <Stack.Screen name="Bottom" component={Bottom} /> */}
        {/* <Stack.Screen name="PendingOrder" component={PendinOrder} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
