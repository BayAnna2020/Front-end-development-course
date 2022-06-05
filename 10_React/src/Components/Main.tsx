import React from 'react';
import ListOfPets from "./Catalog"
import { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { MyContext } from "./../Themes"
import { themes } from "./../Themes"


const styles = {
  content: {
    width: '91.1%',
    margin: 'auto',
    padding: '50px 0 50px'
  },
  list: {
    width: '89%',
    margin: 'auto',
    paddingTop: '70px',
    minHeight: '0px'
  },
  autocomplite: {
    position: 'absolute',
    width: '63.8%',
    backgroundColor: 'white',
    listStyle: 'none',
    maxHeight: '240px',
    height: 'auto',
    margin: '0',
    paddingTop: '0',
    boxShadow: '1px 1px 5px rgba(0,0,0,0.15)',
    zIndex: 1
  },
  autocomplite_item: {
    padding: '10px',
  },
  button: {
    backgroundColor: 'rgba(130, 175, 51, 1)',
    borderRadius: '70px',
    width: '194px',
    height: '38px',
    fontSize: '18px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
}

function Main() {
  const [condition, setCondition] = useState<boolean>(false);

  const [theme, setTheme] = useState(themes.light); //Добавление темы
  return (
    <MyContext.Provider value={theme}>

      <Container>
        <Row className="d-flex">
          <ListOfPets condition={condition} />
        </Row>
      </Container>

      <Row style={{ justifyContent: 'center'}}>
        <div style={styles.button} onClick={() => setCondition(prevCondition => !prevCondition)} >{condition ? "Показать котиков" : "Скрыть котиков"}</div>
        <div style={styles.button} onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Поменять тему</div>
      </Row>

    </MyContext.Provider>
  );
}

export default Main;
