import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UserLogin from '../screens/Login/UserLogin';

const RootNavigation: React.FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserLogin">
        <Stack.Screen name="UserLogin" component={UserLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
