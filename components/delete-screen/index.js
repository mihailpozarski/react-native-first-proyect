import React, { useState, useEffect } from 'react';
import { styles } from './styles';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../store/actions';

export const DeleteScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasksState.tasks);
  const [task, setTask] = useState(null);

  const onHandleCancel = () => {
    navigation.navigate('Tasks');
  }

  const onHandleDelete = (id) => {
    dispatch(deleteTask(id));
    navigation.navigate('Tasks');
  }

  useEffect(() => {
    setTask(tasks.find((item) => item.id === id));
  }, [id, tasks]);

  return (
    <View style={styles.container}>
      <View style={styles.deleteContainer}>
        <Text style={styles.deleteTitle}>Detalle de la lista</Text>
      </View>
      <View style={styles.deleteMessageContainer}>
        <Text style={styles.deleteMessage}>¿Estas seguro de que quieres eliminar?</Text>
      </View>
      <View style={styles.deleteMessageContainer}>
        <Text style={styles.selectedTask}>{task?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Eliminar'
          onPress={() => onHandleDelete(task?.id)}
          color='#4A306D'
        />
        <Button
          title='Cancelar'
          onPress={() => onHandleCancel()}
          color='#cccccc'
        />
      </View>
    </View>
  );
}