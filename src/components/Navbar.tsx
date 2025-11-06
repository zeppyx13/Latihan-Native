import React from 'react';
import { View, Text, Touchable, TouchableOpacity, Alert } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { styles } from '../style/styles';
import { useNavigation } from '@react-navigation/native';

interface NavbarProps {
    icon: any;
    text: string;
    target: string;
}
const Navbar: React.FC<NavbarProps> = ({ icon, text, target }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.navItem}
            onPress={() => navigation.navigate(target as never)}
        >
            <Ionicons name={icon} size={50} color="#000" />
            <Text style={styles.navName}>{text}</Text>
        </TouchableOpacity >
    );
};

export default Navbar;
