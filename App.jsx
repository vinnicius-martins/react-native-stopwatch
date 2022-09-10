import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import ButtonOpacity from './src/components/ButtonOpacity.jsx';
import styles from './styles.jsx';

const App = () => {

  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timerInterval, setTimerInterval] = useState(undefined)

  const startTimer = () => {
    if (isRunning) return

    const increaseTimer = () => setTimer(timer => timer += 0.1)
    setTimerInterval(
      setInterval(increaseTimer, 100)
    )

    setIsRunning(true)
  }

  const stopTimer = () => {
    if (timerInterval)
      clearInterval(timerInterval);

    setIsRunning(false)
  }

  const resetTimer = () => {
    stopTimer()
    setTimer(() => 0)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/cronometro.png')}
        style={styles.cronometro}
      />
      <Text style={styles.time}>{timer.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <ButtonOpacity text="Iniciar" func={startTimer} />
        <ButtonOpacity text="Parar" func={stopTimer} />
        <ButtonOpacity text="Zerar" func={resetTimer} />
      </View>
    </View>
  )
}

export default App