import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import React from "react";
import {StyleSheet, Text, View, Image,ImageBackground} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { styles } from "../styles/global";

export default function Header({navigation}){
    const openMenu = ()=>{
        navigation.dispatch(DrawerActions.openDrawer) 
    
       }
    return(
    <ImageBackground source = {require('../assets/game_bg.png')} style = {styles.header}>
        <View style = {styles3.headerTitle}>
            <MaterialIcons name = 'menu' size = {28} onPress = {openMenu} style={styles.icon}/>
            <Image source ={require('../assets/heart_logo.png')} style = {styles3.headerImage}/>
            <Text style = {styles.headerText}>
                Home
                </Text>
        </View>
    
    </ImageBackground>

    )
}
const styles3 = StyleSheet.create({
headerTitle: {

    flexDirection: 'row'
},
    headerImage: {

        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})

