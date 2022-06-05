import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Pet } from './Cards';

const category = {
    cat: {category: 'котик'},
    dog: {category: 'собачка'},
    homa: {category: 'хомячок'}
}

const photo = {
    cat: {photo: 'https://www.analogi.net/wp-content/uploads/raspechatat-raskraski-kotenok-3.jpg'},
    dog: {photo: 'https://papik.pro/uploads/posts/2021-09/1631014526_6-papik-pro-p-risunok-shchenka-raskraska-6.jpg'},
    homa: {photo: 'https://raskz.ot7.ru/uploads/4/7/4/%D0%A5%D0%BE%D0%BC%D1%8F%D0%BA317.jpg'}
}

export const pet = [
    { id: 0, name: "Беня", category: category.cat.category, img: photo.cat.photo, gender: "мальчик", age: "2 месяца", weight: 3, color: "рыжий", character: "активный" },
    { id: 1, name: "Бобик", category: category.dog.category, img: photo.dog.photo, gender: "мальчик", age: "6 месяцев", weight: 4.5, color: "черный", character: "любопытный" },
    { id: 2, name: "Дейл", category: category.homa.category, img: photo.homa.photo, gender: "мальчик", age: "2 года", weight: 0.02, color: "рыжий", character: "игривый" },
    { id: 3, name: "Лулу", category: category.cat.category, img: photo.cat.photo, gender: "девочка", age: "3 года", weight: 2.5, color: "белый", character: "спокойный" },
    { id: 4, name: "Шарик", category: category.dog.category, img: photo.dog.photo, gender: "мальчик", age: "4 месяца", weight: 13, color: "серый", character: "недоверчивый" },
    { id: 5, name: "Бим", category: category.homa.category, img: photo.homa.photo, gender: "мальчик", age: "1 месяц", weight: 0.03, color: "белый", character: "добрый" },
    { id: 6, name: "Василиса", category: category.cat.category, img: photo.cat.photo, gender: "девочка", age: "4 года", weight: 2.3, color: "серый", character: "ласковый" },
]
export const ListOfPets = (props) =>{
    return(
    <View style={styles.list}>
        <FlatList
        data={pet}
        renderItem={({item}) => {
            if(!props.condition || ((item.category !== 'котик') && (props.condition))){
                return(
                    <Pet pet={item}></Pet>
                )
            }    
        }}
        />
    </View>
    )
}


const styles = StyleSheet.create({
    list: {
        height: 400,
        width: '25rem',
        marginTop: 50,
    },
})