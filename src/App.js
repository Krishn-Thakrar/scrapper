import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import { AuthWrapper } from "./context/auth";
import bg from "./assets/bg.png";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", minHeight: "100vh" }}>
      <BrowserRouter>
        <AuthWrapper>
          <ToastContainer />
          <div className="all" style={{ position: "relative" }}>
            <div className="header">
              <Header />
            </div>
            <div className="body">
              <Routes>
                <Route path="/" Component={Login} />
                <Route path="/login" Component={Login} />
                <Route path="/register" Component={Register} />
                <Route path="/home" Component={Home} />
              </Routes>
            </div>
          </div>
        </AuthWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;