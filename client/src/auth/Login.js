import React from "react";
import GoogleButton from "react-google-button";

const handleAuth = async () => {
  // window.open("http://localhost:5000/api/auth/google", "_self");
  // window.open("https://fakes-book.herokuapp.com/api/auth/google", "_self");
  window.open(
    "ec2-54-67-80-77.us-west-1.compute.amazonaws.com/api/auth/google",
    "_self"
  );
};

const Login = () => {
  return (
    <div className='container'>
      <div className='login-container'>
        <h2>Login</h2>
        <GoogleButton onClick={handleAuth} />
      </div>
    </div>
  );
};

export default Login;
