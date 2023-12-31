import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

const TransportDetails = () => {
  const [selected, setSelected] = React.useState("");
  const [categories, setCategories] = React.useState([]);

  const typeData = [
    { key: "Bike", value: "Bike" },
    { key: "Lorry", value: "Lorry" },

    { key: "Bank", value: "Bank" },
    { key: "Car", value: "Car" },
  ];
  const seatData = [
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
  ];
  const doorData = [
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
  ];
  const yearData = [
    { key: "2022", value: "2022" },
    { key: "2021", value: "2021" },
    { key: "2020", value: "2020" },
    { key: "2019", value: "2019" },
    { key: "2018", value: "2018" },

    { key: "2017", value: "2017" },
    { key: "2016", value: "2016" },
    { key: "2015", value: "2015" },
  ];

  const navigation = useNavigation(); // Get the navigation object

  return (
    <SafeAreaView>
      {/* Header */}
      <View
        style={{
          padding: 16,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: "#f8f8f8",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="arrow-back-outline" size={18} color="black" />
        </TouchableOpacity>
        <Text style={{ fontWeight: "800", fontSize: 18 }}>
          Transport Details
        </Text>
        <TouchableOpacity
          style={{
            height: 35,
            width: 35,
            backgroundColor: "#f8f8f8",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
          }}
        >
          <Ionicons name="arrow-back-outline" size={18} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 16, paddingHorizontal: 16 }}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 7,
            position: "relative",
            zIndex: 10,
          }}
        >
          <View style={{ height: 24 }}>
            <Text style={{ fontSize: 16, color: "#030229" }}>Year</Text>
          </View>
          <SelectList
            setSelected={setSelected}
            data={yearData}
            boxStyles={{
              backgroundColor: "#F7F7F8",
              height: 50,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent

              borderRadius: 5,
            }}
            placeholder="Select Year"
            inputStyles={{
              color: "gray",
              fontWeight: "100",
              fontSize: 13,
            }}
            dropdownStyles={{
              backgroundColor: "#eeeeee",
              position: "absolute",
              zIndex: 10,
              width: "100%",
              top: "100%",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
              minHeight: "200%",
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 7,
            position: "relative",
            zIndex: 9,
          }}
        >
          <View style={{ height: 24 }}>
            <Text style={{ fontSize: 16, color: "#030229" }}>Vehical Type</Text>
          </View>
          <SelectList
            setSelected={setSelected}
            data={typeData}
            boxStyles={{
              backgroundColor: "#F7F7F8",
              height: 50,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
              borderRadius: 5,
            }}
            placeholder="Select Vehicle Type"
            dropdownStyles={{
              backgroundColor: "#eeeeee",
              position: "absolute",
              zIndex: 9,
              width: "100%",
              top: "100%",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
            inputStyles={{
              color: "gray",
              fontWeight: "100",
              fontSize: 13,
            }}
          />
        </View>

        {/* <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 7,
            position: "relative",
            zIndex: 8,
          }}
        >
          <View style={{ height: 24 }}>
            <Text style={{ fontSize: 16, color: "#030229" }}>
              Number of doors
            </Text>
          </View>
          <SelectList
            setSelected={setSelected}
            data={doorData}
            boxStyles={{
              backgroundColor: "#F7F7F8",
              height: 50,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
            placeholder="Select Number of doors"
            inputStyles={{
              color: "gray",
              fontWeight: "100",
              fontSize: 13,
            }}
            dropdownStyles={{
              backgroundColor: "#eeeeee",
              position: "absolute",
              zIndex: 8,
              width: "100%",
              top: "100%",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
          />
        </View> */}

        {/* <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 7,
            position: "relative",
            zIndex: 7,
          }}
        >
          <View style={{ height: 24 }}>
            <Text style={{ fontSize: 16, color: "#030229" }}>
              Number of Seat Belts
            </Text>
          </View>
          <SelectList
            setSelected={setSelected}
            data={seatData}
            boxStyles={{
              backgroundColor: "#F7F7F8",
              height: 50,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
            placeholder="Select Number of Seat Belts"
            inputStyles={{
              color: "gray",
              fontWeight: "100",
              fontSize: 13,
              marginTop: 4,
            }}
            dropdownStyles={{
              backgroundColor: "#eeeeee",
              position: "absolute",
              zIndex: 7,
              width: "100%",
              top: "100%",

              borderWidth: 0, // Set the border width to 0
              borderColor: "transparent", // Set the border color to transparent
            }}
          />
        </View> */}

        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 7,
            position: "relative",
            zIndex: 7,
          }}
        >
          <View style={{ height: 24 }}>
            <Text style={{ fontSize: 16, color: "#030229" }}>Plate Number</Text>
          </View>
          <View>
            <TextInput
              placeholder="AAA-123-JK"
              style={{
                height: 50,
                borderRadius: 5,
                paddingHorizontal: 20,
                width: "100%",
                backgroundColor: "#F7F7F8",
              }}
            />
          </View>
        </View>

        <View style={{ height: "38%" }} />
        {/* Button */}
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate("Photoshoot")}
        >
          <View
            style={{
              backgroundColor: "#A10F7E", // Background color
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
                fontSize: 16, // Font size
                fontWeight: "normal", // Font weight
                color: "#fff", // Text color
              }}
            >
              Continue
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TransportDetails;

const styles = StyleSheet.create({});
