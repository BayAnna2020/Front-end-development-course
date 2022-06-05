import React, { useContext } from "react";
import { MyContext } from "../Themes";
import { Link } from 'react-router-dom'
import { PetType } from './Catalog'
import { Card, Col, Image } from 'react-bootstrap';
import s from './styles/cards.module.css'


function petStyle(aStyle: React.CSSProperties) {
    return {
        backgroundColor: aStyle.backgroundColor,
        color: aStyle.color
    }
}

export interface StandartComponentProps {
    pet: PetType
}
export default React.memo(function Cards({ pet }: StandartComponentProps) {
    
    const theme = useContext(MyContext);

    return (
        <Col
         md={3} 
         className='mt-2'
        >
            <Link 
            className={s.link}
            to={{ pathname: '/details', state: { thatPet: pet } }}
            >
                <Card className={s.card} style={petStyle(theme)}>
                    <Image className={s.image} src={pet.img} />
                    <Card.Body>
                        <Card.Title className={s.text}> {pet.name} </Card.Title>
                        <Card.Text className={s.text2}>
                            {pet.category}
                        </Card.Text>
                        <div className={s.navlink}>Узнать больше</div>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
})