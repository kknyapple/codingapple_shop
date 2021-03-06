import { useState, useEffect } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import bg from "./bg.png";
import data from "./data.jsx";
import Detail from "./routes/Detail.jsx";
import About from "./routes/About.jsx";
import Event from "./routes/Event.jsx";
import Cart from "./routes/Cart";
import axios from "axios";

function App() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [none, setNone] = useState(0);
  const [recent, setRecent] = useState(() =>
    JSON.parse(localStorage.getItem("watched"))
  );

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(recent));
  }, [recent]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>ShoeShop</Navbar.Brand>
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
              <button
                onClick={() => {
                  navigate("detail/0");
                }}
              >
                detail
              </button>
              <button
                onClick={() => {
                  navigate("about");
                }}
              >
                about
              </button>
              <button
                onClick={() => {
                  navigate("event");
                }}
              >
                event
              </button>
              <button
                onClick={() => {
                  setCount(count + 1);

                  if (count === 0) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                      })
                      .catch(() => console.log("fail"));
                  } else if (count === 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((result) => {
                        let copy = [...shoes, ...result.data];
                        setShoes(copy);
                      })
                      .catch(() => console.log("fail"));
                  } else {
                    setNone(1);
                  }
                  console.log(count);
                }}
              >
                ?????? ??? ??????
              </button>
              {none === 1 ? <h2>????????? ???????????????</h2> : null}
              <Cards
                shoes={shoes}
                navigate={navigate}
                recent={recent}
                setRecent={setRecent}
              />
            </>
          }
        />

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>?????????</div>} />
          <Route path="location" element={<div>????????????</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={
              <p style={{ textAlign: "center" }}>??? ????????? ???????????? ?????????</p>
            }
          />
          <Route
            path="two"
            element={<p style={{ textAlign: "center" }}>???????????? ????????????</p>}
          />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<div>404 error</div>} />
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
              <div
                key={i}
                onClick={() => {
                  props.navigate(`detail/${i}`);
                  let copy = [...props.recent];
                  copy.unshift(i);
                  props.setRecent(copy);
                  // console.log(i);
                  // console.log(props.recent);
                }}
                className="col-md-4"
              >
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
