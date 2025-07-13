import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import AddProjectForm from "./pages/AddProjectForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/add" element={<AddProjectForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;