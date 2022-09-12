import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#0A0D22',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
    results: {
        justifyContent: "space-evenly",
        alignItems: 'center',
        width: 300,
        height: 500,
        backgroundColor: '#111428',
        borderRadius: 7
    },
    resultState: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },

    resultBMI: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#FFF',
    },
    resultRange: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#8B8C96'
    },
    resultRangeApprox: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    resultRev: {
        textAlign: 'center',
        width: 200,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF'
    },
    resultButton: {
        backgroundColor: '#EB1555',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#1C1F32'
    },

    resultButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',

    },
    reCalcul: {
        backgroundColor: '#EB1555',
        width: '100%',
        height: 70, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    reCalculText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    }
})

export default styles;