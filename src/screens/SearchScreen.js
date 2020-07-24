import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../../hooks/useResults';
import ResultList from '../components/ResulList';


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    //in place of flex which allows us to scroll up and down to view hidden items on the screen, we can instead instead remove the
    // <View> and leave our tag empty like this <> and the closing tag too </> which helps to resolve issues that will occur in 
    // future due to the use flex:1
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
      {/*the scrollview allows us to scroll up and down but still not gud enough, that is why we use the <> to improve it */}
      {/* we import navigation as props so each child here as the ResultList can have navigation property when clicked */}
      <ResultList results={filterResultsByPrice('$')} title="Cost Effective"   />
      <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier" />
      <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"  />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

export default SearchScreen;




// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [searchApi, results, errorMessage] = useResults();
//   // const [results, setResult] = useState('')
//   // const [errorMessage, setErroMessage] = useState("")

//   //we are setting our api get response helper
//   // const searchApi = async () => {
//   //   // we turn searchapi into an async function with the async keyword, we can then use await syntax inside this function,
//   //   // so we essentially wait for some response to come back with some data, which is a json response from the api
//   //     try {

//   //       const response = await yelp.get("/search", {
//   //         //if we pass in a params property to the second argument of a axios call, any key value pairs we put inside of here will
//   //         // be automatically automatically appended onto our request URL , for xemple if we add limit of 50, it will add it to
//   //         //our url as /search?limit=50
//   //         params: {
//   //           limit: 50,
//   //           term,
//   //           location: "NYC"
//   //         }
//   //       });
//   //       // response.data
//   //       setResult(response.data.businesses); //we wrap our result around the state management variable
//   //     }
//   //    catch (err){
//   //      setErroMessage("Something went wrong, pls try again")
//   //   }
//   // }

// //state explanation, we use seterrorMessage or setResult or setTerm to actually create a new state inside the function and we
// // then use the errorMessage or Term or result to display what has been set into the function by the three above variable inside
// // our render function or view where we have our html syntax

//   return (
//     <View>
//       <SearchBar
//         term={term}
//         onTermChange={setTerm}
//         onTermSubmit={searchApi}
//       />
//       <Text>Search Screen</Text>
//       {/* we are applying if statement to conditionally display this */}
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//       <Text>{ term }</Text>
//      <Text>We have found {results.length} result</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;


// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';

// // A hook is a function that adds in some new type of functionality to a function component,

// //to make a get request that displayed data on the homepage at once, we use hooks to render data on the homepage we are 
// // using the useEffect to render the data which is a type of hooks like useState


// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [results, setResult] = useState('')
//   const [errorMessage, setErroMessage] = useState("")

//   //we are setting our api get response helper
//   const searchApi = async () => {
//     // we turn searchapi into an async function with the async keyword, we can then use await syntax inside this function,
//     // so we essentially wait for some response to come back with some data, which is a json response from the api
//       try {

//         const response = await yelp.get("/search", {
//           //if we pass in a params property to the second argument of a axios call, any key value pairs we put inside of here will
//           // be automatically automatically appended onto our request URL , for xemple if we add limit of 50, it will add it to
//           //our url as /search?limit=50
//           params: {
//             limit: 50,
//             term,
//             location: "NYC"
//           }
//         });
//         // response.data
//         setResult(response.data.businesses); //we wrap our result around the state management variable
//       }
//      catch (err){
//        setErroMessage("Something went wrong, pls try again")
//     }
//   }

// //state explanation, we use seterrorMessage or setResult or setTerm to actually create a new state inside the function and we
// // then use the errorMessage or Term or result to display what has been set into the function by the three above variable inside
// // our render function or view where we have our html syntax

//   return (
//     <View>
//       <SearchBar
//         term={term}
//         onTermChange={setTerm}
//         onTermSubmit={searchApi}
//       />
//       <Text>Search Screen</Text>
//       {/* we are applying if statement to conditionally display this */}
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
      
//       <Text>{ term }</Text>
//   <Text>We have found {results.length} result</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;



// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import useResults from '../../hooks/useResults'


// // A hook is a function that adds in some new type of functionality to a function component,

// //to make a get request that displayed data on the homepage at once, we use hooks to render data on the homepage we are 
// // using the useEffect to render the data which is a type of hooks like useState


// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [searchApi, results, errorMessage] = useResults();
//   // const [results, setResult] = useState('')
//   // const [errorMessage, setErroMessage] = useState("")

//   //we are setting our api get response helper
//   // const searchApi = async () => {
//   //   // we turn searchapi into an async function with the async keyword, we can then use await syntax inside this function,
//   //   // so we essentially wait for some response to come back with some data, which is a json response from the api
//   //     try {

//   //       const response = await yelp.get("/search", {
//   //         //if we pass in a params property to the second argument of a axios call, any key value pairs we put inside of here will
//   //         // be automatically automatically appended onto our request URL , for xemple if we add limit of 50, it will add it to
//   //         //our url as /search?limit=50
//   //         params: {
//   //           limit: 50,
//   //           term,
//   //           location: "NYC"
//   //         }
//   //       });
//   //       // response.data
//   //       setResult(response.data.businesses); //we wrap our result around the state management variable
//   //     }
//   //    catch (err){
//   //      setErroMessage("Something went wrong, pls try again")
//   //   }
//   // }

// //state explanation, we use seterrorMessage or setResult or setTerm to actually create a new state inside the function and we
// // then use the errorMessage or Term or result to display what has been set into the function by the three above variable inside
// // our render function or view where we have our html syntax

//   return (
//     <View>
//       <SearchBar
//         term={term}
//         onTermChange={setTerm}
//         onTermSubmit={searchApi}
//       />
//       <Text>Search Screen</Text>
//       {/* we are applying if statement to conditionally display this */}
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
      
//       <Text>{ term }</Text>
//   <Text>We have found {results.length} result</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;
