import React from "react";
import Aside from "./aside";
import Task from "./task";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <div className="row">
          <Aside />
          <Task />
        </div>
      </div>
    </>
  );
}

export default App;