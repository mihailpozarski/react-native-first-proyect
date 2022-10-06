import React, { useContext } from 'react';
import { styles } from './styles';
import { View, Button, Text } from 'react-native';
import { TasksContext } from '../../context/TasksContext';

export const DeleteAllScreen = ({ navigation }) => {
  const { deleteAll } = useContext(TasksContext);

  const onHandleDeleteAll = () => {
    deleteAll();
    navigation.navigate('Tasks');
  }

  return (
    <View style={styles.container}>
      <View style={styles.deleteContainer}>
        <Text style={styles.deleteTitle}>Detalle de la lista</Text>
      </View>
      <View style={styles.deleteMessageContainer}>
        <Text style={styles.deleteMessage}>¿Estas seguro de que quieres eliminar todo?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Eliminar todo'
          onPress={() => onHandleDeleteAll()}
          color='#4A306D'
        />
      </View>
    </View>
  );
}