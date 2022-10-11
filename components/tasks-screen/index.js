import React from 'react'
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import AddTask from '../add-task/index';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllSelectedTasks, addTaskToSelectedTasks, addTask, setTask } from '../../store/actions';

export default function TasksScreen({ navigation }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasksState.tasks);
  const selectedTasks = useSelector(state => state.tasksState.selectedTasks);
  const task = useSelector(state => state.tasksState.task);

  const onHandleChangeText = (text) => {
    dispatch(setTask(text));
  }

  const onHandleDelete = (id) => {
    navigation.navigate('Delete', { id });
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CheckBox value={selectedTasks.includes(item)} onValueChange={() => dispatch(addTaskToSelectedTasks(item))} />
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
        addItem={() => dispatch(addTask())}
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
      <Button color='red' title='Delete Selected' onPress={() => dispatch(deleteAllSelectedTasks())} />
    </View>
  );
}
