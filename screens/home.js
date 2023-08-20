import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList , Modal} from 'react-native';
import {styles} from '../styles/global'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForm'

export default function Home({navigation}) {
 const[modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ]); 

  const addReviews = (review) => {
      review.key = Math.random().toString()
      setReviews((curRev)=>{
          return [review, ...curRev]
          
        })
        setModalOpen(false)
          
  }
  return (
    <View style={styles.container}>
    <Modal visible = {modalOpen} animationType = 'slide'>

      <View style = {styles.modalContent} >
      <MaterialIcons
            style = {{...styl.modalToggle, ...styl.modalClose}}
            name = 'close'
            size = {24}
            onPress = {()=>{
              setModalOpen(false)
            }}
          />
<ReviewForm addReview = {addReviews}/>
</View>        
            </Modal>
            <MaterialIcons
            
              name = 'add'
              size = {24}
              style = {styl.modalToggle}
              onPress = {()=>{
                setModalOpen(true)
              }}
            />
    <FlatList
      data = {reviews}
      renderItem = {
        ({item}) =>(
            <TouchableOpacity onPress = {()=>{
              navigation.navigate("reviewDetails", item)
            }}>
              <Card>
              <Text style = {styles.titleText}>
                {item.title}
              </Text>
              </Card>
            </TouchableOpacity>
        )
      }
    /> 
    
    </View>
  );
}

const styl = StyleSheet.create({
  modalToggle:{
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius:10,
    alignSelf: 'center' 

  },
  modalClose:{
    marginTop: 20,
  },
  modalContent:{

    flex: 1
  }
})
