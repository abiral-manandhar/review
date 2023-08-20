import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import ReviewDetails from "./screens/reviewDetails";
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from './screens/about'
import Header from './shared/header'
const Stack = createStackNavigator()


function AboutStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="About" component = {About}       options={({navigation}) => {
                return {
                  header: () => <Header navigation={navigation} />,
                };
              }}
             
           
        />
      
            
        </Stack.Navigator>

    )
}
function hello(){

    return(

        <Header/>
    )
}
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component = {Home}         options={{ title: 'My home' }}
            options={({navigation}) => {
                return {
                  header: () => <Header navigation={navigation} />,
                };
              }}
                
        />
            <Stack.Screen name="reviewDetails" component = {ReviewDetails}
        
            options={{ title: 'Details' }}
        
            />
            
        </Stack.Navigator>

    )
}
const Drawer = createDrawerNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={MyStack} />
          <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
