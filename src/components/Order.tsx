import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../style/styles';

const Order = () => {
    return (
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
    );
};

export default Order;
