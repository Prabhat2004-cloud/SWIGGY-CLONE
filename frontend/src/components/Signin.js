import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn(){

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async () => {

    const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();

    if (data.message === "login sucessfully") {

    localStorage.setItem("token", data.token);

    alert("Login Successful");

    navigate("/");

} else {

    alert(data.message);

}
}


    return(
        <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-[62%] md:w-[25%] h-[65%] md:h-[30%]">

        <h1 className="text-3xl font-bold mb-5 text-center">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4 outline-none"
        />

        <button
        onClick={handleLogin}
          type="submit" className="w-full bg-[#ff5200] text-white p-3 rounded font-semibold cursor-pointer"
        >
          Sign In
        </button>

        <Link to={"/signup"}><p className="text-center mt-4 text-gray-500 cursor-pointer">
          New User? Sign Up
        </p></Link>

      </div>

    </div>
    )
}