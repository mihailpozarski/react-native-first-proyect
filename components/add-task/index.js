import React from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./styles.js";

const AddTask = ({ item, onChangeText, placeholder, addItem, placeholderTextColor, textButton, color }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                selectionColor='#4A306D'
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                value={item}
            />
            <Button
                title={textButton}
                color={color}
                onPress={addItem}
            />
        </View>
    );
}

export default AddTask;