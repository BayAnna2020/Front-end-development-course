import React from 'react'
import {Text, View, StyleSheet, Image} from "react-native";

export default function PetInfo(props) {
    const pet = props.route.params.pressedPet;
    return(
        <View>
            <View style={styles.container}>
            <Text style={styles.title}> Узнайте больше о вашем новом питомце!</Text>
                <Image source={{uri: `${pet.img}`, width: '15rem', height: '15rem'}}></Image>
                <View>
                    <Text style={styles.name}> {pet.name} </Text>
                    <Text style={{ textAlign: 'center' }}>
                        Мы будем очень рады, если {pet.category} сможет найти себе любимый дом!
                    </Text>
                </View>
                <View>
                    <Text>Пол: {pet.gender} </Text>
                    <Text>Возраст: {pet.age} </Text>
                    <Text>Вес: {pet.weight} кг</Text>
                    <Text>Цвет: {pet.color} </Text>
                    <Text>Характер: {pet.character} </Text>
                </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex 1',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid black',
    },
    title: {
        textAlign: 'center',
        fontSize: '1.5rem',
    },
    name: {
        textAlign: 'center',
        fontSize: '1.1rem',
        fontWeight: '600'
    },
    text: {
        fontWeight: '600',
        fontSize: 16,
        fontWeight: '600',
    }
})