import React, { useState } from 'react';
import SearchList from './searchList';
import Synonyms from './synonyms';
import Memes from './memes';
import { Container, Row, Col, Form } from 'react-bootstrap';

function App() {

  const [searchString, setSearchString] = useState("");

  function search(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      setSearchString(event.target.value);
    }
  }

  return (
    <div className="App">
      <Container>
        <h1>Get synynoms</h1>
        <Row>
          <>  
            <Form.Label htmlFor="inputSearch">What word are you looking for?</Form.Label>
            <Form.Control
              onKeyUp={search}
              type="input"
              id="inputSearch"
              aria-describedby="searchHelpBlock"
            />
            <Form.Text id="searchHelpBlock" muted>
              Enter the word you want to find synonyms for and we'll give you a gif in return!
            </Form.Text>
          </>
        </Row>
        <Row>
          <h3>Visa sökningen</h3>
            <Col sm={3}><Synonyms />Ord</Col>
            <Col sm={9}><Memes />Gif</Col>
        </Row>
        <Row>
          <h3>Latest searches</h3>
            <Col sm><SearchList searchString={searchString} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;