import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ResultList = ({title,results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
             horizontal={true}
             data={results}
             keyExtractor={(results) => results.id}
             renderItem={({item,index,separators}) => {
                return <Text>{item.name}</Text>
             }}
            />  
        </View>
    );
};



const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },

});

export default ResultList;
