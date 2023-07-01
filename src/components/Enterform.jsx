import axios from "axios";
import React from "react";
function Enterform() {
  const [reg, updatereg] = React.useState("");
  const [cgpadata, updatecg] = React.useState("");
  function textchange1(event) {
    console.log(event.target.value);
    updatereg(event.target.value);
  }
  function textchange2(event) {
    console.log(event.target.value);
    updatecg(event.target.value);
  }
  function senddata() {
    console.log("****");
    console.log(cgpadata);
    const data = { cgpa: cgpadata };
    axios.patch("http://localhost:3000/studata/" + reg, data).then((res) => {
      console.log(res);
    });
  }
  return (
    <div>
      <br />
      <label>Register Number: </label>
      <input
        type="text"
        name="regno"
        value={reg}
        onChange={textchange1}
      ></input>
      <br />
      <br />
      <label>Cgpa: </label>
      <input
        type="text"
        name="cgpa"
        value={cgpadata}
        onChange={textchange2}
      ></input>
      <br />
      <br />
      <button onClick={senddata}>Sumbit Changes</button>
    </div>
  );
}
export default Enterform;
