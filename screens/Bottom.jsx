import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";

const Bottom = () => {
  const bottomSheetRef = useRef(null);

  const renderCards = () => {
    const cardItems = [];
    for (let i = 1; i <= 6; i++) {
      cardItems.push(
        <View key={i} style={styles.card}>
          <Text style={styles.cardText}>Card {i}</Text>
        </View>
      );
    }
    return cardItems;
  };

  return (
    <View style={{ flex: 1, backgroundColor: "blue" }}>
      <ScrollView style={styles.scrollView}></ScrollView>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => bottomSheetRef.current.open()}
      >
        <Text style={styles.openButtonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        closeOnDragDown
        dragFromTopOnly
        containerStyle={styles.bottomSheetContainer}
        height={400}
      >
        <ScrollView style={styles.bottomSheetScrollView}>
          <Text style={styles.bottomSheetTitle}>Draggable Bottom Sheet</Text>
          {renderCards()}
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  scrollView: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "lightblue",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  openButton: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 8,
    margin: 16,
  },
  openButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomSheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetScrollView: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40, // Adjust padding as needed
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default Bottom;
