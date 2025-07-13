import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddProjectForm from '../src/pages/AddProjectForm';

test('renders form inputs and submits new project', () => {
  const mockAddProject = jest.fn(); // spy function
  render(
    <MemoryRouter>
      <AddProjectForm addProject={mockAddProject} />
    </MemoryRouter>
  );

  // Get form inputs
  const titleInput = screen.getByLabelText(/title/i);
  const descriptionInput = screen.getByLabelText(/description/i);
  const imageInput = screen.getByLabelText(/image url/i);
  const linkInput = screen.getByLabelText(/github link/i);
  const submitButton = screen.getByRole('button', { name: /add project/i });

  // Fill out form
  fireEvent.change(titleInput, { target: { value: 'Test Project' } });
  fireEvent.change(descriptionInput, { target: { value: 'This is a test.' } });
  fireEvent.change(imageInput, { target: { value: 'https://example.com/image.png' } });
  fireEvent.change(linkInput, { target: { value: 'https://github.com/test' } });

  // Submit form
  fireEvent.click(submitButton);

  // Assert callback was called
  expect(mockAddProject).toHaveBeenCalledTimes(1);

  // Assert it was called with correct object shape
  const submittedProject = mockAddProject.mock.calls[0][0];
  expect(submittedProject.title).toBe('Test Project');
  expect(submittedProject.description).toBe('This is a test.');
  expect(submittedProject.image).toBe('https://example.com/image.png');
  expect(submittedProject.link).toBe('https://github.com/test');
});