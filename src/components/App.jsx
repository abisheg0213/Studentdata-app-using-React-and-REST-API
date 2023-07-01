import React from "react";
import Data from "./Data";
import Axios from "axios";
import Enterform from "./Enterform";
import { Routes, Route, Link } from "react-router-dom";
import Studata from "./Studata";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/viewdata" element=<Studata />></Route>
        <Route path="/editdata" element=<Enterform />></Route>
        <Route
          path="/"
          element=<div>
            <center>
              <br />
              <br />
              <h1>SASTRA UNIVERSIRY</h1>
              <h2>Student Web Interface</h2>
            </center>
          </div>
        ></Route>
      </Routes>
      <center>
        <button>
          <Link to="/viewdata">View Data</Link>
        </button>
        <button>
          <Link to="/editdata">Enter Data</Link>
        </button>
        <br />
        <button>
          <Link to="/">Home</Link>
        </button>
      </center>
    </div>
  );
}
export default App;
