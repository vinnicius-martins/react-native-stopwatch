import React from 'react';
import { View } from 'react-native';
import Timer from './src/components/Timer';
import styles from './styles.jsx';

const App = () => {
  return (
    <View style={styles.container}>
      <Timer />
    </View>
  )
}

export default App