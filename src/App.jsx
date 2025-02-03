import React, { useState } from "react";
import Aside from "./aside";
import Task from "./task";
import Header from "./header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        <div className="row">
          <Aside setCategory={setCategory} />
          <Task category={category} />
        </div>
      </div>
    </>
  );
}

export default App;
