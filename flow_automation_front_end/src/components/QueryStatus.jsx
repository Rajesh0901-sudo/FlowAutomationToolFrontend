import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const QueryStatus = () => {
  const { status, error } = useSelector((state) => state.query);

  return (
    <Box mt={3}>
      <Typography variant="h6">Query Status</Typography>
      <Typography variant="body1">Status: {status}</Typography>
      {error && <Typography variant="body1" color="error">Error: {error}</Typography>}
      {status=='running' && <CircularProgress></CircularProgress>}
      
    </Box>
  );
};

export default QueryStatus;