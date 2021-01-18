import React from "react";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <nav class="new">
      <ul>
        <Link>
          <li>
            Log-In With Email
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </Link>
        <Link to="/Mobilenumber">
          <li>
            Log-In With OTP
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default home;
