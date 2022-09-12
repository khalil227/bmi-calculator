import { TouchableOpacity, Text } from "react-native"
import { Foundation } from "@expo/vector-icons"
import styles from "./styles"

const Gender = ({action, gender, icon, isGender}) =>{
    return(
        <TouchableOpacity style={styles.buttonGender} onPress={action}>
        <Foundation name={icon} size={100} color= {isGender  ? "white" : "#8B8C96"} />
        <Text style={[styles.textButton, {color: isGender ? "white" : "#8B8C96"}]}>{gender}</Text>

        </TouchableOpacity>
    )
}

export default Gender;