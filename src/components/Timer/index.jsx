import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../../../styles";
import ButtonOpacity from "../ButtonOpacity";

class Timer extends React.Component {
  get BUTTON_ACTIONS() {
    return (
      {
        start: { text: 'Iniciar', actionFuction: this.startTimer },
        stop: { text: 'Parar', actionFuction: this.stopTimer }
      }
    )
  }

  constructor(props) {
    super(props)

    this.interval = undefined;
    this.isRunning = false;
    this.state = {
      time: 0,
      actionButton: this.BUTTON_ACTIONS.start
    }
  }

  turnOn = () => {
    this.isRunning = true
    this.setState((state) => {
      return (
        {
          ...state,
          actionButton: this.BUTTON_ACTIONS.stop
        }
      )
    })
  }

  turnOff = () => {
    this.isRunning = false
    this.setState((state) => {
      return (
        {
          ...state,
          actionButton: this.BUTTON_ACTIONS.start
        }
      )
    })
  }

  startTimer = () => {
    console.log('entrou')
    console.log(this.state.time)
    if (this.isRunning) return

    const increaseTimer = () => this.setState(state => {
      return { ...state, time: state.time += 0.1 }
    })
    this.interval = setInterval(increaseTimer, 100)

    this.turnOn()
  }

  stopTimer = () => {
    if (!this.isRunning) return

    clearInterval(this.interval)
    this.turnOff()
  }

  resetTimer = () => {
    this.stopTimer()
    this.setState(state => {
      return { ...state, time: 0 }
    })
  }

  render() {
    return (
      <>
        <Image source={require('../../../assets/cronometro.png')} style={styles.cronometro} />
        <Text style={styles.time}>{this.state.time.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <ButtonOpacity text={this.state.actionButton.text} func={this.state.actionButton.actionFuction} />
          <ButtonOpacity text="Zerar" func={this.resetTimer} />
        </View>
      </>
    )
  }
}

export default Timer