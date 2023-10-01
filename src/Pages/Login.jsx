import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("sasasa");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const result = await axios({
        method: "post",
        url: " 'https://dummyjson.com/auth/login",
        data: {
          username: username,
          password: password,
        },
      });

      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <div className="bg-red-950 h-96 mt-28   ">
        <div className=" flex text-white font-medium  text-[30px] justify-center pl-[38px] gap-2">
          <div> LOGIN</div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center pt-7">
          <label className=" text-white font-medium "> Username </label>
          <input
            type="text"
            placeholder="your id"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className=" text-white font-medium  ">Passworrd </label>
          <input
            className="p-auto m-auto"
            type="Password"
            placeholder="your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div
          className="  text-white font-medium  flex justify-center mt-9 items-center rounded-full "
          onClick={handleLogin}
        >
          <button>Sign In </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
