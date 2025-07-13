import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectDetail from '../src/pages/ProjectDetail';
import projects from '../src/data/projects';

test('renders the correct project detail based on route param', () => {
  const testProject = projects[0];

  render(
    <MemoryRouter initialEntries={[`/projects/${testProject.id}`]}>
      <Routes>
        <Route
          path="/projects/:id"
          element={<ProjectDetail projects={projects} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(testProject.title)).toBeInTheDocument();
  expect(screen.getByText(testProject.description)).toBeInTheDocument();
});