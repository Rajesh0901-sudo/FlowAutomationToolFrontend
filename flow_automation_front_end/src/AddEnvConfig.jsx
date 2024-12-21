// src/AddEnvConfig.js
import React, { useState } from 'react';
import axios from 'axios';

const AddEnvConfig = () => {
  const [envName, setEnvName] = useState('');
  const [configurations, setConfigurations] = useState({
    db_user_name: '',
    db_password: '',
    db_host: '',
    service_name: '',
    new_service_name: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/add_env', {
        env_name: envName,
        configurations
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfigurations((prevConfig) => ({
      ...prevConfig,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Environment Configuration</h2>
      <label>
        Environment Name:
        <input type="text" value={envName} onChange={(e) => setEnvName(e.target.value)} required />
      </label>
      <label>
        DB User Name:
        <input type="text" name="db_user_name" value={configurations.db_user_name} onChange={handleChange} required />
      </label>
      <label>
        DB Password:
        <input type="password" name="db_password" value={configurations.db_password} onChange={handleChange} required />
      </label>
      <label>
        DB Host:
        <input type="text" name="db_host" value={configurations.db_host} onChange={handleChange} required />
      </label>
      <label>
        Service Name:
        <input type="text" name="service_name" value={configurations.service_name} onChange={handleChange} required />
      </label>
      <label>
        New Service Name:
        <input type="text" name="new_service_name" value={configurations.new_service_name} onChange={handleChange} required />
      </label>
      <button type="submit">Add Environment</button>
    </form>
  );
};

export default AddEnvConfig;