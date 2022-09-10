import { TouchableOpacity, Text } from "react-native"
import styles from "../../../styles"

const ButtonOpacity = props => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.func}>
      <Text style={styles.btnTexto}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonOpacity