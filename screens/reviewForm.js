import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';

import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button'
const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {

  return (
    
    <View style={styles6.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={styles6.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur = {props.handleBlur('title')}


            />
        <Text style = {styles6.errorText}>
            {props.touched.title && props.errors.title}
        </Text>
            <TextInput
              style={styles6.input}
              multiline minHeight = {60}
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              value={ props.values.body}
              onBlur = {props.handleBlur('body')}
              
            />
<Text style = {styles6.errorText}>
            {props.touched.body && props.errors.body}
        </Text>
            <TextInput 
              style={styles6.input}
              placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur = {props.handleBlur('rating')}
              
            />
            <Text style = {styles6.errorText}>
            {props.touched.title &&props.errors.rating}
        </Text>

        <FlatButton text = 'Submit' onPress = {props.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
    
  );
}
const styles6 = StyleSheet.create({
    
    
    container:{
        padding: 20,
    },
    input:{

        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
})