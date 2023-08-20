import React from 'react';
import { StyleSheet, View, Text , Image} from 'react-native';
import Card from '../shared/card'
import { styles,ratings, images } from '../styles/global';
export default function ReviewDetails({route, navigation}) {
 const {title,body,rating} =  route.params

  return (
    <View>
      <Card>     
         <Text>{title}</Text>
      <Text>{body}</Text>
      <View style = { styles2.rate}>
        <Text>
          Rating:
        </Text>
  
      <Image source = {images.ratings[rating]}/>
      </View>
      </Card>

    </View>
  );
}

const styles2 = StyleSheet.create({
  rate:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16, 
    borderTopWidth: 1,
    borderTopColor: "#eee"
  }
  ,
})