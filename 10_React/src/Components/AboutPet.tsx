import React from 'react';
import {useHistory} from 'react-router-dom'
import { useLocation } from 'react-router';
import { PetType } from './Catalog';
import { Card, Container, ListGroup, ListGroupItem, NavLink } from 'react-bootstrap';


const styles={
    image: {
        width: '10rem',
        margin: '5px auto'
    },
    title: {
        display: 'flex',
        margin: '15px auto',
        justifyContent: 'center'
  
    },
    link: {
        padding: '0',
        margin: '10px auto',
        textDecoration: 'underline', 
        color: 'gray',
        fontSize: '1.1rem'
    },
    container: {
        padding: '0',
    }
}


interface LocationState {
    thatPet: PetType
}

function AboutPet() {
    const history = useHistory();
    const location = useLocation<LocationState>();
    const thatPet = location.state.thatPet;

  return (
    <Container style={styles.container}>
        <NavLink style={styles.link} onClick={() => history.push('/')}>Вернуться к поиску</NavLink>
            <div style={styles.title}>  <h3>Узнайте больше о вашем новом питомце!</h3> </div>

            <Card style={{ width: '30rem', margin: 'auto' }}>
                <Card.Img style={styles.image} variant="top" src={thatPet.img} />
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }}> {thatPet.name} </Card.Title>
                    <Card.Text style={{ textAlign: 'center' }}>
                        Мы будем очень рады, если {thatPet.category} сможет найти себе любимый дом!
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Пол: {thatPet.gender} </ListGroupItem>
                    <ListGroupItem>Возраст: {thatPet.age} </ListGroupItem>
                    <ListGroupItem>Вес: {thatPet.weight} кг</ListGroupItem>
                    <ListGroupItem>Цвет: {thatPet.color} </ListGroupItem>
                    <ListGroupItem>Характер: {thatPet.character} </ListGroupItem>
                </ListGroup>
            </Card>
    </Container>
  );
}

export default AboutPet;
