import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../driver/screen/Home';
import Settings from '../driver/screen/Settings';
import Account from '../driver/screen/Account';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tabs = createBottomTabNavigator();

const DriverTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;
            case 'Account':
              iconName = focused ? 'account-circle' : 'account-circle';
              break;
            default:
              iconName = 'help'; // Default icon
              break;
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Account" component={Account} />
    </Tabs.Navigator>
  );
};

export default DriverTab;
