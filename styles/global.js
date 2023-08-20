import {StyleSheet} from 'react-native'



export const styles = StyleSheet.create({
    container:{
      flex: 1,
        padding: 24  
    },
    titleText: {
        fontSize: 18,
        color: "#333"

    },
    paragraph: {
        marginVertical: 8, 
        lineHeight: 20,
    }, header:{
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#eee",
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: -166,
        
    },
    input:{
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    }
})

export const images = {
    ratings:{
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3':require('../assets/rating-3.png'),
        '4':require('../assets/rating-4.png'),
        '5':require('../assets/rating-5.png'),

    }
}