import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { addEnvAPI } from '../services/api';

const AddEnvConfig = () => {
  const [envName, setEnvName] = useState('');
  const [configurations, setConfigurations] = useState({
    env:'',
    db_host: '',
    service_name: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const [response,code] = await addEnvAPI(JSON.stringify({
      env_name: envName,
      configurations:configurations
    }))

    if (code && code===200){
      alert(response.data.message);
    }
    else{
      alert(response);
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
    <Box mt={3}>
      <Typography variant="h5">Add Environment Configuration</Typography>
      <form onSubmit={handleSubmit}>
      
      
        <TextField
          label="ENV"
          name="env"
          value={configurations.env}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="DB Host"
          name="db_host"
          value={configurations.db_host}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Service Name"
          name="service_name"
          value={configurations.service_name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Environment
        </Button>
      </form>
    </Box>
  );
};

export default AddEnvConfig;