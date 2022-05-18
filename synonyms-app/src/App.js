import SearchList from './searchList'
import { Container, Row, Col, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

    <Container>
      <h1>Hitta synonymer</h1>
      <Row>
        <>
          <Form.Label htmlFor="inputSearch">Vilket ord vill du söka på?</Form.Label>
          <Form.Control
            type="input"
            id="inputSearch"
            aria-describedby="searchHelpBlock"
          />
          <Form.Text id="searchHelpBlock" muted>
            Ange vilket ord du vill hitta synonymer på så bjuder vi på en gif!
          </Form.Text>
        </>
      </Row>
      <Row>
        <h3>Visa sökningen</h3>
        <Col sm>Ord</Col>
        <Col sm>Gif</Col>
      </Row>
      <Row>
        <h3>Senaste sökningar</h3>
        <SearchList />
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
