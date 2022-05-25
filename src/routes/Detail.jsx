import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

function Detail(props) {
  const { id } = useParams();
  const [disappear, setDisappear] = useState(0);
  const [num, setNum] = useState("");
  const [tab, setTab] = useState(1);
  const findProduct = props.shoes.find((x) => x.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const a = setTimeout(() => {
      setDisappear(1);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자를 입력하시오");
    }
  }, [num]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {disappear === 0 ? (
              <h5 style={{ textAlign: "center", margin: 20 }}>
                2초 후에 사라질 예정
              </h5>
            ) : null}

            <img
              src={`https://codingapple1.github.io/shop/shoes${
                parseInt(id) + 1
              }.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{findProduct.title}</h4>
            <p>{findProduct.content}</p>
            <p>{findProduct.price}원</p>
            <button
              className="btn btn-danger"
              onClick={() => {
                dispatch(
                  addItem({ id: id, name: findProduct.title, count: 1 })
                );
              }}
            >
              주문하기
            </button>
            <button
              onClick={() => {
                navigate("../cart");
              }}
            >
              장바구니
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => setTab(0)}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(2)}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
      <hr></hr>
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></input>
    </>
  );
}

function TabContent(props) {
  // if (props.tab === 0) {
  //   return <div>내용0</div>;
  // }
  // if (props.tab === 1) {
  //   return <div>내용1</div>;
  // }
  // if (props.tab === 2) {
  //   return <div>내용2</div>;
  // }
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab];
}

export default Detail;
