import React, { useState} from 'react'
import {
  ActivityIndicator,
  View,
} from 'react-native';
import { styles } from './styles';
import { colors } from './constants/colors';
import { DeleteScreen, TasksScreen } from './components/index';
import { useFonts } from 'expo-font';
import { TasksContextProvider } from './context/TasksContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <TasksContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Tasks" component={TasksScreen} />
          <Stack.Screen name="Delete" component={DeleteScreen} />
        </Stack.Navigator>
      </TasksContextProvider>
    </NavigationContainer>
  );
}