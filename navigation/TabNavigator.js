import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import CaloriesScreen from '../screens/CaloriesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Calories" component={CaloriesScreen} />
    </Tab.Navigator>
  );
}
