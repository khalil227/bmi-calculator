import {TouchableOpacity, View, Text} from "react-native"
import styles from "./styles"

const AWContainer = ({action, aw}) => {
    return(
        <View style={styles.awButton}>
            <TouchableOpacity style={styles.buttonDecInc} onPress={() => action(aw + 1)}><Text style={styles.decInc}>+</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttonDecInc} onPress={() => action(aw - 1)}><Text style={styles.decInc}>-</Text></TouchableOpacity>
        </View>
    )
}

export default AWContainer;