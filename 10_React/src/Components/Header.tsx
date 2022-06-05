import React from 'react';
import {Navbar, Container, Image} from 'react-bootstrap';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand className="me-auto">
                    <h1>Питомник домашних животных</h1>
              </Navbar.Brand>
              <Image width={50} src="../images/paw.png" />
          </Container>
      </Navbar>
    </div>
  );
}

export default Header;
