// import React from "react";
// import {View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
// import ResultDetails from "./ResultDetails";

// //from here we pass in the props we want to displayed, we can pass in "props" or the the title as a paramaeter
// // we then import that navigation here so that we can view each element from the search screen in this ResultList
// const ResultList = ({title, results}) => {
//     return (
//         <View style={styles.container} >
//             <Text style={styles.title } >{title}</Text>
//             <Text style={styles.review }>Results: {results.length}</Text>
//             <FlatList 
//                 showsHorizontalScrollIndicator = {false}
//                 horizontal = {true}
//                 data = {results}
//                 keyExtractor = {result => results.id}
//                 //keyextractor and renderItem mare quite similar
//                 // item is the actual or current object that we are currently iterating, in this case which is the results
//                 renderItem = {({item}) => { // we want to iterate this item in this return view down here
//                     return <ResultDetails result={item} />; // we then pass in the item that we are iterating

//                 }}
//             /> 
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//  title : {
//      fontSize: 18,
//      fontWeight: "bold",
//      marginLeft:15
//  },
//  review: {
//     marginLeft: 15
// },
// container: {
//     marginBottom: 20
// }
// })

// export default ResultList


import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import ResultDetails from "./ResultDetails";
import {withNavigation} from "react-navigation"

//from here we pass in the props we want to displayed, we can pass in "props" or the the title as a paramaeter
// we then import that navigation here so that we can view each element from the search screen in this ResultList
const ResultList = ({title, results, navigation}) => {
    if (results.length === 0){
        return null;
    }
    return (
        <View style={styles.container} >
            <Text style={styles.title } >{title}</Text> 
            <Text style={styles.review }>Results: {results.length}</Text>
            <FlatList 
                showsHorizontalScrollIndicator = {false}
                horizontal = {true}
                data = {results}
                keyExtractor = {(result) => result.id}
                //keyextractor and renderItem mare quite similar
                // item is the actual or current object that we are currently iterating, in this case which is the results
                renderItem = {({item}) => { // we want to iterate this item in this return view down here
                    return (
                        // then we pass in the screen where we want to navigate to when this is pressed to display per item 
                        <TouchableOpacity 
                        onPress={() => navigation.navigate("ResultShow", {id:item.id})}  
                        > 
                        {/*// we then pass in the item that we are iterating */}
                            <ResultDetails result={item} />     
                        </TouchableOpacity>
                    );
                }}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
 title : {
     fontSize: 18,
     fontWeight: "bold",
     marginLeft:15
 },
 review: {
    marginLeft: 15
},
container: {
    marginBottom: 20
}
})

//we are exporting special version of ResultList with the navigation
export default withNavigation(ResultList)  
