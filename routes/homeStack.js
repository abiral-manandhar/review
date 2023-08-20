import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "E:/React-Native/4/screens/home";
import ReviewDetails from "E:/React-Native/4/screens/reviewDetails";



const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component = {Home}/>
            <Stack.Screen name="reviewDetails" component = {ReviewDetails}/>
            
        </Stack.Navigator>

    )
}

export default function App(){
    return(

        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}