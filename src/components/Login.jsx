import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailId, setEmailId] = useState("aaravchandel767@gmail.com");
  const [password, setPassword] = useState("Aarav@200618");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [error, setError] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      localStorage.setItem("token", res.data.token)
      dispatch(addUser(res.data.data));
      return navigate("/");
    } catch (err) {
      if (password === "" || emailId === "") {
        setError("Error: Both Email and password are required");
      } else {
        setError(err?.response?.data.error || "something went wrong");
      }
    }
  };

  const handleSignUP = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signUp",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      if(res.data.data){
        dispatch(addUser(res.data.data));
        navigate("/")
      }
    } catch (err) {
      if (password === "" || emailId === "") {
        setError("Error: Both Email and password are required");
      } else {
        setError(err?.response?.data || "something went wrong");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">DevTinder</h2>
            <p className="text-slate-400">Join us and connect with everyone</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="space-y-5">
            {!isSignIn &&
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
}
                {!isSignIn &&
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Last Name"
                  value = {lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />      
              </div>
              }
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="you@example.com"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {!isSignIn && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                    placeholder="••••••••"
                  />
                </div>
              )}
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}
              <button
                type="submit"
                onClick={isSignIn ? handleLogin : handleSignUP}
                className="w-full py-3 px-4 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              {isSignIn
                ? "Don't have an account?"
                : "Already have an account? "}
              <a
                href="#"
                className="text-purple-400 hover:text-purple-300 font-medium transition"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                {isSignIn ? "Sign Up" : "Sign In"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
