import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    awButton:{
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
    },
    buttonDecInc: {
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#1C1F32',
        padding: 10,
        width: 50,
        borderRadius: 50,
    },
    decInc: {
        color: 'white',
        fontSize: 30,
    }
});

export default styles;