import React from "react";
import {View, Text,  Image, StyleSheet} from "react-native";

const ResultDetails = ({result}) => {  // we then recieve the result prop
    return (
        <View style={styles.container}>
            <Image style={styles.img} source = {{uri: result.image_url}} />
            <Text style={styles.name} >{result.name}</Text>
            <Text style={styles.review} >{result.rating} Stars , {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    img : {
        width: 250,
        height:120,
        borderRadius: 4,
        marginBottom: 5
    },
    name : {
        fontWeight : 'bold',
        fontSize: 16

    },
    
    container: {
        marginLeft: 15
    }
})

export default ResultDetails;