import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, View
} from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

function App(): React.JSX.Element {

  const [displayValue, setDisplayValue] = useState('0');

  const addDigit = (digit: string) => {
    if (displayValue === '0') {
      setDisplayValue(digit);
    } else {
      setDisplayValue(displayValue + digit);
    }
  }

  const clearDisplay = () => {
    setDisplayValue('0');
  }

  const setOperation = (operation: string) => {
    setDisplayValue(operation);
  }

  return (
    <SafeAreaView style={style.container}>
      <Display value={displayValue} />
      <View style={style.buttons}>
        <Button title='AC' isTripleButton onClick={clearDisplay}/>
        <Button title='/' isOperationButton onClick={() => setOperation("/")}/>
        <Button title='7' onClick={() => addDigit('7')}/>
        <Button title='8' onClick={() => addDigit('8')}/>
        <Button title='9' onClick={() => addDigit('9')}/>
        <Button title='*' isOperationButton onClick={() => setOperation("*")}/>
        <Button title='4' onClick={() => addDigit('4')}/>
        <Button title='5' onClick={() => addDigit('5')}/>
        <Button title='6' onClick={() => addDigit('6')}/>
        <Button title='-' isOperationButton onClick={() => setOperation("-")}/>
        <Button title='1' onClick={() => addDigit('1')}/>
        <Button title='2' onClick={() => addDigit('2')}/>
        <Button title='3' onClick={() => addDigit('3')}/>
        <Button title='+' isOperationButton onClick={() => setOperation("+")}/>
        <Button title='0'isDoubleButton onClick={() => addDigit('0')}/>
        <Button title='.' onClick={() => addDigit('.')}/>
        <Button title='=' onClick={() => setOperation("=")}/>
      </View>
    </SafeAreaView>
  );
}

export default App;
