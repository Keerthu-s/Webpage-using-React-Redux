import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./userSlice";


function User() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <div  className="auth">
        
      <h2>{isLoggedIn ? "Logged In" : "Logged Out"}</h2>

      <button onClick={() => dispatch(login())}>
        Login
      </button>

      <button onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}

export default User;
