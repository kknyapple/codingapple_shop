import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart() {
  const product = useSelector((state) => state.cartData);
  console.log(product);
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
                <td>안녕</td>
              </tr>
            );
          })}
        </tbody>
      </Table>{" "}
    </div>
  );
}
