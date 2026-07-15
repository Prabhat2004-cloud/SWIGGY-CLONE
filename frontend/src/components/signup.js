import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";

export default function SignUp() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate=useNavigate();

const handleSignup = async () => {

    const response = await fetch("https://swiggy-backend-a1qy.onrender.com/api/users/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });

    const data = await response.json();
     if (data.message === "User registered successfully") {

        alert("Signup Successful");
        navigate("/signin");

        

    } else {

        alert(data.message);
        navigate("/signin");
    
    }

};

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-[62%] md:w-[25%]">

        <h1 className="text-3xl font-bold mb-5 text-center">
          Sign Up
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded mb-4 outline-none"
        />

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
          onClick={handleSignup}
          type="submit"
          className="w-full bg-[#ff5200] text-white p-3 rounded font-semibold cursor-pointer"
        >
          Sign Up
        </button>

        <Link to={"/signin"}><p className="text-center mt-4 text-gray-500 cursor-pointer">
          Already have an account? Sign In
        </p></Link>

      </div>

    </div>
  );
}