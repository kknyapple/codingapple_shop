import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  const { id } = useParams();
  const [disappear, setDisappear] = useState(0);
  const [num, setNum] = useState("");
  const findProduct = props.shoes.find((x) => x.id === parseInt(id));

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
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
      <hr></hr>
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></input>
    </>
  );
}

export default Detail;
