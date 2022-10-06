import React, { useState} from 'react'
import {
  ActivityIndicator,
  View,
} from 'react-native';
import { styles } from './styles';
import { colors } from './constants/colors';
import { DeleteAllScreen, TasksNavigation } from './components/index';
import { useFonts } from 'expo-font';
import { TasksContextProvider } from './context/TasksContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loadingContainter}>
        <ActivityIndicator size="large" color={colors.warning} />
      </View>
    );
  }

  return (
    <TasksContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Tasks"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarInactiveTintColor: colors.secondary,
          }}>
          <Tab.Screen
            name="TasksNavigation"
            component={TasksNavigation}
            options={{
              tabBarLabel: 'Tasks',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-list" color={color} size={size} />
              ),
            }}

          />
          <Tab.Screen
            name="DeleteNavigation"
            component={DeleteAllScreen}
            options={{
              tabBarLabel: 'Delete Tasks',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-trash" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TasksContextProvider>
  );
}