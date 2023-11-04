import React from "react";
import logo from "../assets/1.png";

function Footer() {
    return (
        <>
            <div className="footer" style={{ display: "flex", justifyContent: "center", background: "black" }}>
                <img src={logo} alt="Logo" style={{ height: "50px", width: "50px", marginTop: "13px" }} />
                <p style={{ color: "white" }}>
                    HotelDekho.com<br />
                    Find the hotel that best suits for you....
                </p>
            </div>
        </>
    )
}

export default Footer;