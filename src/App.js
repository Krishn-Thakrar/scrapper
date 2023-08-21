import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { AuthWrapper } from "./context/auth";
import bg from "./assets/bg.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <BrowserRouter>
        <AuthWrapper>
          <ToastContainer />
          <div className="all" style={{ height: "780px" }}>
            <div className="header" style={{ height: "12%" }}>
              <Header />
            </div>
            <div className="body" style={{ height: "76%" }}>
              <Routes>
                <Route path="/" Component={Login} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/home" Component={Home} />
              </Routes>
            </div>
            <div className="footer" style={{ height: "10%" }}>
              <Footer />
            </div>
          </div>
        </AuthWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;