import React from "react";
import "./Cell.css";

const Cell = ({ cellClicked , num }) => {

  const handleClick = (e , num) => {
    e.preventDefault();
    cellClicked(num);
  };
  return <td onClick={(e) => handleClick(e ,num)}>-</td>;
};

export default Cell;
