import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "../css/Forms.css";
import api from "./api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../Tokens.jsx";

const Forms = ({ route, method }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Submit handler
const API_BASE_URL = "http://localhost:8000";
const REGISTER_URL = `${API_BASE_URL}/register/`;
const LOGIN_URL = `${API_BASE_URL}/login/`;
const SERVICE_URL = `${API_BASE_URL}/service/`;
    
    const handleSubmitForm = async (data) => {
        setLoading(true);
        console.log(data);
        const Uname=data.UserName;
        // alert=(Uname)
        console.log("Username - ",Uname)
        const testUser = {
            username: Uname==null?navigate('/register'):Uname,
            email:data.mail,
            password: data.Password,
            first_name: data.first_name,
            last_name: data.last_name,
        };
        try {
            let res;
            // localStorage.setItem('temporary_token','login')
            // console.log('Token added')
            // navigate('/')
            if (method === "login") {
                res = await api.post(route, {
                    username: data.UserName,
                    password: data.Password,
                });

                console.log('Login page')

                localStorage.setItem(ACCESS_TOKEN, res.data.access_token);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh_token);
                navigate("/");
            } else {
                console.log('Register page')
                // console.log(data.UserName,data.Password,data.mail,data.first_name,data.last_name);
                
                // testUser.first_name=data.first_name
                // testUser.last_name=data.last_name
                // testUser.password=data.Password
                // testUser.username=data.UserName
                // testUser.email=data.mail
                
                // const response = await fetch(REGISTER_URL, {
                //         method: "POST",
                //         headers: {
                //             "Content-Type": "application/json",
                //         },
                //         body: JSON.stringify(testUser),
                // });
                // if (!response.ok) {
                //     const errorData = await response.json();
                //     throw new Error(`Registration failed: ${JSON.stringify(errorData)}`);
                // }
                // console.log("User registered successfully:", data);
                // if(route==REGISTER_URL){
                //     console.log("Route is same");
                // }
                // else{
                //     console.log(route)
                //     console.log(REGISTER_URL)
                //     console.log("Not same");
                // }
                // console.log(response)
                res = await api.post(route, {
                    username: data.UserName,
                    password: data.Password,
                    email: data.mail,
                    first_name: data.first_name,
                    last_name: data.last_name,
                });
                console.log('res- ',res)
                // const data = await response.json();
                localStorage.setItem(ACCESS_TOKEN, res.data.access_token);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh_token);
                console.log("Token Added")
                navigate("/login");
            }
        } catch (error) {
            console.log('inside this block')
            console.log(error.response?.data || error.message);
            alert("Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="main-container">
            <form onSubmit={handleSubmit(handleSubmitForm)} method="POST">
                <input
                    {...register("UserName", { required: true, maxLength: 50 })}
                    placeholder="User Name"
                />
                {errors.UserName?.type === "required" && (
                    <p role="alert">User Name is required</p>
                )}
                <input
                    {...register("first_name", { required: true, maxLength: 50 })}
                    placeholder="First Name"
                />
                {errors.first_name?.type === "required" && (
                    <p role="alert">First Name is required</p>
                )}
                <input
                    {...register("last_name", { required: true, maxLength: 50 })}
                    placeholder="Last Name"
                />
                {errors.last_name?.type === "required" && (
                    <p role="alert">Last Name is required</p>
                )}
                <input
                    {...register("mail", {
                        required: "Email Address is required",
                        validate: (value) =>
                            value.endsWith("@gmail.com") || "Email must end with @gmail.com",
                    })}
                    aria-invalid={errors.mail ? "true" : "false"}
                    placeholder="Email"
                />
                {errors.mail && <p role="alert">{errors.mail.message}</p>}
                <input
                    {...register("Password", { required: true, maxLength: 50 })}
                    type="password"
                    placeholder="Password"
                />
                {errors.Password?.type === "required" && (
                    <p role="alert">Password is required</p>
                )}
                <input type="submit" disabled={loading} value={loading ? "Submitting..." : "Submit"} />
            </form>
        </div>
    );
};

export default Forms;
