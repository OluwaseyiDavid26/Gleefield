// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminLogin({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const ADMIN_EMAIL = "info@gleefield.com";
//   const ADMIN_PASSWORD = "Gleefield@123";

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
//       onLogin(true);
//       navigate("/admin");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#008A5E] to-[#00B273]">
//       <form className="bg-gray-800 p-6 rounded-xl w-96" onSubmit={handleLogin}>
//         <h2 className="text-xl font-bold mb-4 text-center text-white">
//           Admin Login
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 mb-3 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 mb-3 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//         <button
//           type="submit"
//           className="w-full bg-[#008A5E] text-white p-2 rounded hover:bg-[#006F4A]"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// src/components/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Sign in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        console.log("Login successful:", data.user);
        if (onLogin) onLogin(true);
        navigate("/admin");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#008A5E] to-[#00B273]">
      <form className="bg-gray-800 p-6 rounded-xl w-96" onSubmit={handleLogin}>
        <h2 className="text-xl font-bold mb-4 text-center text-white">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#008A5E] text-white p-2 rounded hover:bg-[#006F4A] disabled:opacity-50"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
