import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';

const icons = [
  "cafe-outline",
  "pizza-outline",
  "fast-food-outline",
  "heart-outline",
  "location-outline",
  "person-outline"
] as const;

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.brandContainer} />
          </View>

          {/* Navigation */}
          <View style={styles.navigation}>
            {icons.map((icon, i) => (
              <View key={i} style={styles.navItem}>
                {/* ICON GANTI NAVIMAGE */}
                <Ionicons name={icon} size={50} color="#000000ff" />
                <View style={styles.navLabel} />
              </View>
            ))}
          </View>

          {/* Order Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order Section</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[...Array(5)].map((_, i) => (
                <View key={i} style={styles.orderItem}>
                  <View style={styles.orderItemImage} />
                  <View style={styles.orderItemDesc} />
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Favorite Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Favorite Section</Text>
            <View style={styles.bannerContainer} />
          </View>

          {/* Food Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Food Section</Text>
            {[...Array(5)].map((_, i) => (
              <View key={i} style={styles.foodItem}>
                <View style={styles.foodItemImage} />
                <View style={styles.foodItemDesc} />
              </View>
            ))}
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#374151' },

  header: {
    height: 80,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 10,
  },
  brandContainer: {
    width: 80, height: '100%', backgroundColor: '#E5E7EB', borderRadius: 100,
  },

  navigation: {
    backgroundColor: '#E5E7EB',
    padding: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  navItem: {
    width: 90,
    height: 90,
    backgroundColor: '#9CA3AF',
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navIcon: {
    marginTop: 8,
  },
  navLabel: {
    width: "80%",
    height: 6,
    backgroundColor: '#374151',
    borderRadius: 4,
    marginTop: 6,
  },

  section: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    marginBottom: 20,
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  orderItem: {
    flexDirection: 'row',
    backgroundColor: '#D1D5DB',
    padding: 10,
    marginRight: 15,
    borderRadius: 8,
  },
  orderItemImage: {
    width: 60, height: 60, backgroundColor: '#6B7280', borderRadius: 8,
  },
  orderItemDesc: {
    flex: 1, backgroundColor: '#9CA3AF', marginLeft: 10, borderRadius: 8,
  },

  bannerContainer: {
    height: 180, width: '100%', borderRadius: 20, backgroundColor: '#9CA3AF',
  },

  foodItem: {
    flexDirection: 'row',
    backgroundColor: '#D1D5DB',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  foodItemImage: {
    width: 60, height: 60, backgroundColor: '#6B7280', borderRadius: 8,
  },
  foodItemDesc: {
    flex: 1, backgroundColor: '#9CA3AF', marginLeft: 10, borderRadius: 8,
  },
});

export default App;
