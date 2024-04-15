import React from "react";

import "./App.css";
import Wrapper from "./components/Wrapper";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import KanbanBoard from "./components/KanbanBoard";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route path="" element={<Dashboard />} />
        <Route path="tasks" element={<KanbanBoard />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
