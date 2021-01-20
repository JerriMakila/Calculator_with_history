import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const sum = () => {
    const sumResult = parseFloat(firstNumber) + parseFloat(secondNumber);
    setResult(sumResult);
    setData([...data, {key: firstNumber + " + " + secondNumber + " = " + sumResult}]);
  }

  const subtract = () => {
    const subtractResult = firstNumber - secondNumber;
    setResult(subtractResult);
    setData([...data, {key: firstNumber + " - " + secondNumber + " = " + subtractResult}]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={{fontSize:30}}>Result: {result}</Text>
        <TextInput
          onChangeText={firstNumber => setFirstNumber(firstNumber)}
          value={firstNumber}
          keyboardType='numeric'
          style={styles.input}>
        </TextInput>
        <TextInput
          onChangeText={secondNumber => setSecondNumber(secondNumber)}
          value={secondNumber}
          keyboardType='numeric'
          style={styles.input}>
        </TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button onPress={sum} title='+'></Button>
        </View>
        <View style={styles.button}>
          <Button onPress={subtract} title='-'></Button>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({item}) =>
            <Text style={{fontSize: 20}}>{item.key}</Text>}>
        </FlatList>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 25,
    height: 35,
    marginBottom: 5,
    paddingHorizontal:5,
    width: 200,
  },

  button: {
    width: 40,
  },

  buttonContainer: {
    flexDirection: 'row',
    height: 100,
    marginTop: 25,
    justifyContent: 'space-around',
    width: 100,
  },

  listContainer: {
    height: 200,
  }
});
