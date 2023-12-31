import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./BottomTabNavigation";
import DrawerNavigation from "./DrawerNavigation";
import SplashScreen from "../screens/SplashScreen";
import Onboarding from "../screens/Onboarding";
import Picked from "../screens/Picked";
import PackageCamera from "../screens/PackageCamera";
import PackagePickedConfirmation from "../screens/PackagePickedConfirmation";
import AcceptDispatch from "../screens/AcceptDispatch";
import TripEnd from "../screens/TripEnd";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import PersonalDetails from "../screens/PersonalDetails";
import Recover from "../screens/Recover";
import Agree from "../screens/Agree";
import Photoshoot from "../screens/Photoshoot";
import TransportDetails from "../screens/TransportDetails";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [onboarded, setOnboarded] = useState(); // — — — — — — — — — — EFFECTS — — — — — — — — — — //
  useEffect(() => {
    getStorage();
  }, []); // — — — — — — — — — — ACTIONS — — — — — — — — — — //
  const getStorage = async () => {
    const Onboarding = await AsyncStorage.getItem("Onboarding");
    setOnboarded(JSON.parse(Onboarding));
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        //    initialRouteName="Onboarding"
        initialRouteName={Onboarding ? "Login" : "Onboarding"}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />

        <Stack.Screen name="Recover" component={Recover} />

        <Stack.Screen name="Agree" component={Agree} />

        <Stack.Screen name="Photoshoot" component={Photoshoot} />

        <Stack.Screen name="TransportDetails" component={TransportDetails} />
        <Stack.Screen name="Main" component={DrawerNavigation} />
        {/* <Stack.Screen name="Main" component={SplashScreen} /> */}

        <Stack.Screen name="Picked" component={Picked} />

        <Stack.Screen name="PackageCamera" component={PackageCamera} />

        <Stack.Screen
          name="PackagePickedConfirmation"
          component={PackagePickedConfirmation}
        />

        <Stack.Screen name="AcceptDispatch" component={AcceptDispatch} />

        <Stack.Screen name="TripEnd" component={TripEnd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
