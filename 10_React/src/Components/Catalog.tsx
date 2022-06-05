import React from "react";
import Pet from "./Cards";
import catImg from '../assets/cat.jpg'
import dogImg from '../assets/dog.jpg'
import homaImg from '../assets/homa.jpg'
import Cards from "./Cards";
import { Container, Row } from "react-bootstrap";

export enum category {
    cat = 'котик',
    dog = 'собачка',
    homa = 'хомячок',
}
export type PetType = {
    id: number; name: string; category: string; img: any; gender: string; age: string; weight: number; color: string; character: string;
};
export const pets: Array<PetType> = [
    { id: 1, name: "Беня", category: "котик", img: catImg, gender: "мальчик", age: "2 месяца", weight: 3, color: "рыжий", character: "активный" },
    { id: 2, name: "Бобик", category: "собачка", img: dogImg, gender: "мальчик", age: "6 месяцев", weight: 4.5, color: "черный", character: "любопытный" },
    { id: 3, name: "Дейл", category: "хомячок", img: homaImg, gender: "мальчик", age: "2 года", weight: 0.02, color: "рыжий", character: "игривый" },
    { id: 4, name: "Лулу", category: "котик", img: catImg, gender: "девочка", age: "3 года", weight: 2.5, color: "белый", character: "спокойный" },
    { id: 5, name: "Шарик", category: "собачка", img: dogImg, gender: "мальчик", age: "4 месяца", weight: 13, color: "серый", character: "недоверчивый" },
    { id: 6, name: "Бим", category: "хомячок", img: homaImg, gender: "мальчик", age: "1 месяц", weight: 0.03, color: "белый", character: "добрый" },
    { id: 7, name: "Василиса", category: "котик", img: catImg, gender: "девочка", age: "4 года", weight: 2.3, color: "серый", character: "ласковый" },
    { id: 8, name: "Чип", category: "хомячок", img: homaImg, gender: "мальчик", age: "8 месяцев", weight: 0.03, color: "рыжий", character: "активный" }
]
export interface StandartComponentProps {
    condition: boolean
}
export default React.memo(function ListOfPets({ condition }: StandartComponentProps) {
    return (
        <Container>
            <Row className="d-flex">

                {
                    pets.map(pet => {
                        if (!condition || ((pet.category !== 'котик') && (condition)))
                            return (
                                <Cards pet={pet} key={pet.id} />
                            )
                    })
                }

            </Row>
        </Container>
    )
})