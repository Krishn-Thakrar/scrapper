import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Formik } from "formik";
import React from "react";

function Home(){
    return(
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Formik
                    onSubmit={onsubmit}
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
                            <FormControl style={{width: "500px", marginTop: "50px"}}>
                                <InputLabel>Please select your budget from the given below....</InputLabel>
                                <Select
                                    name="budget"
                                    label="Please select your budget from the given below..."
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <MenuItem value={1000}>Less then 1000₹</MenuItem>
                                    <MenuItem value={2000}>1000₹ - 2000₹</MenuItem>
                                    <MenuItem value={3000}>2000₹ - 3000₹</MenuItem>
                                    <MenuItem value={4000}>3000₹ - 4000₹</MenuItem>
                                    <MenuItem value={5000}>4000₹ - 5000₹</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    }
                </Formik>
            </div>
        </>
    )
}

export default Home;