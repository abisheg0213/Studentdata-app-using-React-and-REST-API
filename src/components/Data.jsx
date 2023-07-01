import React from "react";
function Data(props) {
  return (
    <div>
      <h3>Reg Number : {props.reg}</h3>
      <h3>CGPA : {props.cg}</h3>
    </div>
  );
}
export default Data;
