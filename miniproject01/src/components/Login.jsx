import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
     
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button

       onClick={HandleSubmit}
       

       >Submit</button>
       <button
       onClick={() => {
       setUserName("");
       setPassword("");

       }}
       
       >Reset</button>
    </div>
  );
};

export default Login;
