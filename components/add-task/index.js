import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import ImageSelector from "../image-selector/index.js";
import { useDispatch, useSelector } from 'react-redux';
import { setTask, setImage } from '../../store/actions';
import styles from "./styles.js";
import { saveTask } from "../../store/reducers/tasks.reducer.js";

const AddTasks = ({navigation}) => {
    const dispatch = useDispatch();
    const task = useSelector(state => state.tasksState.task);
    const image = useSelector(state => state.tasksState.image);

    const onHandleChangeText = (text) => {
        dispatch(setTask(text));
    };

    const onHandleImageSelected = (image) => {
        dispatch(setImage(image));
    };

    const onHandleAddTask = () => {
        if(task && image) {
            dispatch(saveTask(task, image));
            navigation.navigate('Tasks');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="new task"
                style={styles.input}
                selectionColor='#4A306D'
                onChangeText={onHandleChangeText}
                value={task}
            />
            <ImageSelector onImage={onHandleImageSelected} />
            <Button
                style={styles.button}
                title="Agregar"
                color="#4A306D"
                onPress={onHandleAddTask}
            />
        </View>
    );
}

export default AddTasks;