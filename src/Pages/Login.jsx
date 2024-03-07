import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkCredentials = () => {
    const isLoggedIn = (email === "admin" && password === "admin@123");
    if (isLoggedIn) {
      alert("User Login Successful");
      navigate("/admin");
      setIsLoggedIn(true);
    }else{
      alert("Invalid Credentials");
      setIsLoggedIn(false);
      navigate("/login");
    }
  }

  return (
    <>
      <div className="container mt-5 login">
        <h2 className='text-center display-6 mb-4'>Admin Login To IKEA SHOP</h2>
        <div className="mb-3 w-50">
          <input type="email" autoComplete='off' name="email" value={email} className="form-control" placeholder="Enter the Login Email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3 w-50">
          <input type="password" autoComplete='off' name="password" value={password} className="form-control" placeholder="Enter the Login Password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="w-25 btn btn-success" onClick={checkCredentials}>Login</button>
      </div>
    </>
  );
}

export default Login;