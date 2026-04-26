import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    try {
      const res = await axios.post("/api/login", {
        email,
        password,
      });

      console.log("Response:", res.data);

      if (res.data.success === true) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <h1 className="absolute top-5 left-5 text-3xl font-bold text-red-600">
        NETFLIX CLONE
      </h1>

      <form
        className="bg-black/70 p-8 rounded w-80"
        onSubmit={handleLogin}
      >
        <h1 className="text-3xl text-white mb-5 font-bold">Sign In</h1>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800 text-white mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-gray-800 text-white mb-3"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Remember */}
        <div className="flex justify-between items-center text-sm text-gray-300 mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <span className="hover:underline cursor-pointer">
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700"
        >
          Sign In
        </button>

        {/* Demo Credentials */}
        <p className="text-gray-300 mt-4 text-sm">
          Demo credentials <br />
          Email: net@flix.com <br />
          Password: 123456@
        </p>

        {/* Signup */}
        <p className="text-gray-400 mt-5 text-sm">
          Don't have an account?{" "}
          <span
            className="text-white cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;