/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  Button,
  SafeAreaView
} from 'react-native';

import FlatButton from './src/components/numberButton'
import { useState } from 'react';


function App() {

 
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const clickAddHandler = () => {
    setResult(String(Number(number1) + Number(number2)));
  };

  const clickSubtractHandler = () => {
    setResult(String(Number(number1) - Number(number2)));
  };
  const clickMultiplyHandler = () => {
    setResult(String(Number(number1) * Number(number2)));
  };
  const clickDivisionHandler = () => {
    if (Number(number2) !== 0) {
      console.log(number1);
      console.log(number2);
      setResult(String(Number(number1) / Number(number2)));
    } else {
      return 'none';
    }
  };



  return (
    <SafeAreaView style={{ margin: 16, flex: 1 }}>
      <Text style={styles.title}>Calculator </Text>
      <TextInput
      
        style={styles.input}
        placeholder="First Number"
        onChangeText={val => setNumber1(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Second Number"
        onChangeText={val => setNumber2(val)}
      />

      <Text style={{...styles.input,color:"white",backgroundColor: "#468DB4",fontWeight:'700'}}>{result}</Text>
      <View style={styles.rowSection}>

        <View style={{flex: 1}}>
          <FlatButton text="+" onPress={clickAddHandler} />
        </View>
        <View style={{flex: 1}} >
          <FlatButton text="-" onPress={clickSubtractHandler} />
        </View>

        <View style={{flex: 1}} >
          <FlatButton text="/" onPress={clickDivisionHandler} />
        </View>

        <View style={{flex: 1}} >
          <FlatButton text="X" onPress={clickMultiplyHandler} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#2c3d3dff"
  },
  container: {
    flex: 1,
    
    backgroundColor: 'green',
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    flex: 1,
    marginTop: 16,
    padding: 10,
    textAlign:'right',
    fontSize:40,
    backgroundColor:'#d8e9f1',
    borderRadius: 20
  },

  rowSection: {
    flex: 3, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
    marginTop: 20
  },
});

export default App;
