import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';

const QueryStatus = () => {
  const { status, error } = useSelector((state) => state.query);

  return (
    <Box mt={3}>
      <Typography variant="h6">Query Status</Typography>
      <Typography variant="body1">Status: {status}</Typography>
      {error && <Typography variant="body1" color="error">Error: {error}</Typography>}
    </Box>
  );
};

export default QueryStatus;