import { DefaultTheme } from '@react-navigation/native'
import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
import { styles } from '../styles/global'


export default function FlatButton({text ,onPress}){

    return(
        <TouchableOpacity onPress = {onPress}>
            <View style = {styl3.button}>
<Text style = {styl3.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styl3 = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#f01d71",
        },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',

    }
})