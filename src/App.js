import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/navbar";
import Admin from "./components/admin";
import Home from "./components/home";
import AllCollection from "./components/allcollection";
import RPS from "./components/RPS";
import Memory from "./components/memory";
import Chat from "./components/chat";
import React, { useState, useEffect, useCallback } from "react";
import Cookies from "universal-cookie";

function App() {
  const { ethereum } = window;

  const cookie = new Cookies();

  const getAddress = async() => {
    if(window.ethereum){
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      cookie.set('account',accounts[0], { path:"/", maxAge: 3600 })
    }
  }

  useEffect(()=>{
    getAddress();
  },[])

  return (
    <div className="App">
      <>
        <Router>
          <NavBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/all" element={<AllCollection />} />
              <Route path="/rps" element={<RPS />} />
              <Route path="/memory" element={<Memory />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </Router>
      </>

      <br />
      <BrowserRouter />
    </div>
  );
}

export default App;
