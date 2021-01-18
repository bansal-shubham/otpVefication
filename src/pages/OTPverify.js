import React, { useEffect, useState } from "react";
import { axios } from "../Container/Axios";
import { useLocation, useHistory } from "react-router-dom";

const OTPverify = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const location = useLocation();
  const history = useHistory();
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = () => {
    const response = axios.post("", otp).catch((err) => {
      console.log("Error: ", err);
    });
  };

  useEffect(() => {
    //console.log(location);
    if (location.state === undefined || location.state.isValid === false) {
      history.push("/mobilenumber");
    }
    // console.log(location.state.isValid);
  }, [location]);
  return (
    <>
      {" "}
      <div class="style">
        <h1 class>OTP Verification</h1>
        <div className="row">
          <div className="col text-center">
            <h2>Welcome</h2>
            <p class="txt">To verify your identity enter the OTP</p>

            {otp.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                />
              );
            })}

            <p class="style">OTP Entered {otp.join("")}</p>
            <p>
              <button
                class="bt1"
                onClick={(e) => setOtp([...otp.map((v) => "")])}
              >
                Clear
              </button>
              <button class="bt2" onClick={() => handleSubmit()}>
                Verify OTP
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default OTPverify;
