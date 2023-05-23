import React from "react";

import "./App.css";
import { Header } from "./components/Header/Header";
import Principal from "./components/principal/Principal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EgoPage from "./pages/EgoPage";
import SpinOffPage from "./pages/SpinOffPage";
import AlterEgoPage from "./pages/AlterEgoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/Ego" element={<EgoPage />} />
            <Route path="/AlterEgo" element={<AlterEgoPage />} />
            <Route path="/Superego" element={<SpinOffPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
