import React, { useEffect, useState } from "react";
import Papa from 'papaparse';
import csvF from "../assets/merged_hotel_prices.csv"
import Footer from "../components/Footer";

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
      <div style={{ fontFamily: "Arial, sans-serif", marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}>
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
      <div className="footer" style={{ marginTop: "10px" }}>
        <Footer />
      </div>
    </>
  )
}

export default Home;