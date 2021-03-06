import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            {/* <Text>Search Bar</Text> */}
            <TextInput 
              autoCapitalize="none" 
              autoCorrect={false}
              style={styles.inputStyle}
              placeholder="Search" 
              value={term} 
              onChangeText={onTermChange}
              onEndEditing={onTermSubmit}
              />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: "grey",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,        
        flexDirection: 'row'
    },
    inputStyle:{
        // borderColor: 'black',
        // borderWidth:1,
        flex:1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});


export default SearchBar;
