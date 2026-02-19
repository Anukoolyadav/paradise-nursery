import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/plants"); // route to ProductList page
  };

  return (
    <div className="app">
      <div className="overlay">
        <header style={{ padding: "40px", color: "#fff" }}>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your one-stop shop for beautiful, healthy plants.</p>

          <button
            onClick={handleGetStarted}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "6px",
              border: "none",
              marginTop: "16px",
            }}
          >
            Get Started
          </button>
        </header>
      </div>
    </div>
  );
}

export default App;
