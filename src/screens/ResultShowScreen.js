import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp"; 



// navigation is a big object with different functions tied to it, which contains what we want to displaty here

const ResultShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam("id");  // this is how we get the actual item being clicked on from the navigation 

    //we create an helper function function to process the return result from the id
    const getResult = async id  =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data)
 
    }
    // useEffect runs one time provided we have a second argument of empty array
    useEffect (() =>{
        getResult(id);
    }, []);

    if (!result){
        return null;
    }
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
            data = {result.photos}
            keyExtractor = {(photo => photo)}
            renderItem = {({item}) =>{
                return <Image style = {styles.image} source = {{uri: item}} />
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
   image : {
       height: 200,
       width: 300
   }
});

export default ResultShowScreen;