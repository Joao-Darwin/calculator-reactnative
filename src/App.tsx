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

  return (
    <SafeAreaView style={style.container}>
      <Display value={displayValue} />
      <View style={style.buttons}>
        <Button title='AC' />
        <Button title='/' />
        <Button title='7' />
        <Button title='8' />
        <Button title='9' />
        <Button title='*' />
        <Button title='4' />
        <Button title='5' />
        <Button title='6' />
        <Button title='-' />
        <Button title='1' />
        <Button title='2' />
        <Button title='3' />
        <Button title='+' />
        <Button title='0' />
        <Button title='.' />
        <Button title='=' />
      </View>
    </SafeAreaView>
  );
}

export default App;
