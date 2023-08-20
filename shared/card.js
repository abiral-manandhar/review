import React from 'react'
import {StyleSheet, View} from 'react-native'

export default function Card(props){
    return(
        <View style = {style.card}>
        <View style = {style.cardContent}>

            {props.children}
        </View>
        </View>)

}

const style = StyleSheet.create({
    card:{
            borderRadius: 6,
            elevation: 3,
            backgroundColor: '#fff',
            shadowOffset: {width:1 , height: 1},
            shadowColor: '#333',
            shadowOpacity: .3,
            shadowRadius: 2,
            marginHorizontal: 4,
            marginVertical: 6,
    },
    cardContent: {
        marginVertical: 10,
        marginHorizontal: 18,
    }
})