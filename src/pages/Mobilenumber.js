import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { axios } from "../Container/Axios";
// import Mobileno from "./mobileno";
/* eslint-disable */
const mobileRE = /^[0-9]{10}$/;
function Mobilenumber() {
  const [user, setUser] = useState({
    mobile: "",
    mobileErr: "",
  });
  const [intial, setInitial] = useState({
    mobile: "",
  });
  const history = useHistory();
  const [isValid, setIsvalid] = useState(false);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser((prevData) => {
        return {
          ...prevData,
          mobileErr: "",
        };
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [user.mobileErr]);

  const handleClk = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const userValidation = (re, checkUser, err) => {
    if (!re.test(checkUser)) {
      setUser((prevData) => {
        return { ...prevData, [err]: `Input is not valid` };
      });
      return false;
    } else {
      setUser((prevData) => {
        return {
          ...prevData,
          [err]: "",
        };
      });
      setIsvalid(true);
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userValidation(mobileRE, user.mobile, "mobileErr")) {
      const response = axios.post("", user.mobile).catch((err) => {
        console.log("Error: ", err);
      });
    }
    setUser((prevData) => {
      return {
        ...prevData,
        mobile: "",
      };
    });
  };
  return (
    <div>
      <div>
        {!isValid ? (
          <form class="frm" onSubmit={handleSubmit}>
            {user.mobileErr && <h4>{user.mobileErr}</h4>}
            <div>
              <input
                class="inp"
                type="text"
                value={user.mobile}
                onChange={(e) => handleClk(e)}
                placeholder="Mobile"
                name="mobile"
                className={user.mobileErr ? "err" : null}
              />
              <button type="submit" className="btn">
                GetOTP
              </button>
            </div>
          </form>
        ) : null}
      </div>
      {isValid ? (
        <div>
          {history.push({
            pathname: "/verifyotp",
            state: { isValid: isValid },
          })}
        </div>
      ) : null}
    </div>
  );
}
export default Mobilenumber;
