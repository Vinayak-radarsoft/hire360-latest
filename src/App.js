
import './App.css';
import './home.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes/index";
function App() {
  return (

    <Router>
      <Routes>
        {/* Rendering public routes only if there's no active session */}
        {publicRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={<route.component />}
            />
          ))
        }

        </Routes>
      </Router>

      
  );
}

export default App;
