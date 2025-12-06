import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/register");
  };

  return (
    <div className="border bg-pink-200">
      <div className="flex justify-around m-3 font-bold capitalize tracking-wide">
        {user && (
          <>
            <Link to="/">canvas</Link>
            <Link to="/service">service</Link>
            <Link to="/contact">contact</Link>
          </>
        )}

        {user ? <button onClick={handleLogout}>Logout</button> : <Link to="/register">Register</Link>}
      </div>
    </div>
  );
};

export default Navbar;
