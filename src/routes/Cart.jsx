import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";
import { increaseCount } from "../store";

export default function Cart() {
  const product = useSelector((state) => state.cartData);
  //const name = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //console.log(product);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {product.map((a, i) => {
            return (
              <tr key={i}>
                <td>1</td>
                <td>{product[i].name}</td>
                <td>{product[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(increaseCount(product[i].id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>{" "}
      {/* <button
        onClick={() => {
          dispatch(changeName());
        }}
      >
        버튼임
      </button> */}
    </div>
  );
}
