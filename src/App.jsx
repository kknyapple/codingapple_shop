import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import bg from "./bg.png";
import data from "./data.jsx";

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{ backgroundImage: `url(${bg})` }}></div>
      <Cards shoes={shoes} />
    </>
  );
}

function Cards(props) {
  return (
    <>
      <div className="container">
        <div className="row">
          {props.shoes.map(function (a, i) {
            return (
              <div className="col-md-4">
                <img
                  src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
                  width="80%"
                />
                <h4>{props.shoes[i].title}</h4>
                <p>{props.shoes[i].price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
