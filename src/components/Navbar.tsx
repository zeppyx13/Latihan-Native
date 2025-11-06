import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from '../style/styles';

const icons = [
    'cafe-outline',
    'pizza-outline',
    'fast-food-outline',
    'heart-outline',
    'location-outline',
    'person-outline'
] as const;

const names = [
    'Cafe',
    'Pizza',
    'Fast Food',
    'Favorite',
    'Location',
    'Profile'
] as const;

const Navbar = () => {
    return (
        <View style={styles.navigation}>
            {icons.map((icon, i) => (
                <View key={i} style={styles.navItem}>
                    <Ionicons name={icon} size={50} color="#000" />
                    <Text style={styles.navName}>{names[i]}</Text>
                </View>
            ))}
        </View>
    );
};

export default Navbar;
