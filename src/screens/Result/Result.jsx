import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Screenshot from '../../utils/screenshot';


import styles from './styles';


const normalWeight = {
    state : 'NORMAL',
    color : '#3ECF85',
    message : 'A BMI of 18.5-24.9 indicates that you are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems.',
    range: {title: 'Normal BMI Range :', approx : '18.5 - 25 kg/m²'},
}

const underWeight = {
    state : 'UNDERWEIGHT',
    color : '#e0d44f',
    message : 'A BMI of less than 18.5 indicates that you are underweight, so you may need to put on some weight. You are recommended to ask your doctor or a dietitian for advice.',
    range: {title: 'Underweight BMI Range :', approx : 'less than 18.5 kg/m²'},

}
const overWeight = {
    state : 'OVERWEIGHT',
    color : '#e0d44f',
    message : 'BMI of 25–29.9 A BMI of 25-29.9 indicates that you are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your doctor or a dietitian for advice.',
    range: {title: 'Overweight BMI Range :', approx : '25 - 29.9 kg/m²'},
}

const obeseWeight = {
    state: 'OBESE',
    color : '#e04f4f',
    message: 'A BMI of over 30 indicates that you are heavily overweight. Your health may be at risk if you do not lose weight. You are recommended to talk to your doctor or a dietitian for advice.',
    range: {title: 'Obese BMI Range :', approx : 'more than 30 kg/m²'},
}


    

const Result = ({route})=>{
    const { goBack } = useNavigation();

    const bmi = parseFloat(route.params.bmi);
    const [result, setResult] = useState(()=>{
        

        if(bmi < 18.5){
            return underWeight;
        }else if(bmi >= 18.5 && bmi < 25){
            return normalWeight;
        }else if(bmi >= 25 && bmi < 25.99){
            return overWeight;
        }else if(bmi >= 30){
            return obeseWeight;
        }
    });


   


    return (
        
        <View style={styles.container}>
        <Text style={styles.title}>Your Results</Text>
        <View style={styles.results}>
            <Text style={[styles.resultState, {color: result.color}]}>{result.state}</Text>
            <Text style={styles.resultBMI}>{bmi.toFixed(1)}</Text>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.resultRange}>{result.range.title}</Text>
                <Text style={styles.resultRangeApprox}>{result.range.approx}</Text>    
            </View>
            <Text style={styles.resultRev}>{result.message}</Text>
            <TouchableOpacity style={styles.resultButton} onPress={()=>Screenshot()}><Text style={styles.resultButtonText}>Save result</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.reCalcul} onPress={() => goBack()}><Text style={styles.reCalculText}>Re-Calculate your BMI</Text></TouchableOpacity>
        </View>
    )
}

export default Result;
