import React from "react";

const OrderTable = (props) => {
    console.log(props.order);
    const {name,email,orderTime,price} =  props.order;
    console.log(name);
  return (
    <tbody>
    <tr>
      <th scope="row">{name}</th>
      <td>{orderTime}</td>
      <td>{price}</td>
      <td>{email}</td>
      <td>Approve</td>
    </tr>
  </tbody>
  );
};

export default OrderTable;
