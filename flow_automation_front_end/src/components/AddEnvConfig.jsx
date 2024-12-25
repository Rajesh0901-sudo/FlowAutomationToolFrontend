import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Grid2 } from '@mui/material';
import { addEnvAPI } from '../services/api';

const AddEnvConfig = () => {
  const [envName, setEnvName] = useState('');
  const [configurations, setConfigurations] = useState({
    env_name:'',
    db_host: '',
    service_name: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const [response,code] = await addEnvAPI(JSON.stringify({
      env_name: configurations.env_name,
      configurations:configurations
    }))

    if (code && code===200){
      if(response.data.message)
        alert(response.data.message);
      else
        alert(response.data.error);
    }
    else{
      alert("An Error Occured while Adding ENV");
    }

    console.log(response)

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfigurations((prevConfig) => ({
      ...prevConfig,
      [name]: value
    }));
  };

  return (
    <Grid2 container spacing={1}>
      <Grid2 size={0}>
      </Grid2>
      <Grid2 size={12}>
        <Box mt={3}>
          <Typography variant="h5">Add Environment Configuration</Typography>
          <form onSubmit={handleSubmit}>      
            <TextField
              label="ENV"
              name="env_name"
              value={configurations.env_name}
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
      </Grid2>
   
    </Grid2>

  );
};

export default AddEnvConfig;