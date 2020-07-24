import { useEffect, useState } from 'react';
import yelp from '../src/api/yelp';

// A hook is a function that adds in some new type of functionality to a function component,

//to make a get request that displayed data on the homepage at once, we use hooks to render data on the homepage we are 
// using the useEffect to render the data which is a type of hooks like useState

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    // we turn searchapi into an async function with the async keyword, we can then use await syntax inside this function,
    // so we essentially wait for some response to come back with some data, which is a json response from the api
      try {

        const response = await yelp.get("/search", {
          //if we pass in a params property to the second argument of a axios call, any key value pairs we put inside of here will
          // be automatically automatically appended onto our request URL , for xemple if we add limit of 50, it will add it to
          //our url as /search?limit=50
          params: {
            limit: 50,
            term: searchTerm,
            location: "NYC"
          }
        });
        // response.data
        setResult(response.data.businesses); //we wrap our result around the state management variable
      }
     catch (err){
       setErrorMessage("Something went wrong, pls try again")
    }
  }




  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};

