import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../admin/screen/Home';
import Settings from '../admin/screen/Settings';
import Dashboard from '../admin/screen/Dashboard';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'; // Import SimpleLineIcons

const Tabs = createBottomTabNavigator();

const AdminTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dashboard':
              iconName = 'grid'; // Example SimpleLineIcons icon for Dashboard
              break;
            case 'Settings':
              iconName = 'settings'; // SimpleLineIcons icon for Settings
              break;
            default:
              iconName = 'question'; // Default SimpleLineIcons icon
              break;
          }

          return <SimpleLineIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name='Dashboard' component={Dashboard} />
      <Tabs.Screen name='Settings' component={Settings} />
    </Tabs.Navigator>
  );
};

export default AdminTab;
