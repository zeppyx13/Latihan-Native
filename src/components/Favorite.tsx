import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style/styles';

const Favorite = () => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Favorite Section</Text>
            <View style={styles.bannerContainer} />
        </View>
    );
};

export default Favorite;
