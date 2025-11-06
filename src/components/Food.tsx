import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../style/styles';

const Food = () => {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Food Section</Text>
            {[...Array(5)].map((_, i) => (
                <View key={i} style={styles.foodItem}>
                    <View style={styles.foodItemImage} />
                    <View style={styles.foodItemDesc} />
                </View>
            ))}
        </View>
    );
};

export default Food;
