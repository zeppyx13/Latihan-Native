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
                    <Navbar />

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
