// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import React from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import "@/components/css/Forms.css";

// const Forms = ({ method }) => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const VITE_API_URL = import.meta.env.VITE_API_URL;
//   const REGISTER_URL = `${VITE_API_URL}/auth/signup`;
//   const LOGIN_URL = `${VITE_API_URL}/auth/signin`;

//   const handleSubmitForm = async (data) => {
//     setLoading(true);
//     const testUser = {
//       name: data.name,
//       email: data.email,
//       password: data.password,
//     };

//     try {
//       if (method === "login") {
//         const res = await axios.post(
//           LOGIN_URL,
//           { email: data.email, password: data.password },
//           { withCredentials: true }
//         );
//         toast.success("Logged in successfully!");
//         navigate("/");
//         window.reload();
//       } else {
//         await axios.post(REGISTER_URL, testUser, { withCredentials: true });
//         toast.success("Account created! Redirecting to login…");
//         navigate("/login");
//       }
//     } catch (error) {
//       const msg = error.response?.data?.message || "Operation failed";
//       setError(msg);
//       toast.error(msg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="main-container">
//       <form onSubmit={handleSubmit(handleSubmitForm)} method="POST">
//         {method !== "login" && (
//           <>
//             <input
//               {...register("name", { required: "Name is required" })}
//               placeholder="Name"
//             />
//             {errors.name && <p>{errors.name.message}</p>}
//           </>
//         )}

//         <input
//           {...register("email", {
//             required: "Email Address is required",
//             validate: (value) =>
//               value.endsWith("@gmail.com") || "Email must end with @gmail.com",
//           })}
//           placeholder="Email"
//         />
//         {errors.email && <p>{errors.email.message}</p>}
//         <input
//           type="password"
//           {...register("password", { required: "password is required" })}
//           placeholder="password"
//         />
//         {errors.password && <p>{errors.password.message}</p>}
//         <input
//           type="submit"
//           disabled={loading}
//           value={loading ? "Submitting..." : "Submit"}
//         />
//       </form>
//     </div>
//   );
// };

// export default Forms;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "@/components/css/Forms.css";
import { Link } from "react-router-dom";

const Forms = ({ method }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const API_URL = import.meta.env.VITE_API_URL;
  const REGISTER_URL = `${API_URL}/auth/signup`;
  const LOGIN_URL = `${API_URL}/auth/signin`;

  const handleSubmitForm = async (data) => {
    setLoading(true);
    setError("");

    try {
      if (method === "login") {
        const res = await axios.post(
          LOGIN_URL,
          { email: data.email, password: data.password },
          { withCredentials: true }
        );
        toast.success("Logged in successfully!");
        // Force a full page reload to ensure all components re-render with new auth state
        window.location.reload();
      } else {
        // method === "signup"
        const testUser = {
          name: data.name,
          email: data.email,
          password: data.password,
        };
        await axios.post(REGISTER_URL, testUser, { withCredentials: true });
        toast.success("Account created! Redirecting to login…");
        navigate("/login");
      }
      reset();
    } catch (error) {
      console.error("Authentication error:", error);
      const msg = error.response?.data?.message || "Operation failed";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page-container">
      <div className="form-card">
        <h2>{method === "login" ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit(handleSubmitForm)} method="POST">
          {method !== "login" && (
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
                validate: (value) =>
                  value.endsWith("@gmail.com") ||
                  "Email must end with @gmail.com",
              })}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Your Password"
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          {error && <p className="form-error-message">{error}</p>}

          <button type="submit" className="submit-button" disabled={loading}>
            {loading
              ? "Submitting..."
              : method === "login"
              ? "Login"
              : "Sign Up"}
          </button>
        </form>

        <p className="form-switch-link">
          {method === "login" ? (
            <>
              Don't have an account? <Link to="/register">Sign Up</Link>
            </>
          ) : (
            <>
              Already have an account? <Link to="/login">Login</Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Forms;
