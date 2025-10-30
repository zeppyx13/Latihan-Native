import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandContainer} />
        </View>

        {/* Navigation (1 kotak pink + 1 label) */}
        <View style={styles.navigation}>
          <View style={styles.navitem}>
            <View style={styles.navimage} />
            <View style={styles.navlabel} />
          </View>
        </View>

        {/* Order section */}
        <View style={styles.order}>
          <Text>Order Section</Text>
          <ScrollView style={{ flexDirection: 'row', gap: 20 }} horizontal={true}>
            <View style={styles.orderItems}>
              <View style={styles.orderItemImage} />
              <View style={styles.orderItemDesc} />
            </View>
            <View style={styles.orderItems}>
              <View style={styles.orderItemImage} />
              <View style={styles.orderItemDesc} />
            </View>
            <View style={styles.orderItems}>
              <View style={styles.orderItemImage} />
              <View style={styles.orderItemDesc} />
            </View>
            <View style={styles.orderItems}>
              <View style={styles.orderItemImage} />
              <View style={styles.orderItemDesc} />
            </View>
            <View style={styles.orderItems}>
              <View style={styles.orderItemImage} />
              <View style={styles.orderItemDesc} />
            </View>
          </ScrollView>
        </View>

        {/* Favorite section */}
        <View style={styles.favorite}>
          <Text style={{ marginBottom: 10 }}>Favorite Section</Text>
          <ScrollView contentContainerStyle={{ flexDirection: 'row', gap: 20 }} horizontal={true}>

            <View style={styles.bannerContainer} />
          </ScrollView>
        </View>

        {/* Food section */}
        <View style={styles.food} />

      </SafeAreaView >
    </SafeAreaProvider >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
  },

  header: {
    height: 120,
    backgroundColor: '#D62828',
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  brandContainer: {
    width: 80,
    height: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
  },
  navigation: {
    height: 140,
    backgroundColor: '#FDE68A',
    padding: 20,
    justifyContent: 'center',
  },
  navitem: {
    width: 90,
    height: 90,
    backgroundColor: '#BA68C8',
  },
  navimage: {
    flex: 1,
    backgroundColor: '#FF8A80',
  },
  navlabel: {
    height: 22,
    backgroundColor: '#1D4ED8',
  },

  order: {
    height: 150,
    backgroundColor: '#FDE68A',
    padding: 10,
  },
  orderItems: {
    flexDirection: 'row',
    backgroundColor: 'teal',
    padding: 10,
  },
  orderItemImage: {
    width: 60,
    height: 60,
    backgroundColor: '#F87171',
  },
  orderItemDesc: {
    flex: 1,
    backgroundColor: '#22C55E',
  },

  favorite: {
    height: 120,
    backgroundColor: '#FDE68A',
    padding: 15,
  },
  bannerContainer: {
    width: 200,
    height: '100%',
    backgroundColor: '#3B82F6',
    marginBottom: 10,
  },
  favoriteItem: {
    flex: 1,
    backgroundColor: '#B91C1C',
  },
  food: {
    height: 200,
    backgroundColor: '#334155',
  },
});

export default App;