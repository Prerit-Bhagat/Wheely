import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "@/components/css/Forms.css";

const Forms = ({ method }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const API_BASE_URL = mport.meta.env.VITE_API_URL || "http://localhost:4000";
  const REGISTER_URL = `${API_BASE_URL}/auth/signup`;
  const LOGIN_URL = `${API_BASE_URL}/auth/signin`;

  const handleSubmitForm = async (data) => {
    setLoading(true);
    const testUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      if (method === "login") {
        const res = await axios.post(
          LOGIN_URL,
          { email: data.email, password: data.password },
          { withCredentials: true }
        );
        toast.success("Logged in successfully!");
        navigate("/");
      } else {
        await axios.post(REGISTER_URL, testUser, { withCredentials: true });
        toast.success("Account created! Redirecting to login…");
        navigate("/login");
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Operation failed";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      <form onSubmit={handleSubmit(handleSubmitForm)} method="POST">
        {method !== "login" && (
          <>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </>
        )}

        <input
          {...register("email", {
            required: "Email Address is required",
            validate: (value) =>
              value.endsWith("@gmail.com") || "Email must end with @gmail.com",
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="password"
          {...register("password", { required: "password is required" })}
          placeholder="password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          type="submit"
          disabled={loading}
          value={loading ? "Submitting..." : "Submit"}
        />
      </form>
    </div>
  );
};

export default Forms;
