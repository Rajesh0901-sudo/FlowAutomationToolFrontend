import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { addCustomerAPI } from '../services/api';

const AddCustomerDetails = () => {
  const [customerDetails, setCustomerDetails] = useState({
    customerAccountId: '',
    ID: ''
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    const [response,code] = await addCustomerAPI(JSON.stringify(customerDetails))

    if (code && code===200){
      alert(response.data.message);
    }
    else{
      alert(response);
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <Box mt={3}>
      <Typography variant="h5">Add Customer Details</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Customer Account ID"
          name="customerAccountId"
          value={customerDetails.customerAccountId}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />

        <TextField
          label="Customer ID"
          name="ID"
          value={customerDetails.ID}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Customer
        </Button>
      </form>
    </Box>
  );
};

export default AddCustomerDetails;