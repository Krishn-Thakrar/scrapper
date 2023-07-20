import React from "react";
import logo from "../assets/1.png";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth";
import { Button } from "@mui/material";

function Header(){
    const navigate = useNavigate();
    const authContext = useAuthContext();

    const logOut = () => {
        authContext.signOut();
    }

    return(
        <>
            <div style={{display: "flex", justifyContent: "space-between", background: "black"}}>
                <div style={{display: "flex", columnGap: "10px"}}>
                    <div>
                        <img src={logo} alt="Hotel Logo" style={{height: "85px", width: "85px"}} />
                    </div>
                    <div style={{lineHeight: "15px", color: "white"}}>
                        <p>
                            <h1>HotelDekho.com</h1>
                            Find the hotel that best suits for you....
                        </p>
                    </div>
                </div>
                <div style={{display: "flex", columnGap: "10px", marginRight: "30px"}}>
                    {!authContext.user.id && (
                        <>
                            <Button variant="text" color="secondary" onClick={() => {navigate("/")}}>Login</Button>
                            <Button variant="text" color="secondary" onClick={() => {navigate("/register")}}>Register</Button>
                        </>
                    )}
                    {!!authContext.user.id ? (
                        <Button variant="contained" color="secondary" onClick={() => { logOut(); }} style={{width: "100px", height: "50px", marginTop: "15px"}}>LogOut</Button>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default Header;