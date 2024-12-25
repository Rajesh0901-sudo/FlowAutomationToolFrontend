

import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { runQuery } from '../redux/actions/queryActions';

const RunQuery = () => {
  const [queryDetails, setQueryDetails] = useState({
    env_name: '',
    db_name: '',
    flow_name: ''
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("QueryDetails",queryDetails)
    dispatch(runQuery(queryDetails));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <Box mt={3}>
      <Typography variant="h5">Run Query</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Environment Name"
          name="env_name"
          value={queryDetails.env_name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="DB Name"
          name="db_name"
          value={queryDetails.db_name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Flow Name"
          name="flow_name"
          value={queryDetails.flow_name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Run Query
        </Button>
      </form>
    </Box>
  );
};

export default RunQuery;