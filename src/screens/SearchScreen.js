import React,{useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        ///price === '$' || '$$' || '$$$'

        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <View style={styles.text}>
            {/* <Text>Search Term </Text> */}
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>{term}</Text><Text>Search Screen</Text> */}
            <Text>wh have found {results.length} result</Text>
            <ResultList results={filterResultsByPrice('$')} title="cost Effective"/>
            <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier"/>
            <ResultList results={filterResultsByPrice("$$$")} title="Big Spender"/>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    text: {
       
    }
});