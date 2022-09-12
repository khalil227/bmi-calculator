import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CheckBox from 'expo-checkbox';
import { useState } from 'react';
import { Foundation } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import Gender from '../../components/Gender'
import HeadContainer from '../../components/HeadContainer';
import AWContainer from '../../components/AWContainer';
import { useNavigation } from '@react-navigation/native';
export default function App() {

    const { navigate }= useNavigation();

    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);
    const [height, setHeight] = useState(110);
    const [weight, setWeight] = useState(60);
    const [age, setAge] = useState(18);

    const setMale = ()=> {
        setIsMale(true);
        setIsFemale(false);
    }

    const setFemale = ()=> {
        setIsMale(false);
        setIsFemale(true);
    }

    const limitAge = (age)=>{
        if(age >= 2 && age <= 120)
            setAge(age);
        
    }

    
    return (
    <View style={styles.container}>
        <View style={styles.gender}>
        <Gender icon="male-symbol" action={setMale} gender="Male" isGender={isMale} />
        <Gender icon="female-symbol" action={setFemale} gender="Female" isGender={isFemale} />
    
        </View>
        <View style={styles.height}>
            <HeadContainer label="HEIGHT" value={height} unit="cm" action={setHeight}/>
            <Slider style={{width: 250, height: 40}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor='white'
            maximumTrackTintColor='#8B8C96'
            thumbTintColor='#EB1555'
            value={.5}
            onValueChange={(value)=> setHeight(parseInt(value * 220))}
            />
        </View>
        <View style={styles.ageWeight}>
            <View style={styles.awContainer}>
                <HeadContainer label="WEIGHT" value={weight} unit="kg" action={setWeight} />
                <AWContainer action={setWeight} aw={weight} />
            </View>
            <View style={styles.awContainer}>
                <HeadContainer label="AGE" value={age} unit="years" action={setAge}/>
                <AWContainer action={limitAge} aw={age} />
            </View>
        </View>
        <TouchableOpacity style={styles.buttonCalcul} onPress={()=>{navigate('Result', {bmi : (weight / ((height / 100) * (height / 100)))})}}><Text style={styles.buttonCalculText}>Calculate your BMI</Text></TouchableOpacity>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A0D22',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    gender: {
        flexDirection: 'row',
    }, 
    height: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#111428',
        width: 315,
        height: 200
    },
    ageWeight:{
    flexDirection: 'row',
    },
    awContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#111428',
        width: 150,
        height: 200,
        margin: 10,
        borderRadius: 5,
    },
    buttonCalcul: {
        backgroundColor: '#EB1555',
        width: '100%',
        height: 70, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCalculText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
    }
    
});
