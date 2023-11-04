import { Button, InputAdornment, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import authService from "../service/auth.service";
import Footer from "../components/Footer";

function Register() {
    const navigate = useNavigate();

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        password: "",
        password2: "",
    }

    const validationSchema = yup.object().shape({
        first_name: yup.string()
            .required("Firstname is required"),
        last_name: yup.string()
            .required("Lastname is required"),
        email: yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
        phone_no: yup.string()
            .max(10, "Can't have more than 10 numbers")
            .min(10, "Can't have less than 10 numbers")
            .required("Phone number is required"),
        password: yup.string()
            .min(5, "Minimum 5 characters are required")
            .required("Password is required"),
        password2: yup.string()
            .oneOf(
                [yup.ref("password"), null],
                "Password and Confirm password must be matched"
            )
            .required("Confirm password is required"),
    })

    const onSubmit = (values) => {
        authService.create(values).then((values) => {
            console.log(values);
            toast.success("Regitered Successfully")
            navigate("/")
        }).catch((error) => {
            console.log(error)
            toast.error(error)
        })
    }

    return (
        <>
            <div className="reg">
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
                            <center>
                                <h1>Registration Page</h1>
                                <p>Please enter your details to register.</p>
                            </center>
                            <br /><br />
                            <div className="fl" style={{ display: "flex", justifyContent: "center", columnGap: "10%" }}>
                                <TextField label="Firstname" name="first_name" onChange={handleChange} onBlur={handleBlur} />
                                <TextField label="Lastname" name="last_name" onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="fle" style={{ display: "flex", justifyContent: "center", columnGap: "22%", position: "relative", color: "red", lineHeight: "2px", fontSize: "14px" }}>
                                <p>{errors.first_name}</p>
                                <p>{errors.last_name}</p>
                            </div><br />
                            <div className="ep" style={{ display: "flex", justifyContent: "center", columnGap: "10%" }}>
                                <TextField label="Email Address" name="email" onChange={handleChange} onBlur={handleBlur} />
                                <TextField label="Phone Number" name="phone_no" InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment>, }} size="medium" style={{ width: "15%" }} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="epe" style={{ display: "flex", justifyContent: "center", columnGap: "21%", position: "relative", color: "red", lineHeight: "2px", fontSize: "14px" }}>
                                <p>{errors.email}</p>
                                <p>{errors.phone_no}</p>
                            </div><br />
                            <div className="pc" style={{ display: "flex", justifyContent: "center", columnGap: "10%" }}>
                                <TextField label="Password" name="password" type="password" onChange={handleChange} onBlur={handleBlur} />
                                <TextField label="Confirm Password" name="password2" type="password" onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className="pce" style={{ display: "flex", justifyContent: "center", columnGap: "22%", position: "relative", color: "red", lineHeight: "2px", fontSize: "14px" }}>
                                <p>{errors.password}</p>
                                <p>{errors.password2}</p>
                            </div><br />
                            <center><Button variant="contained" type="submit">Register</Button></center>
                        </form>
                    }
                </Formik>
                <div className="footer" style={{ marginTop: "56px" }}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Register;