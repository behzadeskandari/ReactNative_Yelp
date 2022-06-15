import React,{useState,useEffect} from "react";
import yelp from "../api/yelp";


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] =  useState('');

    const searchApi = async (searchTerm) => {
    try{

       const response = await yelp.get('/search',{
           params: {
                limit:50,
                term: searchTerm,
                location: 'san jose'
           }
       });  
        setResults(response.data.businesses);
        }catch(err){
            console.log(err);
            setErrorMessage("Something Went Wrong")
        }
    }
    //Call Search API When COmponent is First Rendered . BAD CODE
    useEffect(() => {
        searchApi('pasta');
    },[])

    return [searchApi,results,errorMessage];
}
