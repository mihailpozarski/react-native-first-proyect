import React, { useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import { AddTask, DeleteScreen } from './components/index';
import { useFonts } from 'expo-font';
import { styles } from './styles';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]);
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

  const onHandleChangeText = (text) => {
    setTask(text);
  }

  const onHandleModal = (id) => {
    const task = tasks.find((task) => task.id === id);
    setSelectedTask(task);
    setModalVisible(true);
  }

  const selectTask = (item) => {
    if (selectedTasks.includes(item)) {
      setSelectedTasks(selectedTasks.filter((selected) => selected.id !== item.id));
    } else {
      setSelectedTasks([...selectedTasks, item]);
    }
  }

  const addItem = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: task },
    ]);
    setTask('');
  }

  const onHandleDeleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    setSelectedTasks(selectedTasks.filter((item) => item.id !== id));
    setSelectedTask(null);
    setModalVisible(!modalVisible);
  }

  const onHandleCancel = () => {
    setSelectedTask(null);
    setModalVisible(!modalVisible);
  }

  const deleteSelectedTasks = () => {
    setTasks(tasks.filter((item) => !selectedTasks.includes(item)));
    setSelectedTasks([]);
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CheckBox value={selectedTasks.includes(item)} onValueChange={() => selectTask(item)} />
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onHandleModal(item.id)}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  )

  if (!!selectedTask){
    return (
      <DeleteScreen
      selectedTask={selectedTask}
      onHandleCancel={onHandleCancel}
      onHandleDeleteItem={onHandleDeleteItem}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <AddTask
          item={task}
          onChangeText={onHandleChangeText}
          placeholder='new task'
          addItem={addItem}
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
        <Button color='red' title='Delete Selected' onPress={deleteSelectedTasks} />
      </View>
    );
  }
}