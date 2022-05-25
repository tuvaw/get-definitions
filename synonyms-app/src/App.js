import SearchList from './searchList'
//import Synonyms from './synonyms';
import Memes from './memes';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useState } from 'react';

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
            /<Col sm={3}>Ord</Col>
            <Col sm={9}><Memes searchString={searchString}/>Gif</Col>
        </Row>
        <Row>
          <h3>Latest searches</h3>
          <SearchList />
            <Col sm>Ord</Col>
            <Col sm>Ord</Col>
            <Col sm>Ord</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
