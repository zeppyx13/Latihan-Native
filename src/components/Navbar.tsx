import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from '../style/styles';

interface NavbarProps {
    icon: any;
    text: string;
}

const Navbar: React.FC<NavbarProps> = ({ icon, text }) => {
    return (
        <View style={styles.navItem}>
            <Ionicons name={icon} size={50} color="#000" />
            <Text style={styles.navName}>{text}</Text>
        </View>
    );
};

export default Navbar;
