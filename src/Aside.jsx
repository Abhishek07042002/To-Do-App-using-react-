import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Aside = ({ setCategory, darkMode }  ) => {
  return (
    <div className={`col-2 vh-100 position-fixed top-0 pt-5 mt-5 ${darkMode ? "btn-light": "btn-dark"}`} style={{
    
      borderRight: "2px solid white"

    }}>

    
      <div className="dropdown mt-3">
        <button
          className="btn btn-secondary dropdown-toggle mx-5 px-4"
          type="button"
          id="categoryDropdown"
          data-bs-toggle="collapse"
          data-bs-target="#categoryMenu"
          aria-expanded="false">
          <i className="bi bi-list-ul me-2"></i>
          Category
        </button>

        <div className="collapse" id="categoryMenu">
          <ul className="list-unstyled mt-2 mx-5 px-4 py-1">
            <li>
              <button className="dropdown-item py-1" onClick={() => setCategory("Social")}>
                Social
              </button>
            </li>
            <li>
              <button className="dropdown-item py-1" onClick={() => setCategory("Shopping")}>
                Shopping
              </button>
            </li>
            <li>
              <button className="dropdown-item py-1" onClick={() => setCategory("Savings")}>
                Savings
              </button>
            </li>
            <li>
              <button className="dropdown-item py-1" onClick={() => setCategory("Workouts")}>
                Workouts
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="other-buttons">
        <button className="btn btn-secondary mx-5 px-4 mt-3" onClick={() => setCategory("All")}>
          <i className="bi bi-list me-2"></i>
          All Tasks
        </button>
        <button className="btn btn-secondary mx-5 px-4 mt-3" type="button" onClick={() => alert("option available soon")}>
          <i className="bi bi-question-circle me-2"></i>
          Help
        </button>
        <button className="btn btn-secondary mx-5 px-4 mt-3" type="button" onClick={() => alert("option available soon")}>
          <i className="bi bi-gear me-2"></i>
          Settings
        </button>
      </div>
    </div>
  );
};

export default Aside;
