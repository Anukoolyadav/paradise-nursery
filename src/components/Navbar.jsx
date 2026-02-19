import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav style={{ padding: "10px", background: "#2e7d32", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "16px", color: "#fff" }}>
        Home
      </Link>
      <Link to="/plants" style={{ marginRight: "16px", color: "#fff" }}>
        Plants
      </Link>
      <Link to="/cart" style={{ color: "#fff" }}>
        Cart ({cartCount})
      </Link>
    </nav>
  );
};

export default Navbar;
