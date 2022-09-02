import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '75%',
    borderBottomColor: '#4A306D',
    borderBottomWidth: 1,
    height: 40,
    color: '#212121',
  },
  list: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#4A306D',
  }
});

const fakeData = [
  {id: '1', title: 'Task 1'},
  {id: '2', title: 'Task 2'},
  {id: '3', title: 'Task 3'},
  {id: '4', title: 'Task 4'},
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='new task' style={styles.input} selectionColor='#4A306D'/>
        <Button title="Add" onPress={() => console.warn('Hola')} color='#4A306D'/>
      </View>
      <View>
        <FlatList
          data={fakeData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.list}
        />
      </View>
    </View>
  );
};

const renderItem = ({item}) => {
  return (
    <Text>{item.title}</Text>
  )
};
