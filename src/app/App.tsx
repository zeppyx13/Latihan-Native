import React from 'react';
import HomeScreen from '../screen/Home';
import ContactScreen from '../screen/Contact';
import Food from '../screen/Food';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderShownContext } from '@react-navigation/elements';
const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <stack.Screen name="Contact" component={ContactScreen} />
        <stack.Screen name="Food" component={Food} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
