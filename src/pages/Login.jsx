import { Button, Divider, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useAuthContext } from "../context/auth";
import authService from "../service/auth.service";

function Login(){
    const navigate = useNavigate();
    const authContext = useAuthContext();

    const initialValues = {
        email: '',
        password: '',
    }

    const validationSchema = yup.object().shape({
        email: yup.string()
        .email("Invalid email address format.")
        .required("Email is required."),
        password: yup.string()
        .min(5, "Minimum 5 characters are required.")
        .required("Password is required."),
    })

    const onSubmit = (values) => {
        authService.login(values).then((values)=>{
            // console.log(values.data.msg);
            authContext.setUser(values.data.msg);
            navigate("/home")
            toast.success("Logged in successfully");
            toast.info("Welcome to Bookmart")
        }).catch((error)=>{
            console.log(error)
            toast.error(error.response.data.error)
        })
    };

    return(
        <>
            <div style={{marginTop: "15px"}}>
            <center>
                Home
                 &nbsp; {">"} &nbsp; 
                <Link to="/">Login</Link>
                <h1>
                    Login or Create an Account
                </h1>
            </center>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "10px"}}>
                <div>
                    <h3>New Customer</h3>
                    <Divider style={{marginBottom: "20px"}} />
                    Registration is free and easy.
                    <ul>
                        <li>Faster Checkout</li>
                        <li>Save Multiple shipping addresses</li>
                        <li>View and track orders and more</li>
                    </ul>
                    <Button variant="contained" onClick={() => {navigate("/register")}} style={{marginTop: "80px"}}>Create An Account</Button>
                </div>
                <div>
                <h3>Registered Customers</h3>
                <Divider style={{marginBottom: "20px"}} />
                <p>If you have account with us, please log in.</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                        }) =>
                        <form onSubmit={handleSubmit}>
                        <TextField label="E-mail" name="email" style={{position:"relative"}} onChange={handleChange} onBlur={handleBlur}/>
                        <p style={{position:"relative", color:"red", lineHeight:"2px", fontSize:"14px"}}>{errors.email}</p>
                        <TextField label="Password" name="password" type="password" style={{position:"relative"}} onChange={handleChange} onBlur={handleBlur} />
                        <p style={{position:"relative", color:"red", lineHeight:"2px", fontSize:"14px"}}>{errors.password}</p> <br />
                        <Button variant="contained" type="submit">Login</Button>
                        </form>
                        }
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Login;