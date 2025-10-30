import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const dummyOrderItems = Array(5).fill(0);
const dummyFoodItems = Array(5).fill(0);

export default function App() {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <SafeAreaView style={styles.container}>

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.brandContainer} />
          </View>

          {/* Navigation */}
          <View style={styles.navigation}>
            <View style={styles.navItem}>
              <View style={styles.navImage} />
              <View style={styles.navLabel} />
            </View>
          </View>

          {/* Order Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Order Section</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            >
              {dummyOrderItems.map((_, idx) => (
                <View key={idx} style={styles.orderCard}>
                  <View style={styles.orderImage} />
                  <View style={styles.orderDesc} />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Favorite Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Favorite Section</Text>
            <View style={styles.banner} />
          </View>

          {/* Food Section */}
          <View style={styles.section}>
            <Text style={styles.title}>Food Section</Text>

            {dummyFoodItems.map((_, idx) => (
              <View key={idx} style={styles.orderCard}>
                <View style={styles.orderImage} />
                <View style={styles.orderDesc} />
              </View>
            ))}
          </View>

        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E293B",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 10,
  },

  header: {
    height: 160,
    backgroundColor: "#D62828",
    paddingLeft: 10,
    justifyContent: "center",
  },
  brandContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },

  navigation: {
    height: 140,
    backgroundColor: "#FDE68A",
    padding: 20,
    justifyContent: "center",
  },
  navItem: {
    width: 90,
    height: 90,
    backgroundColor: "#BA68C8",
  },
  navImage: {
    flex: 1,
    backgroundColor: "#FF8A80",
  },
  navLabel: {
    height: 22,
    backgroundColor: "#1D4ED8",
  },

  section: {
    backgroundColor: "#FDE68A",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  horizontalList: {
    flexDirection: "row",
    gap: 15,
  },

  orderCard: {
    flexDirection: "row",
    backgroundColor: "teal",
    padding: 10,
    marginBottom: 8,
    width: 190,
    borderRadius: 10,
  },
  orderImage: {
    width: 60,
    height: 60,
    backgroundColor: "#F87171",
    borderRadius: 8,
  },
  orderDesc: {
    flex: 1,
    backgroundColor: "#22C55E",
    marginLeft: 10,
    borderRadius: 8,
  },

  banner: {
    width: "100%",
    height: 90,
    backgroundColor: "#3B82F6",
    borderRadius: 15,
    marginBottom: 10,
  },
});
