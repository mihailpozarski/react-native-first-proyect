import React, { useState } from 'react';
import { styles } from './styles';
import { View, Button, Text } from 'react-native';

export const DeleteScreen = ({ selectedTask, onHandleDeleteItem, onHandleCancel }) => {
  return (
    <View style={styles.container}>
      <View style={styles.deleteContainer}>
        <Text style={styles.deleteTitle}>Detalle de la lista</Text>
      </View>
      <View style={styles.deleteMessageContainer}>
        <Text style={styles.deleteMessage}>¿Estas seguro de que quieres eliminar?</Text>
      </View>
      <View style={styles.deleteMessageContainer}>
        <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title='Eliminar'
          onPress={() => onHandleDeleteItem(selectedTask?.id)}
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