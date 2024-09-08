import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../user/screen/Home';
import Settings from '../user/screen/Settings';
import Login from '../auth/Login';
import Register from '../auth/Register';
import AdminTab from './AdminTab';
import UserTab from './UserTab';
import DriverTab from './DriverTab';
import Forgot from '../auth/Forgot';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Forgot' component={Forgot} />
      <Stack.Screen name='AdminTab' component={AdminTab} />
      <Stack.Screen name='UserTab' component={UserTab} />
      <Stack.Screen name='DriverTab' component={DriverTab} />
    </Stack.Navigator>
  )
}

export default StackNavigation