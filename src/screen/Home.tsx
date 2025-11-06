import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../style/styles';
import Brand from '../components/Brand';
import Navbar from '../components/Navbar';
import Order from '../components/Order';
import Favorite from '../components/Favorite';
import Food from '../components/Food';

const HomeScreen = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    {/* Header */}
                    <View style={styles.header}>
                        <Brand />
                    </View>

                    {/* Navigation */}
                    <View style={styles.navigation}>
                        <Navbar icon="home-outline" text="Home" target="Home" />
                        <Navbar icon="cafe-outline" text="Cafe" target="Cafe" />
                        <Navbar icon="fast-food-outline" text="Fast Food" target="Food" />
                        <Navbar icon="heart-outline" text="Favorite" target="Favorite" />
                        <Navbar icon="location-outline" text="Location" target="Location" />
                        <Navbar icon="call-outline" text="Profile" target="Contact" />
                    </View>

                    {/* Order Section */}
                    <Order />

                    {/* Favorite Section */}
                    <Favorite />

                    {/* Food Section */}
                    <Food />

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default HomeScreen;
