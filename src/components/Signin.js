export default function SignIn(){
    return(
        <div className="min-h-screen flex justify-center items-center bg-slate-100">

      <div className="bg-white p-6 rounded-lg shadow-md w-[62%] md:w-[25%] h-[65%] md:h-[30%]">

        <h1 className="text-3xl font-bold mb-5 text-center">
          Sign In
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-4 outline-none"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded mb-4 outline-none"
        />

        <button
          type="submit" className="w-full bg-[#ff5200] text-white p-3 rounded font-semibold cursor-pointer"
        >
          Sign In
        </button>

        <p className="text-center mt-4 text-gray-500 cursor-pointer">
          New User? Sign Up
        </p>

      </div>

    </div>
    )
}