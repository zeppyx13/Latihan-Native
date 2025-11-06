import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContactScreen = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#f3f4f6',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text style={{ fontSize: 22, fontWeight: '600', marginBottom: 20 }}>
                Ini halaman Food
            </Text>

            <TouchableOpacity
                style={{
                    backgroundColor: '#2563eb',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 8,
                }}
                onPress={() => navigation.navigate('Home' as never)}
            >
                <Text style={{ color: 'white', fontWeight: '500' }}>Kembali ke Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ContactScreen;
