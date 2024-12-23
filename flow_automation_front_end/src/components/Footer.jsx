import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box mt={5} mb={3} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Flow Automation Tool. Developed By 
        <Typography color="Black">
            Rajesh Sahu.
        </Typography>
      </Typography>
    </Box>
  );
};

export default Footer;