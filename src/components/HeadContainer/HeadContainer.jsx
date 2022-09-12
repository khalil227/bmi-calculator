import { View, Text, TextInput } from "react-native"
import styles from "./styles"

const HeadContainer = ({label, value, unit, action}) => {
    return (
        <View style={styles.headContainer}>
            <Text style={[styles.headText, {paddingBottom: 20}]}>{label}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}><TextInput keyBoardType="numeric" style={styles.valueText} onChangeText={(val)=>action(parseInt(val)) }>{value}</TextInput><Text style={styles.headText}>{unit}</Text></View>
        </View>
    )
}

export default HeadContainer;