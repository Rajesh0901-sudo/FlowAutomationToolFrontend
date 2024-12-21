// src/RunQuery.js
import React, { useState } from 'react';
import axios from 'axios';

const RunQuery = () => {
  const [queryDetails, setQueryDetails] = useState({
    env_name: '',
    db_name: '',
    flow_name: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/run_query_api', queryDetails);
      alert(response.data.message);
    } catch (error) {
      alert(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Run Query</h2>
      <label>
        Environment Name:
        <input type="text" name="env_name" value={queryDetails.env_name} onChange={handleChange} required />
      </label>
      <label>
        DB Name:
        <input type="text" name="db_name" value={queryDetails.db_name} onChange={handleChange} required />
      </label>
      <label>
        Flow Name:
        <input type="text" name="flow_name" value={queryDetails.flow_name} onChange={handleChange} required />
      </label>
      <button type="submit">Run Query</button>
    </form>
  );
};

export default RunQuery;