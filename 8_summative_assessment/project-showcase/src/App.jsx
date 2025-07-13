import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectDetail from './pages/ProjectDetail';
import AddProjectForm from './pages/AddProjectForm';
import projectsData from './data/projects';

function App() {
  const [projects, setProjects] = useState(projectsData);

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage projects={projects}/>} />
        <Route path="/projects/:id" element={<ProjectDetail projects={projects}/>} />
        <Route path="/add" element={<AddProjectForm addProject={addProject}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;