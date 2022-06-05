import React, {useContext} from "react";
import { View, Text } from "react-native";
import { MyContext } from "../Theme";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export const Pet = (props) =>{
    const theme = useContext(MyContext);
    const navigation = useNavigation();
    const onSetThatPet = useCallback(() => {
        navigation.navigate('About', {pressedPet: props.pet});;
    }, [props.pet]);
    return(
    <View style={petStyle(theme)}>
        <Text style={textStyle(theme)} onPress={onSetThatPet}> {props.pet.name}, {props.pet.category}</Text>
    </View>
    )
}


function petStyle(aStyle) {
    return {
        height: '3rem',
        border: '2px solid black',
        width: '25rem',
        marginBottom: 7,
        justifyContent: 'center',
        borderRadius: '70px',
        backgroundColor: aStyle.backgroundColor,
    }
}

function textStyle(aStyle) {
    return {
        textAlign: 'center',
        color: aStyle.color,
        fontSize: '1.25rem',
        fontWeight: '600',
        color: 'orange'
    }
}