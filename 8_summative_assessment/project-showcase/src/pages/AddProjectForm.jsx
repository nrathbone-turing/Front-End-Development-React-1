import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      id: Date.now(), // simple unique ID
      title,
      description,
      image,
      link,
    };

    addProject(newProject);
    navigate('/'); // go back to homepage
  }

  return (
    <main>
      <h2>Add a New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Image URL:
          <input
            type="url"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </label>
        <br />

        <label>
          GitHub Link:
          <input
            type="url"
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Add Project</button>
      </form>
    </main>
  );
}

export default AddProjectForm;