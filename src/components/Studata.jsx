import React from "react";
import Data from "./Data";
import Axios from "axios";
function Studata() {
  const [studentdata, setdata] = React.useState([]);
  React.useEffect(() => {
    Axios.get("http://localhost:3000/studata").then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  }, []);
  function createdata(data) {
    return <Data reg={data.regno} cg={data.cgpa}></Data>;
  }
  return <div>{studentdata.map(createdata)}</div>;
}
export default Studata;
