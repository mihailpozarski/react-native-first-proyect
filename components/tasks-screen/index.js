import React, { useContext } from 'react'
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { TasksContext } from '../../context/TasksContext';
import CheckBox from 'expo-checkbox';
import AddTask from '../add-task/index';
import { styles } from './styles';

export default function TasksScreen({ navigation }) {
  const {
    task,
    tasks,
    addTask,
    setTask,
    selectedTasks,
    addTaskToSelectedTasks,
    deleteAllSelectedTasks
  } = useContext(TasksContext);

  const onHandleChangeText = (text) => {
    setTask(text);
  }

  const onHandleDelete = (id) => {
    navigation.navigate('Delete', { id });
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CheckBox value={selectedTasks.includes(item)} onValueChange={() => addTaskToSelectedTasks(item)} />
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onHandleDelete(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <AddTask
        item={task}
        onChangeText={onHandleChangeText}
        placeholder='new task'
        addItem={addTask}
        selectionColor='#4A306D'
        placeholderTextColor='#4A306D'
        textButton='ADD'
        color='#4A306D'
      />
      <FlatList
        style={styles.itemList}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <Button color='red' title='Delete Selected' onPress={deleteAllSelectedTasks} />
    </View>
  );
}
