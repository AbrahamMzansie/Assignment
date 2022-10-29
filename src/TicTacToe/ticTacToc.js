import React , {useState} from "react";
import Cell from "./Cell";
import "./ticTacToe.css";

const TicTacToc = () => {
const [turn , setTurn] = useState("x")
    const cellClicked = (num)=>{
        console.log(num);
    };
  return (
    <div className="container">
      <table className="">
        Turn : {turn}
        <tbody>
            <tr>
                <Cell num = {0} cellClicked = {cellClicked}/>
                <Cell num = {1}  cellClicked = {cellClicked}/>
                <Cell num = {2}  cellClicked = {cellClicked}/>
            </tr>
            <tr>
                <Cell num = {3}  cellClicked = {cellClicked}/>
                <Cell num = {4}  cellClicked = {cellClicked}/>
                <Cell num = {5}  cellClicked = {cellClicked}/>
            </tr>
            <tr>
                <Cell num = {6}  cellClicked = {cellClicked}/>
                <Cell num = {7}  cellClicked = {cellClicked}/>
                <Cell num = {8}  cellClicked = {cellClicked}/>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToc;
