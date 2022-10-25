import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from '../tasks-screen/index';
import AddTasks from '../add-task';
import { DeleteScreen } from '../delete-screen/index';

const Stack = createNativeStackNavigator();

const TasksNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={TasksScreen} />
      <Stack.Screen name="Delete" component={DeleteScreen} />
      <Stack.Screen name="Add" component={AddTasks} />
    </Stack.Navigator>
  );
}

export default TasksNavigation;