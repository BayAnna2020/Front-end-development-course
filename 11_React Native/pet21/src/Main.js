import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ListOfPets } from './Catalog';
import {themes} from "../Theme"
import {MyContext} from "../Theme"

export default function Main() {
  const [condition, setCondition] = useState(false);
  const [theme, setTheme] = useState(themes.light);
  const paw = 'https://abrakadabra.fun/uploads/posts/2022-01/1641901976_1-abrakadabra-fun-p-lapka-png-5.png'
  return (
    <View style = { styles.container }>
      <MyContext.Provider value = { theme }>
        <View style = { styles.headerBlock }>
          <Text style = { styles.title }> Питомник домашних животных </Text>
          <View style = { styles.img }><Image source={{uri: paw, width: 35, height: 35,}} ></Image></View>
          
          
          
          
        </View>

      <StatusBar style="auto" /> 
      <ListOfPets condition = { condition }> </ListOfPets>

      <View style = { styles.buttonrow }>
        <TouchableOpacity style = { styles.button } 
        onPress={
            () => setCondition(prevCondition => !prevCondition)}>
            <Text style = { styles.buttonText }>{condition ? "Показать котиков" : "Скрыть котиков"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style = { styles.button } 
        onPress={
            () => setTheme(theme === themes.light ? themes.dark : themes.light)}>
              <Text style = { styles.buttonText }>Поменять тему</Text>
            </TouchableOpacity>
      </View>

      </MyContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    headerBlock: {
        flex: 2,
        justifyContent: 'center',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        width: '100%',
        height: '15rem',
        backgroundColor: '#343a40',
        alignIems: 'center',
    },
    title: {
        fontSize: '2rem',
        textAlign: 'center',
        alignSelf: 'center',
        lineHeight: '1.2',
        color: '#fff',
        justifyContent: 'center',
    },
    img: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
    buttonrow: {
        flex: 2,
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        margin: '1rem',
        padding: '0',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'rgba(130, 175, 51, 1)',
        borderRadius: '70px',
        width: '194px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      },
    buttonText: {
        color: 'white',
        fontSize: '18px',
    }
});
