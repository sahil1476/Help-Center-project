import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SubmitRequestForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'description') {
      setDescription(value);
    }
  }

  async function handelSubmit(event) {
    event.preventDefault();
    try {
      // eslint-disable-next-line
      const response =  await axios.post('http://localhost:3001/cards', {
        title,
        description
      } );

      alert('Card submitted successfully!');
      setTitle('');
      setDescription('');
      navigate('/');

    } catch (error) {
      console.error('Error submitting card:', error);
      alert('Failed to submit card.');
    }
};

  return (
    <div className="submit-request-form">
      <h1>Submit a Request</h1>
      <form onSubmit={handelSubmit}>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={title} onChange={handleChange} required />
        </div>


        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={description} onChange={handleChange} required></textarea>
        </div>
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default SubmitRequestForm;
