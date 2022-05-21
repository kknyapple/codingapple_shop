import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import bg from "./bg.png";
import data from "./data.jsx";
import Detail from "./routes/Detail.jsx";

function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: `url(${bg})` }}
              ></div>
              <Cards shoes={shoes} />
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<div>어바웃페이지임</div>} />
      </Routes>
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
