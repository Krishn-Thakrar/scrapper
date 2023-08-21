// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Papa from 'papaparse';
import csvF from "../assets/merged_hotel_prices.csv"

function Home() {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const filePath = csvF; // Update the path

    // Fetch the CSV file
    fetch(filePath)
      .then(response => response.text())
      .then(text => {
        // Parse the CSV data
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (result) => {
            setCsvData(result.data);
          },
          error: (error) => {
            console.error('CSV parsing error:', error.message);
          }
        });
      })
      .catch(error => {
        console.error('File fetching error:', error);
      });

  }, []);

  return (
    <>
      {/* <div style={{ display: "flex", justifyContent: "center" }}>
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
              <FormControl style={{ width: "500px", marginTop: "50px" }}>
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
      </div> */}
      <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", marginTop: "40px" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid", padding: "8px" }}>Hotel Name</th>
              <th style={{ border: "1px solid", padding: "8px" }}>Booking Price</th>
              <th style={{ border: "1px solid", padding: "8px" }}>Hotel Ebooking Price</th>
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid", padding: "8px" }}>{row.hotel_Name}</td>
                <td style={{ border: "1px solid", padding: "8px" }}>{row.booking}</td>
                <td style={{ border: "1px solid", padding: "8px" }}>{row.hotel_ebooking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home;