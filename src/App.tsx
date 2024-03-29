import React, { useState } from 'react';
import {
  SafeAreaView, Text
} from 'react-native';
import Button from './components/Button';

function App(): React.JSX.Element {

  const [number, setNumber] = useState(0);

  return (
    <SafeAreaView>
      <Text>{number}</Text>
      <Button title='Click here' onClick={() => setNumber(number + 1)} />
    </SafeAreaView>
  );
}

export default App;
