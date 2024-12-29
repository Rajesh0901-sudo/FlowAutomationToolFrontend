

import React, { useState } from 'react';
import { TextField, Button, Typography, Box,FormControlLabel,Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { runQuery } from '../redux/actions/queryActions';

const RunQuery = () => {
  const [queryDetails, setQueryDetails] = useState({
    env_name: '',
    db_name: '',
    flow_name: '',
    document_path:'',
    document_name:'',
    toTakeCsv: false,
  });

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("QueryDetails",queryDetails)
    dispatch(runQuery(queryDetails));
  };

  const handleChange = (e) => {
    console.log(e.target.name);



    const { name, value,type,checked } = e.target;

    setQueryDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value
    }));

    console.log(queryDetails)
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
         <TextField
          label="Path For Document: C:\Users\RAJESHS\Desktop\FlowAutomationTool\backend\Document"
          name="document_path"
          value={queryDetails.document_path}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Document Name like:newQuery.docx"
          name="document_name"
          value={queryDetails.document_name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="toTakeCsv"
              checked={queryDetails.toTakeCsv}
              onChange={handleChange}
            />
          }
          label="Collect Data in CSV File"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Run Query
        </Button>
      </form>
    </Box>
  );
};

export default RunQuery;