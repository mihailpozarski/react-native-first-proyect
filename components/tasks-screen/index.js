import React, { useEffect } from 'react'
import {
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToSelectedTasks } from '../../store/actions';
import { loadTasks, removeSelectedTasks } from '../../store/reducers/tasks.reducer';

export default function TasksScreen({ navigation }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasksState.tasks);
  const selectedTasks = useSelector(state => state.tasksState.selectedTasks);

  const onHandleDelete = (id) => {
    navigation.navigate('Delete', { id });
  }

  useEffect(() => {
    dispatch(loadTasks())
  }, [dispatch])

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CheckBox value={selectedTasks.includes(item)} onValueChange={() => dispatch(addTaskToSelectedTasks(item))} />
      <Text style={styles.item}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={() => onHandleDelete(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Agregar Tasks" onPress={() => navigation.navigate('Add')} />
      <FlatList
        style={styles.itemList}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <Button color='red' title='Delete Selected' onPress={() => dispatch(removeSelectedTasks(selectedTasks.map( (t)=> t.id )))} />
    </View>
  );
}
